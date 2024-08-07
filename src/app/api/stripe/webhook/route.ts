import { stripe } from "@/lib/stripe";
import {
  createOrder,
  updateProductStats,
} from "@/server/actions/checkout/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const endpointSecret = process.env.WEBHOOK_SIGNING_SECRET as string;
  const payload = await request.text();
  const sig = request.headers.get("stripe-signature");
  const res = JSON.parse(payload);

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig as string,
      endpointSecret,
    );

    const data = event.data.object;

    switch (event.type) {
      case "checkout.session.completed":
        await stripe.customers
          .retrieve(res.data.object.customer)
          .then(async (customer) => {
            try {
              const formData = new FormData();
              formData.append("customer", JSON.stringify(customer));
              formData.append("data", JSON.stringify(data));

              const result = await createOrder(formData);

              if (result?.success) {
                await updateProductStats(formData);
              }
            } catch (err) {
              console.error(err);
              throw err;
            }
          });
        break;
    }

    return NextResponse.json({ status: "success", event: event.type });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

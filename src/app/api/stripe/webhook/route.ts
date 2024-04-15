import { createOrder } from "@/server/actions/checkout/createOrder";
import { stripe } from "@/utils/stripe";
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
    // console.log("data:", data);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>");
    // console.log("res:", res);

    switch (event.type) {
      case "checkout.session.completed":
        const customer = await stripe.customers.retrieve(res.data.customer);

        try {
          const formData = new FormData();
          formData.append("customer", JSON.stringify(customer));
          formData.append("data", JSON.stringify(data));

          await createOrder(formData);
        } catch (err) {
          console.error(err);
          throw err;
        }
    }

    return NextResponse.json({ status: "success", event: event.type });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

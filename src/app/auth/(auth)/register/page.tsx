import CardWrapper from "@/components/auth/CardWrapper";
import SignupForm from "@/components/forms/SignupForm";

export const metadata = {
  title: "Register - Konjo Habesha Fashion",
  description:
    "Create a new account on Konjo Habesha Fashion to start shopping today.",
  keywords: ["e-commerce", "register", "sign up", "your site"],
  authors: [
    {
      name: "Konjo Habesha Fashion",
      url: "https://www.your-ecommerce-site.com",
    },
  ],
  openGraph: {
    title: "Register - Konjo Habesha Fashion",
    description:
      "Create a new account on Konjo Habesha Fashion to start shopping today.",
    url: "https://www.your-ecommerce-site.com/register",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function Page() {
  return (
    <main className="my-auto flex items-center justify-center">
      <CardWrapper
        title="Register"
        description="Fill the form below to create an account"
        showSocial
        isLogin={false}
        backButtonHref="/auth/signin"
        backButtonLabel="Go back to login"
      >
        <SignupForm />
      </CardWrapper>
    </main>
  );
}

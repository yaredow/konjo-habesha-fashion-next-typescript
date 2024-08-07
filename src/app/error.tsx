"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Page({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className=" grid  items-center gap-20 px-6 py-28">
      <div className=" flex flex-col items-center justify-center gap-8">
        <h2 className=" text-base font-semibold tracking-tight">
          Something went wrong!
        </h2>
        <h1 className=" text-3xl font-bold ">{error.message}</h1>
        <p>Please try again or contact support if the problem persist</p>
      </div>
      <div className=" flex flex-row items-center justify-center gap-8">
        <Button onClick={() => reset()}>Try again</Button>
        <Button variant="outline">
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}

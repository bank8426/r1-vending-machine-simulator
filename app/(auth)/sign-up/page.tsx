"use client";
import AuthForm from "@/components/AuthForm";
import { Card, CardContent } from "@/components/ui/card";
import { signUpSchema } from "@/lib/validation";
import React from "react";
import { z } from "zod";

const SignUpPage = () => {
  // name
  // email
  // password

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="mt-10 flex justify-center">
      <Card className="w-full max-w-sm ">
        <CardContent>
          <AuthForm
            type={"SIGN_UP"}
            schema={signUpSchema}
            defaultValues={{ name: "", email: "", password: "" }}
            onSubmit={onSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;

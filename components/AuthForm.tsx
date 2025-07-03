"use client";
import React from "react";
import { DefaultValues, FieldValues, Path } from "react-hook-form";
import { ZodType } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const isSignIn = type === "SIGN_IN";
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">
        {isSignIn
          ? "Welcome back to Gu vending machine"
          : "Create your member account"}
      </h1>
      <p className="text-light-100">
        {isSignIn
          ? "Access the vast collection of items, and stay updated"
          : "Please complete all fields to gain access to the vending machine"}
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                      {...field}
                      className="form-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit">{isSignIn ? "Login" : "Register"}</Button>
        </form>
      </Form>
      <p className="text-center text-base font-medium">
        {isSignIn ? "New to Gu vending machine " : "Already have an account? "}
        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="text-primary font-bold"
        >
          {isSignIn ? "Create an account" : "Sign in"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;

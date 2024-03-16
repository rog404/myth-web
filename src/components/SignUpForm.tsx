"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { SignUp, SignUpSchema } from "@/types/auth";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = {
  onChangeButton: (pos: "left") => void;
  country: "br" | "us";
};

export default function SignUpForm({ onChangeButton, country }: Props) {
  const form = useForm<SignUp>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  function onSubmit(values: SignUp) {
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card className="w-[400px] sm:w-[600px]">
      <CardHeader></CardHeader>
      <CardContent className="px-6 sm:px-10 py-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full sm:space-y-4"
            autoComplete="off"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full sm:w-3/4">
                    <FormLabel className="text-[#5B719F]">
                      Email{" "}
                      <span className="text-destructive font-bold">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} type="email" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="participationKey"
                render={({ field }) => (
                  <FormItem className="w-full sm:w-1/4">
                    <FormLabel className="text-[#5B719F]">
                      Access key{" "}
                      <span className="text-destructive font-bold">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-[#5B719F]">
                      Password{" "}
                      <span className="text-destructive font-bold">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} type="password" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-[#5B719F]">
                      Repeat password{" "}
                      <span className="text-destructive font-bold">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} type="password" />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-[#5B719F]">
                      Username{" "}
                      <span className="text-destructive font-bold">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-[#5B719F]">
                      Gender{" "}
                      <span className="text-destructive font-bold">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="text-[#5B719F]">
                          <SelectValue placeholder="Select a gender..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="text-[#5B719F]">
                        <SelectItem value="valkyrie">Valkyrie</SelectItem>
                        <SelectItem value="thanatos">Thanatos</SelectItem>
                        <SelectItem value="poring">Poring</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center gap-2 sm:justify-end">
              <Button
                className="mt-6 sm:mt-8 w-full sm:w-auto h-8 text-lg"
                onClick={() => onChangeButton("left")}
              >
                {country == "br" ? "Voltar" : "Previous"}
              </Button>
              <Button
                type="submit"
                className="mt-6 sm:mt-8 w-full sm:w-auto h-8 text-lg"
              >
                {country == "br" ? "Cadastrar" : "Sign Up"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end gap-4"></CardFooter>
    </Card>
  );
}

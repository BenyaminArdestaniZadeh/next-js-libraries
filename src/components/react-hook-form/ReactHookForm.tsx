"use client";
import React from "react";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
};

const ReactHookForm = () => {
  const form = useForm<FormValues>({
    defaultValues: { firstName: "", lastName: "", email: "", mobile: "" },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };

  return (
    <Flex p={"5"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          width={"100%"}
          mt={"7"}
          direction={"column"}
          gap={"4"}
          align={"center"}
        >
          <TextField.Root
            placeholder="first name"
            size={"3"}
            {...register("firstName", {
              required: { message: "this field is required", value: true },
            })}
          />

          <TextField.Root
            placeholder="last name"
            size={"3"}
            {...register("lastName")}
          />

          <TextField.Root
            placeholder="email"
            size={"3"}
            {...register("email", {
              required: { message: "email is required", value: true },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "invalid email format",
              },
            })}
          />
          {errors.email ? (
            <Text color="red" as="label">
              {errors.email?.message}
            </Text>
          ) : (
            ""
          )}

          <TextField.Root
            placeholder="Mobile"
            size={"3"}
            {...register("mobile", {
              required: { message: "mobile is Required", value: true },
              pattern: {
                value: /^09[0-9]{9}$/,
                message: "invalid mobile format",
              },
              validate: {
                notMe: (value) => {
                  return value !== "09376162652" || "enter a different mobile";
                },
              },
            })}
          />
          {errors.mobile ? (
            <Text color="red" as="label">
              {errors.mobile?.message}
            </Text>
          ) : (
            ""
          )}

          <Button color="gray" size={"4"} type="submit">
            Submit
          </Button>
        </Flex>
      </form>
      <DevTool control={control} />
    </Flex>
  );
};

export default ReactHookForm;

"use client";
import { Button, Flex, TextField } from "@radix-ui/themes";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function Home() {
  const form = useForm<FormValues>({
    defaultValues: { firstName: "", lastName: "", email: "" },
  });

  const { register, control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };

  return (
    <Flex width={"100%"} height={"100%"} p={"5"}>
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
            {...register("firstName")}
          />
          <TextField.Root
            placeholder="last name"
            size={"3"}
            {...register("lastName")}
          />
          <TextField.Root
            placeholder="email"
            size={"3"}
            {...register("email")}
          />
          <Button color="gray" size={"4"} type="submit">
            Submit
          </Button>
        </Flex>
      </form>
      <DevTool control={control} />
    </Flex>
  );
}

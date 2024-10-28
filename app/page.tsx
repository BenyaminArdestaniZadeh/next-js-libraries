import ReactHookForm from "@/src/components/react-hook-form/ReactHookForm";
import ReactQuery from "@/src/components/react-query/ReactQuery";
import { Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex width={"100%"} height={"100%"} justify={"center"} align={"center"}>
      <Flex direction={"column"} gap={"7"} p={"5"}>
        <ReactHookForm />
        <ReactQuery />
      </Flex>
    </Flex>
  );
}

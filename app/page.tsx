import ReactHookForm from "@/src/components/react-hook-form/ReactHookForm";
import { Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      justify={"center"}
      align={"center"}
    >
      <ReactHookForm />
    </Flex>
  );
}

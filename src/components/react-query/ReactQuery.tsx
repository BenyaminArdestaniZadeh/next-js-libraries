"use client";
import { ReactQueryOptions } from "@/src/types/react-query";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQuery = () => {
  const { data } = useQuery({
    queryKey: ["superheros"],
    queryFn: () => axios.get("http://localhost:4000/superheroes"),
  });
  return (
    <Flex
      width={"100%"}
      direction={"column"}
      gap={"5"}
      justify={"center"}
      align={"center"}
    >
      <Heading as="h1" color="red">
        React Query
      </Heading>
      <Flex direction={"column"} gap={"2"}>
        {data?.data.map((item: ReactQueryOptions) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default ReactQuery;

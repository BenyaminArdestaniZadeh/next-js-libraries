"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default MainLayout;

/* 
    *** _______________________________________________________________________________
    Because the use of React query provider required the definition of "use client" and it could not be defined in the main layer, that is why it was defined as a separate component.

    ***
*/

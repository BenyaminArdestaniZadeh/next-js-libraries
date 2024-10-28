import type { Metadata } from "next";

import { Flex, Theme } from "@radix-ui/themes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import styles from "./page.module.css";
import "@radix-ui/themes/styles.css";
import "./global.css";
import MainLayout from "@/src/layout/MainLayout";

export const metadata: Metadata = {
  title: "Next js & Libraries",
  description: "next js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          <Theme>
            <Flex className={styles.Container}>{children}</Flex>
          </Theme>
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-left"
          />
        </MainLayout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import styles from "./page.module.css";
import "@radix-ui/themes/styles.css";

import "./global.css";
import { Flex, Theme } from "@radix-ui/themes";

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
        <Theme>
          <Flex className={styles.Container}>{children}</Flex>
        </Theme>
      </body>
    </html>
  );
}

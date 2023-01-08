"use client";

import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

import "../styles/globals.css";

export default function RootLayout({ children }) {
  const path = usePathname();

  return (
    <html>
      <head>
        <title>CIBUS</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            background: "#f3a465",
          }}
        >
          {path !== "/login" && path !== "/signin" && (
            <h1>ESTE ES EL NAVBAR</h1>
          )}
          {children}
        </Box>
      </body>
    </html>
  );
}

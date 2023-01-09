"use client";

import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import Navbar from "../components/Menu";

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
            background: "#f7f8fb",
          }}
        >
          {path !== "/login" && path !== "/signin" && <Navbar />}
          {children}
        </Box>
      </body>
    </html>
  );
}

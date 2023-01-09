"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, Container, Paper, Typography } from "@mui/material";

const LoginLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
        <Link href="/">
          <Image
            src="/images/cibus.png"
            alt="cibus logo"
            width={100}
            height={50}
          />
        </Link>
      </Box>

      <Container
        component={Paper}
        maxWidth="xs"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: [0, 4],
          p: [2, 5],
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default LoginLayout;

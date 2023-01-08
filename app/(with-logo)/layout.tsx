"use client";

import React from "react";
import { Box, Container, Paper } from "@mui/material";
import Image from "next/image";

const LoginLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <Image
          src="/images/cibus.png"
          alt="cibus logo"
          width={110}
          height={110}
        />
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

"use client";

import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import {
  EMAIL_MAX_LENGTH,
  ERROR_MSG_REQUIRED,
  LASTNAME_MAX_LENGTH,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_PASSWORD,
  NAME_MAX_LENGTH,
  REGEX_EMAIL,
} from "../../../constants";

type FormData = {
  name: string;
  last_name: string;
  password: string;
  mail: string;
};

const Signin = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onTouched",
    shouldFocusError: false,
  });

  return (
    <>
      <Typography variant="h5" textAlign="center" mb={3}>
        Crear cuenta
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit((formState) => {
          return axios
            .post("/api/auth/signin", formState)
            .then(() => {
              router.push("/login");
            })
            .catch((err) => console.log(err));
        })}
      >
        <TextField
          {...register("name", {
            required: ERROR_MSG_REQUIRED,
            maxLength: {
              value: NAME_MAX_LENGTH,
              message: "Máximo 15 caracteres",
            },
          })}
          label="Nombre"
          error={Boolean(errors.name)}
          helperText={errors.name?.message || " "}
          fullWidth
          type="text"
          size="small"
          sx={{ mt: 2 }}
        />

        <TextField
          {...register("last_name", {
            required: ERROR_MSG_REQUIRED,
            maxLength: {
              value: LASTNAME_MAX_LENGTH,
              message: "Máximo 30 caracteres",
            },
          })}
          label="Apellidos"
          error={Boolean(errors.last_name)}
          helperText={errors.last_name?.message || " "}
          fullWidth
          type="text"
          size="small"
          sx={{ mt: 2 }}
        />

        <TextField
          {...register("mail", {
            required: ERROR_MSG_REQUIRED,
            pattern: { value: REGEX_EMAIL, message: "Formato incorrecto" },
            maxLength: {
              value: EMAIL_MAX_LENGTH,
              message: "Máximo 50 caracteres",
            },
          })}
          label="Correo electrónico"
          error={Boolean(errors.mail)}
          helperText={errors.mail?.message || " "}
          fullWidth
          type="email"
          size="small"
          sx={{ mt: 2 }}
        />

        <TextField
          {...register("password", {
            required: ERROR_MSG_REQUIRED,
            minLength: {
              value: MIN_LENGTH_PASSWORD,
              message: "Mínimo 8 caracteres",
            },
            maxLength: {
              value: MAX_LENGTH_PASSWORD,
              message: "Máximo 20 caracteres",
            },
          })}
          label="Contraseña"
          error={Boolean(errors.password)}
          helperText={errors.password?.message || " "}
          fullWidth
          type="password"
          size="small"
          sx={{ mt: 2 }}
        />

        <Box display="flex" justifyContent="center" mt={5}>
          <LoadingButton type="submit" variant="contained" size="large">
            Crear cuenta
          </LoadingButton>
        </Box>

        <Typography sx={{ pt: 5 }}>
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" style={{ color: "#1D9BF0" }}>
            Inicia sesión
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Signin;

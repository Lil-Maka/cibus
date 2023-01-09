"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Box, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  EMAIL_MAX_LENGTH,
  ERROR_MSG_REQUIRED,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_PASSWORD,
  NEXT_PUBLIC_CIBUS_API,
  REGEX_EMAIL,
} from "../../../constants";

type FormData = {
  mail: string;
  password: string;
};

const Login = () => {
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
        Iniciar sesión
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit((formState) => {
          axios
            .post(`${NEXT_PUBLIC_CIBUS_API}/login`, formState)
            .then(() => console.log("User logged in"))
            .catch((err) => console.log("Error:", err));
        })}
      >
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
            Iniciar sesión
          </LoadingButton>
        </Box>

        <Typography sx={{ pt: 5 }}>
          ¿No tienes una cuenta?{" "}
          <Link href="/signin" style={{ color: "#1D9BF0" }}>
            Regístrate
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Login;

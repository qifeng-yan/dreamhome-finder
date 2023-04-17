"use client";
import {
  Button,
  Stack,
  TextField,
  Divider,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function signIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Image
        src="/living_room.jpg"
        alt="Living Room"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="max-w-lg backdrop-blur-3xl bg-white/30 mt-24 mx-auto pt-10 pb-24 rounded-2xl shadow-xl z-10">
        <Stack direction="column" spacing={2} alignItems="center">
          <div className="z-10">
            <Typography variant="h4" component="h1">
              Sign In
            </Typography>
          </div>
          <TextField
            id="log-in"
            label="Email"
            variant="outlined"
            sx={{
              width: 300,
            }}
          />
          <FormControl sx={{ width: 300 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            href="/profile"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "black",
              ":hover": {
                bgcolor: "DarkSlateGray",
              },
            }}
          >
            Sign In
          </Button>
          <div className="z-10">
            <Typography>
              <Link
                href="/forgot-password"
                className="text-slate-100 hover:text-white"
              >
                <strong>Forgot your password?</strong>
              </Link>
            </Typography>
          </div>
          <Divider flexItem />
          <div>
            <Typography variant="h6" component="h2">
              New here?
            </Typography>
          </div>
          <div>
            <Button
              href="/sign-up"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "black",
                ":hover": {
                  bgcolor: "DarkSlateGray",
                },
              }}
            >
              Sign Up
            </Button>
          </div>
          <div>OR</div>

          <div>Continue with Google</div>
        </Stack>
      </div>
    </>

    // {/* </div> */}
  );
}

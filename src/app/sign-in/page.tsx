"use client";
import { Button, Stack, TextField } from "@mui/material";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function signIn() {
  return (
    <>
      <Image
        src="/living_room.jpg"
        alt="Living Room"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="max-w-lg backdrop-blur-xl bg-white/10 mt-24 mx-auto pt-10 pb-24 rounded-2xl shadow-xl">
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
          <TextField
            id="password"
            label="Password"
            type="password"
            sx={{
              width: 300,
            }}
          />
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
              New here?
              <Link
                href="/sign-up"
                className="text-slate-100 no-underline hover:text-white"
              >
                <strong> Sign up now</strong>
              </Link>
            </Typography>
          </div>
        </Stack>
      </div>
    </>

    // {/* </div> */}
  );
}

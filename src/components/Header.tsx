"use client";
import { Stack, Button } from "@mui/material";

export default function () {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Home</Button>
      <Button variant="text">Offers</Button>
      <Button
        href="/sign-in"
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
    </Stack>
  );
}

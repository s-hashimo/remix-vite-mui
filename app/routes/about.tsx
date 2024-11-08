import * as React from "react";
import { Link } from "@remix-run/react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";

export default function About() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Material UI Remix in TypeScript example
      </Typography>
      <Button variant="contained" component={Link} to="/" endIcon={<Send />}>
        Go to the main page
      </Button>
    </React.Fragment>
  );
}

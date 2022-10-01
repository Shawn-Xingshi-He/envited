import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { BsFillCameraFill } from "react-icons/bs";

export default function MultilineTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const info = [
    "Event name",
    "Host name",
    "Start time/date",
    "End time/date",
    "Location",
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container w-2/3 flex flex-col mx-auto my-20 py-8 rounded-lg bg-gradient-to-r from-envitedPurple to-envitedPink md:w-1/3">
      <div className="flex w-80 h-14 mx-auto rounded-xl text-xl text-white font-bold   justify-center">
        <span>Event information</span>
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="flex flex-col mx-auto"
      >
        {info.map((item) => (
          <TextField
            id="standard-textarea"
            label={item}
            placeholder="Placeholder"
            multiline
            variant="standard"
            sx={{ color: "white" }}
          />
        ))}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" component="label">
            Upload event photo
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <BsFillCameraFill />
          </IconButton>
        </Stack>
      </Box>
      <Link
        to="/event"
        className="flex w-24 h-8 mx-auto mt-8 rounded-xl text-xl text-envitedPurple justify-center font-bold  bg-backgroundRed hover:shadow-indigo-500/40 active:bg-violet-700  focus:ring focus:ring-violet-300"
      >
        <span>Submit</span>
      </Link>
    </div>
  );
}

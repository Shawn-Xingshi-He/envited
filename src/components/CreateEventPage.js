import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BsFillCameraFill } from "react-icons/bs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateTimePicker,
  DateTimePickerTabs,
} from "@mui/x-date-pickers/DateTimePicker";
import LightModeIcon from "@mui/icons-material/LightMode";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const CreateEventPage = ({ eventInfo, setEventInfo }) => {
  const top3Info = ["Event name", "Host name", "Location"];
  const allInfoKeys = Object.keys(eventInfo);

  const CustomTabs = (props) => (
    <Fragment>
      <DateTimePickerTabs {...props} />
      <Box sx={{ backgroundColor: "blueviolet", height: 5 }} />
    </Fragment>
  );

  return (
    <div className="container w-2/3 flex flex-col mx-auto my-20 py-8 rounded-lg bg-gradient-to-r from-purple1 to-purple2 md:w-1/3">
      <div className="flex mx-auto rounded-xl md:text-2xl text-purpleDark font-bold justify-center">
        <span>Event information</span>
      </div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="w-5/6 flex flex-col mx-auto space-y-4 md:space-y-10"
      >
        <TextField
          id="standard-textarea"
          label={"Event name"}
          placeholder="Placeholder"
          multiline
          variant="standard"
          onChange={(e) => {
            setEventInfo({ ...eventInfo, eventName: e.target.value });
          }}
        />
        <TextField
          id="standard-textarea"
          label={"Host name"}
          placeholder="Placeholder"
          multiline
          variant="standard"
          onChange={(e) => {
            setEventInfo({ ...eventInfo, hostName: e.target.value });
          }}
        />
        <TextField
          id="standard-textarea"
          label={"Location"}
          placeholder="Placeholder"
          multiline
          variant="standard"
          onChange={(e) => {
            setEventInfo({ ...eventInfo, location: e.target.value });
          }}
        />

        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Start time & date"
            renderInput={(params) => <TextField {...params} />}
            value={eventInfo.startDT}
            onChange={(newValue) => {
              setEventInfo({ ...eventInfo, startDT: newValue });
            }}
            hideTabs={false}
            components={{ Tabs: CustomTabs }}
            componentsProps={{
              tabs: {
                dateRangeIcon: <LightModeIcon />,
                timeIcon: <AcUnitIcon />,
              },
            }}
          />
          <DateTimePicker
            label="End time & date"
            renderInput={(params) => <TextField {...params} />}
            value={eventInfo.endDT}
            onChange={(newValue) => {
              setEventInfo({ ...eventInfo, endDT: newValue });
              //   console.log(dayjs(new Date()));
            }}
            hideTabs={false}
            components={{ Tabs: CustomTabs }}
            componentsProps={{
              tabs: {
                dateRangeIcon: <LightModeIcon />,
                timeIcon: <AcUnitIcon />,
              },
            }}
          />
        </LocalizationProvider>

        <div className="w-5/6 flex flex-col mx-auto space-y-3">
          <Button variant="contained" component="label" size="small">
            <BsFillCameraFill />
            &nbsp; Upload event photo
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => {
                setEventInfo({
                  ...eventInfo,
                  photoURL: URL.createObjectURL(e.target.files[0]),
                });
              }}
            />
          </Button>
          <img
            src={eventInfo.photoURL}
            alt="EventPhoto"
            className="w-24 mx-auto"
          ></img>
        </div>
      </Box>
      <Link
        to="/event"
        className="flex w-24 h-8 mx-auto mt-8 rounded-xl text-xl text-envitedPurple justify-center font-bold  bg-backgroundRed hover:shadow-indigo-500/40 active:bg-violet-700  focus:ring focus:ring-violet-300"
      >
        <span>Submit</span>
      </Link>
    </div>
  );
};

export default CreateEventPage;

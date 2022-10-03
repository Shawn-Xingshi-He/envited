import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import AddressField from "../formComponents/AddressField";
import StartEndDTField from "../formComponents/StartEndDTField";
import PhotoUpdateField from "../formComponents/PhotoUpdateField";

const CreateEventPage = ({ eventInfo, setEventInfo }) => {
  return (
    <div className="container w-5/6 flex flex-col space-y-8 mx-auto my-20 py-8 rounded-lg bg-purple1 md:w-2/5 lg:w-1/3">
      <div className="flex mx-auto rounded-xl text-2xl lg:text-3xl text-purpleDark font-bold justify-center">
        <span>Event information</span>
      </div>
      <div className="w-full border-b-2 border-groove"></div>
      <div className="w-11/12 flex flex-col mx-auto space-y-10 items-center">
        {/* event name, host name */}
        <div className="w-5/6 flex flex-col space-y-6 ">
          <TextField
            label={"Event name"}
            // defaultValue={eventInfo.eventName}
            required
            multiline
            variant="standard"
            onChange={(e) => {
              setEventInfo({ ...eventInfo, eventName: e.target.value });
            }}
            focused
            color="secondary"
          />
          <TextField
            label={"Host name"}
            required
            multiline
            variant="standard"
            onChange={(e) => {
              setEventInfo({ ...eventInfo, hostName: e.target.value });
            }}
            focused
            color="secondary"
          />
        </div>
        <div className="w-full border-b-2 border-dashed"></div>

        {/* location */}
        <AddressField eventInfo={eventInfo} setEventInfo={setEventInfo} />
        <div className="w-full border-b-2 border-dashed"></div>

        {/* start, end date/time */}
        <StartEndDTField eventInfo={eventInfo} setEventInfo={setEventInfo} />
        <div className="w-full border-b-2 border-dashed"></div>

        {/* event photo */}
        <PhotoUpdateField eventInfo={eventInfo} setEventInfo={setEventInfo} />
      </div>

      <Link to="/event" className="flex mx-auto">
        <Button
          sx={{ backgroundColor: "#ff5722", textTransform: "none" }}
          variant="contained"
          size="large"
        >
          Submit
        </Button>
      </Link>
    </div>
  );
};

export default CreateEventPage;

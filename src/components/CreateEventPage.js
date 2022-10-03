import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import AddressField from "../formComponents/AddressField";
import StartEndDTField from "../formComponents/StartEndDTField";
import PhotoUpdateField from "../formComponents/PhotoUpdateField";
import { motion } from "framer-motion";

const variants = {
  form: {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.5,
        duration: 1.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  },
};

const CreateEventPage = ({ eventInfo, setEventInfo }) => {
  return (
    <motion.div
      key="container"
      {...variants.form}
      className="container w-5/6 flex flex-col space-y-8 mx-auto my-20 py-8 rounded-lg bg-purple1 md:w-2/5 lg:w-1/3"
    >
      <div className="flex mx-auto rounded-xl text-2xl lg:text-3xl text-purpleDark font-bold justify-center">
        <span>Event information</span>
      </div>
      <div className="w-full border-b-2 border-groove"></div>
      <div className="w-11/12 flex flex-col mx-auto space-y-10 items-center">
        {/* event name, host name */}
        <div className="form-items w-5/6 flex flex-col space-y-6 ">
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
        <div className="form-items">
          <AddressField eventInfo={eventInfo} setEventInfo={setEventInfo} />
        </div>

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
    </motion.div>
  );
};

export default CreateEventPage;

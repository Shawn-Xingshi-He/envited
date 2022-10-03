import { TextField } from "@mui/material";
import dayjs from "dayjs";

function StartEndDTField({ eventInfo, setEventInfo, themeColor }) {
  return (
    <>
      <div className="flex flex-col space-y-6 items-center">
        <TextField
          required
          label="Start date & time"
          variant="standard"
          className="w-40"
          type="datetime-local"
          value={eventInfo.startDT}
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: dayjs(new Date()).format("YYYY-MM-DDTHH:mm"),
          }}
          color="secondary"
          focused
          onChange={(e) => {
            setEventInfo({ ...eventInfo, startDT: e.target.value });
          }}
        />
        <TextField
          required
          label="End date & time"
          variant="standard"
          type="datetime-local"
          value={eventInfo.endDT}
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: eventInfo.startDT,
          }}
          color="secondary"
          focused
          onChange={(e) => {
            setEventInfo({ ...eventInfo, endDT: e.target.value });
          }}
        />
      </div>
    </>
  );
}

export default StartEndDTField;

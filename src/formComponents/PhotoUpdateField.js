import { Button } from "@mui/material";
import { BsFillCameraFill } from "react-icons/bs";

function PhotoUpdateField({ eventInfo, setEventInfo, themeColor }) {
  return (
    <div className="flex flex-col mx-auto space-y-3 text-secondary">
      <Button
        sx={{ textTransform: "none" }}
        variant="contained"
        component="label"
        size="small"
        color="secondary"
      >
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
  );
}

export default PhotoUpdateField;

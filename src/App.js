import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import LandingPage from "./components/LandingPage";
import CreateEventPage from "./components/CreateEventPage";
import EventPage from "./components/EventPage";

function App() {
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    hostName: "",
    location: "",
    startDT: dayjs(new Date()),
    endDT: dayjs(new Date()),
    photoURL: "",
  });
  // const [hostName, setHostName] = useState("");
  // const [location, setLocation] = useState("");
  // const [startDT, setStartDT] = useState(dayjs(new Date()));
  // const [endDT, setEndDT] = useState(dayjs(new Date()));
  // const [photoURL, setPhotoURL] = useState(undefined);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/create"
          element={
            <CreateEventPage
              eventInfo={eventInfo}
              setEventInfo={setEventInfo}
            />
          }
        />
        <Route path="/event" element={<EventPage eventInfo={eventInfo} />} />
      </Routes>
    </div>
  );
}

export default App;

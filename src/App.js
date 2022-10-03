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
    location: {
      Name: "",
      Street: "",
      Suburb: "",
      State: "",
      Postcode: "",
    },
    startDT: dayjs(new Date()).format("YYYY-MM-DDTHH:mm"),
    endDT: dayjs(new Date()).format("YYYY-MM-DDTHH:mm"),
    photoURL: "",
  });

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

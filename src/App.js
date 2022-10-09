import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import LandingPage from "./components/LandingPage";
import CreateEventPage from "./components/CreateEventPage";
import EventPage from "./components/EventPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

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
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/envited" element={<LandingPage />} />
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
      </AnimatePresence>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CreateEventPage from "./components/CreateEventPage";
import EventPage from "./components/EventPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;

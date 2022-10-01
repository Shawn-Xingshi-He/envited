import cake from "../img/Birthday cake.png";
import { BsCalendar3 } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

function EventPage({ eventInfo }) {
  return (
    <div
      className="container flex flex-col space-y-3 mx-auto md:w-2/3 md:mt-24 md:space-y-6 lg:flex-row-reverse
    lg:space-y-0 lg:mt-36"
    >
      <img
        src={eventInfo.photoURL}
        alt="eventPhoto"
        className="w-screen mx-auto lg:w-1/2 "
      />
      <div className="flex flex-col ml-2 space-y-4 md:space-y-9 lg:w-1/2">
        <div className="flex flex-col space-y-2 md:space-y-5">
          <div className="text-4xl md:text-6xl font-bold text-purpleDark">
            {eventInfo.eventName}
          </div>
          <div className="text-md md:text-2xl font-light text-subtitleGray">
            Hosted by {eventInfo.hostName}
          </div>
        </div>
        <div className="flex flex-col space-y-3 md:ml-4 md:space-y-6">
          <div className="flex items-center space-x-3">
            <BsCalendar3 />
            <div>
              <div>{eventInfo.startDT.format("YYYY-MM-DDTHH:mm:ssZ[Z]")} </div>
              <div>{eventInfo.endDT.format(" YYYY-MM-DDTHH:mm:ssZ[Z]")}</div>
            </div>
          </div>
          <div className="flex space-x-3">
            <GrLocation />
            <div>{eventInfo.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;

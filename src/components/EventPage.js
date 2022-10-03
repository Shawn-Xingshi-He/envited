import { BsCalendar3 } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { motion } from "framer-motion";

const variants = {
  form: {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 1.5,
        ease: "easeOut",
      },
    },
  },
};

const formateTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours < 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes + ampm;
};

const formateDT = (date) => {
  const fDate = new Date(date);
  const hourMin = formateTime(fDate);
  return (
    fDate.getDate() +
    " " +
    fDate.toLocaleString("default", { month: "long" }) +
    " " +
    hourMin
  );
};

const timeZone = (date) => {
  return " UTC" + new Date(date).getTimezoneOffset() / 60;
};

function EventPage({ eventInfo }) {
  return (
    <motion.div
      {...variants.form}
      className="container flex flex-col space-y-3 mx-auto text-purpleDark font-bold md:w-[593px] md:mt-24 md:space-y-6 lg:flex-row-reverse lg:w-2/3 lg:space-y-0 lg:mt-36"
    >
      <img
        src={eventInfo.photoURL}
        alt="eventPhoto"
        className="w-full h-[375px] object-cover self-center md:h-[593px] lg:w-[500px] lg:h-[500px] "
      />
      <div className="flex flex-col ml-2 space-y-4 md:space-y-9 lg:w-1/2">
        <div className="flex flex-col space-y-2 md:space-y-5">
          <div className="text-3xl md:text-5xl">{eventInfo.eventName}</div>
          <div className="text-md md:text-xl text-subtitleGray font-normal">
            Hosted by <span className=" font-bold">{eventInfo.hostName}</span>
          </div>
        </div>
        <div className="flex flex-col space-y-3 md:ml-4 md:space-y-6">
          <div className="flex items-center space-x-3">
            <BsCalendar3 />
            <div>
              <div>{formateDT(eventInfo.startDT)}</div>
              <div className="text-subtitleGray font-normal">
                {"to "}
                <span className=" font-bold">{formateDT(eventInfo.endDT)}</span>
                {timeZone(eventInfo.endDT)}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <GrLocation />
            <div>
              <div>{`${eventInfo.location.Name}${
                eventInfo.location.Street
                  ? `, ${eventInfo.location.Street}`
                  : ""
              }`}</div>
              <div className="text-subtitleGray font-normal">{`${eventInfo.location.Suburb}, ${eventInfo.location.State}, ${eventInfo.location.Postcode}`}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EventPage;

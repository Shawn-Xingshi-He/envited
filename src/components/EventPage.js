import cake from "../img/Birthday cake.png";
import { BsCalendar3 } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

function EventPage() {
  return (
    <div className="container flex flex-col space-y-3 lg:flex-row-reverse">
      <img src={cake} alt="eventPhoto" className="mx-auto md:w-5/6 md:mt-24" />
      <div className="flex flex-col ml-2 space-y-4">
        <div className="flex flex-col ">
          <div className="text-4xl md:text-6xl font-bold text-purpleDark">
            Birthday Bash
          </div>
          <div className="text-md md:text-2xl font-light text-subtitleGray">
            Hosted by Elysia
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-3">
            <BsCalendar3 />
            <div>1/10/2022 - 1/10/2022</div>
          </div>
          <div className="flex space-x-3">
            <GrLocation />
            <div>Kingsford</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;

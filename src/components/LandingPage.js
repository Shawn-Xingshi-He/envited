import LandingImg from "../img/Landing page image.svg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div id="landingPage">
      <div className="container w-10/12 flex flex-col space-y-10 mx-auto mt-20 mb-8 text-center md:w-7/12 md:space-y-10 lg: lg:w-10/12 lg:flex-row-reverse lg:space-y-0 lg:justify-between">
        <div className="flex flex-col space-y-4 lg:text-right lg:self-center lg:w-2/5 lg:items-end">
          <div className="text-5xl md:text-6xl font-bold text-purpleDark ">
            Imagine if
            <div className=" text-transparent  bg-clip-text bg-gradient-to-r from-envitedPurple to-envitedPink">
              Snapchat
            </div>{" "}
            had events.
          </div>
          <div className="text-md md:text-2xl font-light text-subtitleGray">
            Easily host and share events with your friends across any social
            media.
          </div>
          <Link
            to="/create"
            className="hidden w-80 h-14 mx-auto rounded-xl text-xl text-white align-middle font-bold  bg-gradient-to-r from-envitedPurple to-envitedPink hover:shadow-indigo-500/40 active:bg-violet-700  focus:ring focus:ring-violet-300  lg:flex lg:mx-0 lg:items-center lg:justify-center"
          >
            <span>🎉 Create my event</span>
          </Link>
        </div>
        <img
          className="w-7/12 mx-auto lg:ml-10 lg:w-1/3"
          src={LandingImg}
          alt="LandingImg"
        />
        <Link
          to="/create"
          className="flex w-52 h-14 text-md mx-auto rounded-xl items-center justify-center text-white font-bold 
           bg-gradient-to-r from-envitedPurple to-envitedPink hover:shadow-indigo-500/40 active:bg-violet-700  focus:ring focus:ring-violet-300 md:w-80 md:text-xl md:h-16 lg:hidden"
        >
          <span>🎉 Create my event</span>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

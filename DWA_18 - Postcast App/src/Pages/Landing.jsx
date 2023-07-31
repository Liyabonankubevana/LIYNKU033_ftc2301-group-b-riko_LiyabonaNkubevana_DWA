import Buttons from "../Components/signInButtons";
import SignUpButton from "../Components/signUpButton";
import { useEffect } from 'react';

export default function Landing() {
  useEffect(() => {
    const image = document.querySelector('.image-appear');
    image.classList.add('appeared');
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-700 via-indigo-900 to-slate-600">
        <img
          className="w-[113.10px] h-32 rounded-[160px] border border-blue-700 border-opacity-0 absolute top-[90px] image-appear"
          src="./src/assets/LulaPlay-Logo.png"
          alt="LulaPlay Logo"
        />
        <div className="w-60 h-60 flex items-center justify-center text-white text-base font-medium leading-normal text-center mt- relative top-[0px]">
          Your Gateway to Effortless Podcast Entertainment. Podcasts made Lula.
        </div>
        <div className="flex items-center justify-center space-x-10 mt-">
          <Buttons />
          <SignUpButton />
        </div>
      </div>
    </>
  );
}

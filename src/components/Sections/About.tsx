import React, { FC } from "react"

import { Photo } from "../Photo"

export const About: FC = () => {
  return (
    <section
      id="about"
      className="h-screen relative flex justify-center items-center"
    >
      <div
        className="h-56 xl:h-64 w-full clip-up cover-color p-4 absolute top-0"
        style={{ zIndex: -1 }}
      />
      <div className=" w-11/12  sm:flex sm:flex-col sm:items-center">
        <div className="flex flex-col items-center justify-center md:flex-row md:w-1/2">
          <Photo />
        </div>

        <div className="container pl-0 pr-0  pt-10 md:w-1/2">
          <div className="text-center">
            <h1 className="text-2xl main-color-txt font-medium sm:mt-5">
              Daren A. Rosario
            </h1>
            <h3 className="text-sm fot-bold capitalize leading-tight text-gray-800 mb-5">
              web developer
            </h3>
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg font-normal leading-tight text-gray-800 mb-5">
              Im a passionate web developer, who loves code and learn new
              things. Im able to work as a frontend or backend. Im always
              seeking to improve myself trying to keep up with the new
              technologies out there.
            </p>
            <p className="text-lg font-normal leading-tight text-gray-800 mb-5">
              in my skills set you can find what im capable to use. Im not
              afraid to learn new technologies. because to me learn then, is the
              key to open new door.
            </p>
            <p className="text-lg font-normal leading-tight text-gray-800 mb-5">
              Im also an english-spanish speaker, feel free to contact me.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              numquam sequi nihil deserunt quod cum adipisci. Nobis ea hic
              reprehenderit, rerum ipsa, omnis odio ad, exercitationem vitae
              optio qui a!
            </p>
            <p className="text-lg font-normal leading-tight text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              numquam sequi nihil deserunt quod cum adipisci. Nobis ea hic
              reprehenderit, rerum ipsa, omnis odio ad, exercitationem vitae
              optio qui a!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

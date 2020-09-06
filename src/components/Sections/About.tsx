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
      <div className="section-panel w-11/12 section-panel sm:flex sm:flex-col sm:items-center xl:items-start md:justify-between justify-evenly">
        <Photo />

        <div className="container text-left pl-0 pr-0 pb-10 pt-10 ">
          <h1 className="text-2xl main-color-txt font-medium mb-5">
            Daren A. Rosario
          </h1>

          <p className="text-lg font-normal leading-tight text-gray-800 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            numquam sequi nihil deserunt quod cum adipisci. Nobis ea hic
            reprehenderit, rerum ipsa, omnis odio ad, exercitationem vitae optio
            qui a!
          </p>
          <p className="text-lg font-normal leading-tight text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            numquam sequi nihil deserunt quod cum adipisci. Nobis ea hic
            reprehenderit, rerum ipsa, omnis odio ad, exercitationem vitae optio
            qui a!
          </p>
        </div>
      </div>
    </section>
  )
}

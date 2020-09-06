import React, { FC } from "react"

import { Title } from "../Title"

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
      <div className="section-panel w-11/12">
        <Title title="Work" />
      </div>
    </section>
  )
}

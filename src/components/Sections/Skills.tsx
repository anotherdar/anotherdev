import React, { FC } from "react"
import { Title } from "../Title"
import { SkillsItem } from "../SkillsItem"

const skills = [
  {
    name: "Html",
    icon: "icon-html5",
  },
  {
    name: "Css",
    icon: "icon-css3",
  },
  {
    name: "Javascript",
    icon: "icon-javascript",
  },
  {
    name: "Typescript",
    icon: "icon-typescript",
  },
  {
    name: "Sass",
    icon: "icon-sass",
  },
  {
    name: "Tailwind",
    icon: "icon-tailwindcss",
  },
  {
    name: "Gatsby",
    icon: "icon-gatsby",
  },
  {
    name: "react ",
    icon: "icon-react",
  },
  {
    name: "Redux",
    icon: "icon-redux",
  },
  {
    name: "Node js",
    icon: "icon-node-dot-js",
  },
  {
    name: "MongoDB",
    icon: "icon-mongodb",
  },
  {
    name: "Jest",
    icon: "icon-jest",
  },
  {
    name: "Git",
    icon: "icon-git",
  },
]

export const Skills: FC = () => {
  return (
    <section
      id="skills"
      className=" relative flex flex-col justify-center items-center p-4 w-full"
    >
      <div className="w-11/12 text-center">
        <h1 className="text-2xl main-color-txt font-medium sm:mt-5">Skills</h1>
        <ol className=" pt-5 flex flex-col md:flex-wrap md:flex-row md:justify-center md:items-center">
          <SkillsItem skills={skills} />
        </ol>
      </div>
    </section>
  )
}

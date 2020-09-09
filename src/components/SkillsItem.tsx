import React, { FC, Fragment } from "react"

interface SkillsItemProps {
  skills: { name: string; icon: string }[]
}

export const SkillsItem: FC<SkillsItemProps> = ({ skills }) => {
  return (
    <Fragment>
      {skills.map(skill => {
        return (
          <li className="p-4 bg-white rounded-md m-1 flex items-center md:w-64 shadow-lg">
            <i className={`${skill.icon} mr-5`}></i>
            <h1 className="text-sm font-semibold main-color-txt uppercase">
              {skill.name}
            </h1>
          </li>
        )
      })}
    </Fragment>
  )
}

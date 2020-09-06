import React, { FC } from "react"

interface ListItemProps {
  title: string
  id?: string
}
export const ListItem: FC<ListItemProps> = ({ title, id }) => {
  return (
    <li className="main-color-txt capitalize p-2 font-normal cursor-pointer cover-hover-transition">
      <a href={`#${id ? id : title}`}>{title}</a>
    </li>
  )
}

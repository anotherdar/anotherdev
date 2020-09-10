import React, { FC } from "react"

interface ListItemProps {
  title: string
  id?: string
}
export const ListItem: FC<ListItemProps> = ({ title, id }) => {
  return (
    <li className="main-color-txt uppercase p-2 font-semibold text-sm cursor-pointer cover-hover-transition">
      <a href={`#${id ? id : title}`}>{title}</a>
    </li>
  )
}

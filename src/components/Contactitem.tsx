import React, { FC, Fragment } from "react"

interface ContactItemProps {
  data: { name: string; icon: string; link: string }[]
}

export const ContactItem: FC<ContactItemProps> = ({ data }) => {
  return (
    <Fragment>
      {data.map(x => {
        return (
          <li className="p-2 flex items-center">
            {x.icon === "icon-github" ? (
              <i className={x.icon}></i>
            ) : (
              <img src={x.icon} alt="" className="w-8" />
            )}

            {x.link === "darenarosario@gmail.com" ? (
              <a
                href={`mailto:${x.link}`}
                className="text-white ml-2 capitalize text-sm"
              >
                {x.name}
              </a>
            ) : (
              <a href={x.link} className="text-white ml-2 capitalize text-sm">
                {x.name}
              </a>
            )}
          </li>
        )
      })}
    </Fragment>
  )
}

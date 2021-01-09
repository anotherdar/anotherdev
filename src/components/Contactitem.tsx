import React, { FC, Fragment } from "react"

interface ContactItemProps {
  data: { icon: string; link: string }[]
}

export const ContactItem: FC<ContactItemProps> = ({ data }) => {
  return (
    <Fragment>
      {data.map(x => {
        return (
          <li key={x.icon} className="p-2 flex items-center cursor-pointer">
            <a
              href={ x.link }
              target='_blank'
            >
              {x.icon === "icon-github" ? (
                <i className={x.icon}></i>
              ) : (
                <img src={x.icon} alt="" className="w-8" />
              )}
            </a>
          </li>
        )
      })}
    </Fragment>
  )
}

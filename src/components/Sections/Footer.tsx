import React, { FC } from "react"

// @ts-ignore
import Email from "../../images/social media/email.svg"
// @ts-ignore
import In from "../../images/social media/linkedin.svg"
// @ts-ignore
import Twitter from "../../images/social media/twitter.svg"

import { ContactItem } from "../Contactitem"
const data = [
  {
    name: "Email",
    icon: Email,
    link: "darenarosario@gmail.com",
  },
  {
    name: "Linkedin",
    icon: In,
    link: "https://www.linkedin.com/in/daren-rosario-b0a163194/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/DarenARosario2",
  },
  {
    name: "Github",
    icon: "icon-github",
    link: "https://www.github.com/anotherdar",
  },
]

export const Footer: FC = () => {
  return (
    <footer className="p-10  w-full clip-down flex flex-col  items-center">
      <div className="p-5 text-center">
        <h1 className="text-white capitalize p-5 pl-0 font-medium">Contact</h1>
        <ol className="flex flex-col md:flex-row">
          <ContactItem data={data} />
        </ol>
      </div>
      <h1 className="text-white font-light mt-5">made by Daren A. Rosario</h1>
    </footer>
  )
}

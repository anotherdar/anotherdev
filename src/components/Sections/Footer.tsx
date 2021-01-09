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
    icon: In,
    link: "https://www.linkedin.com/in/daren-rosario-b0a163194/",
  },
  {
    icon: Twitter,
    link: "https://twitter.com/DarenARosario2",
  },
  {
    icon: "icon-github",
    link: "https://www.github.com/anotherdar",
  },
]

export const Footer: FC = () => {
  return (
    <footer className="p-10 pt-24 pb-5  w-full clip-down flex flex-col  items-center">
      <div className="p-5 text-center">
        <ol className="flex">
          <ContactItem data={data} />
        </ol>
      </div>
      <h1 className="text-white font-light text-sm capitalize mt-5">
        made by Daren A. Rosario
      </h1>
    </footer>
  )
}

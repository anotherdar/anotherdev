import React, { FC } from "react"

import { Title } from "../Title"
import { Card } from "../Card"

//@ts-ignore
import personalSite from "../../images/work_images/personal_site.png"
const cardData = [
  {
    title: "App store",
    content: "A simple web app, to manage your digital store.",
    img: personalSite,
    link: "https://www.google.com",
    tags: ["React", "GraphQL", "MongoDB"],
  },
  {
    title: "App store",
    content: "A simple web app, to manage your digital store.",
    img: personalSite,
    link: "https://www.google.com",
    tags: ["React", "GraphQL", "MongoDB"],
  },
  {
    title: "Persona site",
    content:
      "my personal site made with gatsby, which allows me to create static sites and powerful pwa",
    img: personalSite,
    link: "https://github.com/anotherdar/anotherdev",
    tags: ["React", "Gatsby", "Javascript"],
  },
]

export const Work: FC = () => {
  return (
    <section
      id="work"
      className="xl:h-screen relative flex justify-center items-center p-4"
    >
      <div
        className="h-56 xl:h-64 w-full clip-down cover-color p-4 absolute bottom-0"
        style={{ zIndex: -1 }}
      />
      <div className=" w-11/12">
        <Title title="Work" isBlue />
        <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center xl:mt-10 mt-5 ">
          {cardData.map(({ content, img, link, title, tags }) => {
            return (
              <Card
                content={content}
                title={title}
                img={img}
                link={link}
                hash_tag={tags}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

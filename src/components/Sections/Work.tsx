import React, { FC } from "react"

import { Title } from "../Title"
import { Card } from "../Card"

interface CardProps {
  title: string
  img: string
  content: string
  link: string
  hash_tag: [string]
}
const cardData = [
  {
    title: "App store",
    content: "A simple web app, to manage your digital store.",
    img: "https://images3.alphacoders.com/104/thumb-350-1046496.png",
    link: "https://www.google.com",
    tags: ["React", "GraphQL", "MongoDB"],
  },
  {
    title: "App store",
    content: "A simple web app, to manage your digital store.",
    img: "https://images3.alphacoders.com/104/thumb-350-1046496.png",
    link: "https://www.google.com",
    tags: ["React", "GraphQL", "MongoDB"],
  },
  {
    title: "App store",
    content: "A simple web app, to manage your digital store.",
    img: "https://images3.alphacoders.com/104/thumb-350-1046496.png",
    link: "https://www.google.com",
    tags: ["React", "GraphQL", "MongoDB"],
  },
]

export const Work: FC = () => {
  return (
    <section
      id="work"
      className="xl:h-screen relative flex justify-center items-center p-4"
    >
      <div
        className="h-56 xl:h-64 w-full clip-up cover-color absolute top-0"
        style={{ zIndex: -1 }}
      ></div>
      <div className="section-panel w-11/12">
        <Title title="Work" />
        <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center xl:mt-10 mt-5">
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

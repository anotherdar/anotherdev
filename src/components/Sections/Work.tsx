import React, { FC } from "react"

import { Title } from "../Title"
import { Card } from "../Card"

const cardData = [
  {
    title: "App store",
    content: "A simple web app, to manage your digital store.",
    img: "https://i.redd.it/tk46u5nrkxm21.png",
    link: "https://www.google.com",
    tags: ["React", "GraphQL", "MongoDB"],
  },
  {
    title: "Lets work",
    content: `A simple app to help you to be in shape,
      this apps provides you a list of workouts to do at home without equipment.
     and you can register to keep track of your progress`,
    img: "https://i.redd.it/tk46u5nrkxm21.png",
    link: "https://www.google.com",
    tags: ["React", "NodeJs", "MongoDB"],
  },
  {
    title: "Persona site",
    content:
      "my personal site made with gatsby, which allows me to create static sites and powerful pwa",
    img: "https://i.redd.it/tk46u5nrkxm21.png",
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

import React, { FC } from "react"

interface CardProps {
  title: string
  img: string
  content: string
  link: string
  hash_tag: string[]
}

export const Card: FC<CardProps> = props => {
  const { title, img, content, link, hash_tag } = props

  return (
    <div className="card-body main-color-border p-2 bg-white md:w-1/2 xl:w-1/3">
      <img
        src={img}
        alt="card-image"
        className="w-full bg-cover rounded-sm clip-up"
      />
      <div className="card-content h-40 p-4">
        <div className="card-content-txt h-24 ">
          <h1 className="card-title text-xl font-medium main-color-txt">
            {title}
          </h1>
          <ol className="flex">
            {hash_tag.map(tag => {
              return <li className="mr-2 text-gray-600">#{tag}</li>
            })}
          </ol>
          <p className="card-content-body text-gray-700">{content}</p>
        </div>
        <div className="w-full flex justify-end">
          <a
            href={link}
            target="_blank"
            className="p-2 main-color-bg text-white rounded-md uppercase text-sm"
          >
            live preview
          </a>
        </div>
      </div>
    </div>
  )
}

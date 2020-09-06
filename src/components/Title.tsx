import React, { FC } from "react"

interface TitlePros {
  title: string
}

export const Title: FC<TitlePros> = ({ title }) => {
  return (
    <div className="title">
      <h1 className="text-white capitalize font-normal cursor-pointer xl:text-xl">
        {title}
      </h1>
      <div className="h-1 bg-white w-20 rounded-full"></div>
    </div>
  )
}

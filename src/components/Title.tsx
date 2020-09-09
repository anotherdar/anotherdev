import React, { FC } from "react"

interface TitlePros {
  title: string
  isBlue?: boolean
  hideUnderLine?: boolean
}

export const Title: FC<TitlePros> = ({ title, isBlue, hideUnderLine }) => {
  return (
    <div className="title">
      <h1
        className="text-white capitalize font-normal cursor-pointer xl:text-xl"
        style={{ color: `${isBlue && "#2C3455"}` }}
      >
        {title}
      </h1>
      {hideUnderLine ? null : (
        <div
          className="h-1 bg-white w-20 rounded-full"
          style={{ background: `${isBlue && "#2C3455"}` }}
        ></div>
      )}
    </div>
  )
}

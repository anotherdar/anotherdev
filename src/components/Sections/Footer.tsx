import React, { FC } from "react"

export const Footer: FC = () => {
  return (
    <footer className="h-56 xl:h-64 w-full clip-down flex flex-col justify-end items-center">
      <a href="https://www.github.com/anotherdar" target="_blank">
        <i className="icon-github"></i>
        <h2 className="text-white">Github</h2>
      </a>
      <h1 className="text-white font-light mt-5">made by Daren a. Rosario</h1>
    </footer>
  )
}

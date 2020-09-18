import React, { FC, useState, useEffect } from "react"
//css
import "./Cover.scss"
//components
//@ts-ignore
import ScrollDown from "../../images/scroll_down _small.svg"
import { ListItem } from "../ListItem"
export const Cover: FC = () => {
  return (
    <header id="home" className="h-screen w-full flex flex-col justify-between">
      <nav className="h-64 w-full">
        <ol className="list-none flex w-full justify-center xl:justify-end p-2">
          <ListItem title="work" />
          <ListItem title="about me" id="about" />
        </ol>
      </nav>

      <div className="cover-message w-full flex flex-col items-center">
        <h1 className="cover-message-text-color font-semibold text-xl xl:text-5xl p-0 m-0">
          Hey!
        </h1>
        <h1 className="cover-message-text-color text-4xl xl:text-5xl">
          <span className="font-light">I'm</span>{" "}
          <span className="font-medium">Daren</span>
        </h1>
        <h2 className="cover-message-text-color text-2xl xl:text-3xl font-medium">
          and I'm web developer
        </h2>
      </div>
      <div className="h-64 w-full flex items-end justify-center pb-12">
        <a href="#work">
          <img
            className="h-12 w-12 animate-bounce"
            src={ScrollDown}
            alt="down"
          />
        </a>
      </div>
    </header>
  )
}

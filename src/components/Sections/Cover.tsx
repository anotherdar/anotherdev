import React, { FC, useState, useEffect } from "react"
//css
import "./Cover.scss"
//components
//@ts-ignore
import ScrollDown from "../../images/scroll_down _small.svg"
import { ListItem } from "../ListItem"
import { HamburgerMenu } from "../HamburgerMenu"
export const Cover: FC = () => {
  const [screenWidth, setScreenWidth] = useState(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setScreenWidth(window.innerWidth)
    }
  }, [])
  if (typeof window !== `undefined`) {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth)
    })
  }

  const toHandleMenu = (): void => alert("click")

  return (
    <header id="home" className="h-screen w-full flex flex-col justify-between">
      <nav className="h-64 w-full">
        <div className="flex justify-between items-center p-2">
          <div className="cover-logo"></div>

          {screenWidth != null && screenWidth <= 768 && (
            <HamburgerMenu action={toHandleMenu} />
          )}

          {screenWidth != null && screenWidth > 786 && (
            <div className="cover-menu">
              <ol className="list-none flex">
                <ListItem title="home" />
                <ListItem title="work" />
                <ListItem title="about me" id="about" />
                {/* <ListItem title="contact me" id="contact" /> */}
              </ol>
            </div>
          )}
        </div>
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
          A web developer
        </h2>
      </div>
      <div className="h-64 w-full flex items-end justify-center pb-12">
        <a href="#work">
          <img className="h-12 w-12" src={ScrollDown} alt="down" />
        </a>
      </div>
    </header>
  )
}

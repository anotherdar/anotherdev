import React, { useRef, useState, useEffect } from "react"

import { Loading } from "../components/loading"
import { Cover } from "../components/Sections/Cover"
import { Work } from "../components/Sections/Work"
import { About } from "../components/Sections/About"
import { Skills } from "../components/Sections/Skills"
import { Footer } from "../components/Sections/Footer"

import { ButtonUp } from "../components/ButtonUp"
import { Experience } from "../components/Sections/experience"

import '../components/scroll.scss'

const IndexPage = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getScroll = () => (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    const currentElement = ref.current
    if (currentElement) {
      if (currentElement.scrollTop >= 20) setIsVisible(true)

      if (currentElement.scrollTop < 20) setIsVisible(false)
    }
  }

  const toGoUp = () => (): void => {
    const currentElement = ref.current
    if (currentElement) {
      currentElement.scrollTop = 0
    }
  }

  useEffect(() => {
    let TIME_VISIBLE = 2000
    let timeOut: NodeJS.Timeout

    timeOut = setTimeout(() => {
      setIsLoading(false)
    }, TIME_VISIBLE)

    return () => clearTimeout(timeOut)
  }, [])

  if (isLoading) {
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <Loading />
      </div>
    )
  }

  return (
    <div
      className="h-screen w-full xl:max-w-full scroll px-10 py-5"
      onScroll={getScroll()}
      ref={ref}
    >
      {isVisible && <ButtonUp action={toGoUp()} />}
      <Cover />
      {/* <Work /> */}
      <About />
      <Skills />
      <Experience />
      <Footer />
    </div>
  )
}

export default IndexPage

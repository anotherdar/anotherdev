import React, { useRef, useState, useEffect } from "react"

import { Loading } from "../components/loading"
import { Cover } from "../components/Sections/Cover"
import { Work } from "../components/Sections/Work"
import { About } from "../components/Sections/About"
import { Skills } from "../components/Sections/Skills"
import { Contact } from "../components/Sections/Contact"
import { Footer } from "../components/Sections/Footer"

import { ButtonUp } from "../components/ButtonUp"

const IndexPage = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <div
      className="container h-screen sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full onscroll"
      onScroll={getScroll()}
      ref={ref}
    >
      {isVisible && <ButtonUp action={toGoUp()} />}
      <Cover />
      <Work />
      <About />
      <Skills />
      <Footer />
    </div>
  )
}

export default IndexPage

import React from "react"

import { Loading } from "../components/loading"
import { Cover } from "../components/Sections/Cover"
import { Work } from "../components/Sections/Work"
import { About } from "../components/Sections/About"
import { Skills } from "../components/Sections/Skills"
import { Contact } from "../components/Sections/Contact"
import { Footer } from "../components/Sections/Footer"

const IndexPage = () => (
  <div className="container h-screen sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
    <Cover />
    <Work />
    <About />
    <Skills />
    {/* <Contact /> */}
    <Footer />
  </div>
)

export default IndexPage

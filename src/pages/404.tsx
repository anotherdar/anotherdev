import React from "react"
import { Link } from "gatsby"
//@ts-ignore
import Logo from "../images/Logo_xl.svg"

const NotFoundPage = () => (
  <div className="h-screen flex justify-center items-center flex-col">
    <img src={Logo} alt="logo" />
    <h1 className="text-2xl font-bold main-color-txt">404</h1>
    <h1 className="text-2xl font-medium main-color-txt">
      Ops!, Page not found!
    </h1>
    <Link to="/" className="text-gray-600 font-bold">
      Go back
    </Link>
  </div>
)
export default NotFoundPage

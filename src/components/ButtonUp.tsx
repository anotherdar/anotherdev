import React, { FC } from "react"

//@ts-ignore
import Up from "../images/arrow_upward-24px.svg"

interface ButtonUpProperties {
  action: () => void
}

export const ButtonUp: FC<ButtonUpProperties> = ({ action }) => {
  return (
    <button
      onClick={action}
      style={{ zIndex: 10 }}
      className="p-3 rounded-full main-color-bg border-none fixed bottom-0 right-0 m-4 shadow-lg"
    >
      <img src={Up} alt="" />
    </button>
  )
}

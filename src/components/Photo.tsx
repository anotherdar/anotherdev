import React, { FC } from "react"

// @ts-ignore
import myself from "../images/me.jpg"

export const Photo: FC = () => {
  return (
    <div className="h-64 w-64 rounded-full border-2 main-color-border bg-white">
      <img src={myself} alt="me" className="rounded-full" />
    </div>
  )
}

import React, { FC } from "react"

// @ts-ignore
import loadingLogo from "../images/Loading.svg"

interface ILoading {
  isLoading?: boolean
}

export const Loading: FC<ILoading> = ({ isLoading }) => {
  return (
    <div className="animate-spin">
      <img src={loadingLogo} alt="" />
    </div>
  )
}

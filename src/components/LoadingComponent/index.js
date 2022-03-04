import React from 'react'
import css from "./LoadingComponent.module.css"

function Loading() {
  return (
    <div>
      <div className={css.logoLoading}></div>
      <p>Loading...</p>
    </div>
  )
}

export default Loading
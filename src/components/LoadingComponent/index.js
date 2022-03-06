import React from 'react'
import css from "./LoadingComponent.module.css"

function Loading() {
  return (
    <div className={css.loadingContainer}>
      <div className={css.logoLoading}></div>
      <span className={css.loadingText}></span>
    </div>
  )
}

export default Loading
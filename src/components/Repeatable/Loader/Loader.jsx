import React from 'react'

import localStyles from './Loader.styl'

export const Loader = () => {
  return (
    <div className={localStyles.loaderWrap} >
      <div className={localStyles.loader} >
        <div className={localStyles.blobStart}></div>
        <div className={localStyles.blobEnd}></div>
      </div>
    </div>
  )
}

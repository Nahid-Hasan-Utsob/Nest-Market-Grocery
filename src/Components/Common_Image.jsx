import React from 'react'

export default function Common_Image({img,className=''}) {
  return (
    <div>
      <div>
            <img className={className} src={img} alt="" />
      </div>
    </div>
  )
}

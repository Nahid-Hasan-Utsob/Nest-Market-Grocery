import React from 'react'

export default function Provaid_Card({img,title,des,TclassName='',PclassName=''}) {
  return (
    <div className='p-2  rounded-xl bg-amber-50'>
                  <div className='flex flex-col items-center justify-center'>
                              <img className='lg:w-[100px] w-[50px] lg:mt-6' src={img} alt={title} />

                              <p className={TclassName}>
                                          {title}
                              </p>
                              <p className={PclassName}>
                                          {des}
                              </p>
                  </div>
    </div>
  )
}

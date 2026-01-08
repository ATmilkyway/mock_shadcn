import React from 'react'

const HomePage = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-3'>
      <div className="bg-primary-foreground p-8 rounded-lg lg:col-span-2 xl:col-end-1 2xl:col-end-2"></div>
      <div className="bg-primary-foreground p-8 rounded-lg "></div>
      <div className="bg-primary-foreground p-8 rounded-lg "></div>
      <div className="bg-primary-foreground p-8 rounded-lg "></div>
      <div className="bg-primary-foreground p-8 rounded-lg lg:col-span-2 xl:col-end-1 2xl:col-end-2"></div>
      <div className="bg-primary-foreground p-8 rounded-lg "></div>
    </div>
  )
}

export default HomePage
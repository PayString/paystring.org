import React from 'react'

import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  const bgImgStyle = {
    backgroundImage: 'url(/assets/vision/background.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  }

  return (
    <Wave style={bgImgStyle} spacing="sm" direction="rtl" wave="gray">
      <div className="max-w-4xl pt-16 lg:pt-70">
        <h1 className="text-3xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
          Vision
        </h1>
      </div>
      {/* TODO Content */}
    </Wave>
  )
}

export default Introduction

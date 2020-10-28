import { withPrefix } from 'gatsby'
import lottie, { AnimationItem } from 'lottie-web'
import React, { useState, useCallback, useRef } from 'react'
import ReactPlayer from 'react-player'

import BetterUX from '../../../assets/home/introduction/better-ux.svg'
import OpenSource from '../../../assets/home/introduction/open-source.svg'
import Play from '../../../assets/home/introduction/play.svg'
import TechStack from '../../../assets/home/introduction/tech-stack.svg'
import { getDocsLocation } from '../../../utils/config'
import Button from '../../common/button'
import Wave from '../../common/wave'

import bgImage from './background-animation.json'

const Introduction: React.FC = () => {
  const videoRef = useRef<ReactPlayer>(null)
  const [playing, setPlaying] = useState(false)
  const [backgroundAnimation, setBackgroundAnimation] = useState<
    AnimationItem
  >()

  const setBgRef = useCallback((node: HTMLDivElement) => {
    if (backgroundAnimation) {
      backgroundAnimation.destroy()
    }

    if (node) {
      setBackgroundAnimation(
        lottie.loadAnimation({
          container: node,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: bgImage,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }),
      )
    }
  }, [])

  const sectionCopy = [
    {
      title: 'Open Source',
      icon: OpenSource,
      description:
        'Join a community improving payments with open standards and protocols.',
    },
    {
      title: 'Better UX',
      icon: BetterUX,
      description:
        'Replace complex account numbers with a simple ID that works across any payment network and currency.',
    },
    {
      title: 'Simple Tech Stack',
      icon: TechStack,
      description:
        'Built on HTTP/DNS standards for easy deployment in any app, on any platform.',
    },
  ]

  const onVideoEnd = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.showPreview()
    }
  }, [videoRef])

  return (
    <Wave
      wave="white"
      spacing="sm"
      waveClassNames="bg-contain lg:bg-auto xl:bg-contain z-10"
    >
      <div
        className="absolute left-0 right-0 lottie-player -z-1"
        ref={setBgRef}
      />
      <div className="flex flex-col items-center">
        <h1 className="max-w-3xl pt-16 text-3xl font-bold text-center sm:text-h1 sm:leading-tighter lg:pt-70 sm:mb-10 mb-7">
          The Universal Payment Identifier
        </h1>
        <p className="mb-20 text-center md:mb-10 md:max-w-md sm:text-xl">
          A better way for your users to send and receive payments
        </p>
        <div className="hidden md:flex">
          <a href={getDocsLocation()} className="mr-8">
            <Button size="lg" label="Start Building" />
          </a>
          <Button
            to="/our-vision-to-simplify-payments"
            size="lg"
            variant="secondary"
            label="Learn More"
          />
        </div>
        <div className="md:hidden">
          <a href={getDocsLocation()} className="mr-6">
            <Button label="Start Building" />
          </a>
          <Button to="contact" variant="secondary" label="Learn More" />
        </div>
        <div className="relative w-full h-full p-px mt-20 border-2 rounded-lg border-blue-dark-500 pb-16-9">
          <ReactPlayer
            ref={videoRef}
            playing={playing}
            onReady={() => {
              setPlaying(true)
            }}
            width="100%"
            height="100%"
            controls
            onEnded={onVideoEnd}
            className="absolute object-cover w-full h-full overflow-hidden rounded-lg"
            url="https://player.vimeo.com/video/466717408"
            playIcon={<Play className="w-24" />}
            light={withPrefix('/assets/home/video-background.png')}
          />
        </div>
        <div className="grid grid-cols-1 gap-16 mt-24 lg:mt-36 lg:gap-28 lg:grid-cols-3">
          {sectionCopy.map((copy) => {
            return (
              <div key={copy.title} className="max-w-sm sm:max-w-lg">
                <copy.icon className="mb-10" />
                <h3 className="text-2xl font-bold sm:text-3xl mb-7">
                  {copy.title}
                </h3>
                <p className="sm:text-xl">{copy.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Wave>
  )
}

export default Introduction

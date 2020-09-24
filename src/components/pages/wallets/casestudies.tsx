import classnames from 'classnames'
import { withPrefix } from 'gatsby'
import React, { useState, useCallback, useMemo, Fragment } from 'react'

import GoLeft from '../../../assets/wallets/casestudies/left.svg'
import OrangeMark from '../../../assets/wallets/casestudies/orangemark.svg'
import GoRight from '../../../assets/wallets/casestudies/right.svg'
import Button from '../../common/button'
import Wave from '../../common/wave'

import casestudies from './caseStudyData'
import pressdata from './pressData'

type CompanyChipProps = {
  active: boolean
  Logo: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

const CompanyChip: React.FC<CompanyChipProps> = ({ active, Logo }) => {
  return (
    <Fragment>
      <div
        className={`${
          active ? 'bg-gradient-r-orange-dark-to-light' : ''
        } ml-2 mr-2 lg:w-48 w-30 h-1 mb-3`}
      />
      <div className="flex items-center mt-1 ml-2 mr-2 bg-white rounded cursor-pointer lg:w-48 w-38 h-18">
        <Logo className="w-11/12 m-auto" />
      </div>
    </Fragment>
  )
}

type CompanyChipRowProps = {
  chips: Array<{
    logo: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }>
  changeChip: (idx: number) => void
  keyField: string
  activeIndex: number
  className?: string
}

const CompanyChipRow: React.FC<CompanyChipRowProps> = ({
  chips,
  changeChip,
  keyField,
  activeIndex,
  className,
}) => {
  return (
    <div
      className={classnames(
        'flex overflow-auto xxl:justify-center mb-15',
        className,
      )}
    >
      {chips.map((chipData, idx) => {
        return (
          <div
            onClick={() => {
              changeChip(idx)
            }}
            key={chipData[keyField] as string}
          >
            <CompanyChip active={idx === activeIndex} Logo={chipData.logo} />
          </div>
        )
      })}
    </div>
  )
}

const getPreviousNextIdx = (
  records: number,
  position: number,
  currentIdx: number,
) => {
  if (position < 0) {
    if (currentIdx !== 0) {
      return currentIdx - 1
    }
    return records - 1
  }
  if (currentIdx !== records - 1) {
    return currentIdx + 1
  }
  return 0
}

const CaseStudies: React.FC = () => {
  const [currentStudyIdx, setCurentStudyIdx] = useState(0)
  const [currentPressIdx, setCurrentPressIdx] = useState(0)

  const currentStudy = useMemo(() => {
    return casestudies[currentStudyIdx] || {}
  }, [currentStudyIdx])

  const currentPress = useMemo(() => {
    return pressdata[currentPressIdx]
  }, [currentPressIdx])

  const caseStudyBgImage = {
    backgroundImage: `url(
        ${withPrefix('/assets/wallets/caseStudyBackground.svg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  const blogBgImage = {
    backgroundImage: `url(
        ${withPrefix('/assets/wallets/blogBackground.svg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  const changeCaseStudy = useCallback(
    (idx) => {
      setCurentStudyIdx(idx)
    },
    [setCurentStudyIdx],
  )

  const changePressData = useCallback(
    (idx) => {
      setCurrentPressIdx(idx)
    },
    [setCurrentPressIdx],
  )

  const changeStudyRender = useCallback(
    (position) => {
      const nextIdx = getPreviousNextIdx(
        casestudies.length,
        position,
        currentStudyIdx,
      )
      setCurentStudyIdx(nextIdx)
    },
    [currentStudyIdx, setCurentStudyIdx],
  )

  const changePressRender = useCallback(
    (position) => {
      const nextIdx = getPreviousNextIdx(
        pressdata.length,
        position,
        currentPressIdx,
      )
      setCurrentPressIdx(nextIdx)
    },
    [currentPressIdx, setCurrentPressIdx],
  )

  return (
    <Wave
      wave="light-blue"
      spacing="sm"
      direction="rtl"
      background="gray"
      waveClassNames="bg-contain lg:bg-auto xl:bg-contain"
      no-gutter
    >
      <div className="flex flex-col px-1 md:items-center">
        <h2 className="mb-6 text-3xl font-bold text-left md:mb-8 sm:text-5xl md:text-center">
          Case Studies
        </h2>
      </div>
      <CompanyChipRow
        chips={casestudies}
        keyField="user"
        changeChip={changeCaseStudy}
        activeIndex={currentStudyIdx}
      />
      <div className="hidden mb-20 lg:flex">
        <GoLeft
          className="m-auto mr-5 cursor-pointer"
          onClick={() => {
            changeStudyRender(-1)
          }}
        />
        <div
          className="box-border flex"
          style={{ ...caseStudyBgImage, width: 880, height: '399.5376px' }}
        >
          <div
            className="w-full text-white pl-15 pt-15 pr-15"
            style={{ width: 558 }}
          >
            <currentStudy.whiteLogo className="w-30" />
            <p className="mt-5 text-base">
              &ldquo;{currentStudy.description}.&rdquo;
            </p>
            <div className="p-3 mt-10 mb-10 text-right border-r border-white">
              <p>{currentStudy.user}</p>
              <p>{currentStudy.designation}</p>
            </div>
          </div>
          <div
            className="overflow-hidden"
            style={{ width: '322.2357px', height: '399.5376px' }}
          >
            <img
              src={withPrefix(currentStudy.userImageUrl)}
              className="max-w-none"
              style={{
                marginTop: 11,
                width: '322.2357px',
                height: '399.5376px',
              }}
            />
          </div>
        </div>
        <GoRight
          className="m-auto ml-5 cursor-pointer"
          onClick={() => {
            changeStudyRender(1)
          }}
        />
      </div>
      <div className="block w-full h-auto mb-10 lg:hidden">
        <div className="w-full h-auto text-white rounded bg-blue-dark-800">
          <OrangeMark className="relative z-10 ml-10 -top-4" />
          <div className="w-full h-auto pb-5 pl-10 pr-10 pt-15">
            <p className="mt-5 mb-5 text-base">
              &ldquo;{currentStudy.description}.&rdquo;
            </p>
          </div>
          <div className="flex pt-10 pb-10 pr-5">
            <div className="flex-1">
              <img src={withPrefix(currentStudy.userSmallImage)} />
            </div>
            <div className="pr-5 text-base text-right border-r border-white">
              <p className="font-medium">{currentStudy.user}</p>
              <p className="font-medium">{currentStudy.designation}</p>
              <currentStudy.whiteLogo className="float-right w-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-1 lg:items-center">
        <h2 className="mb-20 text-3xl font-bold capitalize md:mb-8 sm:text-5xl">
          What Press Says
        </h2>
      </div>
      <CompanyChipRow
        chips={pressdata}
        keyField="bottomText"
        changeChip={changePressData}
        activeIndex={currentPressIdx}
        className="justify-center"
      />
      <div className="hidden w-full h-auto lg:flex" style={{ minHeight: 435 }}>
        <GoLeft
          className="m-auto mr-5 cursor-pointer"
          onClick={() => {
            changePressRender(-1)
          }}
        />
        <div className="w-full rounded-md" style={blogBgImage}>
          <div className="mb-5 ml-5 mr-5 mt-15">
            <currentPress.logo className="w-full m-auto" />
          </div>
          <div className="p-0 mb-5 ml-15 mr-15">
            <p className="pt-5 text-lg">{currentPress.description}</p>
          </div>
          <div className="p-0 mb-5 text-center">
            <p className="p-4 text-lg font-bold">
              {currentPress.bottomDescription}
            </p>
            <p className="text-sm">{currentPress.bottomText}</p>
            <a href={currentPress.link} className="p-4">
              <Button label="Read the full article" className="mt-5" />
            </a>
          </div>
        </div>
        <GoRight
          className="m-auto ml-5 cursor-pointer"
          onClick={() => {
            changePressRender(1)
          }}
        />
      </div>
      <div className="flex w-full h-auto bg-white lg:hidden">
        <div className="w-full rounded">
          <OrangeMark className="relative z-10 ml-10 -top-4" />
          <div className="p-8 mb-5">
            <p className="text-base">{currentPress.description}</p>
          </div>
          <div className="p-5 mb-5">
            <p className="p-4 text-lg font-bold">
              {currentPress.bottomDescription}
            </p>
            <div className="p-4">
              <currentPress.logo />
            </div>
            <a href={currentPress.link} className="p-4">
              <Button label="Read the full article" className="mt-5" />
            </a>
          </div>
        </div>
      </div>
    </Wave>
  )
}

export default CaseStudies

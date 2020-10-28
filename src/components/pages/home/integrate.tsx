import classNames from 'classnames'
import { withPrefix } from 'gatsby'
import React, { useState, useMemo } from 'react'

import Discord from '../../../assets/home/integrate/discord.svg'
import { getDocsLocation } from '../../../utils/config'
import Button from '../../common/button'
import Wave from '../../common/wave'

import developerDetails from './developerDetails'

interface DeveloperCardProps {
  name: string
  description: string
  userName: string
  userPost: string
  logo: string
  userImage: string
  url: string
}

const subPanels = [
  {
    name: 'Javascript',
    link: 'https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/node',
  },
  {
    name: 'Swift',
    link: 'https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/swift',
  },
  {
    name: 'Java',
    link: 'https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/java',
  },
]

const discordBackground = {
  backgroundImage: `url(${withPrefix('/assets/home/join-discord.svg')})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}
const discordBackgroundSmall = {
  backgroundImage: `url(${withPrefix('/assets/home/join-discord-small.svg')})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const DeveloperCard = ({
  name,
  description,
  userName,
  userPost,
  logo,
  userImage,
  url,
}: DeveloperCardProps) => {
  return (
    <a href={url}>
      <div className="w-full">
        <div className="w-full hover:shadow-devcard rounded-1rem">
          <div className="h-64 px-10 py-20 border bg-gradient-b-gray rounded-t-1rem border-gray-50">
            <img src={withPrefix(logo)} className="w-auto h-8 m-auto" />
          </div>
          <div className="h-64 border border-gray-50 rounded-b-1rem">
            <div className="px-8 pt-8">
              <span className="text-lg font-semibold">{name}</span>
              <p className="mt-3 text-base">{description}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <img
            src={withPrefix(userImage)}
            className="mt-6 mr-5 rounded-full h-14"
          />
          <div className="font-medium mt-7">
            <p>{userName},</p>
            <p>{userPost}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

const Integrate: React.FC = () => {
  const panels = ['cURL', 'Javascript', 'RippleX SDK']
  const [activePanel, setActivePanel] = useState<string>('cURL')
  const [activeSubPanel, setActiveSubpanel] = useState<string>('Javascript')
  const [activeCardIdx, setActiveCardIdx] = useState(0)

  const subPanelLink = useMemo(() => {
    if (activeSubPanel) {
      const subIdx = subPanels.findIndex(
        (panel) => panel.name === activeSubPanel,
      )

      if (subIdx >= 0) {
        return subPanels[subIdx].link
      }
    }
    return ''
  }, [activeSubPanel])

  return (
    <Wave background="white" wave="gray" no-gutter>
      {/* Header */}
      <div className="flex justify-center">
        <div className="flex flex-col self-center max-w-xl text-left md:items-center md:text-center z-10">
          <h2 className="mb-6 text-3xl font-bold md:mb-8 sm:text-5xl">
            Integrate Into Your App in Minutes
          </h2>
          <p className="mb-16 sm:text-xl sm:mb-24">
            Set up on your preferred platform with a few lines of code and
            minimal maintenance.
          </p>
        </div>
      </div>

      <div className="md:flex">
        <div className="w-full mb-16 overflow-hidden md:mb-0 md:mr-20">
          <h3 className="text-2xl font-bold">Receive Money</h3>
          <p className="mt-4">
            Set up a PayID server to provide your users PayIDs
          </p>
          <div className="mt-10 md:mt-16">
            <p className="font-medium">Clone Repo</p>
          </div>
          <div className="mt-6 overflow-x-auto font-mono text-sm font-normal text-white rounded bg-blue-dark-800 md:mt-8">
            <div className="flex w-full p-4">
              <div className="px-4 py-6 text-center rounded bg-blue-dark-700">
                <p>1</p>
                <p>2</p>
              </div>
              <div className="px-8 py-6 whitespace-no-wrap">
                <div>
                  <span className="text-blue-dark-300">git</span> clone
                  git@github.com:payid-org/payid.git
                </div>
                <div>
                  <span className="text-orange-300">cd</span> payid
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-16">
            <p className="font-medium">Run Script</p>
          </div>
          <div className="mt-6 overflow-x-auto font-mono text-sm font-normal text-white rounded bg-blue-dark-800 md:mt-8">
            <div className="flex w-full p-4">
              <div className="px-4 py-6 text-center rounded bg-blue-dark-700">
                <p>1</p>
              </div>
              <div className="px-8 py-6 whitespace-no-wrap">
                <div>npm run devEnvUp</div>
              </div>
            </div>
          </div>
          <a href={getDocsLocation()}>
            <Button label="Read More" className="mt-10 md:mt-16" />
          </a>
        </div>
        <div className="w-full overflow-hidden ">
          <h3 className="text-2xl font-bold">Send Money</h3>
          <p className="mt-4">Enable your users to send to PayIDs</p>
          <div className="mt-10 md:mt-16">
            {panels.map((panel, panelIndex) => {
              return (
                <button
                  key={panelIndex}
                  onClick={(): void => setActivePanel(panel)}
                  disabled={panel === activePanel}
                  className={classNames('mr-8 font-medium focus:outline-none', {
                    'border-b-2 border-orange-500': activePanel === panel,
                    'text-gray-500 hover:text-orange-500 focus:text-orange-500':
                      activePanel !== panel,
                  })}
                >
                  {panel}
                </button>
              )
            })}
          </div>
          {activePanel === 'cURL' && (
            <div className="mt-6 overflow-x-auto font-mono text-sm font-normal text-white rounded bg-blue-dark-800 md:mt-8">
              <div className="flex w-full p-4">
                <div className="px-4 py-6 text-center rounded bg-blue-dark-700">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
                <div className="px-8 py-6 whitespace-no-wrap">
                  <div>
                    curl --location --request GET{' '}
                    <span className="text-green-300">
                      &apos;https://ripplex.money/stormtv&apos;
                    </span>{' '}
                    \
                  </div>
                  <div>
                    --header{' '}
                    <span className="text-green-300">
                      &apos;Accept: application/xrpl-testnet+json,
                      application/btc-mainnet+json&apos;
                    </span>{' '}
                    \
                  </div>
                  <div>
                    --header{' '}
                    <span className="text-green-300">
                      &apos;PayID-Version: 1.0&apos;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activePanel === 'Javascript' && (
            <div className="mt-6 overflow-x-auto font-mono text-sm font-normal text-white rounded bg-blue-dark-800 md:mt-8">
              <div className="flex w-full p-4">
                <div className="px-4 py-6 text-center rounded bg-blue-dark-700">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                </div>
                <div className="px-8 py-6 whitespace-no-wrap">
                  <div>
                    <span className="text-blue-dark-300">const</span>{' '}
                    <span className="text-blue-300">axios</span> =
                    <span className="text-green-200"> require</span>(
                    <span className="text-orange-300">&apos;axios&apos;</span>)
                  </div>
                  <div>
                    <span className="text-blue-dark-300">const</span>{' '}
                    <span className="text-blue-300">response</span> ={' '}
                    <span className="text-purple-200">await</span>
                    <span className="text-blue-light-300"> axios</span>.
                    <span className="text-green-200">get</span>(
                  </div>
                  <div>
                    &nbsp;&nbsp;
                    <span className="text-orange-300">
                      &apos;https://xpring.money/stormtv&apos;
                    </span>
                    ,
                  </div>
                  <div>&nbsp;&nbsp;&#123;</div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-blue-light-300">headers:</span> &#123;
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-blue-light-300">Accept:</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-orange-300">
                      &apos;application/xrpl-mainnet+json,
                      application/btc-mainnet+json&apos;
                    </span>
                    ,
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-orange-300">
                      &apos;PayID-Version&apos;
                    </span>
                    :<span className="text-orange-300">&apos;1.0&apos;</span>,
                  </div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</div>
                  <div>&nbsp;&nbsp;&#125;,</div>
                  <div>)</div>
                  <div>
                    <span className="text-blue-dark-300">const</span>{' '}
                    <span className="text-blue-300">addresses</span> =
                    <span className="text-blue-light-300">
                      {' '}
                      response.data.addresses
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* https://runkit.com/stormtv/payid-javascript */}
          {activePanel === 'RippleX SDK' && (
            <>
              <div className="mt-6 mb-16 font-mono text-sm font-normal text-white rounded">
                <div className="pt-4 mb-6">
                  {subPanels.map((subPanel, subIdx) => (
                    <button
                      key={subIdx}
                      onClick={(): void => setActiveSubpanel(subPanel.name)}
                      className={classNames(
                        'border rounded mr-2 text-xs focus:outline-none  px-4 py-1 border-orange-500 font-bold',
                        {
                          'bg-orange-500  text-white ':
                            subPanel.name === activeSubPanel,
                        },
                        {
                          'border-orange-500 text-orange-500':
                            subPanel.name !== activeSubPanel,
                        },
                      )}
                    >
                      {subPanel.name}
                    </button>
                  ))}
                </div>
                {activeSubPanel === 'Javascript' && (
                  <p className="mt-4 mb-6 text-base text-black">
                    <a
                      href="https://github.com/xpring-eng/xpring-js"
                      className="text-orange-500 focus:underline hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      RippleX-JS
                    </a>
                    &nbsp;is the JavaScript library of the&nbsp;
                    <a
                      href="https://github.com/xpring-eng/xpring-sdk"
                      className="text-orange-500 focus:underline hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      RippleX Dev Kit
                    </a>
                    . Use the provided classes to work directly with PayID.
                  </p>
                )}
                {activeSubPanel === 'Swift' && (
                  <p className="mt-4 mb-6 text-base text-black">
                    <a
                      href="https://github.com/xpring-eng/xpringkit"
                      className="text-orange-500 focus:underline hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      RippleX-Swift
                    </a>
                    &nbsp;is the Swift library of the&nbsp;
                    <a
                      href="https://github.com/xpring-eng/xpring-sdk"
                      className="text-orange-500 focus:underline hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      RippleX Dev Kit
                    </a>
                    . Use the provided classes to work directly with PayID.
                  </p>
                )}
                {activeSubPanel === 'Java' && (
                  <p className="mt-4 mb-6 text-base text-black">
                    <a
                      href="https://github.com/xpring-eng/xpring4j"
                      className="text-orange-500 focus:underline hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      RippleX4j
                    </a>
                    &nbsp;is the Java library of the&nbsp;
                    <a
                      href="https://github.com/xpring-eng/xpring-sdk"
                      className="text-orange-500 focus:underline hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      RippleX Dev Kit
                    </a>
                    . Use the provided classes to work directly with PayID.
                  </p>
                )}
                <div className="flex w-full p-4 overflow-x-auto rounded bg-blue-dark-800">
                  {activeSubPanel === 'Javascript' && (
                    <>
                      <div className="px-4 py-6 text-center rounded bg-blue-dark-700">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                      </div>
                      <div className="px-8 py-6 whitespace-no-wrap">
                        <div>
                          <div>
                            <span className="text-blue-dark-300">const</span>
                            {' { '}
                            <span className="text-blue-300">PayIdClient</span>
                            {' } = '}
                            <span className="text-green-200"> require</span>(
                            <span className="text-orange-300">
                              &apos;xpring-js&apos;
                            </span>
                            )
                          </div>
                        </div>
                        <div>&nbsp;</div>
                        <div>
                          <span className="text-blue-dark-300">const</span>{' '}
                          <span className="text-blue-300">payId</span>
                          {' = '}
                          <span className="text-orange-300">
                            &apos;stormtv$ripplex.money&apos;
                          </span>
                        </div>
                        <div>
                          <span className="text-blue-dark-300">const</span>{' '}
                          <span className="text-blue-300">network</span>
                          {' = '}
                          <span className="text-orange-300">
                            &apos;btc-mainnet&apos;
                          </span>
                        </div>

                        <div>
                          <span className="text-blue-dark-300">const</span>{' '}
                          <span className="text-blue-300">payIdClient</span>
                          {' = '}
                          <span className="text-green-200">new </span>
                          <span className="text-blue-light-300">
                            PayIdClient
                          </span>
                          ()
                        </div>
                        <div>&nbsp;</div>

                        <div>
                          <span className="text-blue-dark-300">const</span>{' '}
                          <span className="text-blue-300">
                            resolvedAddressDetails
                          </span>
                          {' = '}
                          <span className="text-purple-200">await </span>
                          <span className="text-blue-300">payIdClient</span>.
                          <span className="text-green-200">
                            cryptoAddressForPayId
                          </span>
                          (<span className="text-blue-300">payId</span>
                          {', '}
                          <span className="text-blue-300">network</span>)
                        </div>
                        <div>
                          <span className="text-blue-300">console</span>.
                          <span className="text-green-200">log</span>(
                          <span className="text-blue-300">
                            resolvedAddressDetails
                          </span>
                          .<span className="text-blue-300">address</span>)
                        </div>
                      </div>
                    </>
                  )}
                  {activeSubPanel === 'Swift' && (
                    <>
                      <div className="px-4 py-6 text-center rounded bg-blue-dark-700">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p>12</p>
                        <p>13</p>
                        <p>14</p>
                      </div>
                      <div className="px-8 py-6 whitespace-no-wrap">
                        <div>
                          <span className="text-purple-200">import</span>{' '}
                          <span className="text-green-300">XpringKit</span>
                        </div>
                        <div>&nbsp;</div>
                        <div>
                          <span className="text-blue-dark-300">let</span>{' '}
                          <span className="text-blue-300">network</span> ={' '}
                          <span className="text-orange-300">
                            &quot;btc-mainnet&quot;
                          </span>
                        </div>
                        <div>
                          <span className="text-blue-dark-300">let</span>{' '}
                          <span className="text-blue-300">payID</span> ={' '}
                          <span className="text-orange-300">
                            &quot;stormtv$xpring.money&quot;
                          </span>
                        </div>
                        <div>
                          {' '}
                          <span className="text-blue-dark-300">let</span>{' '}
                          <span className="text-blue-300">payIDClient</span> ={' '}
                          <span className="text-green-300">PayIDClient</span>()
                        </div>
                        <div>&nbsp;</div>
                        <div>
                          <span className="text-blue-dark-300">let</span>{' '}
                          <span className="text-blue-300">result</span> ={' '}
                          <span className="text-blue-300">payIDClient</span>
                          <span>.</span>
                          <span className="text-green-300">cryptoAddress</span>
                          <span>(</span>
                          <span className="text-green-dark-300">for:</span>{' '}
                          <span className="text-blue-300">payID</span>
                          {', '}
                          <span className="text-green-dark-300">on:</span>{' '}
                          <span className="text-blue-300">network</span>)
                        </div>
                        <div>&nbsp;</div>
                        <div>
                          <span className="text-purple-200">switch</span>{' '}
                          <span className="text-blue-300">result</span>{' '}
                          <span>{`{`}</span>
                        </div>
                        <div>
                          <span className="text-purple-200">case</span>{' '}
                          <span>.success</span>
                          <span>(</span>
                          <span className="text-blue-dark-300">let</span>{' '}
                          <span className="text-blue-300">
                            addressComponents
                          </span>
                          <span>):</span>
                        </div>
                        <div>
                          &nbsp;&nbsp;
                          <span className="text-green-300">print</span>
                          <span>(</span>
                          <span className="text-blue-300">
                            btcAddressComponents.address
                          </span>
                          <span>)</span>
                        </div>
                        <div>
                          <span className="text-purple-200">case</span>{' '}
                          <span>.failure</span>
                          <span>(</span>
                          <span className="text-blue-dark-300">let</span>{' '}
                          <span className="text-blue-300">error</span>
                          <span>):</span>
                        </div>
                        <div>
                          &nbsp;&nbsp;
                          <span className="text-green-300">print</span>
                          <span>(</span>
                          <span className="text-blue-300">error</span>
                          <span>)</span>
                        </div>
                        <div>{`}`}</div>
                      </div>
                    </>
                  )}
                  {activeSubPanel === 'Java' && (
                    <>
                      <div className="px-4 py-6 text-center rounded bg-blue-dark-700">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                      </div>
                      <div className="px-8 py-6 whitespace-no-wrap">
                        <div>
                          <span className="text-purple-200">import</span>{' '}
                          <span className="text-blue-light-300">
                            io.xpring.payid.
                          </span>
                          <span className="text-blue-300">PayIdClient</span>
                          <span className="text-purple-200">;</span>
                        </div>
                        <div>
                          <span className="text-purple-200">import</span>{' '}
                          <span className="text-blue-light-300">
                            io.xpring.payid.generated.model.
                          </span>
                          <span className="text-blue-300">
                            CryptoAddressDetails
                          </span>
                          <span className="text-purple-200">;</span>
                        </div>
                        <div>&nbsp;</div>

                        <div>
                          <span className="text-blue-dark-300">String</span>{' '}
                          <span className="text-blue-300">payId</span>
                          {' = '}
                          <span className="text-orange-300">
                            &quot;stormtv$xpring.money&quot;
                          </span>
                          <span className="text-purple-200">;</span>{' '}
                        </div>
                        <div>
                          <span className="text-blue-dark-300">String</span>{' '}
                          <span className="text-blue-300">network</span>
                          {' = '}
                          <span className="text-orange-300">
                            &quot;btc-mainnet&quot;
                          </span>
                          <span className="text-purple-200">;</span>
                        </div>
                        <div>
                          <span className="text-blue-dark-300">
                            PayIdClient
                          </span>{' '}
                          <span className="text-blue-300">payIdClient</span>
                          {' = '}
                          <span className="text-purple-200">new</span>{' '}
                          <span className="text-green-300">PayIdClient</span>()
                          <span className="text-purple-200">;</span>
                        </div>

                        <div>&nbsp;</div>

                        <div>
                          <span className="text-blue-dark-300">
                            CryptoAddressDetails
                          </span>{' '}
                          <span className="text-blue-300">
                            addressComponents
                          </span>
                          {' = '}
                          <span className="text-blue-300">payIdClient</span>.
                          <span className="text-green-300">
                            cryptoAddressForPayId
                          </span>
                          (<span className="text-blue-300">payId</span>
                          {', '}
                          <span className="text-blue-300">network</span>)
                          <span className="text-purple-200">;</span>{' '}
                        </div>
                        <div>
                          <span className="text-blue-300">System</span>.
                          <span className="text-blue-300">out</span>.
                          <span className="text-green-300">println</span>(
                          <span className="text-blue-300">
                            addressComponents
                          </span>
                          .<span className="text-green-300">getAddress</span>())
                          <span className="text-purple-200">;</span>{' '}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div>
                <a href={subPanelLink} target="_blank" rel="noreferrer">
                  <Button label="Run" />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col self-center text-left md:items-center md:text-center">
          <h2 className="mb-6 text-3xl font-bold md:mb-8 sm:text-5xl">
            Discover What&apos;s Being Built
          </h2>
          <p className="mb-16 sm:text-xl sm:mb-24">
            Explore what our developers are building.
          </p>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="grid gap-8 mt-24 md:grid-cols-2 lg:grid-cols-4">
          {developerDetails.map((detail) => {
            return <DeveloperCard key={detail.name} {...detail} />
          })}
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex">
          {developerDetails.map((detail, idx) => {
            return (
              <div
                className="flex-1 mr-3 last:mr-0"
                key={`detail-${detail.name}`}
              >
                <div
                  className={classNames('w-full mb-2', {
                    'bg-gradient-r-orange-dark-to-light': activeCardIdx === idx,
                  })}
                  style={{ height: 1 }}
                />
                <button
                  className="flex items-center w-full h-12 px-3 py-4 align-middle bg-white rounded shadow-lg sm:h-16 focus:outline-none"
                  onClick={() => {
                    setActiveCardIdx(idx)
                  }}
                >
                  <img src={withPrefix(detail.logo)} className="flex-1" />
                </button>
              </div>
            )
          })}
        </div>
        <div className="block mt-12">
          <DeveloperCard {...developerDetails[activeCardIdx]} />
        </div>
        <div className="mt-10 text-center">
          <Button label="See More Projects" to={withPrefix('/use-cases')} />
        </div>
      </div>
      <div className="hidden text-center md:block mt-18">
        <Button label="See More Projects" to={withPrefix('/use-cases')} />
      </div>
      <div className="flex items-center justify-center w-full mt-24 text-center md:mt-32 lg:h-94">
        <div
          style={discordBackground}
          className="hidden w-full h-full overflow-hidden text-white rounded-xxl lg:block"
        >
          <Discord className="m-auto mt-16" />
          <h1 className="mt-10 text-3xl font-bold">Join Discord Community</h1>
          <Button
            label="Join Discord"
            className="mt-10"
            to="https://chat.payid.org/"
          />
        </div>
        <div
          style={discordBackgroundSmall}
          className="block w-full h-full overflow-hidden text-white rounded-xxl lg:hidden"
        >
          <Discord className="m-auto mt-16" />
          <h1 className="mt-10 text-4xl font-bold">Join Discord Community</h1>
          <Button
            label="Join Discord"
            className="mt-10 mb-10"
            to="https://chat.payid.org/"
          />
        </div>
      </div>
    </Wave>
  )
}

export default Integrate

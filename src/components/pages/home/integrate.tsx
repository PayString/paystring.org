import classNames from 'classnames'
import React, { useState } from 'react'

import { getDocsLocation } from '../../../utils/config'
import Button from '../../common/button'
import Wave from '../../common/wave'

const Integrate: React.FC = () => {
  const panels = ['cURL', 'Javascript', 'Xpring-JS', 'XpringKit', 'Xpring4j']
  const [activePanel, setActivePanel] = useState<string>('cURL')

  return (
    <Wave background="white" wave="gray">
      {/* Header */}
      <div className="flex justify-center">
        <div className="flex flex-col self-center max-w-xl text-left md:items-center md:text-center">
          <h2 className="mb-6 text-3xl font-bold md:mb-8 sm:text-5xl">
            Build into Your App in Minutes
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
        <div className="w-full overflow-hidden">
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
                      &apos;https://xpring.money/stormtv&apos;
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
            <>
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
                      <span className="text-orange-300">&apos;axios&apos;</span>
                      )
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
                      <span className="text-blue-light-300">headers:</span>{' '}
                      &#123;
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
              <a
                href="https://runkit.com/stormtv/payid-javascript"
                target="_blank"
                rel="noreferrer"
              >
                <Button label="Try It" className="mt-10 md:mt-16" />
              </a>
            </>
          )}
          {activePanel === 'Xpring-JS' && (
            <>
              <p className="mt-4">
                <a
                  href="https://github.com/xpring-eng/xpring-js"
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Xpring-JS
                </a>
                &nbsp;is the JavaScript library of the&nbsp;
                <a
                  href="https://github.com/xpring-eng/xpring-sdk"
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Xpring SDK
                </a>
                . Classes are provided for working directly with PayID.
              </p>
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
                  </div>
                  <div className="px-8 py-6 whitespace-no-wrap">
                    <div>
                      <div>
                        <span className="text-blue-dark-300">const</span>
                        {' { '}
                        <span className="text-blue-300">PayIDClient</span>
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
                      <span className="text-blue-300">payIDClient</span>
                      {' = '}
                      <span className="text-green-200">new </span>
                      <span className="text-blue-light-300">PayIDClient</span>(
                      <span className="text-orange-300">
                        &apos;btc-testnet&apos;
                      </span>
                      )
                    </div>
                    <div>
                      <span className="text-blue-dark-300">const</span>{' '}
                      <span className="text-blue-300">payID</span>
                      {' = '}
                      <span className="text-orange-300">
                        &apos;stormtv$xpring.money&apos;
                      </span>
                    </div>
                    <div>&nbsp;</div>

                    <div>
                      <span className="text-blue-dark-300">const</span>{' '}
                      <span className="text-blue-300">
                        resolvedAddressDetails
                      </span>
                      {' = '}
                      <span className="text-purple-200">await </span>
                      <span className="text-blue-300">payIDClient</span>.
                      <span className="text-green-200">addressForPayID</span>(
                      <span className="text-blue-300">payID</span>)
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
                </div>
              </div>
              <a
                href="https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/node"
                target="_blank"
                rel="noreferrer"
              >
                <Button label="See Demo" className="mt-10 md:mt-16" />
              </a>
            </>
          )}
          {activePanel === 'XpringKit' && (
            <>
              <p className="mt-4">
                <a
                  href="https://github.com/xpring-eng/xpringkit"
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  XpringKit
                </a>
                &nbsp;is the Swift library of the&nbsp;
                <a
                  href="https://github.com/xpring-eng/xpring-sdk"
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Xpring SDK
                </a>
                . Classes are provided for working directly with PayID.
              </p>
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
                      {' '}
                      <span className="text-blue-dark-300">let</span>{' '}
                      <span className="text-blue-300">payIDClient</span> ={' '}
                      <span className="text-green-300">PayIDClient</span>
                      <span>(</span>
                      <span className="text-green-dark-300">network:</span>{' '}
                      <span className="text-blue-300">network</span>
                      <span>)</span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                      {' '}
                      <span className="text-blue-dark-300">let</span>{' '}
                      <span className="text-blue-300">payID</span> ={' '}
                      <span className="text-orange-300">
                        &quot;stormtv$xpring.money&quot;
                      </span>
                    </div>
                    <span className="text-blue-300">payIDClient</span>
                    <span>.</span>
                    <span className="text-green-300">address</span>
                    <span>(</span>
                    <span className="text-green-dark-300">for:</span>{' '}
                    <span className="text-blue-300">payID</span>
                    <span>)&nbsp;{`{`}&nbsp;</span>
                    <span className="text-blue-300">result</span>{' '}
                    <span className="text-purple-200">in</span>
                    <div>
                      &nbsp;&nbsp;
                      <span className="text-purple-200">switch</span>{' '}
                      <span className="text-blue-300">result</span>{' '}
                      <span>{`{`}</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;
                      <span className="text-purple-200">case</span>{' '}
                      <span>.success</span>
                      <span>(</span>
                      <span className="text-blue-dark-300">let</span>{' '}
                      <span className="text-blue-300">addressComponents</span>
                      <span>):</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-green-300">print</span>
                      <span>(</span>
                      <span className="text-blue-300">
                        btcAddressComponents.address
                      </span>
                      <span>)</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;
                      <span className="text-purple-200">case</span>{' '}
                      <span>.failure</span>
                      <span>(</span>
                      <span className="text-blue-dark-300">let</span>{' '}
                      <span className="text-blue-300">error</span>
                      <span>):</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-green-300">print</span>
                      <span>(</span>
                      <span className="text-blue-300">error</span>
                      <span>)</span>
                    </div>
                    <div>&nbsp;&nbsp;{`}`}</div>
                    <div>{`}`}</div>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/swift"
                target="_blank"
                rel="noreferrer"
              >
                <Button label="See Demo" className="mt-10 md:mt-16" />
              </a>
            </>
          )}
          {activePanel === 'Xpring4j' && (
            <>
              <p className="mt-4">
                <a
                  href="https://github.com/xpring-eng/xpring4j"
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Xpring4j
                </a>
                &nbsp;is the Java library of the&nbsp;
                <a
                  href="https://github.com/xpring-eng/xpring-sdk"
                  className="text-orange-500 focus:underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Xpring SDK
                </a>
                . Classes are provided for working directly with PayID.
              </p>
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
                  </div>
                  <div className="px-8 py-6 whitespace-no-wrap">
                    <div>
                      <span className="text-purple-200">import</span>{' '}
                      <span className="text-blue-light-300">
                        io.xpring.payid.
                      </span>
                      <span className="text-blue-300">PayIDClient</span>
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
                      <span className="text-blue-300">network</span>
                      {' = '}
                      <span className="text-orange-300">
                        &quot;btc-testnet&quot;
                      </span>
                      <span className="text-purple-200">;</span>
                    </div>
                    <div>
                      <span className="text-blue-dark-300">PayIDClient</span>{' '}
                      <span className="text-blue-300">payIDClient</span>
                      {' = '}
                      <span className="text-purple-200">new</span>{' '}
                      <span className="text-green-300">PayIDClient</span>(
                      <span className="text-blue-300">network</span>)
                      <span className="text-purple-200">;</span>
                    </div>
                    <div>
                      <span className="text-blue-dark-300">String</span>{' '}
                      <span className="text-blue-300">payID</span>
                      {' = '}
                      <span className="text-orange-300">
                        &quot;stormtv$xpring.money&quot;
                      </span>
                      <span className="text-purple-200">;</span>{' '}
                    </div>
                    <div>&nbsp;</div>

                    <div>
                      <span className="text-blue-dark-300">
                        CryptoAddressDetails
                      </span>{' '}
                      <span className="text-blue-300">addressComponents</span>
                      {' = '}
                      <span className="text-blue-300">payIDClient</span>.
                      <span className="text-green-300">addressForPayID</span>(
                      <span className="text-blue-300">payID</span>)
                      <span className="text-purple-200">;</span>{' '}
                    </div>
                    <div>
                      <span className="text-blue-300">System</span>.
                      <span className="text-blue-300">out</span>.
                      <span className="text-green-300">println</span>(
                      <span className="text-blue-300">addressComponents</span>.
                      <span className="text-green-300">getAddress</span>())
                      <span className="text-purple-200">;</span>{' '}
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/java"
                target="_blank"
                rel="noreferrer"
              >
                <Button label="See Demo" className="mt-10 md:mt-16" />
              </a>
            </>
          )}
        </div>
      </div>
    </Wave>
  )
}

export default Integrate

import React from 'react'

import IconGreen from '../../../../content/assets/compliance/synergy/check-green.svg'
import IconOrange from '../../../../content/assets/compliance/synergy/check-orange.svg'
import IconPurple from '../../../../content/assets/compliance/synergy/check-purple.svg'
import Wave from '../../common/wave'

const Synergy: React.FC = () => {
  const iconClasses = 'h-12.5 sm:h-14 lg:float-left pr-15 my-5'
  const sectionCopy = [
    {
      icon: <IconPurple className={iconClasses} />,
      title: 'Whitelisting via a central registry',
    },
    {
      icon: <IconGreen className={iconClasses} />,
      title: 'Peer-discovery protocols',
    },
    {
      icon: <IconOrange className={iconClasses} />,
      title: 'Rich certificates or regulator',
    },
  ]

  return (
    <Wave background="gray" wave="blue" direction="rtl">
      <h2 className="max-w-md mb-6 text-3xl font-bold sm:text-5xl sm:mb-10">
        Synergy with Other Proposals
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:gap-20 sm:text-xl md:grid-cols-2">
        <div>
          <p className="mb-8">
            PayID purposefully does not prescribe a particular approach to
            compliance. Companies can choose to institute any suitable
            compliance policy with PayID.
          </p>
          <p>
            As a result, PayID is compatible with other Travel Rule solutions
            and can work universally across any regulatory regime and payment
            rail.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 px-0 sm:gap-20">
          {sectionCopy.map((copy) => {
            return (
              <div key={copy.title}>
                {copy.icon}
                <h3 className="text-2xl font-bold sm:max-w-sm sm:text-3xl">
                  {copy.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </Wave>
  )
}

export default Synergy

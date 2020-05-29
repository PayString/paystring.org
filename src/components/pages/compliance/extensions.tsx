import React from 'react'

import Wave from '../../common/wave'
import IconCharity from '../../../../content/assets/compliance/extensions-charity.svg'
import IconP2P from '../../../../content/assets/compliance/extensions-p2p.svg'
import IconUtilities from '../../../../content/assets/compliance/extensions-utilities.svg'
import IconGettingPaid from '../../../../content/assets/compliance/extensions-getting-paid.svg'
import IconCommerce from '../../../../content/assets/compliance/extensions-commerce.svg'
import IconInvoicing from '../../../../content/assets/compliance/extensions-invoicing.svg'


const Extensions: React.FC = () => {

	const sectionCopy = [
		{
			icon: <IconCharity />,
			title: "Charity",
			description: "Simpler to donate money to your favorite organizations."

		},
		{
			icon: <IconP2P />,
			title: "P2P Payments",
			description: "Simpler to pay back your friends and family."

		},
		{
			icon: <IconUtilities />,
			title: "Utilities and Rent",
			description: "Simpler to pay your bills."

		},
		{
			icon: <IconGettingPaid />,
			title: "Getting Paid",
			description: "Simpler to earn a living."

		},
		{
			icon: <IconCommerce />,
			title: "Commerce",
			description: "Simpler to get the things you need."

		},
		{
			icon: <IconInvoicing />,
			title: "Invoicing",
			description: "Simpler for your business to get paid for what it makes."
		},
	];

  return (
    <Wave
      background="gray"
      wave="white"
      className="justify-center max-w-screen-xl ml-auto mr-auto"
    >
    	<center><h2 className="max-w-md -mt-16 mb-32 text-5xl font-bold">Other Extensions for PayID</h2></center>
    	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 flex flex-wrap">
    		{sectionCopy.map((copy) => {
    			return (
	    		<div className="p-8 mb-6 flex-grow">
						<div className="mb-10">{copy.icon}</div>
						<h3 className="text-3xl font-bold">{copy.title}</h3>
						<p className="text-lg mt-4">{copy.description}</p>
					</div> )
				})}
    	</div>
    </Wave>
  )
}

export default Extensions
import React from 'react'

import Button from '../components/common/button'
import Layout from '../components/layout'

const Contact: React.FC = () => {
  const bgImgStyle = {
    backgroundImage: 'url(/assets/faq/background.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  }

  return (
    <Layout title="Contact" fixedNav>
      <div
        className="flex items-center justify-center flex-grow text-3xl bg-blue-dark-900"
        style={bgImgStyle}
      >
        <div className="px-6 mx-auto text-white">
          <div className="max-w-4xl pt-16 pb-22 lg:pt-70">
            <h1 className="text-3xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
              Start building the future of open payments
            </h1>
          </div>

          <div className="max-w-lg mx-auto text-3xl font-bold sm:text-4xl pb-22">
            Have questions? Our team is here to help you get started.
          </div>

          <form className="max-w-lg mx-auto mt-10 mb-20 text-lg lg:mb-70">
            <div className="p-4 mx-auto mb-10 text-white border border-2 border-white">
              <select
                className="w-full bg-transparent focus:outline-none "
                placeholder="Role"
              >
                <option>PM</option>
                <option>Engineer</option>
                <option>BD</option>
                <option>Sales</option>
                <option>Operations</option>
                <option>Executive</option>
                <option>Marketing</option>
              </select>
            </div>

            <div className="flex flex-wrap mb-4 -mx-4">
              <div className="w-full px-4 mb-6 md:w-1/2 md:mb-0">
                <input
                  className="block w-full px-4 py-4 mb-3 leading-tight text-white placeholder-white bg-transparent border-2 border-white focus:outline-none"
                  id="first-name"
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                />
                <p className="hidden text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <input
                  className="block w-full px-4 py-4 leading-tight text-white placeholder-white bg-transparent border-2 border-white focus:outline-none"
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                />
              </div>
            </div>

            <div className="mx-auto mb-8 border border-2 border-white">
              <input
                className="w-full p-4 text-white placeholder-white bg-transparent focus:outline-none"
                type="email"
                name="email"
                id="inputEmail"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <div className="mb-10 border border-2 border-white ">
              <input
                className="w-full p-4 text-white placeholder-white bg-transparent focus:outline-none"
                type="text"
                name="message"
                id="inputmessage"
                placeholder="Message"
                aria-label="Message"
              />
            </div>
            <Button
              to="/contact"
              label="Submit"
              variant="primary"
              className=" mt-17 sm:w-auto sm:hidden"
            />
            <Button
              to="/contact"
              label="Submit"
              variant="primary"
              size="lg"
              className="hidden w-full mx-auto mt-12 sm:w-auto sm:inline-block"
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

import React from 'react'

import Layout from '../components/layout'

const NotFoundPage: React.FC = () => {
  const minHeight = {
    minHeight: 'calc(100vh - 9.25rem)',
  }

  return (
    <Layout path="404" title="404" description="This page does not exist!">
      <div
        className="text-white bg-blue-dark-900 vision-bg xl:bg-cover"
        style={minHeight}
      >
        <div className="flex justify-center px-6 lg:px-18">
          <div className="container lg:px-17 lg:mt-0 mt-18">
            <div className="max-w-4xl pt-16 lg:pt-70">
              <h1 className="text-3xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
                Not Found
              </h1>
              <div className="mb-13 sm:text-2xl">
                You just hit a route that doesn&apos;t exist...
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

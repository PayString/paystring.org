import React from 'react'

import Layout from '../components/layout'

const Contact: React.FC = () => {
  const minHeight = {
    minHeight: 'calc(100vh - 9.25rem)',
  }

  return (
    <Layout
      path="conference"
      title="Conference"
      description="Watch the PayString developer conference and learn more about the Open Payments Coalition"
    >
      <div
        className="pb-16 text-white bg-blue-dark-900 vision-bg xl:bg-cover lg:pb-70"
        style={minHeight}
      >
        <div className="flex justify-center px-6 lg:px-18">
          <div className="container flex flex-col pt-16 lg:px-17 lg:mt-0 mt-18 lg:pt-70">
            <div
              className="relative w-full overflow-hidden"
              style={{ paddingTop: '56.25%' }}
            >
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fripplepay%2Fvideos%2F617111655572927%2F&show_text=false&width=734&height=413&appId"
                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full border-none"
                scrolling="no"
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

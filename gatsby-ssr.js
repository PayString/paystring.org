const React = require('react')

const getSegmentKey = () => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'stage':
      return 'fY65tW4oAAvTElIHzrXQ2plf99qDjjAe'
    case 'prod':
      return 'eGcENJL6ghTAXTAdzOrmd4oqxDlRorz1'
    case 'psprod':
      return 'eGcENJL6ghTAXTAdzOrmd4oqxDlRorz1'
    default:
      return '5KojrihxpEBJvAn3u0JXi9hlhzMh5b1M'
  }
}

const getSegmentHost = () => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'stage':
      return 'https://segment.ripplex.io/ana_stg.js'
    case 'prod':
      return 'https://segment.ripplex.io/ana_prod.js'
    case 'psprod':
      return 'https://segment.ripplex.io/ana_prod.js'
    default:
      return 'https://segment.ripplex.io/ana_dev.js'
  }
}

// Wraps every page in a component
exports.onRenderBody = ({ setHeadComponents }) => {
  const host = getSegmentHost()
  const key = getSegmentKey()

  // ensures Segment write key is present
  if (!key || key.length < 10)
    console.error('segment prodKey must be at least 10 char in length')

  if (!host) console.error('Invalid host provided!')

  // Segment's minified snippet (version 4.1.0)
  const snippet = `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="${host}";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";analytics.load('${key}');}}();`

  // only render snippet if write key exists and host exists
  if (key && host) {
    setHeadComponents([
      <script
        key="plugin-segment"
        dangerouslySetInnerHTML={{ __html: snippet }}
      />,
    ])
  }
}

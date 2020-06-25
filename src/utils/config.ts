export const getDocsLocation = (): string => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'dev':
      return 'https://dev.docs.payid.org'
    case 'stage':
      return 'https://stage.docs.payid.org'
    case 'prod':
      return 'https://docs.payid.org'
    default:
      return 'http://localhost:3000'
  }
}

export const getBaseURL = (): string => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'dev':
      return 'https://dev.payid.org'
    case 'stage':
      return 'https://stage.payid.org'
    case 'prod':
      return 'https://payid.org'
    default:
      return 'http://localhost:8000'
  }
}

export const getCharityAppURL = (): string => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'dev':
      return 'https://dev.wallet.xpring.io/donation'
    case 'stage':
      return 'https//stage.xpring.io/portal/donation'
    case 'prod':
      return 'https://xpring.io/portal/donation'
    default:
      return 'http://localhost:4000/donation'
  }
}

export const encodeFormData = (formData: { [s: string]: unknown }): string => {
  const formBody: string[] = []
  Object.entries(formData).forEach(([key, value]) => {
    if (
      typeof value === 'string' ||
      typeof value === 'boolean' ||
      typeof value === 'number'
    ) {
      formBody.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
  })
  return formBody.join('&')
}

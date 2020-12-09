export const getDocsLocation = (): string => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'dev':
      return 'https://dev.docs.paystring.org'
    case 'stage':
      return 'https://stage.docs.paystring.org'
    case 'prod':
      return 'https://docs.paystring.org'
    case 'psprod':
      return 'https://docs.paystring.org'
    default:
      return 'http://localhost:3000'
  }
}

export const getBaseURL = (): string => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'dev':
      return 'https://dev.paystring.org'
    case 'stage':
      return 'https://stage.paystring.org'
    case 'prod':
      return 'https://paystring.org'
    case 'psprod':
      return 'https://paystring.org'
    default:
      return 'http://localhost:8000'
  }
}

export const getCharityAppURL = (): string => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'dev':
      return 'https://dev.wallet.ripplex.io/donation'
    case 'stage':
      return 'https://stage.ripplex.io/portal/donation'
    case 'prod':
      return 'https://ripplex.io/portal/donation'
    case 'psprod':
      return 'https://ripplex.io/portal/donation'
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

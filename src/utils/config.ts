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

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
// src/global.d.ts
declare module '*.svg' {
  const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>
  export default value
}
declare const __PATH_PREFIX__: string

declare interface Window {
  heap?: {
    track: any
  }
}

declare const Sentry: {
  captureException(
    exception: any,
    hint?: EventHint,
    scope?: Scope,
  ): string | undefined
}

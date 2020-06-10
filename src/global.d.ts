/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
// src/global.d.ts
declare module '*.svg' {
  const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>
  export default value
}
declare const __PATH_PREFIX__: string

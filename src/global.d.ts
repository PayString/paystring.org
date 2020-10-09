// src/global.d.ts
declare module '*.svg' {
  const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>
  export default value
}
declare const __PATH_PREFIX__: string

declare interface Window {
  heap?: {
    track: (eventName: string, eventData: unknown) => void
  }
  gtag?: (type: string, eventName: string, eventData: unknown) => void
  analytics: SegmentAnalytics.AnalyticsJS | undefined
}

declare const Sentry: {
  captureException(
    exception: any,
    hint?: import('@sentry/types').EventHint,
    scope?: import('@sentry/types').Scope,
  ): string | undefined
}

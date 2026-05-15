import { useRouter } from '@tanstack/react-router'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react'
import { useEffect, type ReactNode } from 'react'

const key = import.meta.env.VITE_PUBLIC_POSTHOG_KEY
const host = import.meta.env.VITE_PUBLIC_POSTHOG_HOST

function PostHogPageView() {
  const router = useRouter()
  const ph = usePostHog()

  useEffect(() => {
    return router.subscribe('onLoad', ({ toLocation }) => {
      ph.capture('$pageview', { $current_url: window.location.href })
    })
  }, [router, ph])

  return null
}

export function PostHogProvider({ children }: { children: ReactNode }) {
  return (
    <PHProvider
      apiKey={key}
      options={{
        api_host: host,
        capture_pageview: false,
        capture_pageleave: true,
      }}
    >
      <PostHogPageView />
      {children}
    </PHProvider>
  )
}

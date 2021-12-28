import '../styles/_global.scss'

import React, { useEffect } from 'react'

import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/dist/client/router'
import { AppProps } from 'next/dist/shared/lib/router/router'

import Layout from '../components/Layout'
import createEmotionCache from '../mui/createEmotionCache'
import theme from '../mui/theme'
import seoConfig from '../next-seo.config'
import * as ga from '../utils/ga'

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache: any }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <DefaultSeo {...seoConfig} />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
  )
}

export default MyApp

import styles from './index.module.scss'

import React from 'react'

import { Grid, Link, Typography } from '@mui/material'
import Head from 'next/head'

import seoConfig from '../next-seo.config'

const Index = () => {
  return (
    <Grid container className={styles.container} justifyContent="center">
      <Head>
        <title>{seoConfig.openGraph.title}</title>
        <meta name="description" content={seoConfig.openGraph.description} />
      </Head>
      <Grid item xs={10} md={10} lg={8}>
        <Typography
          align="center"
          variant="h3"
          fontWeight="700"
          className={styles.title}
        >
          next-mui5<span className={styles.titleHighlighted}>-boilerplate</span>
        </Typography>
        <Typography
          color="text.secondary"
          align="center"
          variant="subtitle2"
          fontWeight="500"
          className={styles.subtitle}
        >
          Sample code for NextJS + MUI5 + <span className={styles.bold}>CSS Modules</span>. Includes SEO and Google Analytics goodies. For more information and a better walkthrough, you can checkout my blog <Link href="https://jeremy-knit.medium.com/" target="_blank" rel="noreferrer">here</Link>.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Index

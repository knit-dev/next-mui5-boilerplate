import styles from './Layout.module.scss'

import React, { ReactNode, useEffect, useState } from 'react'

import clsx from 'clsx'

const Layout = ({ children }: { children: ReactNode }) => {
  //hack hack for FOUC. Prevents flickering for client only rendered stuff in the interim.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div
      className={clsx(styles.container, !mounted ? styles.hidden : styles.visible)}
    >
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout

import '../styles/partials/body_children.scss'
import '../styles/partials/desktop.scss'
import '../styles/partials/mobile.scss'

import '../styles/global/DEFAULT.scss'
import '../styles/global/GRID.scss'
import '../styles/global/BANNERS.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

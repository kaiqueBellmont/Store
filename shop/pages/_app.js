import '../styles/globals.scss'
import { SessionProvider } from "next-auth/react"


import { Provider } from 'react-redux'
import store from '../store/index'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Head from 'next/head'
let persistor = persistStore(store);
function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Shoppay</title>
        <meta name="description" content="Shoppay-online shopping for all of your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>

        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </SessionProvider>

    </>
  )
}

export default App;
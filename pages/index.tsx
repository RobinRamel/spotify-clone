import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="app bg-black h-screen overflow-hidden">
      <Head>
        <title>Spothifi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main */}
      <div className="main">
        {/* sidebar */}
        <Sidebar />

        {/* display */}
        <main></main>
      </div>

      {/* player */}
      <div className="player">

      </div>

      
    </div>
  )
}

export default Home

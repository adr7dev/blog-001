import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog 001</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center">
        <div className="my-4">
          <Link href="/aria1">
            <a className="inline-flex items-center justify-center h-10 px-2 bg-purple-500 text-white rounded-lg">
              Aria1
            </a>
          </Link>
        </div>
        <div>
          <Link href="/aria2">
            <a className="inline-flex items-center justify-center h-10 px-2 bg-purple-500 text-white rounded-lg">
              Aria2
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import classNames from 'classnames'
import { usePrevious } from '@/hooks/usePrevious'

const Aria: NextPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const previousIsDialogOpen = usePrevious(isDialogOpen)

  const handleDialogOpen = () => {
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  useEffect(() => {
    if (isDialogOpen) {
      document.getElementById('dialog-close')?.focus()
    } else {
      if (previousIsDialogOpen) {
        document.getElementById('dialog-trigger')?.focus()
      }
    }
  }, [isDialogOpen])

  return (
    <div>
      <Head>
        <title>Blog 001: ARIA demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-16 mx-auto">
          <div className="text-center mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Sed quia non numquam
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Eius modi tempora
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Abore et dolore magnam
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Voluptate velit esse
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Vel illum qui dolorem
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span className="title-font font-medium">
                  Nihil molestiae consequatur
                </span>
              </div>
            </div>
          </div>
          <button
            className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-6 hover:bg-green-600 outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 rounded text-lg font-medium"
            id="dialog-trigger"
            onClick={handleDialogOpen}
          >
            Otwórz przystosowany modal
          </button>
        </div>
      </section>

      <div
        className={classNames(
          'fixed top-0 left-0 h-full w-full flex items-center justify-center',
          { invisible: !isDialogOpen }
        )}
      >
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-80"></div>
        <div
          className="z-10 w-3/4 max-w-3xl -mt-40 p-4 bg-white rounded-lg"
          id="dialog"
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-desc"
          tabIndex={0}
        >
          <h2 className="text-xl font-bold" id="dialog-title">
            Modal testowy
          </h2>
          <p className="mt-4 text-base" id="dialog-desc">
            Dostępność to ważny aspekt przy projektowaniu stron internetowych.
          </p>
          <button
            className="flex items-center justify-center h-12 ml-auto mt-6 px-4 bg-purple-500 hover:bg-purple-600 outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 rounded text-white text-base font-medium"
            id="dialog-close"
            onClick={handleDialogClose}
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  )
}

export default Aria

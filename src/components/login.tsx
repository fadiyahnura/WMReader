'use client'

import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <section className="bg-white text-center text-blue-600 flex items-center justify-center rounded-lg shadow-md">
          <div className="w-full max-w-md">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-green-600 md:text-2xl dark:text-white">
                WMReader
              </h1>
              <form className=" space-y-4 md:space-y-6" action="#">
                <div className='text-left'>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Your Username</label>
                  <input type="username" name="username" id="username" className="bg-blue-50 border border-blue-300 text-blue-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username"  />
                </div>
                <div className='text-left'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-blue-50 border border-blue-300 text-blue-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-green-300 rounded bg-green-50 focus:ring-3 focus:ring-primary-300 dark:bg-blue-700 dark:border-green-600 dark:focus:ring-primary-600 dark:ring-offset-green-800"  />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-green-500 dark:text-green-300">Remember me</label>
                    </div>
                  </div>
                  
                </div>
                <button type="submit" className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* <ToastContainer /> */}
    </>
  )
}

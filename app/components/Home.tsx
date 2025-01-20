
"use client"

import Head from 'next/head';

import Connector from './Connector'

export default function Home() {
  

  return (
    <>
      <Head>
        <title> WEBCREST | DIGITAL FINANCE VISUALIZER</title>
      
      </Head>

     

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-800 to-pink-800 text-center p-8"
      >
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 animate-fade">
           TRACK YOUR SPENDINGS 
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300">
           We provide You Innovative Solution for Financial Management
          </p>
          <div
            className="mt-8  inline-block bg-slate-200 lg:w-[15vw] w-[40vw] px-8 py-4  h-[18vh] text-center from-indigo-500 to-pink-500 text-slate-600 text-lg font-semibold rounded-md hover:shadow-lg"
          >
           <Connector/>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
            Why Choose Nova
          </h2>
          <p className="mt-4 text-gray-400">
            Discover the features that set us apart from the competition.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition"
              data-aos="fade-up"
            >
              <div className="text-4xl mb-4 text-indigo-500">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">
                Experience blazing fast performance with our optimized platform.
              </p>
            </div>

            <div
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-4xl mb-4 text-indigo-500">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-400">
                Bank-grade encryption and advanced security protocols.
              </p>
            </div>

            <div
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-4xl mb-4 text-indigo-500">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-400">
                Harness the power of innovation to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
}

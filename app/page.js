"use client"
import Typed from 'typed.js';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React,{useRef,useEffect} from 'react';
import Link from 'next/link';
export default function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['coding','webdevelopment','documentation','free access','start learning'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);




  return (
  <main>
          <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free Source codes</span> for Webdevelopers <br className="hidden lg:block" /> feel free to use <span className="font-semibold underline decoration-primary"><span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source documentation for Webdevelopment <br className="hidden lg:block" /> boost your development with pk documentation
          </p>
          {/* <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">

             
            </form>
          </div> */}
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="/bg.svg" alt="tailwind css components" className="h-60 max-w-md mx-auto" />
        </div>
      </section>



      {/* <section>
  <div className="bg-gray-100 dark:bg-gray-900 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Pricing</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Choose the plan that’s right for you
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
          Simple and transparent pricing. No hidden fees.
        </p>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-3 sm:grid-cols-1 justify-items-center">
        {/* Basic Plan */}
        {/* <div className="max-w-md w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Basic</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">For individuals just getting started.</p>
          <div className="mt-6">
            <span className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">$10</span>
            <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
          </div>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 1</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 2</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 3</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 4</span>
            </li>
          </ul>
          <div className="mt-8 items-center justify-center flex">
            <Button className="items-center justify-center flex">Get Started</Button>
          </div>
        </div>

        {/* Pro Plan */}
        {/* <div className="max-w-md w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 relative border-4 border-purple-500 text-center">
          <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">Best Recommended</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Pro</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">For professionals who need more features.</p>
          <div className="mt-6">
            <span className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">$30</span>
            <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
          </div>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 1</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 2</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 3</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 4</span>
            </li>
          </ul>
          <div className="mt-8 items-center justify-center flex">
            <Button className="items-center justify-center flex">Get Started</Button>
          </div>
        </div> */}

        {/* Enterprise Plan */}
        {/* <div className="max-w-md w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Enterprise</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">For large organizations with advanced needs.</p>
          <div className="mt-6">
            <span className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">$100</span>
            <span className="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
          </div>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 1</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 2</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 3</span>
            </li>
            <li className="flex items-center justify-center">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700 dark:text-gray-300">Feature 4</span>
            </li>
          </ul>
          <div className="mt-8 items-center justify-center flex">
            <Button className="items-center justify-center flex">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

    <section className="py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase animate-fadeIn">
        Choose your path
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl animate-fadeIn">
        Think before you loop
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto animate-fadeIn">
        Best career advice: it's too late if you don't start now
      </p>
    </div>
    <div className="mt-10 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center">
      <div className="max-w-xs w-full shadow-xl border border-gray-500 hover:shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 animate-slideIn hover:skew-y-3">
        <img
          src="web.svg"
          alt="Service 1"
          className="w-full h-48 object-contain rounded-t-lg"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
          Web Development
        </h3>
        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Start with Web Development and build your fundamentals strong
        </p>
        <Link href='/blog'>
          <Button className="my-2" variant="outline" href="/">
            Read more
          </Button>
        </Link>
      </div>
      <div className="max-w-xs w-full shadow-xl border border-gray-500 hover:shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 animate-slideIn hover:skew-y-3">
        <img
          src="python.svg"
          alt="Service 2"
          className="w-full h-48 object-contain rounded-t-lg"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
          Python
        </h3>
        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Python is advised if you have no coding knowledge
        </p>
        <Link href='https://www.python.org/' target='_blank'>
          <Button className="my-2" variant="outline" href="/">
            Read more
          </Button>
        </Link>
      </div>
      <div className="max-w-xs w-full shadow-xl border border-gray-500 hover:shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 animate-slideIn hover:skew-y-3">
        <img
          src="js.svg"
          alt="Service 3"
          className="w-full h-48 object-contain rounded-t-lg"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
          JavaScript
        </h3>
        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Learn JavaScript for your web development (highly recommended)
        </p>
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>
          <Button className="my-2" variant="outline" href="/">
            Read more
          </Button>
        </a>
      </div>
    </div>
  </div>
</section>


  </main>
   
  );
}

    










 

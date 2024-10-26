// components/Navbar.js
"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ModeToggle } from './theme-btn';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [progress, setProgress] = useState(0)
    const pathname= usePathname()
    useEffect(() => {
      setProgress(30)

      setTimeout(() => {
        setProgress(70)
      }, 100);
      setTimeout(() => {
        setProgress(100)
      }, 300);
    
    }, [pathname])
    
    useEffect(() => {
      setTimeout(() => {
        setTimeout(0)
      },800);
    }, [])
    
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const toggleSheet = () => {
        setIsSheetOpen(!isSheetOpen);
    };

    const closeSheet = () => {
        setIsSheetOpen(false);
    };

    const [isClient, setIsClient] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <nav className="z-10 bg-background/50 sticky top-0 backdrop-blur border-b bg-grey-800 p-3">
            <LoadingBar
        color='#8f50d3'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <div className="text-2xl font-bold justify-center flex items-center">
                        Pavan
                    </div>
                </Link>
                <div className="hidden md:flex w-full lg:flex lg:items-center lg:w-auto mx-3 overflow-hidden">
                    <div className="text-sm lg:flex-grow items-center flex gap-10">
                        <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:scale-110 transition-transform duration-300 ">
                            Home
                        </Link>
                        <Link href="/blog" className="block mt-4 lg:inline-block lg:mt-0 hover:scale-110 transition-transform duration-300">
                            Docs
                        </Link>
                        <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 hover:scale-110 transition-transform duration-300">
                            About
                        </Link>
                        <div className='container flex items-center gap-4'>
                            {/* <div className='gap-6'>
                            <Button className="mx-1 border-2 border-gray-600" variant="outline">Logins</Button>
                            <Button className="mx-1 border-2 border-gray-600" variant="outline">Signup</Button>
                            </div> */}
                            <ModeToggle/>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                            <span className='mx-3'>
                               <ModeToggle/>
                            </span>
                    {isClient && (
                        <Sheet  open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                            <SheetTrigger>
                                {/* <button onClick={toggleMenu} className="focus:outline-none"> */}
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h7"></path>
                                    </svg>
                                {/* </button> */}
                            </SheetTrigger>

                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className='font-bold items-center'>Pavan</SheetTitle>
                                    <SheetDescription>
                                        <div className='gap-3'>
                                    <div className="text-sm items-center flex-col flex gap-3">
                        <Link href="/" onClick={closeSheet} className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200 mr-4">
                            Home
                        </Link>
                        <Link href="/blog" onClick={closeSheet} className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200 mr-4">
                            Documentation
                        </Link>
                        <Link href="/about" onClick={closeSheet} className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200">
                            About
                        </Link>
                        </div>
                        <div className='container gap-3 my-3'>
                            <Button className="mx-1 text-xs border-2" onClick={closeSheet} variant="outline">Login</Button>
                            <Button className="mx-1 text-xs border-2" onClick={closeSheet} variant="outline">Signup</Button>
                        </div>
                        </div>
                                        
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                        
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



'use client';

import {BsDiscord, BsYoutube} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {SiTiktok} from 'react-icons/si'

import { Menu } from '@headlessui/react';
import { Disclosure } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'

export default function Home() {
  return (
    <div className="container mx-auto px-10">
      
      {/* Navigation */}
      <nav id="nav" className="sticky top-0 z-10 flex flex-col sm:flex-row sm:justify-between sm:items-center p-10 justify-between items-center bg-gray-50">
          <div className="flex items-center sm:justify-start"><a className="text-2xl font-bold text-slate-700" href="#hero">Ioan</a>
          </div>
          <div className="flex sm:justify-end space-x-4"><a href="#hero" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-200 transition-colors duration-200 cursor-pointer">Home</a>
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-200 transition-colors duration-200 cursor-pointer">
                    About
                  </Menu.Button>
                  {open && (
                    <Menu.Items className="absolute right-0 mt-2 py-2 w-40 bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg focus:outline-none">
                      <Menu.Item><a href="https://discord.gg/aTAg953wJH" className="block px-4 py-2 text-sm text-gray-900">Discord</a></Menu.Item>
                      <Menu.Item><a href="https://www.youtube.com/channel/UCmpwEwTldiMCSrXLvRxWIyQ" className="block px-4 py-2 text-sm text-gray-900">YouTube</a></Menu.Item>
                      <Menu.Item><a href="https://twitter.com/IoanHumphreys2" className="block px-4 py-2 text-sm text-gray-900">Twitter</a></Menu.Item>
                      <Menu.Item><a href="https://www.patreon.com/user/membership?u=70550621" className="block px-4 py-2 text-sm text-gray-900">Patreon</a></Menu.Item>
                    </Menu.Items>
                  )}
                </>
              )}
            </Menu>
          <a href="#skills" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-200 transition-colors duration-200 cursor-pointer">Knowledge</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center mt-64">

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-gray-900 text-center">Hey, I'm Ioan</h1>
        <p className="text-gray-700 text-lg mt-5 sm:text-lg md:text-md lg:text-xl text-center max-w-md md:max-w-xl lg:max-w-xl">A 16-year-old experienced developer from Wales, specializing in both front-end and back-end development.</p>
        
        {/* Buttons */}
        <div className="flex mt-6 space-x-4">
        <a href="#skills">
          <button className="rounded-md px-4 py-2 bg-nav-purple text-white font-medium hover:bg-opacity-95 transition-all transform hover:-translate-y-1">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block ml-2 mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </button>
          </a>
          <a href="mailto:ioanhumphreysbusiness@yahoo.com" target="_blank" rel="noopener noreferrer">
            <button className="rounded-md px-4 py-2 border border-nav-purple text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 transition-all transform hover:-translate-y-1">
              Let's Talk
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block ml-2 mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </button>
          </a>
        </div>
        {/* Scroll Down Indicator */}
        <div className="mt-6 flex flex-col items-center">
          <p className="text-gray-600 text-sm mb-2">Scroll down for more</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="animate-bounce w-6 h-6 text-slate-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 mt-96 flex flex-col items-center sm:flex-row sm:items-start">
      <div className="lg:max-w-2xl flex-grow">
        <div className="max-w-md text-gray-700 mx-auto text-center md:text-center md:max-w-2xl lg:text-left">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">About Me 👋</h2>
          <p className="text-lg">
            Hello! I'm Ioan, a 16-year-old developer with a strong focus on front-end development and UI/UX design.
            Over the last four years, I've been freelancing, creating Websites, and designing Graphical User Interfaces for large Game Studios.
            My goal is to bring together design and technology to create seamless and captivating user experiences.
          </p>
        </div>
      </div>
    </section>

      {/* Resume Section */}
      <section className="mt-20 sm:mt-80 mb-16 sm:mb-80 flex flex-col sm:flex-row sm:items-start justify-end">
        <div className="flex-grow order-last sm:order-first sm:mt-0 sm:ml-96 md:ml-20 lg:ml-40">
          <div className="max-w-md text-gray-700 mx-auto text-center md:text-center md:max-w-2xl lg:text-left">
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Resume 💼</h2>
            <p className="text-lg">
              Please find my resume attached below, where you can explore my qualifications and learn more about me.
            </p>
            {/* Resume Download Button */}
            <div className="mt-8 transition-all transform hover:-translate-y-1">
              <a href="/files/CV.pdf" className="rounded-md px-4 py-3 bg-nav-purple text-white font-medium hover:bg-opacity-95">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2 -mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-40 mb-40">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-10">Skills 🚀</h1>
          <div className="flex flex-wrap justify-center items-start md:space-x-1 lg:space-x-10 md:space-y-5 lg:space-y-0">

            {/* Front-End */}
            <div className="w-full md:w-1/2 lg:w-1/4 bg-white border border-gray-300 rounded-2xl p-5">
              <h1 className="text-center mb-5">Front-End Development</h1>
              <div className="flex flex-col space-y-5">

                {/* HTML */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>

                  <div>
                    <h3 className="text-lg font-medium">HTML</h3>
                    <p className="text-sm">Advanced</p>
                  </div>
                </div>

                {/* CSS */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">CSS</h3>
                    <p className="text-sm">Advanced</p>
                  </div>
                </div>

                {/* JavaScript */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">JavaScript</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </div>
                
                {/* TailwindCSS */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Tailwind</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Back-End */}
            <div className="w-full md:w-1/2 lg:w-1/4 bg-white border border-gray-300 rounded-2xl p-5 mt-5 md:mt-0">
            <h1 className="text-center mb-5">Back-End Development</h1>
            <div className="flex flex-col space-y-5">

                {/* Node.js */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Node.js</h3>
                    <p className="text-sm">Basic</p>
                  </div>
                </div>

                {/* Discord.js */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Discord.js</h3>
                    <p className="text-sm">Advanced</p>
                  </div>
                </div>

                {/* Java */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Java</h3>
                    <p className="text-sm">Basic</p>
                  </div>
                </div>

                {/* Lua */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Lua</h3>
                    <p className="text-sm">Advanced</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Tools */}
            <div className="w-full md:w-1/2 lg:w-1/4 bg-white border border-gray-300 rounded-2xl p-5 mt-5 md:mt-0">
            <h1 className="text-center mb-5">Design Tools</h1>
            <div className="flex flex-col space-y-5">

                {/* Figma */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Figma</h3>
                    <p className="text-sm">Advanced</p>
                  </div>
                </div>

                {/* Photoshop */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Photoshop</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </div>

                {/* Midjourney */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Midjourney AI</h3>
                    <p className="text-sm">Advanced</p>
                  </div>
                </div>

                {/* Illustrator */}
                <div className="flex items-center bg-panels-gray p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium">Illustrator</h3>
                    <p className="text-sm">Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="mt-40 mb-40">
        {/* Socials */}
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-10">Milestones 🏆</h1>
          <div className="flex flex-wrap justify-center">

            {/* YouTube */}
            <div className="bg-white border border-gray-300 rounded-2xl p-5 mx-3 my-3 w-full sm:w-1/2 md:w-full lg:w-1/4">
              <div className="flex flex-col items-center mb-3">
                <AiFillYoutube size="20" color="black" />
                <h1 className="text-center mt-2 font-medium">YouTube</h1>
              </div>
              <div className="flex flex-row items-center justify-center bg-panels-gray p-3 rounded-lg">
                <p className="text-sm text-center">220 Subscribers • 25k Views</p>
              </div>
            </div>

            {/* Discord */}
            <div className="bg-white border border-gray-300 rounded-2xl p-5 mx-3 my-3 w-full sm:w-1/2 md:w-full lg:w-1/4">
              <div className="flex flex-col items-center mb-3">
                <BsDiscord size="20" color="black" />
                <h1 className="text-center mt-2 font-medium">Discord</h1>
              </div>
              <div className="flex flex-row items-center justify-center bg-panels-gray p-3 rounded-lg">
                <p className="text-sm text-center">100+ Members • 25+ Clients</p>
              </div>
            </div>

            {/* TikTok */}
            <div className="bg-white border border-gray-300 rounded-2xl p-5 mx-3 my-3 w-full sm:w-1/2 md:w-full lg:w-1/4">
              <div className="flex flex-col items-center mb-3">
                <SiTiktok size="20" color="black" />
                <h1 className="text-center mt-2 font-medium">TikTok</h1>
              </div>
              <div className="flex flex-row items-center justify-center bg-panels-gray p-3 rounded-lg">
                <p className="text-sm text-center">850k Views • 76k Likes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">

            {/* Vince */}
            <div className="bg-white border border-gray-300 rounded-2xl p-5 mx-3 my-3 w-full sm:w-1/2 md:w-full lg:w-1/4">
              <h1 className="text-center font-medium">Vince<br></br><p className="text-sm font-bold mt-1">Developer</p></h1>
              <div className="flex items-center justify-center mt-2">
                <div className="w-20 h-20 flex items-center justify-center mt-9">
                  <img src="/images/vince.png" alt="Profile Picture" className="w-13 h-13 rounded-full mb-10" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center bg-panels-gray p-3 rounded-lg mt-3">
                <p className="text-sm text-center mb-5">
                Very productive, Fast and on point with communication, design and quality.
                </p>
              </div>
              <p className="bg-panels-gray rounded-lg p-2 text-sm text-center mt-2 font-medium">10/10</p>
            </div>

             {/* Toothpaste */}
             <div className="bg-white border border-gray-300 rounded-2xl p-5 mx-3 my-3 w-full sm:w-1/2 md:w-full lg:w-1/4">
              <h1 className="text-center font-medium">Toothpaste<br></br><p className="text-sm font-bold mt-1">400k Subscribers</p></h1>
              <div className="flex items-center justify-center mt-8">
                <div className="w-20 h-20 flex items-center justify-center mt-3">
                  <img src="/images/toothpaste.png" alt="Profile Picture" className="w-13 h-13 rounded-full mb-10" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center bg-panels-gray p-3 rounded-lg mt-3">
                <p className="text-sm text-center mb-5">
                Fixed my a problem I had with my UI in no time at all. Highly recommend.
                </p>
              </div>
              <p className="bg-panels-gray rounded-lg p-2 text-sm text-center mt-2 font-medium">10/10</p>
            </div>

             {/* Junior */}
             <div className="bg-white border border-gray-300 rounded-2xl p-5 mx-3 my-3 w-full sm:w-1/2 md:w-full lg:w-1/4">
              <h1 className="text-center font-medium">Junior<br></br><p className="text-sm font-bold mt-1">Developer</p></h1>
              <div className="flex items-center justify-center mt-8">
                <div className="w-20 h-20 flex items-center justify-center mt-3">
                  <img src="/images/junior.png" alt="Profile Picture" className="w-13 h-13 rounded-full mb-10" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center bg-panels-gray p-3 rounded-lg mt-3">
                <p className="text-sm text-center">
                Extremely fast, did everything I said, amazing results. If I ever need more UI I will buy more from him again!
                </p>
              </div>
              <p className="bg-panels-gray rounded-lg p-2 text-sm text-center mt-2 font-medium">10/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="w-full px-4 pt-16">
          <h1 className="text-center mb-5 text-2xl font-bold">FAQ 🤔</h1>
          <div className="mx-auto w-full max-w-5xl mb-5 rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-3 lg:py-4 py-3 text-left text-md font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>How can I place an order?</span>
                    <BsChevronDown
                      className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-md ">
                    If you are interested in placing an order, you can start by joining our Discord server.
                    Simply click on the following link <a href="https://discord.gg/aTAg953wJH" className="text-purple-500">discord server</a>.
                    Once you have completed the joining process, you will be able to access the <a href="https://discord.com/channels/1037945790271848529/1037957141975281704" className="text-purple-500">order channel</a> after successfully verifying your account. From there, you can easily place your order by following the instructions provided in the order channel.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mx-auto w-full max-w-5xl mb-5 rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-3 lg:py-4 py-3 text-left text-md font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>Is there a refund policy?</span>
                    <BsChevronDown
                      className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-md">
                    Unfortunately, refunds are not available for orders. However, I am dedicated to ensuring customer satisfaction
                    and addressing any concerns or issues that may arise. I will work closely with you to resolve the situation and make
                    sure you are happy with the outcome. Your satisfaction is my top priority, and I am committed to providing excellent
                    support until you are fully satisfied with your experience.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mx-auto w-full max-w-5xl mb-5 rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-3 lg:py-4 py-3 text-left text-md font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>How can I contact you?</span>
                    <BsChevronDown
                      className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-md">
                    You can reach me by email at the following address <a href="mailto:ioanhumphreysbusiness@yahoo.com" className="text-purple-500">ioanhumphreysbusiness@yahoo.com</a>. Please feel free to contact me with any questions, concerns, or inquiries you may have. I will do my best to respond promptly and provide the assistance you need. I look forward to hearing from you!
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="mx-auto w-full max-w-5xl mb-5 rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-3 lg:py-4 py-3 text-left text-md font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                    <span>What payment methods do you accept?</span>
                    <BsChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-md">
                    Regarding Roblox UI projects, I accept payments through PayPal, CashApp, and Robux.
                    However, for web projects and Discord.js bot projects, I only accept payments via PayPal
                    and CashApp. If you have any further questions or need clarification, please feel free to reach out.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-10">
        <p className="text-sm text-center mt-2">Designed and Created by Ioan</p>
        <p className="text-sm text-center mt-2">© 2023 All rights reserved</p>
        <div className="container mx-auto text-gray-700 text-center flex justify-center items-center space-x-4 mt-5">
          <a href="https://discord.gg/aTAg953wJH" target="_blank" rel="noopener noreferrer" className="transition-all transform hover:-translate-y-2"><BsDiscord size="20"/></a>
          <a href="https://www.youtube.com/@razlar2080/videos" target="_blank" rel="noopener noreferrer" className="transition-all transform hover:-translate-y-2"><AiFillYoutube size="20"/></a>
          <a href="https://www.tiktok.com/@ioan_humphreys" target="_blank" rel="noopener noreferrer" className="transition-all transform hover:-translate-y-2"><SiTiktok size="20"/></a>
        </div>
      </footer>
    </div>
  );
}
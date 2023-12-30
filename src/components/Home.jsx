import React, { useState } from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaLinkedin, FaSquareGithub, FaXTwitter } from "react-icons/fa6";
import code from "../assets/code.png";
import consulting from "../assets/consulting.png";
import design from "../assets/design.png";
import image from "../assets/image.jpg";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";

function Home() {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className={darkMode ? "dark" : ""}>
            <head>
                <title>Ghulam Akbar Portfolio</title>
            </head>

            <main className='bg-white px-10 md:px-20 lg:px-4 dark:bg-gray-900'>
                <section className='min-h-screen'>
                    <nav className='py-10 mb-12 flex justify-between dark:text-white'>
                        <h1 className='text-xl font-roboto'>Ghulam Akbar</h1>
                        <ul className='flex items-center '>
                            <li>
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' />

                            </li>
                            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ' href='#'>Resume</a></li>
                        </ul>
                    </nav>
                    <div className='text-center p-10'>
                        <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>Ghulam Akbar</h2>
                        <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>Expert MERN Stack Developer</h3>
                        <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto'>
                            Hi there, my name is Ghulam Akbar, and I am a student studying computer systems engineering.
                            I have five years of experience as a master full stack developer,
                            and I have worked on numerous websites including e-commerce and educational ones.
                        </p>
                    </div>
                    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
                        <FaXTwitter />
                        <FaLinkedin />
                        <FaSquareGithub />
                    </div>
                    <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-96 h-96 mt-20 md:w-96 md:h-96 '>
                        <img src={image} />
                    </div>

                </section>

                <section>
                    <div > 
                        <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
                    </div>
                    <div className='lg:flex gap-10'>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
  <img src={design} className='mx-auto' width={100} height={100} />
  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
  <p className='py-2 text-justify'>
    Crafted with precision, my designs are elegant and tailored to meet your specific needs, adhering to core design principles.
  </p>
  <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
  <p className="text-gray-800 py-1">Figma</p>
  <p className="text-gray-800 py-1">Photoshop</p>
  <p className="text-gray-800 py-1">Illustrator</p>
  <p className="text-gray-800 py-1">Sketch</p>
  <p className="text-gray-800 py-1">InDesign</p>
</div>

<div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
  <img src={consulting} className='mx-auto' width={100} height={100} />
  <h3 className='text-lg font-medium pt-8 pb-2'>Strategic Consulting</h3>
  <p className='py-2 text-justify'>
    Offering strategic consulting services to guide your projects, I provide insights that align with your business goals and vision.
  </p>
  <h4 className='py-4 text-teal-600'>Consultation Areas</h4>
  <p className="text-gray-800 py-1">Business Strategy</p>
  <p className="text-gray-800 py-1">Project Planning</p>
  <p className="text-gray-800 py-1">Market Analysis</p>
  <p className="text-gray-800 py-1">Risk Management</p>
  <p className="text-gray-800 py-1">Financial Planning</p>
</div>
<div className='text-center shadow-lg p-10 dark:bg-white rounded-xl flex-1 my-10'>
  <img src={code} className='mx-auto' width={100} height={100} />
  <h3 className='text-lg font-medium pt-8 pb-2'>Efficient Coding</h3>
  <p className='py-2 text-justify'>
  Transforming ideas into functional code, I am dedicated to writing maintainable code that powers your digital solutions.
  </p>
  <h4 className='py-4 text-teal-600'>Programming Languages</h4>
  <p className="text-gray-800 py-1">React.js</p>
  <p className="text-gray-800 py-1">Express.js</p>
  <p className="text-gray-800 py-1">JavaScript</p>
  <p className="text-gray-800 py-1">MongoDb</p>
  <p className="text-gray-800 py-1">Node.js</p>

</div>
                    </div>
                </section>

                <section>
                    <div className='text-justify'>
                        <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                        Take a visual journey through my diverse portfolio,
                        a testament to my role as a freelance designer and developer.
                        From collaborative ventures with agencies to sharing expertise with 
                        startups, my portfolio reflects a spectrum of digital products crafted 
                        for both business and consumer needs.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                        I take pride in offering a wide array of services, encompassing meticulous
                        brand design, innovative programming solutions, and immersive teaching experiences.
                        Explore the varied projects that showcase my commitment to delivering excellence
                        and pushing the boundaries of creativity.
                        </p>
                    </div>
                    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                        <div className='basis-1/3 flex-1'>
                            <div> <img src={web1} className='rounded-lg object-cover '
                                width={"100%"}
                                height={"100%"}
                                layout="responsive" />
                            </div>
                        </div>
                        <div className='basis-1/3 flex-1'>
                            <div> <img src={web2} className='rounded-lg object-cover '
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            /></div>
                        </div>
                        <div className='basis-1/3 flex-1'>
                            <div> <img src={web3} className='rounded-lg object-cover '
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            /></div>
                        </div>
                        <div className='basis-1/3 flex-1'>
                            <div> <img src={web4} className='rounded-lg object-cover '
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            /></div>
                        </div>
                        <div className='basis-1/3 flex-1'>
                            <div> <img src={web5} className='rounded-lg object-cover '
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            /></div>
                        </div>
                        <div className='basis-1/3 flex-1'>
                            <img src={web6} className='rounded-lg object-cover '
                                
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
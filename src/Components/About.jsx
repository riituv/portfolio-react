import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const About = () => {
    return (
        <div name='about' className='w-full md:h-screen bg-gradient-to-t
        from-black to-gray-800 text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col
            justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4
                 border-gray-500'>About
                    </p>
                </div>

                <p className='text-xl mt-16 '>
                    Hello, I&apos;m Ritu, a final year Computer Science and Engineering
                    student. Motivated and enthusiastic web developer seeking to launch a career
                    in the field. I have a strong proficiency in HTML, CSS, JavaScript. I am
                    also familiar with React.js framework. During academic studies, I honed my skills
                    in frond-end development through various projects.
                </p>
                <br />
                <p className='text-xl'>
                    I am also learning Blockchain Technology. I also have basic understanding of
                    developing smart contracts and decentralized apps (DApps) using Solidity.
                    My core skills include problem-solving, DSA, and C++ programming.
                    A fast learner and eager to expand my knowledge. I am comfortable working in a
                    collaborative environment, where I can contribute my ideas and learn from experienced professionals.
                </p>
                <br />
                <p className='text-xl'>
                    Apart from this, I love painting, singing & travelling. I find that these activities not
                    only recharge my creative energy but also provide valuable insights that I can apply to my
                    work.
                </p>
                <br />
                
                <a href='/riitu_resume.pdf' download={true} className='text-white w-fit px-6 py-3 my-2 flex items-center
                rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer
                hover:scale-105 duration-200'>
                        Resume
                        <span><BsFillPersonLinesFill size={20} className='ml-2' />
                    </span>
                </a>
                
            </div>
        </div>
    )
}

export default About
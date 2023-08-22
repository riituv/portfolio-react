import React from 'react'
import project from '../Assets/project-1.jpg'
import resumebuilder from '../Assets/resume-builder.png'

const Projects = () => {

    // list of projects 

    const projects = [
        {
            id: 1,
            src: resumebuilder,
            href: 'https://github.com/riituv/resume-builder'
        },
        {
            id: 2,
            src: project,
            href: 'https://github.com/riituv'
        },
        {
            id: 3,
            src: project,
            href: 'https://github.com/riituv'
        },
        {
            id: 4,
            src: project,
            href: 'https://github.com/riituv'
        },
        {
            id: 5,
            src: project,
            href: 'https://github.com/riituv'
        },
        {
            id: 6,
            src: project,
            href: 'https://github.com/riituv'
        },
    ]

    return (
        <div name='projects' className='w-full md:min-h-screen h-auto bg-gradient-to-b
         from-black to-gray-800 text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col
            justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4
                    border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my work here.</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-0'>
                    {
                        projects.map(({ id, src, href }) => (

                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='project-img'
                                    className='rounded-md hover:scale-105 duration-200 w-full h-3/4' />

                                <div className='flex items-end justify-end w-full'>
                
                            <a className=' text-l p-3  m-2 duration-200
                            hover:scale-105' href={href} target='_blank' rel='noreferrer'>Code</a>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Projects
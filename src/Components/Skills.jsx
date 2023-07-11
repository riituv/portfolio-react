import React from 'react'
import html from '../Assets/html.png'
import javascript from '../Assets/javascript.png'
import css from '../Assets/css.png'
import reactjs from '../Assets/react.png'
import nodejs from '../Assets/node.png'
import tailwind from '../Assets/tailwind.png'
import python from '../Assets/python.png'
import solidity from '../Assets/solidity.png'


const Skills = () => {
    const skills=[
        {
            id:1,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src:nodejs,
            title: 'Node',
            style: 'shadow-green-500'
        },
        {
            id:5,
            src:reactjs,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id:6,
            src:tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id:7,
            src:python,
            title: 'Python',
            style: 'shadow-yellow-400'
        },
        {
            id:8,
            src:solidity,
            title: 'Solidity',
            style: 'shadow-gray-400'
        },
    ];
    
    return (
        <div name='skills' className='w-full md:h-screen bg-gradient-to-t
         from-black to-gray-800'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col
            justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold inline border-b-4
                    border-gray-500 p-2'>Skills</p>
                    <p className='py-6'>These are the technologies I have worked with.</p>

                </div>

                <div className='grid sm:grid-cols-3 grid-cols-2 gap-8
                px-12 sm:px-0 w-full text-center py-8 '>
                    {
                        skills.map(({ id, src, title, style }) => (

                            <div key={id} className={`shadow-md bg-gray-800 py-2 rounded-lg ${style}`}>
                                <img src={src} alt='skill-img'
                                    className='rounded-md hover:scale-105 w-20 h-20 mx-auto duration-200' />

                                <div className='flex items-center justify-center mt-2'>
                                    <p>{title}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Skills
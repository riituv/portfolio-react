import React from 'react'
import photo from '../Assets/profile-img.png'
import { GrLinkedin, GrGithub, GrMail } from 'react-icons/gr'
const Home = () => {

    //links for buttons
    const links = [
        {
            id: 1,
            child: (
                <GrLinkedin size={30} />
            ),
            href: 'https://www.linkedin.com/in/riituv/'
        },
        {
            id: 2,
            child: (
                <GrGithub size={30} />
            ),
            href: 'https://github.com/riituv'
        },
        {
            id: 3,
            child: (
                <GrMail size={30} />
            ),
            href: 'mailto:riitu.vyas@gmail.com'
        }
    ]

    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b
         from-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col 
            items-center justify-center h-full p-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>

                    <h2 className='text-4xl sm:text-7xl font-bold
                    text-white'>
                        I&apos;m Ritu
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        A final year Computer Science and Engineering student. Ready to launch
                        a carrer in Front-end development. I love to work with React & Tailwind.
                        I am also trying to explore Blockchain Technology.
                    </p>

                    <div>
                        <ul className='flex'>
                            {links.map(({ id, child, href }) => (
                                <li key={id} className='px-6 py-3 my-2 items-center rounded-md 
                                cursor-pointer text-white hover:scale-110 duration-200'>
                                <a href={href} target='_blank' rel='noreferrer'>{child}</a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <div>
                    <img src={photo} alt="my profile"
                        className='rounded-2xl mx-auto w-2/3 md-w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home
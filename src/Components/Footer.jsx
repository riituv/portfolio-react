import React from 'react'
import { GrLinkedin, GrGithub, GrMail } from 'react-icons/gr'

const
    Footer = () => {

        const links = [
            {
                id: 1,
                child: (
                    <GrLinkedin size={18} />
                ),
                href: 'https://www.linkedin.com/in/riituv/'
            },
            {
                id: 2,
                child: (
                    <GrGithub size={18} />
                ),
                href: 'https://github.com/riituv'
            },
            {
                id: 3,
                child: (
                    <GrMail size={18} />
                ),
                href: 'mailto:riitu.vyas@gmail.com'
            }
        ];

        return (
            <div className='container'>
                <div className='flex flex-col justify-between items-center px-4
                 w-full text-white  bg-black'>
                    <div>
                     <h2 className='mt-4 font-semibold'>@riitu</h2>
                    </div>
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
            </div>
        )
    }

export default Footer

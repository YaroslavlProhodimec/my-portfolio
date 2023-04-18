import React from 'react';
import {BsArrowRight, BsArrowUp, BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '..//variants'

const services = [
    {
        name: 'Frontend Development ',
        description: ' JAVA-SCRIPT, TYPE-SCRIPT',
        link: 'learn more',
    },
    {
        name: 'Design',
        description: ' HTML, CSS, Tailwind, SCSS/SASS',
        link: 'learn more',
    },
    {
        name: 'Framework',
        description: ' REACT',
        link: 'learn more',
    },
    {
        name: 'Tools',
        description: ' GitHub, Storybook, Material-UI, Figma, Fhotoshop, Postman, Ant Design',
        link: 'learn more',
    },
]
const Project = () => {
    return <section className='section' id='services'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row'>
                <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'}
                            viewport={{once:false,amount:0.3}}  className='flex-1 lg:bg-services  lg:bg-bottom bg-no-repeat mb-12 lg:mb-0'><h2
                    className='h2 text-blue-600 mb-6'>My skills</h2>
                    {/*<h3 className='h3 '></h3>*/}
                    <button className='btn btn-sm'>See my work</button>
                </motion.div>
                <motion.div variants={fadeIn('left',0.5)} initial='hidden' whileInView={'show'}
                            viewport={{once:false,amount:0.3}} className=' flex-1'>
                    <div >
                        {services.map((service, index) => {
                            const {name, description, link} = service
                            return (
                                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                                    <div className='max-w-[476px]'>
                                        <h4 className='font-secondary leading-tight mb-6'>{name}
                                    </h4>
                                        <p className='  text-[20px] tracking-wider font-primary font-semibold '>{description}</p>
                                    </div>
                                    <div className='flex flex-col flex-1 items-end'>
                                        <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                                        <BsArrowUpRight/>
                                        </a>
                                        <a className='text-gradient text-sm' href="#">{link}</a>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </motion.div>
            </div>

        </div>
    </section>;
};

export default Project;

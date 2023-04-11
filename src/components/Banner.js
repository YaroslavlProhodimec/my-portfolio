import React from 'react';
import Logo from '../assets/photo.png'
import {FaDribbble, FaGithub,FaYoutube} from 'react-icons/fa'
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

const Banner = () => {
    return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center  '>
        <div className="container mx-auto">
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
            <div className='flex-1 text-center font-secondary lg:text-left'>
                <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'}
                           viewport={{once:false,amount:0.7}}
                           className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Yaroslav
                    Leonidovich
                </motion.h1>
                <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'}
                            viewport={{once:false,amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                    <span className='text-white mr-4'>I am a</span>
                    <TypeAnimation sequence={['Developer', 2000,
                        'Developer-Astronaut', 2000
                    ]} speed={50} className='text-blue-500' wrapper='span' repeat='infinity'/>

                </motion.div>
                <motion.p variants={fadeIn('up',0.5)} initial='hidden' whileInView={'show'}
                          viewport={{once:false,amount:0.7}} className=' mb-8 max-w-lg mx-auto lg:mx-0'>
                    I am from the city of St. Petersburg! One piece one love!</motion.p>
                <motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'}
                            viewport={{once:false,amount:0.7}}  className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0
                '>
                    <button className='btn btn-lg'>Contact me</button>
                    <motion.a whileHover={{scale:1.2,

                    }}  href="#" className='text-gradient btn-link'>My portfolio</motion.a>
                </motion.div>
                <motion.div variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'}
                            viewport={{once:false,amount:0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <motion.a  whileHover={{scale:1.7,

                }} href="#">
                    <FaYoutube/> </motion.a>
                    <motion.a  whileHover={{scale:1.7,

                    }} href="#">
                        <FaGithub/>
                    </motion.a>
                <motion.a  whileHover={{scale:1.7,

                }}  href="#">
                    <FaDribbble/>
                </motion.a>
            </motion.div>
        </div>
        <motion.div variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'}
                     className=' hidden lg:flex flex-1 mx-auto'>
            <img className=" rounded-3xl" src={Logo} alt=""/>
        </motion.div>
            </div>
    </div>
</section>
    ;
};

export default Banner;
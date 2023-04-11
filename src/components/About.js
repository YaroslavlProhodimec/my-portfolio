import React from 'react';
import CountUp from 'react-countup'
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '..//variants'

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (<section className='section' id='about'  ref={ref}>
        <div className="container  mx-auto">
            <div
                className='flex flex-col gap-y-10 lg:flex-row  lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                {inView ? <motion.div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
       bg-top
        '
                                      animate={{rotate: 360}}
                                      initial='hidden'
                                      variants={fadeIn('up', 0.5)}
                                      transition={{
                                          delay: 3,
                                          duration: 2,
                                          repeat: Infinity,
                                          repeatDelay: 15,
                                          repeatType: 'reverse',
                                          type: 'tween'
                                      }}
                                      whileInView={'show'}
                ></motion.div> : null}
                <div className=' flex-1'>
                    <h2 className='h2 text-blue-500'>About me.</h2>
                    <h3 className='h3 mb-4'>I'm a Front-end Developer.</h3>
                    <p className=' mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, saepe. </p>
                    <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                        <div>
                            <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                {inView ?
                                    <CountUp start={0} end={1} duration={3}/> : null
                                }
                            </div>
                            <div className='font-primary text-sm tracking-[2px]'>Years of<br/> experience</div>
                        </div>
                        <div>
                            <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                {inView ?
                                    <CountUp start={0} end={11} duration={3}/> : null
                                }
                            </div>
                            <div className='font-primary text-sm tracking-[2px]'>Projects <br/>Completed</div>
                        </div>
                    </div>
                    <div className='flex gap-x-8 items-center'>
                        <button className='btn btn-lg'>Contact me</button>
                        <motion.a whileHover={{
                            scale: 1.3,

                        }} href="#" className='text-gradient btn-link'>
                            My Portfolio
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    </section>)
};

export default About;

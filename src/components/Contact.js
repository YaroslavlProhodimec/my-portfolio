import React from 'react';

import {motion} from 'framer-motion';
import {fadeIn} from '..//variants'

const Contact = () => {
    return <section className='py-16 lg:section' id='contact'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row'>
                <motion.div variants={fadeIn('right', 0.3)}
                            transition={{
                              delay: 3,
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 15,
                              repeatType: 'reverse',
                              type: 'tween'
                            }} className='flex-1 flex justify-start items-center'>
                  <div>
                    <h4 className=' text-x1 uppercase text-blue-600 font-medium mb-2 tracking-wide'>Get in touch</h4>
                    <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together!</h2>

                    </div>
                </motion.div>
                <motion.form variants={fadeIn('left', 0.3)}
                             transition={{
                               delay: 3,
                               duration: 2,
                               repeat: Infinity,
                               repeatDelay: 15,
                               repeatType: 'reverse',
                               type: 'tween'
                             }} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
                    <input
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue transition-all '
                        type='text'
                        placeholder='Your name'
                    /> <input
                    className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue transition-all '
                    type='text'
                    placeholder='Your email'
                />
                  <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue transition-all
                  resize-none mb-12
                   '
                            placeholder='Your message'
                  ></textarea>
                  <button className='btn btn-lg'>Send message</button>
                </motion.form>
            </div>
        </div>
    </section>;
};

export default Contact;

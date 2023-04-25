import React, {useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '..//variants'
import * as emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [send, setSent] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();
         setSent(true)
        emailjs.sendForm("service_1vt4uvr", "template_49mizuw", form.current, "ZfjE6Ea3X575X3xDn")
            .then(() => {

                setTimeout(() => setSent(false), 3000)
            }, (error) => {
                alert(error.text)
            })
        e.target.reset();
    }

    return <section className='py-16 lg:section' id='contact'>


        <div className="container mx-auto">

            <div className='flex flex-col lg:flex-row'>
                {!send && <motion.div variants={fadeIn('right', 0.3)}
                                      transition={{
                                          delay: 3,
                                          duration: 2,
                                          repeat: Infinity,
                                          repeatDelay: 15,
                                          repeatType: 'reverse',
                                          type: 'tween'
                                      }} className='flex-1 flex  justify-start items-center'>
                    <div>
                        <h4 className=' text-x1 uppercase text-blue-600 font-medium mb-2 tracking-wide'>Get in
                            touch</h4>
                        <h2 className='text-[45px] lg:text-[90px]  leading-none mb-12'>Let's work <br/> together!</h2>

                    </div>
                </motion.div>}
                {send && <motion.div variants={fadeIn('right', 0.3)}
                                     transition={{
                                         delay: 3,
                                         duration: 2,
                                         repeat: Infinity,
                                         repeatDelay: 15,
                                         repeatType: 'reverse',
                                         type: 'tween'
                                     }} className='flex-1 flex  min-h-full justify-center  items-center'>
                    <div>

                        <h2 className='text-[45px] mt-72 mb-96 lg:text-[90px]   leading-none '><br/> Message Send!</h2>

                    </div>

                </motion.div>

                }
                {!send && <motion.form ref={form} onSubmit={sendEmail} variants={fadeIn('left', 0.3)}
                                       transition={{
                                           delay: 3,
                                           duration: 2,
                                           repeat: Infinity,
                                           repeatDelay: 15,
                                           repeatType: 'reverse',
                                           type: 'tween'
                                       }}
                                       className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>

                    <input
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue transition-all '

                        placeholder='Your name'
                        type='text'
                        name='user_name' required
                    /> <input
                    className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue transition-all '
                    name='user_email'
                    type='email'
                    placeholder='Your email' required
                />
                    <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue transition-all
                  resize-none mb-12
                   '
                              placeholder='Your message'
                              name='user_message' required
                    ></textarea>
                    <button type='submit' className='btn btn-lg'>Send message
                    </button>
                </motion.form>}
            </div>
        </div>
    </section>;
};

export default Contact;

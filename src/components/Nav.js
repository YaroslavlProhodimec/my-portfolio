import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {MdContactPhone} from 'react-icons/md';
import {BiHomeAlt,BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase,BsChatSquare} from 'react-icons/bs';
import {Link} from 'react-scroll'
const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl
       rounded-full max-w-[460px] mx-auto px-5 flex
       justify-between text-2xl text-white/50 items-center
       '>
        <Link activeClass='active'
              smooth spy={true}
              to='header'
              // offset='-200'
              classname='cursor-pointer w-[60px] h-[60px]  flex  items-center justify-center' >
         <BiHomeAlt/>
        </Link>
        <Link activeClass='active' smooth spy={true} to='about' className='cursor-pointer w-[60px] h-[60px] flex  items-center justify-center'>
        <BiUser/>
      </Link>
        <Link activeClass='active' smooth spy={true} to='services' className='cursor-pointer w-[60px] h-[60px] flex  items-center  justify-center'>
        <BsClipboardData/>
      </Link>
        <Link activeClass='active' smooth spy={true} to='work' className='cursor-pointer w-[60px] h-[60px] flex  items-center justify-center'>
        <BsInstagram/>
      </Link>
        <Link activeClass='active' smooth spy={true} to='contact' className='cursor-pointer w-[60px] h-[60px] flex  items-center justify-center'>
          <MdContactPhone/>
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
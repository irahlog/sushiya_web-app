import Image from 'next/image';
// import styles from '../styles/Navbar.module.css';
import { PhoneIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <div className='top-0 sticky h-32 px-14 flex items-center bg-black z-50'>
      <div className='flex-1'>
        <Image
          src='/assets/images/logo.png'
          alt=''
          width='80px'
          height='120px'
        />
      </div>

      <div className='flex-grow'>
        <ul className='flex flex-row space-x-10 text-lg text-white font-bold items-center'>
          <li>Home</li>
          <li>Our Food</li>
          <li>
            <Image
              src='/assets/images/sushiya_ramen_lettering.png'
              alt=''
              width='400px'
              height='75px'
            />
          </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className='bg-red-500 text-white rounded-lg px-3 py-3 text-lg font-bold'>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;

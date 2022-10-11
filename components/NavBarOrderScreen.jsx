import Image from 'next/image';
// import styles from '../styles/Navbar.module.css';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';

const NavBarOrderScreen = () => {
  return (
    <div className='top-0 sticky h-32 px-14 flex items-center bg-white z-50'>
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
          <li>
            <Image
              src='/assets/images/sushiya_ramen_lettering.png'
              alt=''
              width='400px'
              height='75px'
            />
          </li>
        </ul>
      </div>
      <div>
        <ShoppingCartIcon className='h-8 w-8 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
        Total Items: 2
      </div>
    </div>
  );
};

export default NavBarOrderScreen;

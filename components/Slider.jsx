import styles from '../styles/Slider.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    '/assets/doordashPics/fried_rice.webp',
    '/assets/doordashPics/caterpillar.webp',
    '/assets/doordashPics/ramen.webp',
  ];

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image
          src='/assets/arrowl.png'
          alt=''
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className={styles.textContainer}>
        <div className='font-bold text-5xl my-3'>
          Enjoy Sushi and Sashimi at your comfort
        </div>
        <button className='bg-red-500 text-white rounded-lg px-5 py-3 text-lg font-bold'>
          Order Now
        </button>
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt='' layout='fill' objectFit='contain' />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image
          src='/assets/arrowr.png'
          layout='fill'
          alt=''
          objectFit='contain'
        />
      </div>
    </div>
  );
};

export default Slider;

import { LOGOSCREEN } from '@helpers/imageImports';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const LogoScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <article className={`logoScreen ${visible ? '' : 'logoScreen--hidden'}`}>
      <main className='logoScreen__image-container'>
        <Image
          src={LOGOSCREEN}
          alt='2023台灣仲夏旅遊節Logo'
          layout='intrinsic'
          width={180}
          height={200}
          className='logoScreen__image'
        />
      </main>
    </article>
  );
};

export default LogoScreen;

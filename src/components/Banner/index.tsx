import AccessKey from '@components/AccessKey';
import { Slideshow, SlideshowSlide } from '@components/Slideshow';
import { images } from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Banner: NextPage = () => {
  const [perView, setPerView] = useState(4);
  const [widthOfWindow, setWidthOfWindow] = useState<number | null>(null);

  useEffect(() => {
    setWidthOfWindow(window.innerWidth);

    const handleResize = () => {
      setWidthOfWindow(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidthOfWindow(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (widthOfWindow !== null) {
      if (widthOfWindow < 900) {
        setPerView(1);
      } else if (widthOfWindow < 1180) {
        setPerView(2);
      } else {
        setPerView(2);
      }
    }
  }, [widthOfWindow]);

  return (
    <header className='banner'>
      <AccessKey
        title='目前在輪播圖區域'
        keyboard='Z'
        style={{
          position: 'absolute',
          right: '95%',
          zIndex: 2,
        }}
      />
      <main className='banner__container'>
        <Slideshow
          slidesPerView={perView}
          auto={true}
          href={images.map((item) => item.href)}
        >
          {images.map((data, index) => (
            <SlideshowSlide key={index}>
              <section className='banner__img'>
                <Image
                  src={data.img}
                  alt='輪播圖'
                  objectFit='contain'
                  layout='responsive'
                />
              </section>
            </SlideshowSlide>
          ))}
        </Slideshow>
      </main>
    </header>
  );
};

export default Banner;

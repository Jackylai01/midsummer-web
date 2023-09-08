import { Swiper, SwiperSlide } from '@components/Swiper';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

interface CarouselProps {
  images: { img: StaticImageData }[];
  size: { width: string; height: string };
}

const Carousel: React.FC<CarouselProps> = ({ images, size }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setPerView] = useState(4);
  const [widthOfWindow, setWidthOfWindow] = useState<number | null>(null);

  // 視窗大小改變時，重新取得視窗寬度
  useEffect(() => {
    function hanldeResize() {
      setWidthOfWindow(window.innerWidth);
    }
    window.addEventListener('resize', hanldeResize);

    return () => {
      window.removeEventListener('resize', hanldeResize);
    };
  }, []);

  // 根據視窗寬度改變輪播圖顯示數量
  useEffect(() => {
    if (widthOfWindow !== null) {
      if (widthOfWindow < 600) {
        setPerView(1);
      } else if (widthOfWindow < 900) {
        setPerView(2);
      } else if (widthOfWindow < 1180) {
        setPerView(3);
      } else {
        setPerView(4);
      }
    }
  }, [widthOfWindow]);

  return (
    <header className='carousel' style={size}>
      <main className='carousel__container'>
        <Swiper slidesPerView={1} auto={true}>
          {images?.map((data, index) => (
            <SwiperSlide key={index}>
              <section
                className={`carousel__img ${
                  index === currentSlide ? 'carousel__active' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <Image
                  src={data.img}
                  alt='輪播圖'
                  objectFit='contain'
                  layout='responsive'
                />
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </header>
  );
};

export default Carousel;

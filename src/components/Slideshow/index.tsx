import React, { ReactNode, useEffect, useState } from 'react';

export interface SlideshowProps {
  children: React.ReactElement[];
  spaceBetween?: number;
  slidesPerView?: number;
  auto?: boolean;
  duration?: number;
  href?: string[];
}

export interface SlideshowSlideProps {
  children: ReactNode;
  href?: string;
}

export const Slideshow = ({
  children,
  spaceBetween = 10,
  slidesPerView = 1,
  auto = false,
  duration = 5000,
  href,
}: SlideshowProps) => {
  children = React.Children.toArray(children).map((child, index) =>
    React.cloneElement(child as React.ReactElement, {
      href: href ? href[index] : '#',
    }),
  );
  const numOfDots = children.length - (slidesPerView - 1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (auto) {
        setCurrentSlide((value) => (value < numOfDots - 1 ? value + 1 : 0));
      }
    }, duration);

    return () => {
      clearInterval(interval);
    };
  }, [auto, duration, numOfDots]);

  return (
    <article className='slideshow'>
      <section
        className='slideshow__wrapper'
        style={{ gap: `${spaceBetween}px` }}
      >
        {children.slice(currentSlide, currentSlide + slidesPerView)}
      </section>
      <main className='slideshow__pagination'>
        {Array.from({ length: numOfDots }, (_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slideshow__pagination-dot ${
              index === currentSlide ? 'slideshow__pagination-dot--active' : ''
            }`}
          />
        ))}
      </main>
    </article>
  );
};

export const SlideshowSlide = ({ children, href }: SlideshowSlideProps) => {
  return (
    <a
      href={href || '#'}
      className='slideshow__slide'
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};

import AccessKey from '@components/AccessKey';
import { BACKGROUND, BACKGROUNDIPAD, DYNAMIC } from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from 'src/hook/useLanguage';
const MainContent: NextPage = () => {
  const { t } = useLanguage();
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let backgroundImage = BACKGROUND;

  if (windowWidth <= 556) {
    backgroundImage = BACKGROUNDIPAD;
  }

  return (
    <>
      <header className='home'>
        <AccessKey
          title='目前在主要內容區域'
          keyboard='B'
          style={{
            position: 'absolute',
            right: '95%',
            top: '15%',
            zIndex: 2,
          }}
        />
        <section className='home__background '>
          <Image
            layout='responsive'
            objectFit='cover'
            src={backgroundImage}
            alt='2023台灣仲夏旅遊節 Taiwan Summer Tourism Festival'
          />
        </section>
        <section className='home__dynamic'>
          <Image
            src={DYNAMIC}
            objectFit='cover'
            className='home__dynamic'
            alt='2023台灣仲夏旅遊節'
          />
        </section>
      </header>
    </>
  );
};

export default MainContent;

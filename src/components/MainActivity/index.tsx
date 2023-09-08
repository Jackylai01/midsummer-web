import AccessKey from '@components/AccessKey';
import Carousel from '@components/Carousel';
import {
  AlishanCarousel,
  ConcertCarousel,
  FunCarousel,
  IslandCarousel,
} from '@helpers/imageImports';
import { NextPage } from 'next';
import { useLanguage } from 'src/hook/useLanguage';

const MainActivity: NextPage = () => {
  const { t } = useLanguage();

  return (
    <article id='main-activity' className='activity'>
      <main className='activity__container'>
        <AccessKey
          title='目前在主軸活動區域'
          keyboard='A'
          style={{
            position: 'absolute',
            top: '0',
            right: '106%',
            zIndex: 2,
          }}
        />
        <header className='activity__title'>
          <h2>
            {t('mainActivity.spindle')}
            {t('mainActivity.activity')}
          </h2>
        </header>
        <section
          className='activity__card'
          style={{ border: 'none', marginBottom: '0rem' }}
        >
          <figure className='activity__card--img'>
            <Carousel
              images={IslandCarousel}
              size={{ width: '100%', height: '100%' }}
            />
          </figure>
          <span className='activity__card--caption'>
            <h3>{t('mainActivity.title')}</h3>
            <hr className='bottom-line' />
            <footer className='activity__card--caption-content'>
              {t('mainActivity.desc')}
            </footer>
          </span>
        </section>

        <section className='activity__card'>
          <span className='activity__card--caption'>
            <h3>{t('mainActivity.title01')}</h3>
            <hr className='bottom-line' />
            <footer className='activity__card--caption-content'>
              <p>{t('mainActivity.desc01')}</p>
              <br />
              <p>{t('mainActivity.desc02')}</p>
              <br />
              <p>{t('mainActivity.desc03')}</p>
            </footer>
          </span>
          <figure className='activity__card--img'>
            <Carousel
              images={FunCarousel}
              size={{ width: '100%', height: '100%' }}
            />
          </figure>
        </section>
        <section className='activity__card'>
          <figure className='activity__card--img'>
            <Carousel
              images={AlishanCarousel}
              size={{ width: '100%', height: '100%' }}
            />
          </figure>

          <span className='activity__card--caption'>
            <h3>{t('mainActivity.title02')}</h3>
            <hr className='bottom-line' />
            <footer className='activity__card--caption-content'>
              <p>{t('mainActivity.desc04')}</p>
              <br />
              <p>{t('mainActivity.desc05')}</p>
              <br />
              <p>{t('mainActivity.desc06')}</p>
            </footer>
          </span>
        </section>
        <section className='activity__card'>
          <span className='activity__card--caption'>
            <h3>{t('mainActivity.title03')}</h3>
            <hr className='bottom-line' />
            <footer className='activity__card--caption-content'>
              <p>{t('mainActivity.desc08')}</p>
              <p>{t('mainActivity.desc09')}</p>
              <p>{t('mainActivity.desc10')}</p>
            </footer>
          </span>
          <figure className='activity__card--img'>
            <Carousel
              images={ConcertCarousel}
              size={{ width: '100%', height: '100%' }}
            />
          </figure>
        </section>
      </main>
    </article>
  );
};

export default MainActivity;

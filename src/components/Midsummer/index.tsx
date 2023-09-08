import AccessKey from '@components/AccessKey';
import { Locale, multilingualMap } from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLanguage } from 'src/hook/useLanguage';

const Midsummer: NextPage = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const locale = (router.locale || 'zh') as Locale;
  const currentImage = multilingualMap[locale];

  return (
    <header id='midsummer-activity' className='midsummer'>
      <AccessKey
        title='目前在主軸活動區域'
        keyboard='V'
        style={{
          position: 'absolute',
          right: '95%',
          top: '0',
          zIndex: 2,
        }}
      />
      <main className='midsummer__container'>
        <article className='midsummer__title'>
          <h2>{t('midsummer.title')}</h2>
        </article>
        <section className='midsummer__card'>
          <span className='midsummer__card--caption'>
            <p>{t('midsummer.desc')}</p>
            <br />
            <p>{t('midsummer.desc01')}</p>
          </span>
        </section>
        <section className='midsummer__items'>
          <span className='midsummer__items--img'>
            {currentImage[0] && (
              <Image
                src={currentImage[0]}
                objectFit='contain'
                alt='2023島嶼生活節'
              />
            )}
          </span>
        </section>
      </main>
    </header>
  );
};

export default Midsummer;

import AccessKey from '@components/AccessKey';
import { NextPage } from 'next';
import { useLanguage } from 'src/hook/useLanguage';

const Origin: NextPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <header id='origin' className='origin'>
        <AccessKey
          title='目前緣起內容頁'
          keyboard='Q'
          style={{
            position: 'absolute',
            right: '95%',
            top: '0',
            zIndex: 2,
          }}
        />
        <article className='origin__container'>
          <main className='origin__container--content'>
            <h1>{t('home.title')}</h1>

            <p>{t('home.description1')}</p>
            <br />
            <p>{t('home.description2')}</p>
          </main>
        </article>
      </header>
    </>
  );
};

export default Origin;

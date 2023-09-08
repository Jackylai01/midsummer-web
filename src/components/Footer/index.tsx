import AccessKey from '@components/AccessKey';
import {
  BEEBUZZ,
  BLACKBALL,
  COCACOLA,
  GOMAJI,
  JET,
  KFC,
  KIWI,
  KLOOK,
  MYFEEL,
  OB,
  PIZZAHUT,
  PLUGINN,
  RAILWAY,
  TOURISM,
} from '@helpers/imageImports';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from 'src/hook/useLanguage';

const Footer: NextPage = () => {
  const { t } = useLanguage();

  return (
    <footer className='footer'>
      <AccessKey
        title='目前在合作夥伴連結處'
        keyboard='G'
        style={{
          position: 'absolute',
          right: '95%',
          top: '5%',
          zIndex: 2,
        }}
      />
      <article className='footer__container'>
        <h1 className='footer__title'>{t('footer.title')}</h1>
        <main className='footer__img'>
          <span className='footer__img--row-1'>
            <a
              href='https://www.klook.com/zh-TW/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={KLOOK} width={200} height={56.6} alt='Klook' />
            </a>
            <a
              href='https://www.settour.com.tw/'
              target='_blank'
              rel='noopener noreferrer'
              className='customImage--left'
            >
              <Image src={JET} width={250} height={40} alt='東南旅遊' />
            </a>
            <a
              href='https://www.gomaji.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='customImage--left'
            >
              <Image src={GOMAJI} width={120} height={60} alt='GOMAJI' />
            </a>
            <a
              href='https://www.railway.gov.tw/tra-tip-web/tip/tip004/tip421/entry'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={RAILWAY} width={250} height={50} alt='台鐵便當' />
            </a>
          </span>
          <span className='footer__img--row-2'>
            <a
              href='https://www.obdesign.com.tw/?utm_source=scdp&utm_medium=referral&utm_campaign=va:summertourism_officialLOGO'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={OB} width={180} height={180} alt='OB嚴選' />
            </a>
            <a
              href='https://www.coke.com.tw/zh/home'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={COCACOLA} width={180} height={100} alt='可口可樂' />
            </a>
            <a
              href='https://i.imgur.com/e4UYdSU.jpg'
              target='_blank'
              rel='noopener noreferrer'
              className='customImage--right'
            >
              <Image src={PIZZAHUT} width={120} height={113} alt='必勝客' />
            </a>
            <a
              href='https://i.imgur.com/966CAqZ.jpg'
              target='_blank'
              rel='noopener noreferrer'
              className='customImage--right'
            >
              <Image src={KFC} width={100} height={100} alt='肯德基' />
            </a>
            <a
              href='https://www.pluginn.com.tw/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={PLUGINN} width={120} height={120} alt='旅電科技' />
            </a>
          </span>
          <span className='footer__img--row-3'>
            <a
              href='https://www.7819.com.tw/icepop/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={KIWI} width={105} height={105} alt='奇花異果' />
            </a>
            <a
              href='https://www.blackball.com.tw/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={BLACKBALL}
                width={240}
                height={108}
                alt='黑丸嫩仙草'
              />
            </a>
            <a
              href='https://www.myfeel-tw.com/tw/media'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={MYFEEL} width={220} height={108} alt='品味誌' />
            </a>
            <a
              href='https://www.beebuzz.com.tw/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={BEEBUZZ} width={220} height={78} alt='微醺蜜月' />
            </a>
          </span>
        </main>
        <aside className='footer__privacy'>
          <span className='footer__privacy--links'>
            <Link href='/privacy-policy' target='_blank'>
              {t('footer.privacy')}
            </Link>
            <Link href='/information-security' target='_blank'>
              {t('footer.security')}
            </Link>
            <Link href='/information-disclosure' target='_blank'>
              {t('footer.disclosure')}
            </Link>
          </span>
        </aside>
        <section className='footer__block'>
          <a
            href='https://www.taiwan.net.tw/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={TOURISM}
              width={260}
              height={80}
              alt='中華民國交通部觀光局'
            />
          </a>
          <span>
            <li>{t('footer.lable')}</li>
            <li>{t('footer.address')}</li>
            <li>{t('footer.copyright')}</li>
          </span>
        </section>
      </article>
    </footer>
  );
};

export default Footer;

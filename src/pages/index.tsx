import Banner from '@components/Banner';
import Footer from '@components/Footer';
import LinkActivity from '@components/LinkActivity';
import LogoScreen from '@components/LogoScreen';
import MainActivity from '@components/MainActivity';
import MainContent from '@components/MainContent';
import Midsummer from '@components/Midsummer';
import NavBar from '@components/Navbar';
import Origin from '@components/Origin';
import Video from '@components/Video';
import { GetStaticPropsContext } from 'next';
import { getI18nProps } from '../helpers/i18n';

export default function HomePage() {
  return (
    <>
      <LogoScreen />
      <NavBar />
      <MainContent />
      <Video />
      <LinkActivity />
      <MainActivity />
      <Origin />
      <Midsummer />
      <Banner />
      <Footer />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getI18nProps(context);
}

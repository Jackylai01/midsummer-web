import AccessKey from '@components/AccessKey';
import PrivacyBar from '@components/PrivacyBar';
import { getI18nProps } from '@helpers/i18n';
import type { GetStaticPropsContext, NextPage } from 'next';

const PrivacyPolicy: NextPage = () => {
  return (
    <header className='information'>
      <AccessKey
        title='隱私政策說明內容區'
        keyboard='R'
        style={{
          position: 'absolute',
          right: '95%',
          top: '20%',
          zIndex: 2,
        }}
      />
      <PrivacyBar />
    </header>
  );
};

export default PrivacyPolicy;

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getI18nProps(context);
}

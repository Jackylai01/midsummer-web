import AccessKey from '@components/AccessKey';
import PrivacyBar from '@components/PrivacyBar';
import { getI18nProps } from '@helpers/i18n';
import type { GetStaticPropsContext, NextPage } from 'next';

const InformationSecurity: NextPage = () => {
  return (
    <header className='information'>
      <AccessKey
        title='目前在資訊保護安全內容區'
        keyboard='T'
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

export default InformationSecurity;

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getI18nProps(context);
}

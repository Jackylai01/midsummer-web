import AccessKey from '@components/AccessKey';
import PrivacyBar from '@components/PrivacyBar';
import { getI18nProps } from '@helpers/i18n';
import type { GetStaticPropsContext, NextPage } from 'next';

const InformationDisclosure: NextPage = () => {
  return (
    <header className='information'>
      <AccessKey
        title='目前在政府網站資料開放公告內容區'
        keyboard='E'
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

export default InformationDisclosure;

export async function getStaticProps(context: GetStaticPropsContext) {
  return await getI18nProps(context);
}

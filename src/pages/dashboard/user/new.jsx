import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { UserCreateView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

const metadata = { title: `Yeni Kullanıcı Oluştur | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <UserCreateView />
    </>
  );
}

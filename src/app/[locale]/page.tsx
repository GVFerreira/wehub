
import Footer from "./components/footer"
import Header from "./components/header"
import WeHubHomepage from "./home"

import { getTranslations } from 'next-intl/server'
 
export async function generateMetadata({params}: { params: { locale: string }}) {
  const { locale } = await params
  const t = await getTranslations({locale, namespace: 'Metadata'})
 
  return {
    title: t('home.title')
  };
}

export default async function LocalePage() {
  return (
    <>
      <Header />
      <WeHubHomepage />
      <Footer />
    </>
  )
}


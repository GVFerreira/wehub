import AboutPage from "./about";
import { getTranslations } from 'next-intl/server';
 
export async function generateMetadata({params}: { params: { locale: string }}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('about.title')
  };
}

export default function About() {
  return <AboutPage />
}

import ContactPage from "./contact";
import { getTranslations } from 'next-intl/server';
 
export async function generateMetadata({params}: { params: { locale: string }}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('contact.title')
  };
}

export default function Contact() {
  return (
    <ContactPage />
  )
}

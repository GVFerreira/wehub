import Cookies from "./cookies"
import { getTranslations } from 'next-intl/server'
 
export async function generateMetadata({params}: { params: { locale: string }}) {
  const { locale } = await params
  const t = await getTranslations({locale, namespace: 'Metadata'})
 
  return {
    title: t('cookies.title')
  }
}

export default function CookiesPage() {
  return <Cookies />
}
'use client'

import { useTranslations } from 'next-intl'
import Header from '../components/header'
import Footer from '../components/footer'

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPage')
  const sections = t.raw('sections') as {
    [key: string]: {
      title: string
      text?: string
      text1?: string
      text2?: string
      list?: string[]
      email?: string
    }
  }

  return (
    <>
      <Header />
      <main className="container px-4 mx-auto max-w-4xl space-y-8 pb-16 pt-28">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-center mb-4">{t('title')}</h1>
          <p className="text-xl font-bold mb-2">{t('company')}</p>
          <p className="mb-10">{t('lastUpdated')}</p>
          <p>{t('intro')}</p>
        </div>

        {Object.entries(sections).map(([key, section]) => {
          // Verifica se é a seção 6
          if (key === '6') {
            return (
              <div key={key}>
                <hr className="my-8" />
                <h2 className="text-4xl font-bold mb-4">{section.title}</h2>

                {/* Conteúdo personalizado para a seção 6 */}
                {section.text && <p className="mb-4">{section.text}</p>}

                {section.list && (
                  <ul className="list-decimal ml-6 space-y-2 mb-4">
                    {section.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.text2 && <p className="">{section.text2}</p>}

                {section.email && (
                  <p className='mb-4'>
                    <a href={`mailto:${section.email}`} className="underline font-bold">
                      {section.email}
                    </a>
                  </p>
                )}
              </div>
            )
          }

          return (
            <div key={key}>
              <hr className="my-8" />
              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>

              {section.text && <p className="mb-4">{section.text}</p>}
              {section.text1 && <p className="mb-2">{section.text1}</p>}
              {section.text2 && <p className="mb-4">{section.text2}</p>}

              {section.email && (
                <p className='mb-4'>
                  <a href={`mailto:${section.email}`} className="underline font-bold">
                    {section.email}
                  </a>
                </p>
              )}

              {section.list && (
                <ul className="list-disc ml-6 space-y-2">
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </main>
      <Footer />
    </>
  )
}

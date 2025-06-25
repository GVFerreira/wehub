"use client"


import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import Header from "@/app/[locale]/components/header"
import Footer from "@/app/[locale]/components/footer"
import { useTranslations } from "next-intl"
import ContactForm from "../components/form-contact"

export default function ContactPage() {
  const t = useTranslations("ContactPage")
  const heroRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLElement>(null)
  const infoRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timer = setTimeout(() => {
      // Hero animations
      gsap.fromTo(
        ".hero-title",
        {
          y: 100,
          opacity: 0,
        },
        {
          duration: 1.2,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        },
      )

      gsap.fromTo(
        ".hero-subtitle",
        {
          y: 50,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          delay: 0.3,
        },
      )

      // Form animation
      gsap.fromTo(
        ".form-container",
        {
          x: 100,
          opacity: 0,
        },
        {
          duration: 1,
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Info animation
      gsap.fromTo(
        ".info-item",
        {
          x: -100,
          opacity: 0,
        },
        {
          duration: 1,
          x: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23000000&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            {t("hero.title1")}
            <span className="block text-white">{t("hero.title2")}</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-black/80 mb-8 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section ref={infoRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("info.title")}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("info.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="info-item text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-gray-300 mb-2">contato@wehub.com</p>
              <p className="text-gray-300">comercial@wehub.com</p>
            </div>

            <div className="info-item text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t("info.phone")}</h3>
              <p className="text-gray-300 mb-2">+55 21 9999-9999</p>
              <p className="text-gray-300">+55 21 3333-3333</p>
            </div>

            <div className="info-item text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t("info.address")}</h3>
              <p className="text-gray-300 mb-2">Rio de Janeiro / RJ</p>
              <p className="text-gray-300">{t("info.country")}</p>
            </div>

            <div className="info-item text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t("info.hours")}</h3>
              <p className="text-gray-300 mb-2">{t("info.monToFri")}</p>
              <p className="text-gray-300">{t("info.saturday")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section ref={formRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">{t("form.title")}</h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  {t("form.description")}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span>{t("form.benefits1")}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span>{t("form.benefits2")}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span>{t("form.benefits3")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-container">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("map.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("map.subtitle")}
            </p>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t("map.label")}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t("map.address")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

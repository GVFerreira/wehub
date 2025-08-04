"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Users, Target, TrendingUp, Globe, Award, Zap, BarChart3, Calendar } from "lucide-react"
import { Link } from "@/i18n/navigation"

import Header from "../components/header"
import Footer from "../components/footer"
import { useTranslations } from "next-intl"

export default function AboutPage() {
  const timelineRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)
  const numbersRef = useRef<HTMLElement>(null)
  const t = useTranslations("AboutPage")


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

      // Timeline animation
      gsap.fromTo(
        ".timeline-item",
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
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Values animation
      gsap.fromTo(
        ".value-card",
        {
          y: 80,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Team animation
      gsap.fromTo(
        ".team-member",
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          duration: 1,
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Numbers animation
      const statsNumbers = document.querySelectorAll(".stats-number")
      statsNumbers.forEach((number) => {
        const target = Number.parseInt(number.getAttribute("data-target") || "0")
        gsap.fromTo(
          number,
          {
            textContent: 0,
          },
          {
            duration: 2,
            textContent: target,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: numbersRef.current,
              start: "top 60%",
              end: "bottom 40%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
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
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23000000&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            {t("hero.title")}
            <span className="block text-white">WE HUB</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-black/80 mb-8 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t("history.title")}</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  {t("history.paragraph1")}
                </p>
                <p>
                  {t("history.paragraph2")}
                </p>
                <p>
                  {t("history.paragraph3")}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl p-8 flex items-center justify-center border-4 border-yellow-500/30">
                <img
                  src="/about.jpg"
                  alt="História We Hub"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("timeline.title")}</h2>
          </div>

          <div className="space-y-12">
            <div className="timeline-item flex items-center gap-8">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-10 h-10 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t("timeline.2014.title")}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("timeline.2014.text")}
                </p>
              </div>
            </div>

            <div className="timeline-item flex items-center gap-8">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-10 h-10 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t("timeline.2021.title")}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("timeline.2021.text")}
                </p>
              </div>
            </div>

            <div className="timeline-item flex items-center gap-8">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-10 h-10 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t("timeline.2023.title")}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("timeline.2023.text")}
                </p>
              </div>
            </div>

            <div className="timeline-item flex items-center gap-8">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-10 h-10 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t("timeline.2025.title")}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("timeline.2025.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section ref={valuesRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("values.title")}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("values.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="value-card bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t("values.innovation")}</h3>
              <p className="text-black/80 leading-relaxed">
                {t("values.innovationText")}
              </p>
            </div>

            <div className="value-card bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t("values.collaboration")}</h3>
              <p className="text-black/80 leading-relaxed">
                {t("values.collaborationText")}
              </p>
            </div>

            <div className="value-card bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t("values.results")}</h3>
              <p className="text-black/80 leading-relaxed">
                {t("values.resultsText")}
              </p>
            </div>

            <div className="value-card bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t("values.global")}</h3>
              <p className="text-black/80 leading-relaxed">
                {t("values.globalText")}
              </p>
            </div>

            <div className="value-card bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t("values.transparency")}</h3>
              <p className="text-black/80 leading-relaxed">
                {t("values.transparencyText")}
              </p>
            </div>

            <div className="value-card bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t("values.excellence")}</h3>
              <p className="text-black/80 leading-relaxed">
                {t("values.excellenceText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section ref={teamRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("team.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("team.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="team-member text-center">
              <div className="relative mb-6">
                <img
                  src="/daniel.png"
                  alt="CEO"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Daniel Vivone</h3>
              <p className="text-yellow-500 font-semibold mb-3">CEO</p>
            </div>

            <div className="team-member text-center">
              <div className="relative mb-6">
                <img
                  src="/mateus.png"
                  alt="CMO"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mateus Henrique</h3>
              <p className="text-yellow-500 font-semibold mb-3">CMO</p>
            </div>

            <div className="team-member text-center">
              <div className="relative mb-6">
                <img
                  src="/sergio.png"
                  alt="CFO"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sergio Pecanha</h3>
              <p className="text-yellow-500 font-semibold mb-3">CFO</p>
            </div>

            <div className="team-member text-center">
              <div className="relative mb-6">
                <img
                  src="/eduardo.png"
                  alt="COO"
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Eduardo Leal</h3>
              <p className="text-yellow-500 font-semibold mb-3">COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Números da Empresa */}
      <section ref={numbersRef} className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">{t("numbers.title")}</h2>
            <p className="text-xl text-black/80">{t("numbers.subtitle")}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stats-number text-4xl md:text-6xl font-bold text-black mb-2" data-target="27">
                0
              </div>
              <p className="text-black/80 font-semibold">{t("numbers.employees")}</p>
            </div>
            <div className="text-center">
              <div className="stats-number text-4xl md:text-6xl font-bold text-black mb-2" data-target="32">
                0
              </div>
              <p className="text-black/80 font-semibold">{t("numbers.countries")}</p>
            </div>
            <div className="text-center">
              <div className="stats-number text-4xl md:text-6xl font-bold text-black mb-2" data-target="21">
                0
              </div>
              <p className="text-black/80 font-semibold">{t("numbers.projects")}</p>
            </div>
            <div className="text-center">
              <div className="stats-number text-4xl md:text-6xl font-bold text-black mb-2" data-target="50">
                0
              </div>
              <p className="text-black/80 font-semibold">{t("numbers.awards")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all"
            >
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

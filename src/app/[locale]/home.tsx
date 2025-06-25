"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Globe,
  Users,
  Target,
  TrendingUp, Mail, Award,
  Zap,
  BarChart3, MousePointer,
  Presentation,
  User,
  Phone,
  MapPin
} from "lucide-react"
import { Link } from "@/i18n/navigation"
import Feedbacks from "./components/feedbacks"
import Hero from "./components/hero"
import { useTranslations } from "next-intl"
import ContactForm from "./components/form-contact"

export default function WeHubHomepage() {
  const t = useTranslations("HomePage")

  const aboutRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const partnersRef = useRef<HTMLElement>(null)
  const numbersRef = useRef<HTMLElement>(null)
  const goalsRef = useRef<HTMLElement>(null)
  const feedbacksRef = useRef<HTMLElement>(null)

  const partners = ["Google", "Meta", "Amazon", "Microsoft", "Shopify", "HubSpot", "Salesforce", "Adobe"]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timer = setTimeout(() => {
      // Hero animations
      const heroTl = gsap.timeline()
      heroTl
        .fromTo(
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
        .fromTo(
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
          },
          "-=0.8",
        )
        .fromTo(
          ".hero-cta",
          {
            y: 30,
            opacity: 0,
          },
          {
            duration: 0.8,
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )

      // About section animations
      gsap.fromTo(
        ".about-text",
        {
          y: 80,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Stats animation
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
              trigger: statsRef.current,
              start: "top 60%",
              end: "bottom 40%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Partners animation
      gsap.fromTo(
        ".partner-item",
        {
          scale: 0,
          opacity: 0,
        },
        {
          duration: 0.8,
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Numbers section animation
      gsap.fromTo(
        ".number-card",
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
            trigger: numbersRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Goals animation
      gsap.fromTo(
        ".objective-item",
        {
          x: -100,
          opacity: 0,
        },
        {
          duration: 1,
          x: 0,
          opacity: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: goalsRef.current,
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
    <div className="min-h-screen bg-gray-200 dark:bg-black overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section ref={aboutRef} id="sobre" className="py-20 bg-gray-200 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("about.title")}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="about-text">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t("about.subtitle")}
              </h3>
              <p className=" text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {t("about.paragraph.1")}
              </p>
              <p className=" text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {t("about.paragraph.2")}
              </p>
              <Link
                href="/sobre"
                className="relative inline-block px-6 py-4 rounded-full text-white font-bold bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-700 ease-in-out bg-[length:200%_auto] bg-[position:0%_center] hover:bg-[position:100%_center] hover:shadow-lg"
              >
                {t("about.button")}
              </Link>

            </div>
            <div className="relative">
              <div className="aspect-[16/14] w-full bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-500/20 dark:to-orange-300/10 rounded-3xl p-8 flex items-center justify-center">
                <img
                  src="/about-us.jpg"
                  alt="Equipe We Hub"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-10 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stats-number text-4xl md:text-6xl font-bold text-black mb-2" data-target="100000">
                0
              </div>
              <p className="text-black/80 font-semibold flex justify-center items-center gap-2">{t("stats.visits")} <MousePointer /></p>
            </div>
            <div className="text-center">
              <div className="stats-number text-4xl md:text-6xl font-bold text-black mb-2" data-target="500">
                0
              </div>
              <p className="text-black/80 font-semibold flex justify-center items-center gap-2">{t("stats.projects")} <Presentation /></p>
            </div>
            <div className="text-center">
              <div className="stats-number text-4xl md:text-6xl font-bold text-black mb-2" data-target="50">
                0
              </div>
              <p className="text-black/80 font-semibold flex justify-center items-center gap-2">{t("stats.regions")} <Globe /></p>
            </div>
            <div className="text-center">
              <div className="stats-number text-4xl md:text-6xl font-bold text-black mb-2" data-target="100">
                0
              </div>
              <p className="text-black/80 font-semibold flex justify-center items-center gap-2">{t("stats.employees")} <User /></p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} id="parceiros" className="py-20 bg-gray-200 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t("partners.title")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-item bg-white dark:bg-white/20 p-6 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <span className="text-xl font-bold text-gray-700 dark:text-gray-300">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section ref={numbersRef} id="numeros" className="py-20 bg-gray-200 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{t("numbers.title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="number-card shadow-lg bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-black mb-2">25+</div>
              <p className="text-black/80">{t("numbers.countries")}</p>
            </div>
            <div className="number-card shadow-lg bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-black mb-2">10M+</div>
              <p className="text-black/80">{t("numbers.users")}</p>
            </div>
            <div className="number-card shadow-lg bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-black mb-2">300%</div>
              <p className="text-black/80">{t("numbers.growth")}</p>
            </div>
            <div className="number-card shadow-lg bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-black mb-2">50+</div>
              <p className="text-black/80">{t("numbers.awards")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section ref={goalsRef} id="objetivos" className="max-w-7xl mx-4 md:mx-auto my-20 shadow-lg bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl" >
        <div className="w-full rounded-3xl mx-auto p-4 sm:p-6 lg:p-8 md:bg-[url(/target.png)] bg-no-repeat bg-right bg-contain">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="objective-item flex items-start gap-6">
                <div className="w-12 h-12 dark:bg-black bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">{t("goals.inovation.title")}</h3>
                  <p className="text-black/80 leading-relaxed">
                    {t("goals.inovation.subtitle")}
                  </p>
                </div>
              </div>
              <div className="objective-item flex items-start gap-6">
                <div className="w-12 h-12 dark:bg-black bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-gray-600 dark:text-gray-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">{t("goals.scalability.title")}</h3>
                  <p className="text-black/80 leading-relaxed">
                    {t("goals.scalability.subtitle")}
                  </p>
                </div>
              </div>
              <div className="objective-item flex items-start gap-6">
                <div className="w-12 h-12 dark:bg-black bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-gray-600 dark:text-gray-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">{t("goals.results.title")}</h3>
                  <p className="text-black/80 leading-relaxed">
                    {t("goals.results.subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section ref={feedbacksRef} className="py-20 bg-pattern bg-repeat bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("feedbacks.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("feedbacks.subtitle")}</p>
          </div>
          <Feedbacks />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-20">
        <div className="max-w-7xl grid lg:grid-cols-2 md:gap-16 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("contact.title")}</h2>
            <p className="text-xl">{t("contact.subtitle")}</p>
            <ul className="space-y-4 my-8">
              <li className="flex items-center gap-3">
                <span className="bg-white dark:bg-gray-800 rounded-full p-2"><Mail className="size-6 text-yellow-500" /></span>
                <span className="text-gray-400">contato@grupowehub.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white dark:bg-gray-800 rounded-full p-2"><Phone className="size-6 text-yellow-500" /></span>
                <span className="text-gray-400">+55 21 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white dark:bg-gray-800 rounded-full p-2"><MapPin className="size-6 text-yellow-500" /></span>
                <span className="text-gray-400">{t("contact.location")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 md:p-8 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

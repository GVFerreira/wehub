"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Play, ChevronDown } from "lucide-react"
import ReactPlayer from "react-player"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function Hero() {
  const t = useTranslations("HomeHero")
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do texto principal
      gsap.fromTo(
        ".hero-title",
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          duration: 1.2,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          delay: 0.5,
        },
      )

      // Animação do subtítulo
      gsap.fromTo(
        ".hero-subtitle",
        {
          y: 30,
          opacity: 0,
        },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          delay: 1,
        },
      )

      // Animação dos botões
      gsap.fromTo(
        ".hero-cta button",
        {
          y: 20,
          opacity: 0,
        },
        {
          duration: 0.8,
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 1.3,
        },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <ReactPlayer
          url="https://website-ukvistos-minio.usmpj4.easypanel.host/website/6035855_Business_Office_1920x1080.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="!absolute !inset-0 !w-full !h-full"
          style={{ objectFit: "cover" }}
          config={{
            file: {
              attributes: {
                style: { objectFit: "cover", width: "100%", height: "100%" },
              },
            },
          }}
        />
        {/* Overlay para melhorar a legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-800/70 to-orange-800/70 z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="hero-title text-3xl md:text-8xl font-bold text-white mb-4 md:mb-8 leading-tight">
          {t("title.part1")}
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {t("title.part2")}
          </span>
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sobre"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white w-fit mx-auto md:mx-0 px-4 py-2 md:px-8 md:py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all flex items-center justify-center gap-2"
          >
            <Play className="size-5" />
            {t("buttons.knowMore")}
          </Link>
          <a
            href="#numeros"
            className="border-2 border-white text-white w-fit mx-auto md:mx-0 px-4 py-2 md:px-8 md:py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
            {t("buttons.seeResults")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <a
          href="#sobre"
          className="animate-bounce bg-yellow-500/20 p-2 rounded-full hover:bg-yellow-500/30 transition-all"
        >
          <ChevronDown className="w-6 h-6 text-yellow-500" />
        </a>
      </div>
    </section>
  )
}

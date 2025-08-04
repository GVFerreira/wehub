import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const feedbacks = [
  {
    name: "Monise Alves",
    role: "Gerente de Marketing",
    content: "Entrei para somar e acabei aprendendo muito mais do que esperava. O ambiente é inovador, colaborativo. Me sinto valorizada como profissional e como pessoa"
  },
  {
    name: "Douglas",
    role: "Parceiro ActiveView",
    content: "Nossa parceria com o Grupo We Hub eh incrivel. O profissionalismo, a visão estratégica e o cuidado com cada detalhe superaram nossas expectativas.",
  },
  {
    name: "Sergio Pecanha",
    role: "CMO",
    content: "A abordagem estratégica da We Hub nos ajudou a escalar nosso negócio de forma sustentável.",
  },
  {
    name: "Carol Zelnik",
    role: "Parceiro JoinAds",
    content: "Parceria excepcional! A expertise da We Hub em monetização digital é incomparável no mercado.",
  },
  {
    name: "Renan Moralez",
    role: "Gerente Taboola",
    content: "A equipe da We Hub sabe como transformar audiência em resultado. É sempre um prazer apoiá-los.",
  },
  {
    name: "Monise Alves",
    role: "Gerente de Marketing",
    content: "Entrei para somar e acabei aprendendo muito mais do que esperava. O ambiente é inovador, colaborativo. Me sinto valorizada como profissional e como pessoa"
  },
  {
    name: "Douglas",
    role: "Parceiro ActiveView",
    content: "Nossa parceria com o Grupo We Hub eh incrivel. O profissionalismo, a visão estratégica e o cuidado com cada detalhe superaram nossas expectativas.",
  },
  {
    name: "Sergio Pecanha",
    role: "CMO",
    content: "A abordagem estratégica da We Hub nos ajudou a escalar nosso negócio de forma sustentável.",
  },
  {
    name: "Carol Zelnik",
    role: "Parceiro JoinAds",
    content: "Parceria excepcional! A expertise da We Hub em monetização digital é incomparável no mercado.",
  },
  {
    name: "Renan Moralez",
    role: "Gerente Taboola",
    content: "A equipe da We Hub sabe como transformar audiência em resultado. É sempre um prazer apoiá-los.",
  },
]

export default function Feedbacks() {
  return (
    <Carousel
      opts={{
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 2000
        }),
      ]}
    >
      <CarouselContent>
        {
          feedbacks.map((feedback, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 md:p-6">
              <div className="shadow-lg bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-3xl h-full flex flex-col justify-between">
                <div className="flex items-center gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-black">{feedback.name}</h3>
                    <p className="text-black/80">{feedback.role}</p>
                  </div>
                </div>
                <p className="text-lg text-black leading-relaxed mb-6">"{feedback.content}"</p>
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black text-black" />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious className="bg-white/0 hover:bg-white/20 disabled:bg-gray-600" />
      <CarouselNext className="bg-white/0 hover:bg-white/20 disabled:bg-gray-600" />
    </Carousel>
    
  )
}
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
    name: "Carlos Silva",
    role: "CEO",
    content:
      "A We Hub transformou completamente nossa estratégia digital. Em 6 meses, aumentamos nossa receita em 300%.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ana Costa",
    role: "Diretora de Marketing",
    content: "Parceria excepcional! A expertise da We Hub em monetização digital é incomparável no mercado.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Roberto Santos",
    role: "Fundador",
    content: "Resultados impressionantes desde o primeiro mês. A We Hub realmente entende de negócios digitais.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Marina Oliveira",
    role: "CMO",
    content: "A abordagem estratégica da We Hub nos ajudou a escalar nosso negócio de forma sustentável.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Feedbacks() {
  return (
    <Carousel
      opts={{
        align: "start",
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
                  <img
                    src={feedback.avatar || "/placeholder.svg"}
                    alt={feedback.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
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
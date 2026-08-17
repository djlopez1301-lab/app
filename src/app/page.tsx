'use client'

import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center">
      {/* Background Image with Object Cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Niños en clase"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d346b] via-[#0d346b]/80 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 lg:px-24 py-20">
        <div className="max-w-xl">
          <FadeIn>
            <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
              Invierte en su
              <br />
              <span className="font-script text-[#4dc2f8] font-normal text-6xl md:text-7xl lg:text-8xl lowercase -mt-4 block transform -rotate-2">futuro</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="flex items-center gap-4 my-8 w-full max-w-md">
            <div className="h-[1px] bg-white/30 flex-1"></div>
            <Star className="w-4 h-4 text-white fill-white" />
            <div className="h-[1px] bg-white/30 flex-1"></div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-10">
              Apoyamos a estudiantes de Lempira con becas educativas para construir un mejor mañana.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Link 
              href="/solicitar-beca" 
              className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold px-8 py-4 rounded-xl border-2 border-white/20 hover:border-white/40 shadow-apple transition-all duration-300 hover:-translate-y-1 hover:shadow-apple-lg group"
            >
              <span>SOLICITAR BECA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}

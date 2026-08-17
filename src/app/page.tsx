'use client'

import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Star, GraduationCap, Settings2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import PublicHeader from "@/components/PublicHeader";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PublicHeader />
      
      <main className="flex flex-col w-full flex-1">
        {/* Hero Section */}
        <section className="relative flex items-center min-h-[500px] max-h-[60vh] w-full shadow-inner">
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
          <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 lg:px-24 py-16">
            <div className="max-w-xl">
              <FadeIn>
                <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                  Invierte en su
                  <br />
                  <span className="font-script text-[#4dc2f8] font-normal text-6xl md:text-7xl lg:text-8xl lowercase -mt-4 block transform -rotate-2">futuro</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2} className="flex items-center gap-4 my-6 w-full max-w-md">
                <div className="h-[1px] bg-white/30 flex-1"></div>
                <Star className="w-4 h-4 text-white fill-white" />
                <div className="h-[1px] bg-white/30 flex-1"></div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-white/90 text-lg font-medium leading-relaxed max-w-lg mb-8">
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
        </section>

        {/* Programas Section */}
        <section className="py-20 w-full relative z-30 shadow-[-0_10px_20px_rgba(0,0,0,0.1)] bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-secondary mb-4">Nuestros Programas de Apoyo</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Iniciativas enfocadas en el desarrollo integral de la comunidad, brindando herramientas y oportunidades para un futuro más brillante.
              </p>
            </div>
          </FadeIn>

          {/* Grid de 4 bloques (Alternado Color / Foto) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-[400px] md:h-[350px] lg:h-[450px]">
            
            {/* Bloque 1: Sistema de Gestión (Color) */}
            <div className="bg-brand-primary text-white p-10 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.02] hover:z-10 shadow-apple">
              <Settings2 className="w-16 h-16 mb-6 text-white" />
              <h3 className="text-2xl font-bold mb-4">Sistema de Gestión</h3>
              <p className="text-white/80 mb-8 text-sm">
                Plataforma administrativa integral para coordinar eficientemente los recursos y el personal.
              </p>
              <Link href="/admin/usuarios" className="px-6 py-2 border border-white/50 rounded-full hover:bg-white hover:text-brand-primary transition-colors text-sm font-medium inline-flex items-center gap-2">
                Leer más <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bloque 2: Imagen (Sistema de Gestión) */}
            <div className="relative overflow-hidden group">
              <Image 
                src="/hero-bg.jpg" 
                alt="Gestión" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-brand-secondary/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Bloque 3: Becas y Ayudas (Color) */}
            <div className="bg-brand-secondary text-white p-10 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.02] hover:z-10 shadow-apple">
              <GraduationCap className="w-16 h-16 mb-6 text-[#4dc2f8]" />
              <h3 className="text-2xl font-bold mb-4">Becas y Ayudas Sociales</h3>
              <p className="text-white/80 mb-8 text-sm">
                Apoyo directo a estudiantes y familias para garantizar el acceso a la educación y el bienestar.
              </p>
              <Link href="/solicitar-beca" className="px-6 py-2 border border-white/50 rounded-full hover:bg-white hover:text-brand-secondary transition-colors text-sm font-medium inline-flex items-center gap-2">
                Leer más <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bloque 4: Imagen (Becas) */}
            <div className="relative overflow-hidden group">
              <Image 
                src="/becas-bg.jpg" 
                alt="Becas Escolares" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-brand-secondary/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

          </div>
        </div>
      </section>
      </main>
    </div>
  );
}

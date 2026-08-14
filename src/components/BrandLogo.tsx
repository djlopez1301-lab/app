import { Star, MapPin } from 'lucide-react';

export default function BrandLogo({ className = "", light = true }: { className?: string, light?: boolean }) {
  const textColor = light ? 'text-white' : 'text-brand-secondary';
  
  // El color del "recorte" debe ser igual al color de fondo para crear la ilusión de que la letra está hueca.
  const cutoutColor = light ? 'text-brand-primary' : 'text-white';
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-2">
        <div className={`text-4xl md:text-5xl font-black tracking-tighter uppercase flex items-center ${textColor}`}>
          W
          {/* La letra 'I' con la estrella encima como en la imagen original */}
          <span className="relative flex flex-col items-center mx-[1px]">
            <Star className="w-2.5 h-2.5 md:w-3 md:h-3 absolute -top-2 md:-top-2.5" fill="currentColor" />
            I
          </span>
          LS
          {/* La letra 'O' con el mapa (Pin) incrustado simulando un recorte */}
          <span className="relative flex items-center justify-center mx-[1px]">
             O
             <MapPin className={`w-3 h-3 md:w-4 md:h-4 absolute ${cutoutColor} transform translate-y-[1px]`} fill="currentColor" />
          </span>
          N
        </div>
        <span className={`text-2xl md:text-3xl font-bold tracking-widest uppercase mt-1.5 ${textColor}`}>
          Pineda
        </span>
      </div>
      <p className={`font-script text-2xl md:text-3xl mt-0.5 -rotate-2 ${textColor}`}>
        Por Lempira siempre...
      </p>
    </div>
  );
}

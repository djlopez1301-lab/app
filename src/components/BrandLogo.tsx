import { Map } from 'lucide-react';

export default function BrandLogo({ className = "", light = true }: { className?: string, light?: boolean }) {
  const textColor = light ? 'text-white' : 'text-brand-secondary';
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-2">
        <div className={`text-4xl md:text-5xl font-black tracking-tighter uppercase flex items-center ${textColor}`}>
          WILS
          <span className="relative flex items-center justify-center mx-0.5">
             <Map className={`w-8 h-8 md:w-10 md:h-10 ${textColor} fill-current/20`} />
          </span>
          N
        </div>
        <span className={`text-2xl md:text-3xl font-bold tracking-widest uppercase mt-2 ${textColor}`}>
          Pineda
        </span>
      </div>
      <p className={`font-script text-2xl md:text-3xl mt-1 -rotate-2 ${textColor}`}>
        Por Lempira siempre...
      </p>
    </div>
  );
}

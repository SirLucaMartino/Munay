import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { IMAGES } from '../constants/images';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      >
        <div className="absolute inset-0 bg-dark-green/70" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Resolviendo tus deudas, juntos
          </h1>
          <p className="text-lg md:text-xl text-cream mb-8">
            En Munay Legal, nos especializamos en brindar soluciones legales efectivas 
            para tus problemas financieros. Nuestro equipo de expertos está aquí para 
            ayudarte a recuperar tu tranquilidad financiera.
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="btn-primary inline-flex items-center group cursor-pointer"
          >
            Agenda una Consulta
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
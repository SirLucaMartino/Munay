import { 
  Scale, Home, Coins, Heart, Users, Building2, Briefcase, FileText 
} from 'lucide-react';
import { useState } from 'react';
import FadeInOnScroll from './animations/FadeInOnScroll';
import Modal from './ui/Modal';
import serviceDetails from './ServiceDetails';

const services = [
  {
    icon: Scale,
    name: 'Herencias',
    description: 'Asesoría experta en procesos sucesorios y distribución de bienes.'
  },
  {
    icon: Heart,
    name: 'Divorcios',
    description: 'Acompañamiento legal comprensivo en procesos de separación.'
  },
  {
    icon: Coins,
    name: 'Deudas',
    description: 'Soluciones efectivas para manejar y resolver situaciones financieras.'
  },
  {
    icon: Users,
    name: 'Pensión de Alimentos',
    description: 'Protección de los derechos de manutención familiar.'
  },
  {
    icon: Home,
    name: 'Régimen de Relación Directa',
    description: 'Gestión de acuerdos de visitas y relación con los hijos.'
  },
  {
    icon: FileText,
    name: 'Civil',
    description: 'Representación en diversos asuntos de derecho civil.'
  },
  {
    icon: Building2,
    name: 'Bienes Raíces',
    description: 'Asesoría en transacciones inmobiliarias y propiedad.'
  },
  {
    icon: Briefcase,
    name: 'Empresas',
    description: 'Soporte legal integral para negocios y corporaciones.'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-soft-green text-lg max-w-2xl mx-auto">
              Ofrecemos soluciones legales integrales adaptadas a tus necesidades específicas
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeInOnScroll key={service.name} delay={index * 100}>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <service.icon className="w-12 h-12 text-orange mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange transition-colors">{service.name}</h3>
                <p className="text-soft-green mb-4">{service.description}</p>
                <button 
                  onClick={() => setSelectedService(service.name)}
                  className="text-orange hover:text-orange-hover font-semibold transition-colors group-hover:translate-x-2 inline-flex items-center"
                >
                  Más Información
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>

      {selectedService && serviceDetails[selectedService] && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={serviceDetails[selectedService].name}
        >
          <div className="prose prose-green max-w-none">
            <p className="whitespace-pre-line text-soft-green">
              {serviceDetails[selectedService].description}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="btn-primary"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
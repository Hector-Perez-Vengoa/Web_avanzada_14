import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Ponte en contacto con Hector Perez para hablar sobre proyectos de desarrollo web y colaboraciones.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Contacto
      </h1>
      <p className="text-gray-600 mb-8">
        ¿Tienes un proyecto o una idea en mente? Completa el formulario y me
        pondré en contacto contigo lo antes posible.
      </p>
      <ContactForm />
    </main>
  );
}

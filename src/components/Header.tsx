"use client";

import { personalInfo } from '@/lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre Mí' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
          >
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-gray-500">Portafolio de</span>
              <span className="text-lg font-semibold text-gray-900">
                {personalInfo.name}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative transition-colors hover:text-blue-600 ${
                        isActive ? 'text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-blue-600" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
"use client"
import { FC, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'booking', label: 'Booking' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' },
] as const;

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return { id, top: rect.top };
        }
        return { id, top: 0 };
      });

      const current = sections.reduce((acc, section) => {
        return Math.abs(section.top) < Math.abs(acc.top) ? section : acc;
      });

      setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItems = ({ className, onClick }: { className?: string; onClick?: (id: string) => void }) => (
    <div className={cn('flex flex-col md:flex-row md:items-center gap-6 md:gap-12 2xl:gap-16', className)}>
      {navLinks.map(({ id, label }) => (
        <button key={id} onClick={() => onClick?.(id)}
          className={cn(
            'text-sm 2xl:text-base font-medium hover:text-orange-500 transition-all',
            activeSection === id ? 'text-orange-500' : 'text-white',
            'justify-start md:justify-center'
          )}>
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm px-4 py-4 md:px-8 lg:px-20 2xl:px-28 2xl:py-6 z-50 border-b border-white/10">
      <div className="mx-auto max-w-[1920px] flex items-center justify-between">

        <button onClick={() => scrollToSection('home')} className="text-2xl 2xl:text-4xl font-bold text-orange-500 hover:text-orange-400 transition-colors my-1 mx-3 xl:p-0">
          GAPSTAYS
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavItems onClick={scrollToSection} />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/95 backdrop-blur-sm border-white/10">
            <SheetHeader className="text-left">
              <SheetTitle className="text-white ml-2">Navigation</SheetTitle>
            </SheetHeader>
            <SheetClose asChild className="absolute right-4 top-4">
              <Button variant="ghost" size="icon" className="text-white mt-1">
                <X className="h-6 w-6" />
              </Button>
            </SheetClose>
            <div className="mt-12">
              <NavItems onClick={scrollToSection} className="gap-6" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
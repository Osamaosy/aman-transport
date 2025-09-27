import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <img 
              src="/images/image.png" 
              alt="شركة الأمان للنقل - لوجو شركة نقل عفش بالرياض" 
              className="w-12 h-12 object-contain rounded-lg"

            />
            <div>
              <h1 className="text-2xl font-bold text-emerald-800">الأمان للنقل</h1>
              <p className="text-sm text-gray-600">نقل آمن ومضمون</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">الرئيسية</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">من نحن</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">خدماتنا</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">أعمالنا</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">اتصل بنا</button>
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2 space-x-reverse">
            <Phone className="w-5 h-5 text-emerald-600" />
            <a id="call_button" href="tel:+966562283774" className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors">
              056-228-3774
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollToSection('hero')} className="text-right text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium">الرئيسية</button>
              <button onClick={() => scrollToSection('about')} className="text-right text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium">من نحن</button>
              <button onClick={() => scrollToSection('services')} className="text-right text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium">خدماتنا</button>
              <button onClick={() => scrollToSection('gallery')} className="text-right text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium">أعمالنا</button>
              <button onClick={() => scrollToSection('contact')} className="text-right text-gray-700 hover:text-emerald-600 transition-colors py-2 font-medium">اتصل بنا</button>
              <div className="flex items-center justify-center space-x-2 space-x-reverse pt-2">
                <Phone className="w-5 h-5 text-emerald-600" />
                <a href="tel:+966562283774" className="text-emerald-600 font-semibold">+966 56 228 3774</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
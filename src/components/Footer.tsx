import { Phone, Mail, MapPin, Github, Linkedin, MessageCircle, Heart, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(5,150,105,0.3) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative">
                <img 
                  src="/images/image.png" 
                  alt="شركة الأمان للنقل - لوجو" 
                  className="w-12 h-12 object-contain bg-white rounded-xl p-2 shadow-lg"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  الأمان للنقل
                </h3>
                <p className="text-gray-400 text-sm">نقل آمن ومضمون</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              شركة الأمان للنقل - الخيار الأول لنقل العفش والأثاث بالرياض. نضمن لك خدمة آمنة ومضمونة مع أعلى معايير الجودة والاحترافية.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center space-x-2 space-x-reverse">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>روابط سريعة</span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#hero", text: "الرئيسية" },
                { href: "#about", text: "من نحن" },
                { href: "#services", text: "خدماتنا" },
                { href: "#gallery", text: "أعمالنا" },
                { href: "#contact", text: "اتصل بنا" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:mr-2 transition-all duration-300">←</span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">معلومات التواصل</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
                <Phone className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">خدمة العملاء:</div>
                  <a href="tel:+966562283774" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                    056-228-3774
                  </a>
                  <div className="text-sm text-amber-400 mt-3 mb-1">الشكاوي:</div>
                  <a href="tel:0544200405" className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
                    054-420-0405
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a href="mailto:amanlilnagl@gmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  amanlilnagl@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">الرياض، السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-6">
          {/* Compact Developer Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-1 flex items-center justify-center md:justify-start space-x-2 space-x-reverse">
                <span>© 2025 شركة الأمان للنقل. جميع الحقوق محفوظة.</span>
                <Heart className="w-4 h-4 text-red-400" />
              </p>
              <div className="flex justify-center md:justify-start items-center space-x-2 space-x-reverse text-sm text-gray-500">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>موقع محسن ومطور بأحدث التقنيات</span>
              </div>
            </div>

            {/* Compact Developer Info */}
            <div className="flex items-center space-x-4 space-x-reverse p-4 rounded-xl bg-gradient-to-r from-emerald-600/10 to-green-600/10 border border-emerald-500/20 backdrop-blur-sm">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Code className="w-5 h-5 text-emerald-400" />
                <div className="text-right">
                  <div className="text-xs text-gray-400 mb-1">تصميم وتطوير</div>
                  <h4 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    أسامة إبراهيم رزق
                  </h4>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2 space-x-reverse">
                <a 
                  href="https://github.com/Osamaosy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-2 rounded-lg bg-gray-800 border border-gray-600 hover:border-gray-400 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/osama-rezk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-2 rounded-lg bg-blue-600 border border-blue-500 hover:border-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 text-white group-hover:text-blue-100 transition-colors" />
                </a>
                
                <a 
                  href="https://wa.me/201277122289" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-2 rounded-lg bg-green-600 border border-green-500 hover:border-green-400 transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-4 h-4 text-white group-hover:text-green-100 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-60 h-60 bg-green-600/10 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
import { Phone, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, rgba(5,150,105,0.3) 2px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-4">
              <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">
                <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-emerald-900 leading-tight">
                شركة الأمان للنقل
              </h1>
              <h2 className="text-xl lg:text-2xl text-emerald-700 font-semibold">
                الخيار الأول لنقل العفش والأثاث بالرياض
              </h2>
              <h3 className="text-lg text-gray-600 font-medium">
                نقل آمن • تخزين مضمون • خدمة متميزة
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 bg-white/70 p-6 rounded-xl shadow-sm">
              شركة الأمان للنقل تضمن لك نقل عفشك وأثاثك بأمان تام وجودة عالية.
              نحن متخصصون في تقديم خدمات النقل الآمن مع التخزين المحترف وخدمات
              الفك والتركيب المتخصصة في جميع أنحاء الرياض.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                id="call_button"
                href="tel:+966562283774"
                onClick={() => {
                  // Google Ads conversion tracking
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "conversion", {
                      send_to: "AW-17595622131/4Z1YCM6pkKMbEPPFn8ZB", // لزر الاتصال
                    });
                  }
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Phone className="w-5 h-5" />
                <span>اتصل الآن</span>
              </a>

              <a
                id="call_button"
                href="tel:+966562283774"
                onClick={() => {
                  // Google Ads conversion tracking
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "conversion", {
                      send_to: "AW-17595622131/4Z1YCM6pkKMbEPPFn8ZB", // لزر الاتصال
                    });
                  }
                }}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 text-center flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Phone className="w-5 h-5" />
                <span>056-228-3774</span>
              </a>

              <a
                id="whatsapp_button"
                href="https://wa.me/+966562283774"
                onClick={() => {
                  // Google Ads conversion tracking
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "conversion", {
                      send_to: "AW-17595622131/_PhUCL61g6MbEPPFn8ZB", // لزر الواتساب
                    });
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 space-x-reverse"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>واتساب</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <img
                src="/images/hero.webp"
                alt="شركة الأمان للنقل - فريق محترف لنقل العفش والأثاث بالرياض"
                className="w-full h-96 lg:h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-emerald-900 bg-opacity-20"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border-2 border-emerald-100">
              <img
                src="/images/image.png"
                alt="شركة الأمان للنقل - لوجو"
                className="w-12 h-12 object-contain rounded-lg"
              />
            </div>

            {/* Trust Badge */}
            <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white p-4 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">+15</div>
                <div className="text-sm">سنة خبرة</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-emerald-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

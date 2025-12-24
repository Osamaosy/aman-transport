import { Phone, ArrowDown } from "lucide-react";
import { gtagReportConversion, CONVERSION_IDS } from "../utils/gtag";

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
                  gtagReportConversion(CONVERSION_IDS.PHONE_CALL);
                }}
                className="bg-emerald-600 hover:bg-emerald-700 ..." // (باقي الكلاسات كما هي)
              >
                <Phone className="w-5 h-5" />
                <span>اتصل الآن</span>
              </a>

              <a
                id="call_button_1"
                href="tel:+966562283774"
                onClick={() => {
                  gtagReportConversion(CONVERSION_IDS.PHONE_CALL);
                }}
                className="border-2 border-emerald-600 ..." // (باقي الكلاسات كما هي)
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">+966 56 228 3774</span>
              </a>

              <a
                id="whatsapp_button"
                href="https://wa.me/966562283774" // لاحظ حذف علامة + هنا لأن واتساب يفضل الرقم بدونها في الرابط
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  gtagReportConversion(CONVERSION_IDS.WHATSAPP);
                }}
                className="bg-green-500 hover:bg-green-600 ..." // (باقي الكلاسات كما هي)
              >
                {/* أيقونة واتساب */}
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
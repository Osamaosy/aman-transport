import { Shield, Zap, Users, Target, Wrench, Wind, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      title: "نقل آمن ومضمون",
      description:
        "نقل العفش والأثاث بأمان تام مع ضمان شامل ضد أي أضرار محتملة",
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-500" />,
      title: "تخزين محترف",
      description:
        "مستودعات حديثة ومجهزة بأنظمة تحكم في المناخ والرطوبة لحفظ الأثاث",
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-500" />,
      title: "تعبئة وتغليف متخصص",
      description:
        "استخدام أفضل مواد التعبئة والتغليف لحماية الأثاث أثناء النقل والتخزين",
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-500" />,
      title: "نقل المكاتب والشركات",
      description:
        "خدمات متخصصة لنقل المكاتب والمؤسسات مع الحفاظ على سير العمل",
    },
    {
      icon: <Wrench className="w-8 h-8 text-emerald-500" />,
      title: "فك وتركيب احترافي",
      description:
        "فك وتركيب جميع أنواع الأثاث والعفش بواسطة فنيين متخصصين ومهرة",
    },
    {
      icon: <Wind className="w-8 h-8 text-emerald-500" />,
      title: "صيانة المكيفات",
      description: "فك وتركيب وصيانة أجهزة التكييف مع ضمان الجودة والكفاءة",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            خدماتنا المتميزة
          </h2>
          <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات المتخصصة في نقل وتخزين العفش والأثاث
            بأعلى معايير الأمان والجودة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 group border border-slate-100 hover:border-emerald-200"
            >
              <div className="text-center space-y-3">
                <div className="flex justify-center mb-3 p-3 bg-emerald-50 rounded-full w-fit mx-auto group-hover:bg-emerald-100 transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-700 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-3">
              احصل على خدمة متميزة الآن!
            </h4>
            <p className="text-emerald-50 mb-5">
              تواصل مع شركة الأمان للنقل للحصول على استشارة مجانية وعرض سعر مخصص
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
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
                className="bg-white text-emerald-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse shadow-sm"
              >
                <Phone className="w-4 h-4" />
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
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>واتساب</span>
              </a>

              <a
                id="call_button"
                href="tel:0544200405"
                onClick={() => {
                  // Google Ads conversion tracking
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "conversion", {
                      send_to: "AW-17595622131/4Z1YCM6pkKMbEPPFn8ZB", // لزر الاتصال
                    });
                  }
                }}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>الشكاوي: 0544200405</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

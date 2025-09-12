import { Users, Award, Shield, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "الأمان أولاً",
      description: "ضمان سلامة ممتلكاتك بنسبة 100%"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "فريق متخصص",
      description: "عمالة مدربة ومؤهلة بأعلى المعايير"
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      title: "جودة مضمونة",
      description: "التزام بأعلى معايير الجودة والإتقان"
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "التزام بالمواعيد",
      description: "دقة في التوقيت وسرعة في الإنجاز"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-emerald-900 mb-6">من نحن - شركة الأمان للنقل</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            رائدون في مجال نقل العفش والأثاث بالرياض منذ أكثر من 15 عاماً
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-emerald-800 leading-relaxed">
              شركة الأمان للنقل - شريكك الموثوق في نقل العفش
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              تأسست شركة الأمان للنقل لتكون الخيار الأول والأكثر موثوقية في مجال نقل العفش والأثاث بالرياض. 
              نحن نؤمن بأن الأمان والجودة هما أساس نجاحنا، لذلك نحرص على تقديم خدمات نقل متميزة تضمن 
              وصول ممتلكاتك بأمان تام وفي أفضل حالة.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              فريقنا المتخصص يتمتع بخبرة واسعة في التعامل مع جميع أنواع الأثاث والعفش، من القطع الثمينة والحساسة 
              إلى الأجهزة الكهربائية والمكيفات. نستخدم أحدث المعدات وأفضل مواد التعبئة والتغليف لضمان الحماية الكاملة 
              أثناء عملية النقل والتخزين.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                <span className="text-emerald-800 font-bold">+15 سنة خبرة</span>
              </div>
              <div className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                <span className="text-emerald-800 font-bold">+5000 عميل راضي</span>
              </div>
              <div className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                <span className="text-emerald-800 font-bold">ضمان شامل</span>
              </div>
              <div className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                <span className="text-emerald-800 font-bold">خدمة 24/7</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-emerald-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black mb-4">لماذا تختار شركة الأمان للنقل؟</h3>
            <p className="text-xl text-emerald-100">نحن نقدم أكثر من مجرد خدمة نقل، نحن نقدم راحة البال</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "أسعار تنافسية", desc: "أفضل الأسعار في السوق" },
              { title: "تأمين شامل", desc: "تأمين كامل على جميع الممتلكات" },
              { title: "فريق مدرب", desc: "عمالة مؤهلة ومدربة بأعلى المعايير" },
              { title: "خدمة متميزة", desc: "خدمة عملاء على مدار الساعة" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-emerald-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
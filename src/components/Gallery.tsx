const Gallery = () => {
  const galleryItems = [
    {
      image: "/images/image2.jpg",
      caption: "نقل آمن ومضمون",
      description: "فريق الأمان للنقل يضمن وصول عفشك بأمان تام وفي أفضل حالة"
    },
    {
      image: "/images/image3.png",
      caption: "تخزين محترف",
      description: "مستودعات حديثة ومجهزة بأحدث أنظمة الحماية والمراقبة"
    },
    {
      image: "/images/image1.jpg?auto=compress&cs=tinysrgb&w=800",
      caption: "تعبئة وتغليف متخصص",
      description: "استخدام أفضل مواد التعبئة لضمان الحماية الكاملة للأثاث"
    },
    {
      image: "/images/image4.png?auto=compress&cs=tinysrgb&w=800",
      caption: "فك وتركيب احترافي",
      description: "فنيون متخصصون في فك وتركيب جميع أنواع الأثاث والأجهزة"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-emerald-900 mb-6">أعمالنا المتميزة</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            نفخر بإنجازاتنا في مجال نقل العفش والأثاث بالرياض مع ضمان الأمان والجودة في كل مشروع
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-emerald-100"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">{item.caption}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-black text-center text-emerald-900 mb-12">آراء عملائنا الكرام</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "محمد العتيبي",
                text: "شركة الأمان للنقل تستحق الثقة فعلاً! نقلوا عفش منزلي بأمان تام ودون أي أضرار. فريق محترف وأسعار معقولة.",
                rating: 5
              },
              {
                name: "سارة الأحمد",
                text: "تجربة رائعة مع شركة الأمان للنقل. الفريق مدرب جداً ويتعامل مع الأثاث بعناية فائقة. أنصح بهم بقوة.",
                rating: 5
              },
              {
                name: "عبدالله الراشد",
                text: "خدمة متميزة وأمانة في التعامل. شركة الأمان للنقل هي الخيار الأفضل لنقل العفش في الرياض.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl shadow-lg border border-emerald-100">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-emerald-600 font-bold text-center">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
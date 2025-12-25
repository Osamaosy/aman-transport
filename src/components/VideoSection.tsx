import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <section id="video-section" className="py-16 bg-emerald-900">
            <div className="container mx-auto px-4">
                {/* العنوان والوصف */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                        شاهد جودة عملنا في دقيقة
                    </h2>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
                    <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                        مقتطفات حقيقية من أرض الواقع توضح دقة التغليف، أمان النقل، واحترافية الفريق في التعامل مع الأثاث
                    </p>
                </div>

                {/* حاوية الفيديو */}
                <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-500/30 bg-black">
                    <video
                        ref={videoRef}
                        // الكلاس max-h-[70vh] يضمن أن الفيديو لا يأخذ طول الشاشة بالكامل حتى لو كان طولياً
                        className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                        controls
                        playsInline
                        preload="none"
                        poster="/images/video-poster.webp" // تأكد من رفع صورة الغلاف بهذا الاسم
                        onPause={() => setIsPlaying(false)}
                        onPlay={() => setIsPlaying(true)}
                    >
                        {/* تأكد من رفع الفيديو بهذا الاسم داخل مجلد videos في public */}
                        <source src="/videos/montage.mp4" type="video/mp4" />
                        متصفحك لا يدعم تشغيل الفيديو.
                    </video>

                    {/* طبقة زر التشغيل المخصص (تختفي عند التشغيل) */}
                    {!isPlaying && (
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer group backdrop-blur-[2px]"
                            onClick={handlePlay}
                        >
                            <div className="w-24 h-24 bg-emerald-600/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse border-4 border-white/20">
                                <Play className="w-10 h-10 text-white fill-current ml-1" />
                            </div>
                            <div className="absolute mt-32 text-white font-bold text-lg bg-black/50 px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                اضغط للمشاهدة
                            </div>
                        </div>
                    )}
                </div>

                {/* زر الدعوة لاتخاذ إجراء (CTA) */}
                <div className="mt-10 text-center">
                    <a
                        href="tel:+966562283774"
                        className="inline-flex items-center justify-center px-10 py-4 bg-white text-emerald-900 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        اتصل الآن: 0562283774
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
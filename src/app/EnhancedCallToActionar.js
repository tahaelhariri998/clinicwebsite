import React, { useState, useEffect } from 'react';
import { Target, Check, Clock, TrendingUp, Users, ArrowRight, Sparkles, Star, CircleDot } from 'lucide-react';

const EnhancedCallToAction = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = -scrollPosition * 0.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 py-16 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          >
            <div className={`w-${Math.floor(Math.random() * 8 + 2)} h-${Math.floor(Math.random() * 8 + 2)} 
              bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-xl`}></div>
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto relative">
        {/* Hero Section with Parallax */}
        <div className="text-center mb-24 relative">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-r 
            from-orange-300/30 to-amber-300/30 rounded-full blur-3xl"
            style={{ transform: `translate(-50%, ${parallaxOffset}px)` }}
          ></div>
          <div className="relative">
            <div className="animate-bounce-slow absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="relative">
                <Target className="w-16 h-16 text-orange-400" />
                <Sparkles className="w-6 h-6 text-amber-400 absolute -top-2 -right-2 animate-spin-slow" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 pt-12 bg-gradient-to-r from-orange-600 to-amber-600 
              text-transparent bg-clip-text transform transition-transform hover:scale-105 duration-300">
              لماذا تخاطر بخسارة عملائك؟
            </h1>
            <p className="text-3xl text-orange-600 font-semibold animate-pulse">
              وأنت تقدر تجرب الحل مجاناً! 🎯
            </p>
          </div>
        </div>

        {/* Animated Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Users,
              text: "أكثر من 100 عيادة متميزة تستخدم أداتنا اليوم",
              gradient: "from-orange-400 to-amber-300"
            },
            {
              icon: TrendingUp,
              text: "70% من العملاء المترددين تحولوا إلى حجوزات مؤكدة",
              gradient: "from-amber-400 to-orange-300"
            },
            {
              icon: Clock,
              text: "14 يوم تجربة مجانية لاختبار النتائج بنفسك",
              gradient: "from-orange-300 to-amber-400"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="transform transition-all duration-500 hover:scale-110"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r opacity-20 blur-xl rounded-2xl 
                  transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"
                  style={{ background: `linear-gradient(to right, ${item.gradient})` }}
                ></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100
                  transform transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl
                      flex items-center justify-center transform transition-transform duration-300
                      group-hover:rotate-12">
                      <item.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <Star className={`w-6 h-6 text-amber-400 transition-opacity duration-300
                      ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                  <p className="text-gray-700 text-lg font-medium">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Features List */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-orange-100 mb-24
          transform transition-all duration-500 hover:shadow-orange-200/50">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
            ببساطة:
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-100 rounded-full animate-ping"></div>
          </h2>
          <div className="space-y-6">
            {[
              "جرب الأداة 14 يوم بدون أي تكلفة",
              "شوف النتائج بنفسك على عيادتك",
              "إذا لم تعجبك النتائج... لا تدفع شيئاً"
            ].map((text, index) => (
              <div 
                key={index}
                className="group flex items-center space-x-4 rtl:space-x-reverse p-6 rounded-xl
                  hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50
                  transition-all duration-300 transform hover:scale-102"
              >
                <div className="relative">
                  <Check className="w-8 h-8 text-orange-500 transform transition-transform duration-300
                    group-hover:scale-110 group-hover:rotate-12" />
                  <CircleDot className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 opacity-0
                    group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-gray-700 text-xl">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Section with Animation */}
        <div className="text-center mb-24 transform hover:scale-105 transition-transform duration-300">
          <div className="relative inline-block">
            <h3 className="text-3xl font-bold text-red-500 mb-6">
              الخسارة الحقيقية:
            </h3>
            <div className="absolute -inset-1 bg-red-100 rounded-lg blur opacity-30 
              group-hover:opacity-50 transition duration-300"></div>
          </div>
          <p className="text-2xl text-gray-700 animate-pulse">
            كم عميل راح تخسر بينما منافسيك يستخدمون الأداة؟
          </p>
        </div>

        {/* Enhanced CTA Button */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-amber-400/30 
            blur-3xl rounded-full transform scale-90 animate-pulse"></div>
          <button 
            className="group relative inline-flex items-center space-x-4 rtl:space-x-reverse 
              bg-gradient-to-r from-orange-500 to-amber-500 text-white px-12 py-6 rounded-2xl 
              text-2xl font-bold shadow-2xl hover:shadow-orange-300/50 transform hover:scale-110
              transition-all duration-500 hover:from-orange-600 hover:to-amber-600"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative">
              <Sparkles className={`absolute -top-2 -left-2 w-5 h-5 text-amber-200 
                transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              ابدأ تجربتك المجانية الآن
            </span>
            <ArrowRight className={`w-8 h-8 transition-all duration-500 
              ${isHovered ? 'transform translate-x-2 rtl:-translate-x-2' : ''}`} />
          </button>

          {/* Trust Indicators */}
          <div className="mt-12 flex justify-center items-center space-x-6 rtl:space-x-reverse">
            {['بدون بطاقة ائتمانية', 'إلغاء في أي وقت', 'دعم فني متواصل'].map((text, index) => (
              <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600
                transform transition-transform duration-300 hover:scale-105">
                <Check className="w-5 h-5 text-orange-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCallToAction;
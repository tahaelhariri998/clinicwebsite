
 
import ImageSlider from './ImageSlider';
 
import  StatsVisualizationtr  from "./StatsVisualizationtr";
 import  EnhancedCallToActiontr  from "./EnhancedCallToActiontr";
 
import "swiper/css";
import './globals.css';
import  ChallengesPagetr  from "./ChallengesPagetr";
import  InteractiveWorkflowtr  from "./InteractiveWorkflowtr";
import {  Brain, Users, ArrowLeft } from 'lucide-react';

import FAQSectiontr from "./FAQSectiontr"

 
const mainarbic = ({ elementRef }) => {

   
  const images = [
    {
      firstImage: '/im2.jpg', // Example image before
      secondImage: '/b2.jpg', // Example image after
    },   {
      firstImage: '/im4.png', // Example image before
      secondImage: '/b4.png', // Example image after
      
    },
    {
      firstImage: '/im5.png', // Example image before
      secondImage: '/b5.png', // Example image after
      
    },
    {
      firstImage: '/im1.jpg',
      secondImage: '/b1.jpg',
    },
    // Add more image pairs here
  ];
  return (


    <div>
   <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-8 md:p-16">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      {/* İçerik Bölümü */}
      <div className="order-2 md:order-2 space-y-8 relative text-left">
        {/* Ana Başlık */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            "Sonuçtan Korkuyor" diye kliniğiniz kaç müşteri kaybediyor? 🤔
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-700 space-y-4">
            <p className="font-medium">
              Saç ekimi sektörü için yapay zeka teknolojileri geliştirme konusunda uzmanız.
            </p>
            <p className="font-medium text-orange-600">
              Tereddütlü müşterileri müşterilere dönüştüren en gelişmiş teknoloji.
            </p>
          </div>
        </div>

        {/* Özellikler */}
        <div className="grid grid-cols-2 gap-4 ">
          <div className="bg-white/80 p-4 rounded-xl shadow-md backdrop-blur">
            <div className="flex items-center gap-3 text-orange-600">
              <Brain className="w-6 h-6" />
              <p className="text-s font-semibold"> Üretici Yapay Zeka </p>
            </div>
          </div>
          <div className="bg-white/80 p-4 rounded-xl shadow-md backdrop-blur">
            <div className="flex items-center gap-3 text-orange-600">
              <Users className="w-8 h-8" />
              <p className="text-s font-semibold"> Tereddütlü kişileri müşteriye dönüştürme </p>
            </div>
          </div>
        </div>

        {/* CTA Butonu */}
        <div className="pt-8">
          <button className="group relative w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xl md:text-2xl font-semibold py-4 md:py-6 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl shadow-lg overflow-hidden">
            Ücretsiz danışmanlık randevusu al - Buraya tıkla
            <ArrowLeft className="inline-block mr-2 w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Güvenlik Rozeti */}
       
      </div>
{/* Image Section */}
<div className="order-1 md:order-1">
  <div className="aspect-[2/3] bg-white rounded-2xl overflow-hidden shadow-2xl">
    <div className="relative w-full h-full">
    <div className="relative inset-x-0 top-16 z-10 text-center animate-pulse">
  <span className="px-6 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-2xl font-bold text-gray-800 shadow-lg 
    ring-2 ring-orange-400 ring-offset-2 ring-offset-white/10
    animate-[glow_2s_ease-in-out_infinite] hover:scale-105 transition-transform
    bg-gradient-to-r from-orange-100 via-white to-orange-100">
        İşte çözüm!
        </span>
      </div>
      <ImageSlider images={images} />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  </div>
</div>

    </div>
  </div>
</div>



<ChallengesPagetr />
<  StatsVisualizationtr />
<InteractiveWorkflowtr />

<EnhancedCallToActiontr />
<FAQSectiontr ref={elementRef} />
  </div>

  );
};

export default mainarbic;

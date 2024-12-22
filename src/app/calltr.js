import React from 'react';

const ContactUsComponent = () => {
  return (
    <>
      <div>
        <title>Bize Ulaşın - Next Graft</title>
        <meta name="description" content="Next Graft ile destek ve talepleriniz için WhatsApp ve e-posta üzerinden iletişime geçin." />
      </div>

      <main className="bg-gray-100 text-gray-800 font-sans leading-relaxed">
        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Bize Ulaşın</h1>
            <p className="text-lg">Next Graft olarak sizinle iletişimde olmaktan mutluluk duyarız. WhatsApp ve e-posta aracılığıyla 7/24 destek ve sorularınıza yanıt sağlıyoruz.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">E-posta</h2>
            <p className="text-lg mb-6">
              E-posta yoluyla bizimle iletişime geçebilirsiniz: 
              <a href="mailto:info@nextgraft.com" className="text-[#FF9500]">info@nextgraft.com</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Çalışma Saatleri</h2>
            <p className="text-lg mb-6">Haftanın her günü, 24 saat hizmetinizdeyiz.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sosyal Medya Hesaplarımız</h2>
            <p className="text-lg mb-6">Son haberler ve güncellemeler için sosyal medya hesaplarımızdan bizi takip edin:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <a href="https://instagram.com" target="_blank" className="text-[#FF9500]">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" className="text-[#FF9500]">
                  TikTok
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">WhatsApp Üzerinden Bize Ulaşın</h2>
            <a 
              href="https://wa.me/yourwhatsapplink" 
              className="inline-block px-6 py-3 bg-[#FF9500] text-white rounded-lg shadow-md hover:bg-[#e68a00] transition"
            >
              WhatsApp ile Bize Ulaşın
            </a>
          </div>
        </section>

        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <p className="text-lg">Next Graft olarak, müşterilerimize en üst düzeyde destek ve özen sunmayı taahhüt ediyoruz. Size yardımcı olmak için buradayız ve sizden haber almayı sabırsızlıkla bekliyoruz.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUsComponent;

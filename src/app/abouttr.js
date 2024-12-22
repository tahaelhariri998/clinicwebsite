import React from 'react';

const AboutComponent = () => {
  return (
    <>
      <div>
        <title>Hakkımızda - Next Graft</title>
        <meta name="description" content="Next Graft'ın yenilikçi ve kişiye özel saç ekimi yaklaşımını öğrenin." />
      </div>

      <main className="bg-gray-100 text-gray-800 font-sans leading-relaxed">
        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Hakkımızda - Next Graft</h1>
            <p className="text-lg">Next Graft&apos;a hoş geldiniz, burada yenilik ve uzmanlık, doğal güzelliğinizi yeniden tanımlamak için buluşuyor.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Özel Ortaklıklar</h2>
            <p className="text-lg mb-6">Türkiye ve BAE&apos;nin en iyi saç ekimi klinikleriyle stratejik ortaklıklar kurduk. Bu sayede, sektörün önde gelen saç ekimi uzmanlarına ve en son teknolojilerine doğrudan erişim sağlıyoruz. Bu ortaklıklar, gizlilik ve bireysel ilgiyi korurken en yüksek kalitede tıbbi hizmet almanızı garanti eder.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">En İyiyi En Uygun Fiyatla Karşılaştırın ve Seçin</h2>
            <p className="text-lg mb-6">Next Graft olarak, seçim ve değerin önemini anlıyoruz. Size en uygun hizmeti en iyi fiyatlarla seçebilmeniz için çeşitli hizmetleri karşılaştırabileceğiniz bir platform sunuyoruz. Bizim aracılığımızla, her klinik hakkında detaylı bilgiye ulaşabilir, sizin için önemli kriterlere göre seçim yapabilirsiniz.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kliniklerle Sizin İçin Doğrudan Pazarlık Yapıyoruz</h2>
            <p className="text-lg mb-6">En iyi fiyatları almanızı sağlamak için kliniklerle pazarlık yapma sorumluluğunu üstleniyoruz. Uzman pazarlık ekibimiz, sadece Next Graft aracılığıyla sunulan özel teklifler almanız için çaba gösterir. Her zaman sizin yararınıza çalışarak, optimal maliyetle sorunsuz bir deneyim yaşamanızı sağlıyoruz.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Neden Next Graft?</h2>
            <p className="text-lg">Next Graft&apos;ta, güven ve tam memnuniyetin sizinle olan ilişkimizin temeli olduğuna inanıyoruz. Saçınızı ve özgüveninizi geri kazanma yolculuğunuzda profesyonellik, şeffaflık ve tam destek sunuyoruz. Kalite ve detaylara özenin buluştuğu unutulmaz bir deneyim için Next Graft&apos;ı seçin.</p>
          </div>
        </section>

        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <p className="text-lg">Next Graft&apos;ta, saç ekimi yolculuğunuzu daha sorunsuz ve başarılı hale getirmek için sizi bekliyoruz.</p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </>
  );
};

export default AboutComponent;

import "./style.css";
import SecondBtn from "@ui/button/secondBtn.jsx";
import Cardsecond from "@ui/card/seconCard.jsx";
import studyCardImg1 from "@img/Rectangle 9.png"
import studyCardImg2 from "@img/Rectangle 9 (1).png"
import studyCardImg3 from "@img/Rectangle 9 (2).png"
import studyCardImg4 from "@img/Rectangle 9 (3).png"


export default function stydy() {
  return (
    <section className="study">
      <h4>
        Neler <span>Yapıyoruz?</span>
      </h4>
      <h1>Öğreniyoruz, sizinle paylaşıyoruz.</h1>
      <p>
        Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı yaptıkları
        yazıları inceleyelim.
      </p>
      <div className="study-btn">
        <SecondBtn>Hepsini Gör</SecondBtn>
        <SecondBtn>Web Tasarım</SecondBtn>
        <SecondBtn>Kurumsal Kimlik Tasarımı</SecondBtn>
        <SecondBtn>SEO</SecondBtn>
        <SecondBtn>Dijital Pazarlama</SecondBtn>
      </div>
      <div className="study-card">
        <Cardsecond
          img={studyCardImg1}
          h3="Sosyal CRM Nedir? Sosyal CRM Avantajları Nelerdir?"
          p="Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal..."
        />
        <Cardsecond
          img={studyCardImg2}
          h3="Dijital PR Nedir? Dijital PR Neden Gereklidir?"
          p="Dijital PR, sosyal medya platformları ve web siteleri üzerinden işletmelerin..."
        />
        <Cardsecond
          img={studyCardImg3}
          h3="Dijital Ajans Nedir? Doğru Dijital Ajans Nasıl Seçilir?"
          p="Bir dijital ajans arama motorları, e ticaret, web sitesi tasarımı gibi birçok alanda ..."
        />
        <Cardsecond
          img={studyCardImg4}
          h3="Online İtibar Yönetimi Nedir?"
          p="Online itibar yönetimi, markanızla dijital dünyada ortaya çıkan algıyı ..."
        />
      </div>
    </section>
  );
}

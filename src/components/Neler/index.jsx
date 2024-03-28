import "./style.css";
import Card from "@ui/card";

export default function neler() {
  return (
    <div className="neler">
      <h4>Neler <span>Yapıyoruz?</span></h4>
      <h2>3 adımda çalışma sürecimiz</h2>
      <p>
        360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
        İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri
        sunmaktayız.
      </p>
      <div className="cards">
        <Card
          img="src/assets/images/Coffee.svg"
          firstText="Keşif ve Planlama"
          secondText="Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır."
        />
        <Card
          img="src/assets/images/Package.svg"
          firstText="Tasarım ve Geliştirme"
          secondText="Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır."
        />
        <Card
          img="src/assets/images/ClockClockwise.svg"
          firstText="Test ve Yayına Alma"
          secondText="Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır."
        />
      </div>
    </div>
  );
}

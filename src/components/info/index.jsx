import Btn from "@ui/button";
import "./style.css"

export default function info() {
  return (
    <div className="info">
      <h1>İşinize uygun <span>tasarım</span> ve <span>yazılımlar</span> </h1>
      <p>
        360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
        İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri
        sunmaktayız.
      </p>
      <Btn>
        Detaylı İncele
      </Btn>
    </div>
  );
}

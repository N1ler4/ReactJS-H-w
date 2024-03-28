import "./style.css";

export default function about() {
  return (
    <section className="about">
      <h4>
        Neler <span>Yapıyoruz?</span>
      </h4>
      <h1>Sizin için neler yapıyoruz?</h1>
      <p>
        360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
        İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri
        sunmaktayız.
      </p>
      <div className="about-flex">
        <img src="src/assets/images/Rectangle 10.png" alt="" />
        <div className="about-text">
          <div className="about-text-main">
            <h2>Sizin için neler yapabiliriz beraber bakalım.</h2>
            <p>
              Tüm platformlarda sunduğumuz, web tasarım hizmetimiz ile ilgili
              bilgiler edinelim.
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <h3>Web Tasarım</h3>
              <p>
                Var olan veya yeni kurulan işletmenizin, modern bir kurumsal
                kimliğe sahip olması için web sitesi.
              </p>
            </div>
            <div className="about-card">
              <h3>Dijital Pazarlama</h3>
              <p>
                Web sitenizin veya işletmenizin, daha popüler hale gelmesi için
                çeşitli hizmetler sunuyoruz.
              </p>
            </div>
            <div className="about-card">
              <h3>Prodüksiyon</h3>
              <p>
                İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf
                çekimi ve prodüksiyon yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

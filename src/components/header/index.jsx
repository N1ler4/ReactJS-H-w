import "./style.css";
import Button from "@ui/button"


export default function header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 44 44"
            fill="none"
          >
            <ellipse
              cx="22"
              cy="22"
              rx="22"
              ry="22"
              transform="rotate(-90 22 22)"
              fill="#165DF5"
            />
          </svg>
          <h1 className="logo">Digital<span>Agency</span></h1>
        </div>
        <ul className="header-ul">
          <li className="header-li">
            <a href="#">Ana Sayfa</a>
          </li>
          <li className="header-li">
            <a href="#">Kurumsal</a>
          </li>
          <li className="header-li">
            <a href="#">Neler Yapıyoruz?</a>
          </li>
          <li className="header-li">
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className="btn">
            <span>En</span>
            <Button>Müşteri Girişi</Button>
        </div>
      </nav>
    </header>
  );
}

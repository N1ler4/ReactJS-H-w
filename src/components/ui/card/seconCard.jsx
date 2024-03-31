import "./style.css";

export default function secondCard({img, h3 , p}){
    return <div className="secondCard">
        <img src={img} alt="" />
        <a href="#">Dijital Pazarlama</a>
        <h3>{h3}</h3>
        <p>{p}</p>
        <a href="#">Devamını Oku</a>
    </div>
}
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import  Tilt  from "react-parallax-tilt";
import "../index.css";

function Card({ pokemonName, pokemonImageUrl, handleClick }) {
  const [flipped, setFlipped] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFlipped(!flipped);
    }, 1000);
  }, []);

  return (
    <div className="card">
      <ReactCardFlip isFlipped={flipped} cardStyles={{position:"relative"}}>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor={"#fff"}
          glarePosition={"all"}
        >
          <div className="card-front" onClick={()=>handleClick(pokemonName)} >
            <img src={pokemonImageUrl}></img>
            <p className="pokemonName">{pokemonName}</p>
          </div>
        </Tilt>
        <div
          className="card-back"
        >
            <img src="/card-back.png" />
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Card;

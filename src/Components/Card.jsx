import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import  Tilt  from "react-parallax-tilt";
import cardback from "../../public/card-back.png";

function Card({ pokemonName, pokemonImageUrl, handleClick }) {
  const [flipped, setFlipped] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFlipped(!flipped);
    }, 1000);
  }, []);

  return (
    <div style={{position:"absolute"}}>
      <ReactCardFlip isFlipped={flipped}>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor={"#fff"}
          glarePosition={"all"}
        >
          <div className="card card-front" onClick={()=>handleClick()} >
            <img src={pokemonImageUrl}></img>
            <p className="pokemonName">{pokemonName}</p>
          </div>
        </Tilt>
        <div
          className="card card-back"
        >
            <img src={cardback} />
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Card;

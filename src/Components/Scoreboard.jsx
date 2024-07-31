function Scoreboard({ currScore, maxScore }) {
  return (
    <>
      <div id="scoreboard">
        <p>Current Score: {currScore}</p>
        <p>Max Score: {maxScore}</p>
      </div>
    </>
  );
}

export default Scoreboard;

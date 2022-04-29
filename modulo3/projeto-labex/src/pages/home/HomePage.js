import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css";

function HomePage() {
  const navigate = useNavigate();

  const goList = () => {
    navigate("/trips/list");
  };

  const goAdmin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div>
        <div>
          <h1>LabeX</h1>
        </div>
      </div>
      <div className="button">
        <div>
          <button onClick={goList}> Ver Viagens</button>
        </div>
        <div>
          <button onClick={goAdmin}> Login </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

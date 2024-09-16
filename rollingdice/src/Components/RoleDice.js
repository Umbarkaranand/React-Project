import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = () => {
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNo = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNumber = generateRandomNo(1, 7);
    setCurrentDice(randomNumber);
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img
          src={process.env.PUBLIC_URL + `/images/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p>Click On Dice Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
  }
`;

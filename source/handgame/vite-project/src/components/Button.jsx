import React from "react";
import paperImg from "../assets/paper.png";
import rockImg from "../assets/rock.png";
import scissorsImg from "../assets/scissors.png";
import css from "../css/Button.module.css";

const Button = ({ choice, onClick, disabled }) => {
  // 선택 -> 이미지 및 스타일 매핑
  const choiceMap = {
    가위: { image: scissorsImg, style: "scissors" },
    바위: { image: rockImg, style: "rock" },
    보: { image: paperImg, style: "paper" },
  };

  const { image, style } = choiceMap[choice];

  return (
    //props으로 전달받아 렌더링
    <button
      className={`${css.button} ${css[style]}`}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={image} alt={choice} className={css.buttonImage}></img>
      <span className={css.buttonText}>{choice}</span>
    </button>
  );
};

export default Button;

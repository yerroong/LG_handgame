import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
// 모듈 방식 css의 형태는 아래 같이 작성
import css from "./css/App.module.css";

const App = () => {
  // 게임 상태 관리 결과, 유저선택, 컴퓨터선택, 게임진행여부
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 선택지 정의 ? -> 초기값
  const choices = ["가위", "바위", "보", "?"];

  // 컴퓨터 랜덤 선택 random 0 ~ 1 사이 , floor 정수 내림 처리
  const generateRandomChoice = () => {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
  };

  // 가위 바위 보 결과 -> 무승부, 유저 승 , 유저 패
  const determineWinner = (user, computer) => {
    if (user === computer) return "무승부";
    if (
      (user === "가위" && computer === "보") ||
      (user === "바위" && computer === "가위") ||
      (user === "보" && computer === "바위")
    ) {
      return "이겼다";
    }
    return "졌다";
  };

  // 승부처 동작 지연시간을 줘 비동기 처리
  const handleUserChoice = (choice) => {
    console.log("버튼 클릭", choice);
    if (isPlaying) return;
    setIsPlaying(true);
    setUserChoice(choice);
    setTimeout(() => {
      const computerChoice = generateRandomChoice();
      setComputerChoice(computerChoice);
      setResult(determineWinner(choice, computerChoice));
      setIsPlaying(false);
    }, 300);
  };

  // 게임 초기화
  const resetGame = () => {
    setComputerChoice(null);
    setUserChoice(null);
    setResult(null);
  };

  return (
    <div className={css.container}>
      {/* 제목 */}
      <h1>가위 바위 보 게임</h1>

      {/* 게임 영역 */}
      <section>
        {/* 카드 영역 , 플레이어 영역 */}
        <Card
          userTitle="유저"
          choice={userChoice}
          result={
            result === "이겼다" ? "이겼다" : result === "졌다" ? "졌다" : result
          }
          type="user"
        ></Card>
        <Card
          userTitle="컴퓨터"
          choice={computerChoice}
          result={
            result === "졌다" ? "이겼다" : result === "이겼다" ? "졌다" : result
          }
          type="computer"
        ></Card>
        {/* 버튼 영역 */}
        <div className={css.buttonGroup}>
          {choices.slice(0, 3).map((choice) => (
            <Button
              key={choice}
              choice={choice}
              onClick={() => handleUserChoice(choice)}
              disabled={isPlaying}
            />
          ))}
          {/* 결과 표시 */}
          <div className={css.resultDisplay}>{result || "결과는"}</div>
          {/* 리셋 버튼 */}
          <button className={css.resetButton} onClick={resetGame}>
            다시하기
          </button>
        </div>
      </section>

      {/* 게임 설명 영역 */}
      <div>
        <p>버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요.</p>
        <p>컴퓨터는 랜덤으로 선택합니다.</p>
      </div>
    </div>
  );
};

export default App;

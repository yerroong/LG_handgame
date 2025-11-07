# ✊✋🖐 LG Hand Game (Rock–Paper–Scissors)

React로 구현한 간단한 **가위바위보 게임** 프로젝트입니다.  
사용자와 컴퓨터가 각각 선택을 하고, 승패를 판정하는 인터랙티브한 미니 게임입니다.

---

## 📸 프로젝트 미리보기
><img width="1070" height="667" alt="image" src="https://github.com/user-attachments/assets/c931f08a-6e55-48e4-8fd4-ac80148d9ee0" />
> <img width="1073" height="671" alt="image" src="https://github.com/user-attachments/assets/d6f580a8-fffe-4502-97db-371078fa64d2" />
> <img width="1060" height="669" alt="image" src="https://github.com/user-attachments/assets/b5a3e80d-e81e-4020-90f8-4d3101a98a7b" />


---

## 📁 프로젝트 구조
├── src/
│ ├── assets/
│ │ ├── question.png # 물음표 이미지
│ │ ├── rock.png # 바위 이미지
│ │ ├── paper.png # 보 이미지
│ │ └── scissors.png # 가위 이미지
│ ├── components/
│ │ ├── Card.jsx # 플레이어/컴퓨터 카드 컴포넌트
│ │ └── Button.jsx # 선택 버튼 컴포넌트
│ ├── css/
│ │ ├── App.module.css # App 컴포넌트 스타일
│ │ ├── Card.module.css # Card 컴포넌트 스타일
│ │ └── Button.module.css # Button 컴포넌트 스타일
│ ├── App.jsx # 메인 앱 컴포넌트
│ ├── main.jsx # React 진입점
│ └── index.css # 글로벌 스타일
└── package.json # 프로젝트 설정 및 의존성


---

## ⚙️ 개발 세부 순서

1. **프로젝트 구조 설계**
   - React 프로젝트 생성
   - `components`, `css`, `assets` 폴더로 구조화

2. **자원 준비**
   - 가위(`scissors.png`), 바위(`rock.png`), 보(`paper.png`), 물음표(`question.png`) 이미지 추가
   - CSS 파일(module.css) 작성

3. **컴포넌트 설계**
   - **App.jsx**: 전체 게임 로직 및 상태 관리
   - **Card.jsx**: 플레이어/컴퓨터의 선택과 결과 표시
   - **Button.jsx**: 사용자 입력 버튼 구현

4. **게임 규칙 및 데이터 설계**
   - `choices` 객체 생성 → 이름과 이미지 매핑
   - `determineWinner()` → 승패 판정 로직
   - `generateComputerChoice()` → 컴퓨터 랜덤 선택

5. **상태 관리 구현**
   - `userChoice`, `computerChoice`, `result` 상태 정의
   - `handleUserChoice()` 함수로 게임 흐름 제어

6. **컴포넌트 구현**
   - 기본 UI 구성 및 레이아웃 정렬
   - Card 컴포넌트에 결과별 조건부 스타일링 적용
   - Button 컴포넌트에서 클릭 이벤트 처리

7. **UI 디테일 및 스타일 적용**
   - 승/패/무승부에 따라 다른 시각 효과 적용
   - 반응형 스타일링 추가

---

## 🧠 주요 상태 관리

### 1️⃣ App.jsx의 상태

| 상태명 | 설명 | 초기값 | 업데이트 시점 |
|--------|------|--------|----------------|
| `userChoice` | 사용자가 선택한 항목 | `null` | 버튼 클릭 시 설정 |
| `computerChoice` | 컴퓨터의 랜덤 선택 | `null` | `play()` 호출 시 랜덤 선택 |
| `result` | 게임 결과 ("이겼다", "졌다", "비겼다") | `"초기값"` | `determineWinner()` 실행 후 업데이트 |

---

### 2️⃣ 상태 흐름

사용자 버튼 클릭 → `handleUserChoice()` 호출 →  
`userChoice`, `computerChoice`, `result` 업데이트 →  
컴포넌트 리렌더링 및 결과 표시

---

### 3️⃣ 상태 전달 구조

- **App → Card**  
  props: `userTitle`, `choice`, `result`, `type`
- **App → Button**  
  props: `onClick`, `choice`, `disabled`

---

## 💡 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

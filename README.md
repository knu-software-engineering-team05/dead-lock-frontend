# [소프트웨어공학] DeadLock

## About

> 해당 프로젝트는 소프트웨어 공학 수업에서 진행 중이며, `뇌졸중 위험 예방 및 관리 시스템`의 Frontend Repo 입니다.

---

## Preview (TBD)

---

## Usage

1. Git Clone

```cmd
$ git clone https://github.com/knu-software-engineering-team05/dead-lock-frontend
```

2. Install package (* yarn을 추천드립니다.)

```cmd
$ yarn

# or

$ npm install
```

3. Start

```cmd
$ yarn start

# or

$ npm run start
```

4. Build & Deploy (TBD)

```cmd
$ yarn build

# or

$ npm run build
```

---
## Simple Project Structure
- `/src/components/pages/*`: 각 Page들을 구성하는 파일들
- `/src/routers.tsx`: 각 Page파일들을 routing 해주는 파일
- `/src/theme/*`, `/src/components/common/*`: 디자인 관련 파일들 (GlobalStyle, Reusing Components)
- `/src/service/*`, `/src/types/service.ts`, `/src/mock/*`: 서버 통신과 관련한 파일들 & Mock Data
- `/src/store/testStore.ts`: 뇌졸중 검사 시 도출되는 Data State를 모아두는 state management (Store)
- `/src/utils/*`: front에서 필요한 custom utils

--- 
## Used Tech Stack List
- React.js(v18) & TypeScript(v5)
- styled-components (Styling)
- axios (API)
- zustand (State Management)


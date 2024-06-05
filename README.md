# [소프트웨어공학] DeadLock

## About

> 해당 프로젝트는 소프트웨어 공학 수업에서 진행 중이며, `뇌졸중 위험 예방 및 관리 시스템`의 Frontend Repo 입니다.

---

## Preview
### UI
![deadlock_basic](https://github.com/knu-software-engineering-team05/dead-lock-frontend/assets/55488800/cf620495-8229-442a-8dae-3131eac10241)
![deadlock_main](https://github.com/knu-software-engineering-team05/dead-lock-frontend/assets/55488800/4f0be401-d0eb-4957-bf98-99914e7df9aa)

### Example Using GIF
<img src='https://github.com/knu-software-engineering-team05/dead-lock-frontend/assets/55488800/1e4e2385-b449-4e8a-b1cc-ffdc4bde7d41' alt='deadlock_example_using' width='200px' />


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

4. Build

```cmd
$ yarn build

# or

$ npm run build
```
---

## Path

- `/`: 메인 페이지
- `/signin`: 로그인 페이지
- `/signup`: 회원가입 페이지
- `/test`: 뇌졸중 검사 페이지
- `/results`: 이전에 진행했던 뇌졸중 검사 결과 리스트 페이지
- `/results/:id`: 뇌졸중 검사 결과 상세 페이지
  - `?type=basic`: 종합진단결과
  - `?type=helpful`: 생활습관 개선 프로그램

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


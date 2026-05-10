# SKN 4차 프로젝트 Frontend Playground

LG 가전 추천 서비스의 프론트엔드 목업입니다. 현재는 **DB / 백엔드 연동 없이 UI만 동작**하는 상태이며, 메인 / 로그인 / 마이페이지 / LG봇 채팅 / 검색 / 상품 상세 화면까지 라우팅 단위로 구성되어 있습니다.

실제 소스코드는 모두 `frontend/` 디렉터리 안에 있습니다.

---

## 기술 스택

| 분류 | 사용 기술 | 버전 |
| --- | --- | --- |
| 라이브러리 | React | ^19.2.5 |
| 언어 | TypeScript | ~6.0.2 |
| 빌드/개발 서버 | Vite | ^8.0.10 |
| 스타일링 | Tailwind CSS | ^4.3.0 |
| 라우팅 | react-router-dom | ^7.15.0 |
| 린팅 | ESLint + typescript-eslint | ^10.x |

### 왜 이 조합을 선택했는가

#### 1. React — UI를 컴포넌트 단위로 나누기 위해
- 메인 배너, 카테고리 카드, 채팅 사이드바, 상품 카드 등 **반복되고 재사용되는 UI 블록이 많기** 때문에, 컴포넌트 기반 라이브러리인 React가 적합합니다.
- 상태(state)와 props 만으로 화면이 자동으로 다시 그려지므로, "사용자 입력 → 화면 갱신" 흐름을 직관적으로 구현할 수 있습니다 (예: LG봇 채팅 입력 / 검색 필터).
- 생태계가 가장 크기 때문에 라우팅(`react-router-dom`), 스타일링, 폼, 차트 등 **필요한 라이브러리를 거의 항상 손쉽게 확보**할 수 있고, 팀원 간 학습 자료/레퍼런스를 찾기도 쉽습니다.

#### 2. TypeScript — 협업 시 휴먼 에러를 줄이기 위해
- 백엔드와 주고받을 데이터(상품, 사용자, 채팅 메시지 등)의 **형태(타입)를 코드로 명시**할 수 있어, 잘못된 필드 접근이나 오타를 IDE가 미리 잡아줍니다.
- 컴포넌트의 props가 어떤 값을 받는지 자동완성 / 타입 검사로 강제되므로, **여러 명이 같은 컴포넌트를 가져다 쓸 때 사용법을 빠르게 파악**할 수 있습니다.
- 추후 백엔드 API와 연동될 때, API 응답 타입을 한 번만 정의하면 모든 페이지에서 동일한 타입을 공유할 수 있어 유지보수가 쉬워집니다.

#### 3. Vite — 빠른 개발 경험(DX)을 위해
- Webpack 기반의 도구(예: 구버전 CRA)에 비해 **개발 서버 부팅과 HMR(Hot Module Replacement)이 매우 빠릅니다.** 코드를 수정하면 화면이 거의 즉시 갱신되어, 목업처럼 UI를 자주 갈아엎는 단계에서 특히 유리합니다.
- 별도의 복잡한 설정 없이 React + TS + Tailwind 플러그인을 끼우는 것만으로 동작합니다 (`vite.config.ts` 한 파일로 끝).
- 프로덕션 빌드는 Rollup 기반이라 결과물 번들 크기도 작습니다.

#### 4. Tailwind CSS — 일관된 디자인을 빠르게 작성하기 위해
- `bg-red-600`, `rounded-xl`, `flex items-center` 처럼 **유틸리티 클래스를 조합**해 스타일을 작성하므로, 별도 CSS 파일을 새로 만들지 않아도 됩니다. → 컴포넌트 파일 하나만 보면 마크업과 스타일을 동시에 파악할 수 있습니다.
- 디자인 토큰(색상, 간격, 반응형 브레이크포인트)이 **이미 일관된 스케일**로 정의되어 있어, 여러 명이 작업해도 디자인이 들쭉날쭉해지지 않습니다.
- `md:grid-cols-3 lg:grid-cols-5` 같이 **반응형 UI를 한 줄로** 작성할 수 있어, 모바일·데스크탑 대응이 빠릅니다.
- 사용된 클래스만 빌드에 포함되어(JIT) 최종 CSS 용량도 작습니다.

> 요약: **React(컴포넌트) + TS(안전성) + Vite(개발 속도) + Tailwind(스타일링 속도)** = 소수 인원이 짧은 시간 안에 일관된 UI를 만들고, 향후 백엔드와 연동하기에도 부담 없는 조합.

---

## 프로젝트 폴더 구조

```text
Min-playground/
├─ README.md                # ← 지금 이 파일 (전체 가이드)
└─ frontend/                # 실제 프론트엔드 소스
   ├─ public/               # 정적 파일 (favicon 등)
   ├─ src/
   │  ├─ components/        # 재사용 UI 컴포넌트
   │  │  ├─ account/        # 마이페이지 관련
   │  │  ├─ auth/           # 로그인/회원가입/비밀번호 찾기
   │  │  ├─ chat/           # LG봇 채팅 화면 구성요소
   │  │  ├─ product/        # 상품 상세 화면 구성요소
   │  │  ├─ search/         # 검색/카테고리 결과 화면
   │  │  ├─ CategoryCard.tsx
   │  │  └─ Header.tsx
   │  ├─ pages/             # 라우트 단위 페이지
   │  │  ├─ MainPage.tsx    # "/"
   │  │  ├─ LoginPage.tsx   # "/login"
   │  │  ├─ AccountPage.tsx # "/account"
   │  │  ├─ ChatPage.tsx    # "/chat"
   │  │  ├─ SearchPage.tsx  # "/search"
   │  │  └─ ProductPage.tsx # "/product/:productId"
   │  ├─ App.tsx            # 라우팅 정의
   │  ├─ main.tsx           # React 엔트리 포인트
   │  └─ index.css          # Tailwind 진입점 (@import "tailwindcss")
   ├─ index.html
   ├─ package.json
   ├─ vite.config.ts        # Vite + React + Tailwind 플러그인 설정
   └─ tsconfig*.json
```

### 라우트 한눈에 보기

`frontend/src/App.tsx` 기준입니다.

| 경로 | 페이지 | 설명 |
| --- | --- | --- |
| `/` | `MainPage` | 메인 배너, LG봇 진입, 카테고리 |
| `/login` | `LoginPage` | 로그인 / 회원가입 / ID·PW 찾기 |
| `/account` | `AccountPage` | 마이페이지 (프로필, 최근 본 상품 등) |
| `/chat` | `ChatPage` | LG봇 채팅 (사이드바 + 메시지 + 입력창) |
| `/search` | `SearchPage` | 카테고리 탭 / 필터 / 상품 그리드 |
| `/product/:productId` | `ProductPage` | 상품 상세 (요약 / 액션 / 탭) |

---

## 로컬에서 실행하는 방법

### 0. 사전 준비물

- **Node.js 20.19+ 또는 22.12+** (Vite 8 요구사항)
  - 확인: `node -v`
  - 설치: [https://nodejs.org/](https://nodejs.org/) 에서 LTS 버전 다운로드, 또는 `nvm` 사용
- **npm** (Node.js 설치 시 함께 설치됩니다)
  - 확인: `npm -v`
- **Git**
  - 확인: `git --version`

> Windows 사용자는 PowerShell, macOS / Linux 사용자는 터미널에서 동일하게 진행하면 됩니다.

### 1. 저장소 클론

```bash
git clone <이 저장소 URL>
cd Min-playground
```

### 2. `frontend` 폴더로 이동

> 이후의 모든 명령어는 `frontend/` 안에서 실행합니다.

```bash
cd frontend
```

### 3. 의존성 설치

```bash
npm install
```

> 처음 한 번만 실행하면 됩니다. `package.json`이 바뀌었거나(`git pull` 이후 의존성이 추가되었을 때) 한 번 더 실행해 주세요.

### 4. 개발 서버 실행

```bash
npm run dev
```

성공하면 터미널에 다음과 비슷한 메시지가 출력됩니다.

```text
  VITE v8.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

브라우저에서 [http://localhost:5173](http://localhost:5173) 으로 접속하면 메인 페이지가 보입니다.

> 코드를 수정하면 **저장하는 순간 화면이 자동으로 갱신**됩니다(HMR). 새로고침 필요 없음.

### 5. 개발 서버 종료

터미널에서 `Ctrl + C`.

---

## 자주 쓰는 npm 스크립트

`frontend/package.json` 기준이며, 모두 `frontend/` 디렉터리에서 실행합니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 (기본 포트 5173) |
| `npm run build` | 타입 체크(`tsc -b`) 후 프로덕션 빌드 (`dist/` 생성) |
| `npm run preview` | 빌드 결과물을 로컬에서 미리보기 |
| `npm run lint` | ESLint로 코드 정적 분석 |

---

## 트러블슈팅

- **`npm install` 시 권한/네트워크 에러**가 난다면, 사내망/프록시 환경인지 확인하고 캐시 정리 후 재시도하세요.
  ```bash
  npm cache clean --force
  # macOS / Linux
  rm -rf node_modules package-lock.json
  # Windows PowerShell
  Remove-Item -Recurse -Force node_modules, package-lock.json
  npm install
  ```
- **포트 5173이 이미 사용 중**이라면 Vite가 자동으로 다른 포트(5174 등)로 띄워주거나, 직접 지정할 수 있습니다.
  ```bash
  npm run dev -- --port 3000
  ```
- **Node 버전 에러(`Vite requires Node ...`)**가 보이면 Node.js를 20.19+ / 22.12+ 로 업그레이드하세요.
- **타입 에러로 빌드가 실패**할 때(`npm run build`)는 먼저 `npm run dev` 환경에서 어느 파일에서 에러가 나는지 확인 후 수정하세요. 개발 중에는 타입 에러가 있어도 화면은 떠 있을 수 있습니다.

---

## 개발/협업 규칙

- 페이지는 `frontend/src/pages`에서 관리합니다.
- 재사용 가능한 UI는 `frontend/src/components`로 분리합니다.
- 라우트 추가/변경 시 `frontend/src/App.tsx`를 함께 업데이트합니다.
- 병합 전 `npm run lint`, `npm run build` 실행을 권장합니다.

## 체크리스트

- [ ] 파일명/컴포넌트명 `PascalCase` 규칙 준수
- [ ] 라우팅 경로와 페이지 연결 확인
- [ ] 사용하지 않는 코드/스타일 제거
- [ ] PR에 변경 목적, 테스트 방법, 확인 결과 작성

---

## 참고

- 이 README는 **DB / 백엔드 연동 전 단계의 목업 사이트** 기준으로 작성되었습니다. 추후 API 연동, 상태 관리(예: TanStack Query), 환경 변수(`.env`) 설정이 추가되면 본 문서도 업데이트할 예정입니다.

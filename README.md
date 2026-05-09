# SKN 4차 프로젝트 Frontend Playground

이 저장소는 **React + TypeScript + Vite** 기반으로 4차 프로젝트 프론트엔드를 개발하기 위한 플레이그라운드입니다.  
페이지 단위 UI 구현, 라우팅 연결, 공통 컴포넌트 분리를 빠르게 진행하는 것을 목표로 합니다.

## 기술 스택

- React 19
- TypeScript
- Vite 8
- React Router DOM 7
- Tailwind CSS 4
- ESLint

## 프로젝트 실행 방법

아래 명령어는 `frontend` 디렉터리에서 실행합니다.

```bash
cd frontend
npm install
npm run dev
```

- 개발 서버 기본 주소: `http://localhost:5173`

## 주요 스크립트

`frontend/package.json` 기준:

- `npm run dev` : 개발 서버 실행
- `npm run build` : 타입 체크 + 프로덕션 빌드
- `npm run preview` : 빌드 결과 로컬 프리뷰
- `npm run lint` : ESLint 검사

## 현재 라우팅

`frontend/src/App.tsx` 기준으로 아래 페이지가 연결되어 있습니다.

- `/` : 메인 페이지 (`MainPage`)
- `/login` : 로그인 페이지 (`LoginPage`)
- `/account` : 계정 페이지 (`AccountPage`)
- `/chat` : 채팅 페이지 (`ChatPage`)
- `/search` : 검색 페이지 (`SearchPage`)
- `/product` : 상품 페이지 (`ProductPage`)

## 기본 폴더 구조

```text
Min-playground/
  frontend/
    src/
      components/   # 공통 UI 컴포넌트
      pages/        # 페이지 단위 컴포넌트
      App.tsx       # 라우터 엔트리
      main.tsx      # 앱 마운트 엔트리
```

## 개발/협업 규칙

- 페이지는 `frontend/src/pages`에서 관리합니다.
- 재사용 가능한 UI는 `frontend/src/components`로 분리합니다.
- 라우트 추가/변경 시 `App.tsx`를 함께 업데이트합니다.
- 병합 전 `npm run lint`, `npm run build` 실행을 권장합니다.

## 체크리스트

- [ ] 파일명/컴포넌트명 `PascalCase` 규칙 준수
- [ ] 라우팅 경로와 페이지 연결 확인
- [ ] 사용하지 않는 코드/스타일 제거
- [ ] PR에 변경 목적, 테스트 방법, 확인 결과 작성
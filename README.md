# SKN 4차 프로젝트 — LG 가전 추천 서비스

LG 가전 추천·검색·상담 UI를 **Django 백엔드와 같은 저장소에서** 개발하는 프로젝트입니다.  
초기에는 React 목업(`frontend/`)으로 화면을 잡았으나, API·인증·DB와 맞추기 위해 **React 없이** Django 템플릿 + 바닐라 JavaScript + Tailwind CSS(`django-tailwind`) 구조로 전환했습니다.

**실제 개발·실행 기준 디렉터리:** [`4th_project_test_design1/`](4th_project_test_design1/)

---

## 기술 스택

| 분류 | 사용 기술 | 비고 |
| --- | --- | --- |
| 백엔드 | Django 5.2 | `config` 프로젝트 |
| DB | SQLite | `db.sqlite3` (개발용) |
| 템플릿 | Django Templates | `templates/` 공통 레이아웃·컴포넌트 |
| 프론트 상호작용 | Vanilla JavaScript | `static/js/` (채팅·로그인·상품 등) |
| 스타일 | Tailwind CSS 4 + django-tailwind | `theme` 앱, PostCSS 빌드 |
| 이미지 | Pillow | 프로필 등 `ImageField` |
| 크롤링(데이터) | Selenium, BeautifulSoup | `products/data/` (상품 수집·전처리) |

### 왜 이 조합을 선택했는가

- **Django Templates** — 로그인 세션, CSRF, 서버 렌더링 URL(`{% url %}`)을 그대로 쓰면 백엔드 팀과 화면·라우트를 한 코드베이스에서 맞추기 쉽습니다.
- **Vanilla JS** — 채팅 입력, 탭 전환 등 페이지 단위 인터랙션만 필요해 SPA 프레임워크 없이도 충분합니다.
- **django-tailwind** — React+Vite와 동일하게 유틸리티 클래스로 UI를 빠르게 맞추면서, Django 정적 파일·템플릿 경로에 맞게 CSS를 빌드합니다 (`theme/static_src`).

> 요약: **백엔드(Django) + 서버 템플릿 + Tailwind** = API 분리 없이 인증·페이지·스타일을 한 프로젝트에서 유지보수하기 쉬운 구성.

---

## 프로젝트 폴더 구조

```text
Min-playground/
├─ README.md                      # ← 지금 이 파일
├─ frontend/                      # (참고용) 초기 React+Vite 목업 — 현재 미사용
└─ 4th_project_test_design1/      # ★ 실제 Django 앱
   ├─ config/                      # settings, urls, wsgi
   ├─ mainpage/                    # 메인
   ├─ accounts/                    # 로그인·마이페이지·회원
   ├─ products/                    # 검색·상품 상세·상품 DB/크롤링 데이터
   ├─ chats/                       # LG봇 채팅
   ├─ theme/                       # django-tailwind 테마 (PostCSS → CSS 빌드)
   │  └─ static_src/               # Tailwind 소스·npm 스크립트
   ├─ templates/                   # 페이지·재사용 컴포넌트 HTML
   │  ├─ base_page.html
   │  ├─ mainpage.html, loginpage.html, accountpage.html, …
   │  └─ components/               # header, auth, chat, product, search …
   ├─ static/                      # 정적 JS·이미지
   │  └─ js/                       # chatpage.js, loginpage.js, productpage.js
   ├─ media/                       # 업로드 파일 (프로필 등)
   ├─ manage.py
   └─ requirements.txt
```

### 라우트 한눈에 보기

`config/urls.py` 및 각 앱 `urls.py` 기준입니다.

| URL | 뷰 / 페이지 | 설명 |
| --- | --- | --- |
| `/` | `mainpage` | 메인 배너, LG봇 진입, 카테고리 |
| `/accounts/` | `loginpage` | 로그인 / 회원가입 / ID·PW 찾기 |
| `/accounts/account/` | `accountpage` | 마이페이지 |
| `/accounts/logout/` | `logout_view` | 로그아웃 (POST) |
| `/chats/` | `chatpage` | LG봇 채팅 |
| `/products/` | `searchpage` | 카테고리·필터·상품 목록 |
| `/products/<product_code>/` | `productpage` | 상품 상세 |

템플릿 베이스는 `templates/base_page.html`이며, `{% tailwind_css %}`로 빌드된 Tailwind CSS를 불러옵니다.

---

## 로컬에서 실행하는 방법

### 0. 사전 준비물

- **Python 3.11+** (권장)
  - 확인: `python --version`
- **Node.js 20+** (Tailwind PostCSS 빌드용)
  - 확인: `node -v`, `npm -v`
- **Git**
- (선택) 가상환경: `venv` 또는 `conda`

Windows에서 `django-tailwind`가 npm을 찾지 못하면 `config/settings.py`의 `NPM_BIN_PATH`를 본인 PC의 `npm.cmd` 경로에 맞게 수정하세요.

### 1. 저장소 클론

```bash
git clone <이 저장소 URL>
cd Min-playground/4th_project_test_design1
```

### 2. Python 가상환경 및 패키지 설치

```bash
python -m venv .venv

# Windows PowerShell
.\.venv\Scripts\Activate.ps1

# macOS / Linux
# source .venv/bin/activate

pip install -r requirements.txt
```

### 3. DB 마이그레이션

```bash
python manage.py migrate
```

### 4. Tailwind CSS 빌드 (개발 시 watch)

`theme/static_src`에서 npm 의존성을 설치한 뒤, CSS를 watch 모드로 빌드합니다.

```bash
cd theme/static_src
npm install
npm run dev
```

> 터미널을 하나 더 열어 Django 서버를 띄웁니다. Tailwind 클래스를 템플릿/JS에 추가했는데 스타일이 안 바뀌면 `theme/static_src/src/styles.css`의 `@source` 경로와 watch 프로세스 실행 여부를 확인하세요.

프로덕션용 일회성 빌드:

```bash
cd theme/static_src
npm run build
```

또는 django-tailwind 관리 명령을 사용할 수 있습니다 (설치 후).

```bash
python manage.py tailwind install   # 최초 1회
python manage.py tailwind start     # watch (별도 터미널)
```

### 5. Django 개발 서버 실행

```bash
# 프로젝트 루트(4th_project_test_design1)에서
python manage.py runserver
```

브라우저에서 [http://127.0.0.1:8000/](http://127.0.0.1:8000/) 으로 접속합니다.

### 6. 종료

각 터미널에서 `Ctrl + C`.

---

## 자주 쓰는 명령어

| 명령어 | 설명 |
| --- | --- |
| `python manage.py runserver` | Django 개발 서버 |
| `python manage.py migrate` | DB 스키마 반영 |
| `python manage.py createsuperuser` | 관리자 계정 (admin) |
| `cd theme/static_src && npm run dev` | Tailwind CSS watch 빌드 |
| `cd theme/static_src && npm run build` | Tailwind CSS 프로덕션 빌드 |

---

## 개발·협업 규칙

- **페이지** — `templates/*.html` (예: `mainpage.html`, `chatpage.html`)
- **재사용 UI** — `templates/components/` 하위 (`header.html`, `category_card.html` 등)
- **페이지별 JS** — `static/js/` (필요한 페이지만 `base_page.html`의 `{% block extra_js %}`에서 로드)
- **스타일** — HTML에 Tailwind 유틸리티 클래스 작성; 전역 CSS는 `theme/static_src/src/styles.css`
- **라우트 추가** — 해당 앱의 `urls.py` + `views.py` + 템플릿을 함께 수정
- **인증** — 커스텀 사용자 모델 `accounts.Account` (`AUTH_USER_MODEL`)

---

## 트러블슈팅

- **스타일이 전혀 적용되지 않음** — `theme/static_src`에서 `npm run dev` 또는 `npm run build`가 실행 중인지, `theme/static/css/dist/styles.css`가 생성됐는지 확인합니다.
- **`tailwind` 관련 npm 오류 (Windows)** — `config/settings.py`의 `NPM_BIN_PATH`를 실제 `npm.cmd` 경로로 맞춥니다.
- **마이그레이션 오류** — `python manage.py migrate`를 다시 실행하고, 모델 변경 후에는 `makemigrations`가 필요한지 확인합니다.
- **미디어(프로필 이미지)가 안 보임** — `DEBUG=True`일 때 `config/urls.py`가 `MEDIA_URL`을 서빙하는지 확인합니다.

---

## `frontend/` 폴더에 대해

저장소 루트의 `frontend/`는 **React + TypeScript + Vite**로 만든 초기 UI 목업입니다.  
현재 서비스 개발은 `4th_project_test_design1/` 기준이며, 레이아웃·컴포넌트 이름을 참고할 때만 사용하면 됩니다.

---

## 체크리스트 (PR 전)

- [ ] URL·템플릿·뷰 이름이 일치하는지 확인
- [ ] Tailwind 빌드 후 화면 깨짐 없는지 확인
- [ ] 로그인/로그아웃·CSRF 폼 동작 확인
- [ ] 사용하지 않는 템플릿·JS·스타일 제거
- [ ] PR에 변경 목적, 테스트 방법, 확인 결과 작성

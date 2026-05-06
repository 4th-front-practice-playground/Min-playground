const isLoggedIn = false;

const mypageSections = {
    profile: `
        <div class="content-heading-row">
            <h2>내 정보</h2>
            <button class="small-button" type="button">정보 수정</button>
        </div>
        <section class="profile-summary">
            <div class="profile-image">image</div>
            <div>
                <p class="profile-name">홍길동</p>
                <p class="profile-email">faeeoaf@gmail.com</p>
            </div>
        </section>
        <h3 class="mypage-section-title">관심 카테고리</h3>
        <div class="interest-grid">
            <div class="interest-item">TV</div>
            <div class="interest-item">냉장고</div>
            <div class="interest-item">청소기</div>
        </div>
        <h3 class="mypage-section-title">최근 검색 기록</h3>
        <div class="history-card">검색기록 3개 정도?</div>
        <h3 class="mypage-section-title">최근 추천 제품</h3>
        <div class="recommend-grid">
            <div class="recommend-card">제품 상세<br>이미지</div>
            <div class="recommend-card">제품 상세<br>이미지</div>
            <div class="recommend-card">제품 상세<br>이미지</div>
        </div>
    `,
    history: `<div class="placeholder-panel">검색 기록 placeholder</div>`,
    wishlist: `<div class="placeholder-panel">찜한 제품 placeholder</div>`,
    qna: `<div class="placeholder-panel">문의 내역 placeholder</div>`,
    settings: `<div class="placeholder-panel">설정 placeholder</div>`,
};

document.addEventListener("DOMContentLoaded", () => {
    if (document.body.dataset.page === "mypage") {
        checkLoginForMyPage();
        initMyPageNavigation();
    }
});

function goToMyPage() {
    window.location.href = isLoggedIn ? "/accounts/mypage/" : "/accounts/login/";
}

function handleLogin(event) {
    event.preventDefault();
    // TODO: Django 로그인 API 또는 form action과 연결합니다.
    console.log("login submitted");
}

function checkLoginForMyPage() {
    // TODO: 실제 로그인 상태 확인으로 교체합니다.
    // if (!isLoggedIn) {
    //     window.location.href = "/accounts/login/";
    // }
}

function initMyPageNavigation() {
    renderMyPageSection("profile");

    document.querySelectorAll(".mypage-nav-button").forEach((button) => {
        button.addEventListener("click", () => {
            renderMyPageSection(button.dataset.section);
            setActiveMyPageButton(button.dataset.section);
        });
    });
}

function renderMyPageSection(sectionName) {
    const content = document.getElementById("mypageContent");
    if (content) {
        content.innerHTML = mypageSections[sectionName] || mypageSections.profile;
    }
}

function setActiveMyPageButton(sectionName) {
    document.querySelectorAll(".mypage-nav-button").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.section === sectionName);
    });
}

const isLoggedIn = false;

const categoryLabels = {
    tv: "TV",
    refrigerator: "냉장고",
    "air-conditioner": "에어컨",
    vacuum: "청소기",
    "washing-machine": "세탁기",
};

const productData = [
    { id: 1, category: "tv", name: "LG OLED evo TV", code: "OLED-77C MOCK", price: "2,389,000원", power: 180 },
    { id: 2, category: "tv", name: "LG QNED TV", code: "QNED-65 MOCK", price: "2,100,000원", power: 165 },
    { id: 3, category: "tv", name: "LG UHD TV", code: "UHD-55 MOCK", price: "1,480,000원", power: 140 },
    { id: 4, category: "refrigerator", name: "LG 디오스 오브제컬렉션", code: "REF-870 MOCK", price: "2,700,000원", power: 90 },
    { id: 5, category: "air-conditioner", name: "LG 휘센 타워", code: "AIR-23 MOCK", price: "3,100,000원", power: 220 },
    { id: 6, category: "vacuum", name: "LG 코드제로 A9", code: "VAC-A9 MOCK", price: "1,090,000원", power: 60 },
    { id: 7, category: "washing-machine", name: "LG 트롬 워시타워", code: "WASH-24 MOCK", price: "2,450,000원", power: 130 },
];

const tabs = {
    detail: "상세 정보 영역입니다. 실제 상세 이미지와 설명은 Django 데이터 연결 후 표시됩니다.",
    spec: "스펙 정보 placeholder입니다. 제품 크기, 에너지 효율, 소비 전력 항목을 연결할 수 있습니다.",
    review: "리뷰(20) placeholder입니다. 사용자 리뷰 목록과 평점을 표시할 예정입니다.",
    manual: "매뉴얼 placeholder입니다. PDF 다운로드 또는 사용 설명 링크를 배치할 수 있습니다.",
    qna: "Q&A placeholder입니다. 상품 문의와 답변 목록을 연결할 수 있습니다.",
};

let currentCategory = "tv";
let currentProduct = null;
let currentTab = "detail";

document.addEventListener("DOMContentLoaded", initProductsPage);

function initProductsPage() {
    currentCategory = getInitialCategory();
    bindCategoryButtons();
    bindFilterEvents();
    renderFilterPage(currentCategory);
}

function getInitialCategory() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    return categoryLabels[category] ? category : "tv";
}

function bindCategoryButtons() {
    document.querySelectorAll(".category-button").forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            currentCategory = category;
            currentProduct = null;
            window.history.replaceState(null, "", `/products/?category=${category}`);
            renderFilterPage(category);
        });
    });
}

function bindFilterEvents() {
    ["minPrice", "maxPrice", "minPower", "maxPower"].forEach((id) => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener("input", applyFilters);
        }
    });
}

function goToMyPage() {
    window.location.href = isLoggedIn ? "/accounts/mypage/" : "/accounts/login/";
}

function applyFilters() {
    // TODO: Django API 또는 서버 렌더링 데이터와 연결해 실제 필터링을 구현합니다.
    renderFilterPage(currentCategory);
}

function renderFilterPage(category) {
    document.getElementById("productsLayout").classList.remove("detail-mode");
    setActiveCategory(category);

    const products = getProductsByCategory(category);
    const contentArea = document.getElementById("contentArea");
    contentArea.innerHTML = `
        <div class="result-toolbar">
            <p class="result-count">검색 결과 ${products.length}건</p>
            <label class="sort-control">
                정렬 기준
                <select onchange="changeSort(this.value)">
                    <option value="recommend">추천순</option>
                    <option value="price-low">낮은 가격순</option>
                    <option value="price-high">높은 가격순</option>
                </select>
            </label>
        </div>
        <div class="product-list">
            ${products.map(createProductCard).join("")}
        </div>
        <form class="search-bar" onsubmit="handleSearch(event)">
            <input type="search" placeholder="검색어를 입력하세요.">
            <button type="submit">검색</button>
        </form>
    `;
}

function getProductsByCategory(category) {
    const matched = productData.filter((product) => product.category === category);
    return matched.length ? matched : productData.filter((product) => product.category === "tv");
}

function createProductCard(product) {
    return `
        <article class="product-card" tabindex="0" role="button" onclick="showProductDetail(${product.id})" onkeydown="handleCardKey(event, ${product.id})">
            <div class="product-thumb">이미지</div>
            <p class="product-name">상품명<br>${product.name}</p>
            <p class="product-code">상품코드 ${product.code}</p>
            <p class="product-price">${product.price}</p>
        </article>
    `;
}

function handleCardKey(event, productId) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showProductDetail(productId);
    }
}

function changeSort(sortValue) {
    // TODO: 선택한 정렬 기준에 따라 상품 목록 순서를 변경합니다.
    console.log("sort changed:", sortValue);
}

function handleSearch(event) {
    event.preventDefault();
    // TODO: 검색어를 Django 검색 API로 전달합니다.
}

function showProductDetail(productId) {
    currentProduct = productData.find((product) => product.id === productId) || productData[0];
    currentCategory = currentProduct.category;
    currentTab = "detail";
    window.history.replaceState(null, "", `/products/?category=${currentCategory}&product=${productId}`);
    renderProductDetail();
}

function renderProductDetail() {
    document.getElementById("productsLayout").classList.add("detail-mode");
    setActiveCategory(currentCategory);

    const contentArea = document.getElementById("contentArea");
    const categoryName = categoryLabels[currentProduct.category];
    contentArea.innerHTML = `
        <nav class="breadcrumb" aria-label="breadcrumb">홈 &gt; ${categoryName} &gt; ${currentProduct.name}</nav>
        <section class="detail-summary">
            <div class="detail-image-placeholder" aria-label="상품 이미지 placeholder"></div>
            <div class="detail-info">
                <h1>${currentProduct.name}</h1>
                <p>${currentProduct.code}</p>
                <p>${currentProduct.price}</p>
                <div class="detail-actions">
                    <button class="outline-button" type="button">찜하기</button>
                    <button class="point-button" type="button">구매하기</button>
                </div>
            </div>
        </section>
        <nav class="tab-menu" aria-label="상품 상세 탭">
            <button class="tab-button is-active" type="button" data-tab="detail">상세 정보</button>
            <button class="tab-button" type="button" data-tab="spec">스펙</button>
            <button class="tab-button" type="button" data-tab="review">리뷰(20)</button>
            <button class="tab-button" type="button" data-tab="manual">매뉴얼</button>
            <button class="tab-button" type="button" data-tab="qna">Q&amp;A</button>
        </nav>
        <section class="tab-content" id="tabContent">${tabs[currentTab]}</section>
    `;
    bindTabButtons();
}

function bindTabButtons() {
    document.querySelectorAll(".tab-button").forEach((button) => {
        button.addEventListener("click", () => {
            currentTab = button.dataset.tab;
            document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("is-active"));
            button.classList.add("is-active");
            document.getElementById("tabContent").textContent = tabs[currentTab];
        });
    });
}

function setActiveCategory(category) {
    document.querySelectorAll(".category-button").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.category === category);
    });
}

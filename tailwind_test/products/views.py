from django.shortcuts import render
from common.utils import get_product

CATEGORY_LABELS = {
    "ProductAC": "에어컨",
    "ProductFridge": "냉장고",
    "ProductTV": "TV",
    "ProductVAC": "청소기",
    "ProductWash": "세탁기",
}

SEARCH_CATEGORIES = ["TV", "냉장고", "에어컨", "청소기", "세탁기"]

SAMPLE_PRODUCTS = [
    {
        "product_code": "TVT0001",
        "name": "LG OLED evo TV",
        "category": "TV",
        "price": 2389000,
        "image_url": "",
    },
    {
        "product_code": "REF0001",
        "name": "LG 디오스 냉장고",
        "category": "냉장고",
        "price": 1890000,
        "image_url": "",
    },
    {
        "product_code": "ACT0001",
        "name": "LG 휘센 에어컨",
        "category": "에어컨",
        "price": 1590000,
        "image_url": "",
    },
]


def build_product_context(product_code, product_type, product_data):
    category = CATEGORY_LABELS.get(product_type, "")

    if product_data:
        description = (
            f"{product_data.name}은(는) 선명한 화질과 몰입감 있는 사용 경험을 "
            f"제공하는 {category} 제품입니다."
            if category == "TV"
            else f"{product_data.name} 상세 정보입니다."
        )
        return {
            "product_code": product_data.product_code,
            "name": product_data.name or "",
            "category": category,
            "price": product_data.price or 0,
            "image_url": getattr(product_data, "img_link", "") or "",
            "description": description,
            "color": getattr(product_data, "color", None) or "블랙",
        }

    return {
        "product_code": product_code,
        "name": "LG OLED evo TV",
        "category": category or "TV",
        "price": 2389000,
        "image_url": "",
        "description": "선명한 화질과 몰입감 있는 시청 경험을 제공하는 OLED TV입니다.",
        "color": "블랙",
    }


def productpage(request, product_code):
    product_type, product_data = get_product(product_code)
    product = build_product_context(product_code, product_type, product_data)

    return render(
        request,
        "productpage.html",
        {
            "product_type": product_type,
            "product_data": product_data,
            "product": product,
        },
    )


def searchpage(request):
    selected_category = request.GET.get("category", "TV")
    if selected_category not in SEARCH_CATEGORIES:
        selected_category = "TV"

    products = [
        item for item in SAMPLE_PRODUCTS if item["category"] == selected_category
    ]

    return render(
        request,
        "searchpage.html",
        {
            "categories": SEARCH_CATEGORIES,
            "selected_category": selected_category,
            "products": products,
            "product_count": len(products),
        },
    )

import { useNavigate } from "react-router-dom";

type CategoryTabsProps = {
    selectedCategory: string;
};

function CategoryTabs({ selectedCategory }: CategoryTabsProps) {
    const navigate = useNavigate();

    const categories = ["TV", "냉장고", "에어컨", "청소기", "세탁기"];

    return (
        <section className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {categories.map((category) => {
                const isSelected = category === selectedCategory;

                return (
                    <button
                        key={category}
                        type="button"
                        onClick={() => navigate(`/search?category=${category}`)}
                        className={
                            isSelected
                                ? "rounded-xl border border-red-600 bg-red-50 p-4 font-bold text-red-600"
                                : "rounded-xl border bg-white p-4 font-medium hover:bg-gray-50"
                        }
                    >
                        {category}
                    </button>
                );
            })}
        </section>
    );
}

export default CategoryTabs;
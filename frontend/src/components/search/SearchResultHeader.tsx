type SearchResultHeaderProps = {
    category: string;
    count: number;
};

function SearchResultHeader({ category, count }: SearchResultHeaderProps) {
    return (
        <div className="flex items-center justify-between rounded-2xl border bg-white p-5 shadow-sm">
            <div>
                <h1 className="text-2xl font-bold">{category} 검색 결과</h1>
                <p className="mt-1 text-sm text-gray-500">총 {count}개의 상품</p>
            </div>

            <select className="rounded-lg border px-3 py-2 text-sm">
                <option>추천순</option>
                <option>가격 낮은순</option>
                <option>가격 높은순</option>
                <option>리뷰 많은순</option>
            </select>
        </div>
    );
}

export default SearchResultHeader;
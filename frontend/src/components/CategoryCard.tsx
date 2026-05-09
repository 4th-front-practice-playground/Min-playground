type CategoryCardProps = {
    name: string;
    onClick: () => void;
};

function CategoryCard({ name, onClick }: CategoryCardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-xl bg-gray-100 p-6 text-center font-medium hover:bg-gray-200"
        >
            {name}
        </button>
    );
}

export default CategoryCard;
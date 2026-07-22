const PopularCategory = ({ popularCategory }) => {
    const { name, image } = popularCategory;
    return (
        <div>
            <div className="border rounded border-gray-200 shadow text-center hover:border-primary hover:shadow-2xl px-2 py-4 hover:text-primary">
                <img src={image} alt="" className="mx-auto mb-2" />
                <h1 className="font-semibold">{name}</h1>
            </div>
        </div>
    );
};

export default PopularCategory;

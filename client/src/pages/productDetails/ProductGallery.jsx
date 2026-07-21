const ProductGallery = ({ images, selectedImage, setSelectedImage }) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="order-1 overflow-hidden rounded-xl border border-border bg-white p-4 md:order-2 md:flex-1">
                <img
                    src={selectedImage}
                    alt="Selected Product"
                    className="mx-auto aspect-square w-full max-w-137.5 object-contain"
                />
            </div>

            <div className="order-2 flex justify-center gap-3 md:order-1 md:flex-col">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`overflow-hidden rounded-lg border transition ${
                            selectedImage === image
                                ? "border-primary"
                                : "border-border hover:border-primary"
                        }`}
                    >
                        <img
                            src={image}
                            alt=""
                            className="h-16 w-16 object-cover sm:h-20 sm:w-20 md:h-24 md:w-24"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;

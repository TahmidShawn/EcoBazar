const ProductGallery = ({ images, selectedImage, setSelectedImage }) => {
    return (
        <div className="flex flex-col-reverse gap-5 md:flex-row">
            <div className="flex gap-4 overflow-x-auto md:flex-col">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`h-24 w-24 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${
                            selectedImage === image
                                ? "border-primary"
                                : "border-gray-200 hover:border-primary"
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Product ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white p-6">
                <img
                    src={selectedImage}
                    alt="Selected Product"
                    className="h-full max-h-150 w-full object-contain"
                />
            </div>
        </div>
    );
};

export default ProductGallery;

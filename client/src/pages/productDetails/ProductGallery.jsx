import { useState } from "react";

const ProductGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images?.[0]);

    return (
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="order-1 overflow-hidden rounded-xl border border-border bg-white p-4 md:order-2 md:flex-1">
                <img
                    src={selectedImage?.url}
                    alt="Selected Product"
                    className="mx-auto aspect-square w-full max-w-137.5 object-contain"
                />
            </div>

            <div className="order-2 flex justify-center gap-3 md:order-1 md:flex-col">
                {images?.map((image) => (
                    <button
                        key={image.fileId}
                        onClick={() => setSelectedImage(image)}
                        className={`overflow-hidden rounded-lg border transition ${
                            selectedImage?.fileId === image.fileId
                                ? "border-primary"
                                : "border-border hover:border-primary"
                        }`}
                    >
                        <img
                            src={image.url}
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

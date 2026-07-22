import { useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";
import imgUrl from "../../../assets/banner/offer-banner-1.png";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        image: imgUrl,
        rating: 5,
        role: "Customer",
    },
    {
        id: 2,
        name: "Sarah Smith",
        text: "Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
        image: imgUrl,
        rating: 4,
        role: "Customer",
    },
    {
        id: 3,
        name: "David Wilson",
        text: "Donec sed neque eget lorem vulputate commodo non quis lectus.",
        image: imgUrl,
        rating: 1,
        role: "Customer",
    },
    {
        id: 4,
        name: "Emily Johnson",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
        image: imgUrl,
        rating: 3,
        role: "Customer",
    },
    {
        id: 5,
        name: "Michael Brown",
        text: "Curabitur porttitor orci eget neque accumsan venenatis.",
        image: imgUrl,
        rating: 5,
        role: "Manager",
    },
];

const Testimonials = () => {
    const sliderRef = useRef(null);

    return (
        <div className="bg-gray-200">
            <div className="wrapper py-16">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-3xl font-bold">Client Testimonials</h2>

                    <div className="flex gap-3">
                        <button
                            onClick={() => sliderRef.current?.prevSlide()}
                            className="rounded-full  p-3 transition bg-white hover:bg-primary hover:text-white"
                        >
                            <MoveLeft size={18} />
                        </button>

                        <button
                            onClick={() => sliderRef.current?.nextSlide()}
                            className="rounded-full  p-3 transition bg-white hover:bg-primary hover:text-white"
                        >
                            <MoveRight size={18} />
                        </button>
                    </div>
                </div>

                <TestimonialSlider
                    ref={sliderRef}
                    testimonials={testimonials}
                />
            </div>
        </div>
    );
};

export default Testimonials;

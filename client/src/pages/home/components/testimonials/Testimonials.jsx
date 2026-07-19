import { useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.",
    },
    {
        id: 2,
        name: "Sarah Smith",
        text: "Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    },
    {
        id: 3,
        name: "David Wilson",
        text: "Donec sed neque eget lorem vulputate commodo non quis lectus.",
    },
    {
        id: 4,
        name: "Emily Johnson",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    },
    {
        id: 5,
        name: "Michael Brown",
        text: "Curabitur porttitor orci eget neque accumsan venenatis.",
    },
];

const Testimonials = () => {
    const sliderRef = useRef(null);

    return (
        <div className="wrapper mb-16">
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold">Client Testimonials</h2>

                <div className="flex gap-3">
                    <button
                        onClick={() => sliderRef.current?.prevSlide()}
                        className="rounded-full border p-3 transition hover:bg-black hover:text-white"
                    >
                        <MoveLeft size={18} />
                    </button>

                    <button
                        onClick={() => sliderRef.current?.nextSlide()}
                        className="rounded-full border p-3 transition hover:bg-black hover:text-white"
                    >
                        <MoveRight size={18} />
                    </button>
                </div>
            </div>

            <TestimonialSlider ref={sliderRef} testimonials={testimonials} />
        </div>
    );
};

export default Testimonials;

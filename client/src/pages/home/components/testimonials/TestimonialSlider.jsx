import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";
import TestimonialCard from "./TestimonialCard";

const getVisibleSlides = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
};

const TestimonialSlider = forwardRef(({ testimonials }, ref) => {
    const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides);

    const [currentIndex, setCurrentIndex] = useState(getVisibleSlides);

    const [transition, setTransition] = useState(true);

    const isAnimating = useRef(false);

    const sliderData = useMemo(() => {
        return [
            ...testimonials.slice(-visibleSlides),
            ...testimonials,
            ...testimonials.slice(0, visibleSlides),
        ];
    }, [testimonials, visibleSlides]);

    useEffect(() => {
        const handleResize = () => {
            const count = getVisibleSlides();

            setVisibleSlides(count);
            setCurrentIndex(count);
            setTransition(false);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransition(true);
                });
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const nextSlide = () => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        setTransition(true);

        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        setTransition(true);

        setCurrentIndex((prev) => prev - 1);
    };

    useImperativeHandle(ref, () => ({
        nextSlide,
        prevSlide,
    }));

    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            setTransition(false);
            setCurrentIndex(testimonials.length);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransition(true);
                    isAnimating.current = false;
                });
            });

            return;
        }

        if (currentIndex === testimonials.length + visibleSlides) {
            setTransition(false);
            setCurrentIndex(visibleSlides);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransition(true);
                    isAnimating.current = false;
                });
            });

            return;
        }

        isAnimating.current = false;
    };

    return (
        <div className="overflow-hidden">
            <div
                className="flex"
                onTransitionEnd={handleTransitionEnd}
                style={{
                    transform: `translateX(-${
                        currentIndex * (100 / visibleSlides)
                    }%)`,
                    transition: transition ? "transform .5s ease" : "none",
                }}
            >
                {sliderData.map((testimonial, index) => (
                    <div
                        key={`${testimonial.id}-${index}`}
                        className="shrink-0"
                        style={{
                            width: `${100 / visibleSlides}%`,
                        }}
                    >
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                ))}
            </div>
        </div>
    );
});

export default TestimonialSlider;

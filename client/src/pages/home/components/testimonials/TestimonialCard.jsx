const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="mx-2 h-full rounded-xl border bg-white p-6 shadow-sm">
            <p className="mb-6 text-gray-600">{testimonial.text}</p>

            <h3 className="font-semibold">{testimonial.name}</h3>
        </div>
    );
};

export default TestimonialCard;

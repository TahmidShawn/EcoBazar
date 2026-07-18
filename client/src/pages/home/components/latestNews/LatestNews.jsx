import news1 from "../../../../assets/news/news-1.png";
import news2 from "../../../../assets/news/news-2.png";
import news3 from "../../../../assets/news/news-3.png";
import SecondaryButton from "../../../../components/ui/SecondaryButton";

const newsData = [
    {
        id: 1,
        image: news1,
        alt: "Blog Post 1",
        title: "Lorem Ipsum Dolor",
        description:
            "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        date: "2026-11-18",
    },
    {
        id: 2,
        image: news2,
        alt: "Blog Post 2",
        title: "Consectetur Adipiscing",
        description: "Eget lobortis lorem lacinia. Vivamus pharetra semper.",
        date: "2026-08-12",
    },
    {
        id: 3,
        image: news3,
        alt: "Blog Post 3",
        title: "Lorem Ipsum Sit Amet",
        description: "Maecenas blandit risus elementum mauris malesuada.",
        date: "2026-05-04",
    },
];

const formatDate = (date) => {
    const d = new Date(date);

    return {
        day: d.getDate(),
        month: d.toLocaleString("en-US", {
            month: "short",
        }),
    };
};

const LatestNews = () => {
    return (
        <div className="wrapper py-14">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
                Latest News
            </h2>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {newsData.map((news) => {
                    const { day, month } = formatDate(news.date);

                    return (
                        <div
                            key={news.id}
                            className="overflow-hidden rounded-md bg-white shadow-lg"
                        >
                            <div className="relative">
                                <img
                                    src={news.image}
                                    alt={news.alt}
                                    className="h-64 w-full object-cover"
                                />

                                <div className="absolute bottom-4 left-4 rounded bg-white px-4 py-2 text-center">
                                    <p className="text-lg font-semibold">
                                        {day}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {month}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-gray-800">
                                    {news.title}
                                </h3>

                                <p className="mb-2 text-sm text-gray-600">
                                    {news.description}
                                </p>

                                <SecondaryButton text="Read more" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LatestNews;

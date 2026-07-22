import { useState } from "react";
import FilterSelect from "./FilterSelect";

import {
    categoryOptions,
    priceOptions,
    ratingOptions,
    latestOptions,
    sortOptions,
} from "../../../data/data";

const Filter = () => {
    const [category, setCategory] = useState("all");
    const [price, setPrice] = useState("all");
    const [rating, setRating] = useState("all");
    const [latest, setLatest] = useState("latest");
    const [sort, setSort] = useState("featured");

    // 	useEffect(() => {
    //     console.log({
    //         category,
    //         price,
    //         rating,
    //         latest,
    //         sort,
    //     });
    // }, [category, price, rating, latest, sort]);

    return (
        <div className="flex flex-wrap gap-4 flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <FilterSelect
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    options={categoryOptions}
                />

                <FilterSelect
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    options={priceOptions}
                />

                <FilterSelect
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    options={ratingOptions}
                />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
                <FilterSelect
                    value={latest}
                    onChange={(e) => setLatest(e.target.value)}
                    options={latestOptions}
                />

                <FilterSelect
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    options={sortOptions}
                />
            </div>
        </div>
    );
};

export default Filter;

import React, { useState, memo } from "react";
import { useGetProductQuery } from "../../context/api";
import "./Home.scss";
import ProfitSkeleton from "../../components/skeleton/ProfitSkeleton";

import Products from "../../components/products/Products";

const PAGINATION_COUNT = 20;
function Home() {
  const [count, setCount] = useState(PAGINATION_COUNT);
  const [category, setCategory] = useState("");

  const { data, isLoading } = useGetProductQuery([
    `/products${category ? "/category/" + category : ""}`,
    { limit: PAGINATION_COUNT, skip: count - PAGINATION_COUNT },
  ]);
  const { data: categories } = useGetProductQuery(["/products/categories"]);

  return (
    <div className="home">
      {isLoading ? <ProfitSkeleton /> : <></>}
      <select
        className="home__select"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setCount(PAGINATION_COUNT);
        }}
        name=""
        id=""
      >
        <option value="">All</option>
        {categories?.map((item, inx) => (
          <option key={inx} value={item}>
            {item}
          </option>
        ))}
      </select>
      <Products data={data?.products} />
      <div className="home__pagination">
        {!data?.total ? (
          <></>
        ) : (
          new Array(Math.floor(data?.total / PAGINATION_COUNT))
            ?.fill("")
            ?.map((_, inx) => (
              <button
                disabled={count === (inx + 1) * PAGINATION_COUNT}
                onClick={() => setCount((p) => (inx + 1) * PAGINATION_COUNT)}
                key={inx}
              >
                {inx + 1}
              </button>
            ))
        )}
      </div>
    </div>
  );
}

export default memo(Home);

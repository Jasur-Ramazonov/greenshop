"use client";
import React, { useEffect, useState } from "react";
import { Cotegory, Product } from "./lib/definitions";
import { getCotegories, getProducts } from "./admin/Functions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./utils/store";
import clsx from "clsx";
import { setCategory } from "./utils/slice";

const Categories = () => {
  const [categories, setCotegory] = useState<Cotegory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.category);

  useEffect(() => {
    getCotegories().then((res) => {
      setCotegory(res!);
      if (!category) {
        dispatch(setCategory(res![0].name));
      }
    });
    getProducts().then((res) => {
      setProducts(res!);
    });
  }, []);

  return (
    <div>
      {categories?.map((categ, i) => {
        return (
          <label
            key={i}
            className={clsx(
              "flex justify-between w-full ease-linear duration-150 hover:text-[#46A358] p-2 cursor-pointer",
              category === categ.name ? "text-[#46a358]" : ""
            )}
          >
            <button
              onClick={() => {
                dispatch(setCategory(categ.name));
              }}
            >
              {categ.name}
            </button>
            <p>
              (
              {
                products?.filter((product) => product.cotegory === categ.name)
                  .length
              }
              )
            </p>
          </label>
        );
      })}
    </div>
  );
};

export default Categories;

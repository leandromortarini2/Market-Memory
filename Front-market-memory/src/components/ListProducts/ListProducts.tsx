"use client";
import { getProducts } from "@/helpers/getProducts";
import { IProduct } from "@/Interface/IProduct";
import React, { useEffect, useState } from "react";

export const ListProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function DataFetch() {
      const { data } = await getProducts();
      setProducts(data);
    }
    DataFetch();
    console.log(products);
  }, []);
  return (
    <div id="sec3" className="w-3/4 min-h-screen flex flex-col mt-20 sec1 ">
      <div className="relative overflow-x-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs bg-[#22c55e]  text-black uppercase font-bold">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Products
                </th>
                <th scope="col" className="px-6 py-3">
                  amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>

                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3">
                  delete
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0
                ? products.map((e, i) => {
                    return (
                      <tr key={i} className="border-b bg-gray-200">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap "
                        >
                          {e.name}
                        </th>
                        <td className="px-6 py-4 text-gray-800">
                          {e.quantity}
                        </td>
                        <td className="px-6 py-4">{e.type}</td>
                        <td className="px-6 py-4">
                          <a
                            href="#"
                            className="font-bold text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="#"
                            className=" text-blue-600 dark:text-red-500 hover:underline ml-2 font-bold"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

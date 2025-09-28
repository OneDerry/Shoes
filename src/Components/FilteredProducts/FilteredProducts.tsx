/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";


const FilteredProducts = () => {
  const products = useSelector((state: any) => state.products.FilteredProducts);
  const { type } = useParams<{ type?: string }>();
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-3xl font-serif text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
          {products
            .filter(
              (product: { type: string | undefined }) => product.type === type
            )
            .map((product: any, index: any) => {
              return (
                <div key={index}>
                  <ProductCard>
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    color={product.color}
                  </ProductCard>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default FilteredProducts;

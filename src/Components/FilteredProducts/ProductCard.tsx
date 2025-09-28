import { ReactNode } from "react";

interface ProductCardProps {
  id?: string;
  name?: string;
  text?: string;
  img?: string;
  price?: number;
  colors?: string[];
  variant?: string;
  color?: string;
  children?: ReactNode;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <>
      <div className="mt-6 w-96">
        <div className="bg-blue-gray-400 relative h-56">
          <img src={props.img} alt="card-image" />
        </div>
        <body>
          <div className="bg-blue-gray-400 mb-2">{props.name}</div>
          <div>{props.text}</div>
        </body>
        <div className="pt-0">
          <div>{props.price}$</div>
          <div>
            {props?.colors?.map((color, index) => {
              return (
                <div
                  className="bg-black"
                  key={index}
                  style={{ backgroundColor: color }}
                ></div>
              );
            })}
          </div>
          <button>READ MORE</button>
        </div>
      </div>
      ;
    </>
  );
};
export default ProductCard;

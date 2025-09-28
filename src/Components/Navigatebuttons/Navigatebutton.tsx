import { useDispatch } from "react-redux";
import Shirt3 from "../../assets/Shirt3.jpg";
import { filterProducts } from "../../Logic/Slicers/productSlice";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export const Navigatebutton = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-center items-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  className="border p-2 rounded-md w-[100px] hover:bg-green-400 duration-300"
                  onClick={() => dispatch(filterProducts({ payload: button }))}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-green-400 p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-orange-700 text-center font-semibold">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex items-center justify-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg"
          src={Shirt3}
          alt="Shirts"
        />
      </div>
    </div>
  );
};

import { FaRegHeart } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import { FaBagShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <div className="bg-black p-2 w-full">
        <h1 className="text-white font-serif text-2xl font-bold tracking-normal leading-none text-center">
          Welcome{" "}
        </h1>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img className="h-[70px] w-full" src={Logo} alt="" />
        </div>
        <div className="flex flow-row items-center gap-3">
          <button className="font-serif text-base font-medium  tracking-normal leading-none text-center">
            Logout
          </button>
          <div className="flex flex-row items-center text-center">
            <FaRegHeart className="mb-0.5" />
            <p className="font-serif ml-0.5 font-medium tracking-normal leading-none">
              Wish list
            </p>
          </div>
          <div className="flex flex-row items-center text-center">
            <FaBagShopping className="" />
            <p className="font-serif ml-0.5 font-medium tracking-normal">
              Shopping bag
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 w-full flex justify-around">
        <div className="text-white font-serif ml-0.5 font-medium tracking-normal leading-none">
          50% OFF
        </div>
        <div className="text-white font-serif ml-0.5 font-medium tracking-normal leading-none">
          Free shipping and return
        </div>
        <div className="text-white font-serif ml-0.5 font-medium tracking-normal leading-none">
          Different payment methods
        </div>
      </div>
    </>
  );
}

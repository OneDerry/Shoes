import { prevSlide, nextSlide, dotSlide } from "../../Logic/Slicers/sliderSlice";
import { useDispatch, useSelector } from "react-redux";
import { sliderData } from "../Data/data";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id.toString()) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id.toString()) === slideIndex && (
                  <img
                    className="h-[500px] w-full object-cover"
                    src={item.img}
                    alt="Shoes"
                  />
                )}
              </div>

              <div className="absolute top-20 mx-auto inset-x-1/4 text-white text-xl font-serif}">
                <p className={`${item.style}`}>
                  {parseInt(item.id.toString()) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-10 left-[45%]">
        <div className="flex items-cente">
          {sliderData.map((dot, index) => {
            return (
              <div className="mr-2" key={dot.id}>
                <div
                  className={
                    index === slideIndex
                      ? "bg-blue-300 rounded-full p-2 cursor-pointer"
                      : "bg-white rounded-full p-2 cursor-pointer"
                  }
                  onClick={() => dispatch(dotSlide(index))}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <button
          className="p-1 rounded-md absolute top-[50%] right-4 opacity-10 hover:opacity-100 duration-500 ease-in-out scale-100 "
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <FiArrowRight className="text-black bg-blue-400 text-3xl rounded-full hover:bg-blue-400" />
        </button>
        <button
          className="p-1 rounded-md absolute top-[50%] left-4 opacity-10 hover:opacity-100  duration-500 ease-in-out scale-100"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <FiArrowLeft className="text-black bg-blue-400 rounded-full hover:bg-blue-400 text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Slider;

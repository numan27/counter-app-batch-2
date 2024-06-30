import { useRef, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const Home = () => {
  const [count, setCount] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const counterRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const scrollToCounter = () => {
    const counter = document.getElementById("counter");
    counter.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={counterRef}
        className="bg-home flex items-center justify-center"
      >
        <div className="text-white home-content text-center px-24">
          <h1 className="text-4xl">
            Count effortlessly with our intuitive Counter App. Simple,
            efficient, and user-friendly counting at your fingertips.
          </h1>
          <button
            onClick={scrollToCounter}
            className="bg-orange-500 px-12 py-4 mt-8 rounded-md text-lg transition duration-300 hover:scale-110 hover:bg-orange-600 transi"
          >
            Get Started
          </button>
        </div>
      </div>

      <div id="counter" className="counter my-16 py-8 text-center min-h-screen">
        <p>
          Use the Counter App to effortlessly keep track of numbers, scores, and
          counts. It's your go-to tool for accurate and efficient counting,
          making tasks a breeze with its user-friendly interface.
        </p>

        <div className="mt-10">
          <div className="w-60 h-16 mx-auto border border-2 border-green-400 rounded-md flex items-center justify-center">
            <h3 className="text-xl">
              Count:{" "}
              <span className="text-green-600 text-2xl font-weight-lg">
                {count}
              </span>{" "}
            </h3>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={handleDecrement}
              className="bg-red-500 px-6 py-3 rounded-md text-xl text-white hover:shadow-lg"
            >
              Decrement
            </button>
            <button
              onClick={handleIncrement}
              className="bg-green-500 px-6 py-3 rounded-md text-xl text-white hover:shadow-lg"
            >
              Increment
            </button>
          </div>
          <button
            onClick={handleReset}
            className="bg-slate-900 px-6 py-3 rounded-md text-xl text-white mt-5 hover:shadow-lg"
          >
            Reset
          </button>
        </div>
      </div>

      {/* {showBackToTop && ( */}
      <button
        onClick={handleScroll}
        className="fixed bottom-5 right-5 bg-orange-500 z-50 w-12 h-12 rounded-md flex items-center justify-center hover:bg-orange-600"
      >
        <FaChevronUp color="white" size="20px" />
      </button>
      {/* )} */}
    </>
  );
};

export default Home;

import img1 from '../assets/Gemini_Generated_Image_y4iib6y4iib6y4ii.png'
import img2 from '../assets/Gemini_Generated_Image_y4iib6y4iib6y4ii.png'
import img3 from '../assets/Gemini_Generated_Image_y4iib6y4iib6y4ii.png'


import { useEffect, useRef, useState } from "react";

const images = [
    img1,
    img2,
    img3,
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const total = images.length;
  const intervalRef = useRef(null);

  // Auto Slide
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (index === 0) {
      setEnableTransition(false);
      setIndex(total);
      setTimeout(() => {
        setEnableTransition(true);
        setIndex(total - 1);
      }, 20);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  // لما نوصل للـ clone
  useEffect(() => {
    if (index === total) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, 700);
    }
  }, [index, total]);

  return (
    <div className="max-w-sm mx-auto mt-10 relative min-h-7">
      <div className="relative overflow-hidden rounded-xl shadow-lg">

        <div
          className="flex"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: enableTransition
              ? "transform 0.7s ease-in-out"
              : "none",
          }}
        >
          {/* Slides */}
          {[...images, images[0]].map((img, i) => (
            <div key={i} className="min-w-full relative">
              <img src={img} alt="" className="w-full" />
              <div className="absolute bottom-5 left-5 text-white bg-black/50 px-4 py-2 rounded">
                <h2 className="text-xl font-bold">
                  Slide {i + 1 > total ? 1 : i + 1}
                </h2>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-7 h-0.5 rounded-full ${
              index === i ? "bg-white-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
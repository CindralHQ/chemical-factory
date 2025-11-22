import React from "react";

const HeroSlide = ({
  image,
  title,
  description,
  buttons,
  index,
  total,
  onPrev,
  onNext,
}) => {
  return (
    <div className="relative w-full h-full">

      <img src={image} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-28 text-white">
        <h1 className="text-5xl font-bold leading-tight">{title}</h1>

        <p className="mt-4 text-lg max-w-2xl">{description}</p>

        <div className="flex gap-4 mt-8">
          {buttons.map((btn, i) =>
            btn.type === "primary" ? (
              <button key={i} className="btn btn-primary">
                {btn.label}
              </button>
            ) : (
              <button
                key={i}
                className="btn btn-outline text-white border-white"
              >
                {btn.label}
              </button>
            )
          )}
        </div>
      </div>

      {index !== 0 && (
        <button
          onClick={onPrev}
          className="btn btn-circle absolute left-5 top-1/2"
        >
          ❮
        </button>
      )}

      {index !== total - 1 && (
        <button
          onClick={onNext}
          className="btn btn-circle absolute right-5 top-1/2"
        >
          ❯
        </button>
      )}
    </div>
  );
};

export default HeroSlide;

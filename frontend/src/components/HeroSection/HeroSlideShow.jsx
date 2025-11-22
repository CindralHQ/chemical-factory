import React, { useState } from "react";
import HeroSlide from "./HeroSlide";
import heroSlides from "./slidesData";

const HeroSlideShow = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < heroSlides.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full h-[90vh] relative overflow-hidden">
      <HeroSlide
        image={heroSlides[index].image}
        title={heroSlides[index].title}
        description={heroSlides[index].description}
        buttons={heroSlides[index].buttons}
        index={index}
        total={heroSlides.length}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </div>
  );
};

export default HeroSlideShow;

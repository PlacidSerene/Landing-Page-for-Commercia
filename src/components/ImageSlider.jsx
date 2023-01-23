import React from "react";
import imageProduct1 from "../images/image-product-1.jpg";
import imageProduct1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import imageProduct2 from "../images/image-product-2.jpg";
import imageProduct2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import imageProduct3 from "../images/image-product-3.jpg";
import imageProduct3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import imageProduct4 from "../images/image-product-4.jpg";
import imageProduct4Thumbnail from "../images/image-product-4-thumbnail.jpg";
import iconPrevious from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";
const images = [
  {
    id: 1,
    img: imageProduct1,
    thumbnail: imageProduct1Thumbnail,
  },
  { id: 2, img: imageProduct2, thumbnail: imageProduct2Thumbnail },
  { id: 3, img: imageProduct3, thumbnail: imageProduct3Thumbnail },
  { id: 4, img: imageProduct4, thumbnail: imageProduct4Thumbnail },
];

const ImageSlider = () => {
  const [currImage, setCurrImage] = React.useState(0);
  const handleImageGoBack = () => {
    if (currImage > 0) {
      setCurrImage(currImage - 1);
    } else {
      setCurrImage(images.length - 1);
    }
  };
  const handleImageForward = () => {
    if (currImage == images.length - 1) {
      setCurrImage(0);
    } else {
      setCurrImage(currImage + 1);
    }
  };
  return (
    <section className="group relative h-80 w-full bg-red-200">
      {/* Images */}
      <div
        className="h-full w-full bg-cover bg-center duration-500"
        style={{ backgroundImage: `url(${images[currImage].img})` }}
      ></div>
      {/* Left Arrow */}
      <div
        className="absolute top-[50%] left-5 hidden translate-y-[-50%] cursor-pointer rounded-full border bg-white p-2 px-3 group-hover:block"
        onClick={handleImageGoBack}
      >
        <img src={iconPrevious} alt="" />
      </div>
      <div
        className="absolute top-[50%] right-5 hidden translate-y-[-50%] cursor-pointer rounded-full border bg-white p-2 px-3 group-hover:block"
        onClick={handleImageForward}
      >
        <img src={iconNext} alt="" />
      </div>
    </section>
  );
};

export default ImageSlider;

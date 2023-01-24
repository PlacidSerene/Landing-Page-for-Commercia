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
    <section className="group grid max-w-[500px] grid-cols-4 grid-rows-5 items-center gap-4 overflow-hidden md:w-1/2 md:rounded-lg container mx-auto">
      {/* Images */}
      <div
        className="relative col-span-4 row-span-5 aspect-square h-full w-full bg-center bg-cover duration-500 md:row-span-4 md:rounded-lg"
        style={{ backgroundImage: `url(${images[currImage].img})` }}
      >
        <div
          className="absolute top-[50%] left-5 hidden -translate-y-[50%] cursor-pointer rounded-full border bg-white p-2 px-3 group-hover:block"
          onClick={handleImageGoBack}
        >
          <img src={iconPrevious} alt="" />
        </div>
        <div
          className="absolute top-[50%] right-5 hidden -translate-y-[50%] cursor-pointer rounded-full border bg-white p-2 px-3 group-hover:block"
          onClick={handleImageForward}
        >
          <img src={iconNext} alt="" />
        </div>
      </div>
      {/* Left Arrow */}

      {/* Small Image Thumbnail */}
      <div className="col-span-4 row-span-1 hidden grid-cols-4 items-center gap-4 md:grid">
        {images.map((img) => (
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={img.thumbnail}
              alt=""
              key={img.id}
              className="h-full w-full object-fill "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;

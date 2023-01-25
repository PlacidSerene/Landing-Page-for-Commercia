import React from "react";
import ImageSlider from "./ImageSlider";
import { GlobalContext } from "../context/GlobalContext";
export default function Modal() {
  const { showImageModal, setShowImageModal } = React.useContext(GlobalContext);
  return (
    <>
      {showImageModal ? (
        <>
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            {/*content*/}
            <div className="flex flex-col">
              <button
                className="self-end text-2xl font-bold text-white"
                onClick={() => setShowImageModal(false)}
              >
                X
              </button>
              <ImageSlider modal />
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-70 backdrop-blur-sm"></div>
        </>
      ) : null}
    </>
  );
}

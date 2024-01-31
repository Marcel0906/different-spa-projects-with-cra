import React, { useState } from 'react';

const placeholderImages = [
  'https://pyxis.nymag.com/v1/imgs/283/445/0581a22d91f3a9ab2e1ad69ba49728c38b-batman-villains-ranking-lede.jpg',
  'https://cdn.vox-cdn.com/thumbor/D2RxK-6v4jKnk-pA-TVmv4rfO_w=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23280933/BatmanVillains.jpeg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Batman-Villain-Allignments-Feature-and-Social-Media-Image.jpg',
  'https://i.ytimg.com/vi/308W2cVw7yY/maxresdefault.jpg',
  'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ce61b230f2be7d8f132474d6ea7d25c2.jpg',
];

function ImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    // Increment the current index to show the next image
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % placeholderImages.length);
  };

  const handlePrevClick = () => {
    // Decrement the current index to show the previous image
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + placeholderImages.length) % placeholderImages.length
    );
  };

  return (
    <div>
      <img src={placeholderImages[currentImageIndex]}   />

      <div>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default ImageGallery;


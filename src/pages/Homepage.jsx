import React, { useEffect, useState } from 'react';
import Picture from '../components/Picture';
// import data from '../helper/data';

const Homepage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('https://cwbarry.pythonanywhere.com/image/')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setImages(data.images);
      });
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <h1>Image Gallery</h1>
      <div className="pictures">
        {images?.map((item, index) => (
          <Picture key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;

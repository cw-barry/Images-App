import React from 'react';
import Picture from '../components/Picture';
import data from '../helper/data';

const Homepage = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <h1>Image Gallery</h1>
      <div className="pictures">
        {data?.map((d) => (
          <Picture data={d} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;

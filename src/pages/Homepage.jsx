import React from 'react';
import Picture from '../components/Picture';
import data from '../helper/data';

const Homepage = () => {
  console.log(data);
  return (
    <div style={{ minHeight: '100vh' }}>
      <h1>Albums</h1>
      <div className="pictures">
        {data?.map((d) => {
          return <Picture data={d} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;

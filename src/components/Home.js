import React from 'react';
import PageTitle from './PageTitle';

const Home = () => {
  return (
    <>
      <PageTitle />
      <div className="row">
        <div className="col-6">
          <div className="card card-rg">Hello World</div>
          <div className="card card-rg">Hello World</div>
          <div className="card card-rg">Hello World</div>
        </div>
        <div className="col-6"></div>
      </div>
    </>
  );
};

export default Home;

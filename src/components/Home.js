import React from 'react';
import PageTitle from './PageTitle';
import Music1 from '../assets/img/music1.svg';

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
        <div className="col-6 HomeImg">
          <img src={Music1} className="Music1" alt="img1" />
        </div>
      </div>
    </>
  );
};

export default Home;

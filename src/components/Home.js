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
        <div className="col-6 HomeImg pt-5">
          {/* <img src={Music1} className="Music1" alt="img1" /> */}
          <iframe
            width="520"
            height="315"
            src="https://www.youtube.com/embed/Gst3OsuZM1s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;

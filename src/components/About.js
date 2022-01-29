import React from 'react';
import PageTitle from './PageTitle';
import srcAbout from '../assets/img/about.webp';

const About = () => {
  return (
    <>
      <PageTitle />
      <h1 style={{ fontWeight: '900' }}>
        My <br /> Story
      </h1>

      <div className="aboutMain">
        <div className="about1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          debitis. Optio a natus incidunt neque voluptate harum nihil fuga
          aliquam magni cumque non libero quia iste, aperiam facilis ab cum sit!
          Sapiente possimus ratione praesentium ullam nobis dolorem fugit est
          necessitatibus aliquid perspiciatis quod molestiae deserunt
          repellendus dolore, asperiores, similique esse deleniti consequatur?
          Aut inventore ducimus accusamus enim dolorem. Modi quae sit facere
          temporibus voluptatem sint ipsam voluptatibus veniam optio cupiditate
          quasi ipsa ut explicabo, odit qui, ab iste nam veritatis doloribus,
          libero quam aperiam ducimus quod? Veniam necessitatibus magnam eaque
          ab repudiandae, architecto consequuntur nisi, et illum saepe
          obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Natus necessitatibus tempora placeat temporibus at iste magnam.
          Laboriosam deleniti, in ducimus deserunt culpa necessitatibus quaerat
          quisquam quo molestias, incidunt recusandae et.
        </div>
        <div className="about2">
          <img src={srcAbout} alt="about img" />
        </div>
      </div>
    </>
  );
};

export default About;

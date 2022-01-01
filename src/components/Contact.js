import React from 'react';
import PageTitle from './PageTitle';

const Contact = () => {
  return (
    <div>
      <PageTitle />
      <h1 style={{ fontWeight: '900' }}>Contact Us</h1>
      <form>
        <div>
          <input type="text" label="name" placeholder="Name" />
        </div>
        <div>
          <input type="text" label="email" placeholder="Name" />
        </div>
        <div>
          <input type="text" label="phone" placeholder="Conatct Number" />
        </div>
        <div>
          <input
            type="text"
            label="messgae"
            placeholder="Type Your message here"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'right' }}>
          <input
            type="button"
            style={{
              backgroundColor: 'yellowgreen',
              width: '30%',
              color: '#f4f4f4',
              border: 'none',
              borderRadius: '0.5rem',
            }}
            value="Submit"
          />
        </div>
      </form>

      <div className="contactMain">
        <div>
          <h2>Management</h2>{' '}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, numquam.{' '}
          </p>
        </div>
        <div>
          <h2>Press</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, numquam.{' '}
          </p>
        </div>
        <div>
          <h2>Booking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, numquam.{' '}
          </p>
        </div>
        <div>
          <h2>Booking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, numquam.{' '}
          </p>
        </div>
        <div>
          <h2>Booking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, numquam.{' '}
          </p>
        </div>
        <div>
          <h2>Booking</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, numquam.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

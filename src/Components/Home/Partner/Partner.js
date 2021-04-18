import React from 'react';
import uber from '../../../images/uber.jpeg'
import pathao from '../../../images/Pathao-logo.png'
import airtel from '../../../images/air-logo.jpg'
import foodpanda from '../../../images/foodpanda-logo.webp'
import dhakabank from '../../../images/dhakabank.png'
import SinglePartner from '../SinglePartner/SinglePartner';

const partners = [
    { 
        id: 1,
        img: uber
    },
    {
        id: 2,
        img: airtel
    },
    {   
        id: 3,
        img: pathao
    },
    {
        id: 4,
        img:foodpanda
    },
    {
        id: 5,
        img: dhakabank
    },
]

const Partner = () => {

  return (
    <section className='partner my-5'>
        <h3 style={{textAlign:'center', color: '#0bff96'}}>Some Of Our Customers - </h3>
      <div className='container col-md-12 text-center'>
          
        {partners.map(partner => (
          <SinglePartner key={partner.id} partner={partner} />
        ))}
      </div>
    </section>
  );
};

export default Partner;
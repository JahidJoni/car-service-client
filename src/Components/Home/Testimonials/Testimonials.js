import React, { useEffect, useState } from 'react';
import './Testimonials.css'
import Testimonial from '../Testimonial/Testimonial';

// const testimonialData = [
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         name : 'David Rhody',
//         from : 'California',
//         img : david
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//         name : 'Alex Ria',
//         from : 'California',
//         img : ria
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//         name : 'Joe Saldan',
//         from : 'California',
//         img : joe
//     }
// ]

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 style={{color: '#0bff96'}} className="text-uppercase">Testimonial</h5>
                   <h4>See What Our Customer Says <br/> Says </h4>
               </div>
               <div className="card-deck mt-5 d-flex text-center">
                    {
                        reviews.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;
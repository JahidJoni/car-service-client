import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const Reviews = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            details: data.details,
            address: data.address,
            imageURL: imageURL
        }

        fetch('https://peaceful-wildwood-84338.herokuapp.com/addReviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                alert("Review Added")
            })
    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '8273e8bed23f1645029948b7f60f08be')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row">
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 mt-4 ps-5">
           <h2 style={{color: '#0bff96'}}>Write your review</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
           <p className="form-label">Name</p>
                    <input name="name" className="form-control w-50" ref={register} />
                    <p className="form-label">Your Thaughts</p>
                    <input name="details" className="form-control w-50" ref={register} />
                    <p className="form-label">Your City</p>
                    <input name="address" className="form-control w-50" ref={register({ required: true })} />
                    <p className="form-label">Your Picture</p>
                    <input type="file" ref={register} className="form-control w-50" onChange={handleImageUpload}/>
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" className="btn btn-info btn-sm px-5 mt-4" />
                </form>
        </div>
    </div>
    );
};

export default Reviews;
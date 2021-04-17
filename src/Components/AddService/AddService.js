import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            details: data.details,
            cost: data.cost,
            imageURL: imageURL
        }
        console.log(serviceData);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => {
                alert("Service Added")
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
            <div className="col-md-10 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" className="form-control" ref={register} />
                    <input name="details" className="form-control" ref={register} />
                    <input name="cost" className="form-control" ref={register({ required: true })} />
                    <input name="example" type="file" ref={register} className="form-control" onChange={handleImageUpload}/>
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;
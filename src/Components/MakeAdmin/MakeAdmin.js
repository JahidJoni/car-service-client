import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
           const adminData = {
            name: data.name,
            email: data.email,
            image: imageURL
           }

           fetch('https://peaceful-wildwood-84338.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                alert("Admin Added")
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
        <div className="col-md-10 mt-4 p-5">
            <h3 style={{color: '#0bff96'}}>Give All Information About New Admin</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="form-label">Name</p>
                        <input name="name" className="form-control w-50" ref={register} /> <br />
                        <p className="form-label">Email</p>
                        <input name="email" className="form-control w-50" ref={register} /> <br />
                        <input type="file" ref={register} className="form-control w-50" onChange={handleImageUpload}/>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" className="btn btn-info btn-sm px-5 mt-5" />  

                    </form>
        </div>
    </div>
    );
};

export default MakeAdmin;
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';



const Customer = () => {
    const [paymentId, setPaymentId] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { id } = useParams()
    const [service, setService] = useState({})
    // const [paymentSuccess, setPaymentSuccess] = useContext(PaymentContext);
    // console.log(paymentSuccess);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    const onSubmit = data => {
        const appointmentData = {
            name: data.name,
            email: loggedInUser.email,
            service: service.name,
            cost: service.cost,
            image: service.imageURL,
            paymentId: paymentId
        }

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(appointmentData)
        })
            .then(res => res.json())
            .then(success => {
                alert('Placed Successfully')
            })

    }
    const handlePaymentSuccess = (data) =>{
        setPaymentId(data)
        console.log(paymentId);
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 mt-3">
                <div className="p-5">
                    <h2 style={{color: '#0bff96'}}>Service Name: {service.name}</h2>
                    <p>Cost: $ {service.cost}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="form-label">Name</p>
                        <input name="name" defaultValue={loggedInUser.name} className="form-control w-50" ref={register} /> <br />
                        <p className="form-label">Email</p>
                        <input name="email" defaultValue={loggedInUser.email} className="form-control w-50" ref={register} /> <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" className="btn btn-info btn-sm px-5 mt-5" />
                        
                    </form>
                </div>
            </div>
            <div style={{marginTop: '13rem'}} className="col-md-4 p-5">
            <div className="">
            <Payment handlePayment={handlePaymentSuccess}></Payment>
            </div>
            </div>
        </div>
    );
};

export default Customer;
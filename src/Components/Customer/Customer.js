import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';



const Customer = () => {
    const [paymentId, setPaymentId] = useState({})
    const [status, setStatus] = useState()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://peaceful-wildwood-84338.herokuapp.com/services/${id}`)
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
            paymentId: paymentId,
            status: status
        }

        fetch('https://peaceful-wildwood-84338.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(appointmentData)
        })
            .then(res => res.json())
            .then(success => {
                alert('Placed Successfully')
            })

    }
    const handlePaymentSuccess = (data) => {
        setPaymentId(data)
    }
    const handleStatus = e => {
        setStatus(e.target.value);
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 mt-3">
                <div className="p-5">
                    <h2 style={{ color: '#0bff96' }}>Service Name: {service.name}</h2>
                    <p>Cost: $ {service.cost}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="form-label">Name</p>
                        <input name="name" className="form-control w-50" ref={register} /> <br />
                        <p className="form-label">Email</p>
                        <input name="email" defaultValue={loggedInUser.email} className="form-control w-50" ref={register} /> <br />
                        <div className="row w-50">
                            <div className="col-md-4"><input type="button" class="btn btn-outline-warning btn-sm" value="Done" onClick={handleStatus}/></div>
                            <div className="col-md-4"><input type="button" class="btn btn-outline-warning btn-sm" value="Ongoing" onClick={handleStatus}/></div>
                            <div className="col-md-4"><input type="button" class="btn btn-outline-warning btn-sm" value="Pending" onClick={handleStatus}/></div>
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" className="btn btn-info btn-sm px-5 mt-5" />

                    </form>
                </div>
            </div>
            <div style={{ marginTop: '13rem' }} className="col-md-4 p-5">
                <div className="">
                    <Payment handlePayment={handlePaymentSuccess}></Payment>
                </div>
            </div>
        </div>
    );
};

export default Customer;
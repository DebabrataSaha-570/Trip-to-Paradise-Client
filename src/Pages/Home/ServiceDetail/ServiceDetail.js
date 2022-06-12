import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


const ServiceDetail = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString())
    const navigate = useNavigate()
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }


    let { Id } = useParams()
    const [service, setService] = useState({})
    const { placeName, description, image, duration, dress, price, status } = service;

    useEffect(() => {
        fetch(`http://localhost:5000/service/${Id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneNumberRef = useRef()
    const ticketNumberRef = useRef()

    const handleBookNow = (e) => {
        e.preventDefault()

        const nameValue = nameRef.current.value;
        const emailValue = emailRef.current.value;
        const phoneNumberValue = phoneNumberRef.current.value;
        const ticketNumberValue = ticketNumberRef.current.value;

        const bookingData = { name: nameValue, email: emailValue, phoneNumber: phoneNumberValue, date: selectedDate, ticketNumber: ticketNumberValue, placeName: placeName, description: description, image: image, duration: duration, dress: dress, price: price, status: status }

        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            body: JSON.stringify(bookingData),
            headers: {
                'Content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Tour booked successfully')
                    navigate('/myOrders')

                }
            })

    }



    return (
        <>
            <Navigation></Navigation>
            <section className='container my-5'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid' src={image} alt="" />
                        <h2>{placeName}</h2>
                        <p>{description}</p>

                        <table class="table table-bordered border-dark">

                            <tbody>
                                <tr>

                                    <td>Price</td>
                                    <td>$ {price}</td>
                                </tr>
                                <tr>

                                    <td>Duration</td>
                                    <td>{duration} days</td>
                                </tr>
                                <tr>

                                    <td >Dress Code</td>
                                    <td>{dress}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-5">
                        <div className='shadow px-5 py-3'>
                            <h4 className="text-center">Book This Tour</h4>
                            <form onSubmit={handleBookNow}>
                                <div class="mb-3 w-100 mx-auto">
                                    <label for="nameInput" class="form-label">Name</label>
                                    <input type="text" ref={nameRef} class="form-control" id="nameInput" placeholder="Your Name" />
                                </div>

                                <div class="mb-3 w-100 mx-auto">
                                    <label for="emailInput" class="form-label">Email Address</label>
                                    <input type="email" ref={emailRef} class="form-control" id="emailInput" placeholder="Email Address" />
                                </div>
                                <div class="mb-3 w-100 mx-auto">
                                    <label for="phoneInput" class="form-label">Phone Number</label>
                                    <input type="number" ref={phoneNumberRef} class="form-control" id="phoneInput" placeholder="Phone Number" />
                                </div>
                                <div class="mb-3 w-100 mx-auto">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <MobileDatePicker
                                            label="Pick a date"
                                            inputFormat="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div class="mb-3 w-100 mx-auto">
                                    <label for="ticketNumInput" class="form-label">Number of Tickets</label>
                                    <input type="number" ref={ticketNumberRef} class="form-control" id="ticketNumInput" placeholder="Number of tickets" />
                                </div>
                                <button className='btn btn-success' type="submit">Book Now</button>

                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default ServiceDetail;
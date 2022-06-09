import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';


const ServiceDetail = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString())
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
                            <form onSubmit="">
                                <div class="mb-3 w-100 mx-auto">
                                    <label for="nameInput" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="nameInput" placeholder="Your Name" />
                                </div>

                                <div class="mb-3 w-100 mx-auto">
                                    <label for="emailInput" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="emailInput" placeholder="Email Address" />
                                </div>
                                <div class="mb-3 w-100 mx-auto">
                                    <label for="phoneInput" class="form-label">Phone Number</label>
                                    <input type="number" class="form-control" id="phoneInput" placeholder="Phone Number" />
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
                                    <input type="number" class="form-control" id="ticketNumInput" placeholder="Phone Number" />
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
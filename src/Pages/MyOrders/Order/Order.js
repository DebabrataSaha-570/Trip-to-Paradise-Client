import React from 'react';

const Order = (props) => {
    console.log(props)
    const { _id, name, phoneNumber, email, date, ticketNumber } = props.order;
    const { description, image, price, status, placeName } = props.order?.service;


    return (
        <>
            <div className="col-md-4 mb-4">
                <div class="card shadow" style={{ width: '21rem' }}>
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{placeName}</h5>

                        <table class="table table-bordered border-dark">

                            <tbody>
                                <tr>
                                    <td>Name: </td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>{phoneNumber}</td>
                                </tr>
                                <tr>
                                    <td>Ticket:</td>
                                    <td>{ticketNumber}</td>
                                </tr>
                                <tr>
                                    <td>Book Date:</td>
                                    <td>{date}</td>
                                </tr>
                                <tr>
                                    <td>Price:</td>
                                    <td>${price}</td>
                                </tr>
                                <tr>
                                    <td>Status:</td>
                                    <td className='text-warning'>{status}</td>
                                </tr>

                            </tbody>
                        </table>
                        <button onClick={() => props.handleCancel(_id)} className='btn btn-danger'>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleOrder from '../SingleOrder/SingleOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allBookings')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure , you want to delete this Order?')
        if (confirm) {
            fetch(`http://localhost:5000/cancelService/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const newOrders = orders.filter(order => order._id !== id)
                        setOrders(newOrders)
                    }
                })
        }

    }

    const handleApprove = (id) => {
        fetch(`http://localhost:5000/approveOrder/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                status: 'Approved'
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order Approved successfully')


                    fetch('http://localhost:5000/allBookings')
                        .then(res => res.json())
                        .then(data => setOrders(data))


                }
            })
    }
    return (
        <>
            <Navigation></Navigation>
            <section className='container'>
                <h3 className='text-center my-4'>Manage Orders</h3>

                {orders.length > 0 ? <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Booking</th>
                                <th scope="col">Date</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orders.map(order => <SingleOrder key={order._id} order={order} handleDelete={handleDelete} handleApprove={handleApprove}></SingleOrder>)
                            }

                        </tbody>
                    </table>
                </div>
                    :
                    <div className="text-center">
                        <div class="spinner-border text-primary " role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            </section>
            <Footer></Footer>
        </>
    );
};

export default ManageOrders;
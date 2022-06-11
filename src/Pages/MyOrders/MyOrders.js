import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import Order from './Order/Order';

const MyOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])

    const handleCancel = (id) => {
        const confirm = window.confirm('Are your sure, you want to cancel this booking?')
        if (confirm) {
            fetch(`http://localhost:5000/cancelService/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Service canceled successfully')
                    }
                })
        }
    }
    return (
        <>
            <Navigation></Navigation>
            <section className="container">
                <h4 className='text-center my-4'>My Orders</h4>
                <div className="row">
                    {
                        orders.map(order => <Order key={order._id} order={order} handleCancel={handleCancel}></Order>)
                    }
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default MyOrders;
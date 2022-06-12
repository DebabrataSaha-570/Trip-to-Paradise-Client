import React from 'react';

const SingleOrder = (props) => {
    console.log(props)
    const { _id, name, email, date, price, status, placeName, ticketNumber } = props.order;


    return (
        <tr>

            <td>{name}</td>
            <td>{email}</td>
            <td>{placeName}</td>
            <td>{date}</td>
            <td>${price * ticketNumber}</td>
            {
                status === 'Pending' && <td className='text-warning'>{status}</td>


            }
            {
                status === "Approved" && <td className='text-success'>{status}</td>
            }
            <td>
                {status === 'Pending' && <button onClick={() => props.handleApprove(_id)} className='btn btn-success'>Approve</button>}
                {status === 'Approved' && <button className='btn btn-success disabled'>Approve</button>}
                <button onClick={() => props.handleDelete(_id)} className='btn btn-danger ms-2'>Delete</button>
            </td>
        </tr>





    );
};

export default SingleOrder;
import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    let storeTime = JSON.parse(localStorage.getItem("tikcet"));
    // let data = storeTime.JSON()
    if (storeTime === null) {
        storeTime = "0";
    }
    console.log(storeTime);

    return (
        <div>

            {
                storeTime === "0" ?

                    <div className='text-center'>
                        <h2 className='text-center text-3xl'>Please Confirm a ticket First</h2>
                        <Link to='/'><button className='btn btn-primary my-5'>Movie Ticket</button></Link>
                    </div>
                    :
                    <div className="overflow-x-auto">

                        <h1 className='text-4xl font-bold my-4'>Your Orders: </h1>
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Move Name</th>
                                    <th>Mobile</th>
                                    <th>Tickets</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <td>{storeTime.name}</td>
                                    <td>{storeTime.movie}</td>
                                    <td>{storeTime.mobile}</td>
                                    <td>{storeTime.tickets}</td>
                                </tr>



                            </tbody>
                        </table>

                        <Link to='/'><button className='btn btn-success  ml-5 my-6'>Done</button></Link>
                    </div>


            }

        </div>
    );
};

export default Order;
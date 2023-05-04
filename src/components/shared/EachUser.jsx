import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const EachUser = () => {
    const { name, summary, ended, image, language, officialSite, network } = useLoaderData()
    const handleMovieTicket = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const mobile = form.mobile.value;
        const movie = form.movie.value;
        const tickets = form.tickets.value;

        const data = {
            name,
            mobile,
            movie,
            tickets
        }

        let oldData = JSON.parse(localStorage.getItem("tikcet"));
        if (oldData) {
            let newData = { ...oldData, data }
            localStorage.setItem("tikcet", JSON.stringify(newData))
        } else {
            localStorage.setItem("tikcet", JSON.stringify(data))
        }
        // console.log(data);
        alert('Order Palaced successfully')
        form.reset()
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl my-5">
            <Link to='/'><button className='btn btn-success  ml-5 my-6'> {"<<"} Back</button></Link>
            <h2 className="text-3xl font-bold text-center my-10">{name ? name : 'No Name'} Movie Detail</h2>
            <figure><img src={(image?.medium ? image.medium : image.original)} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Movie Name: <span className='font-bold'>{name}</span></h2>
                <h2 className="card-title">Network Name: <span className='font-bold'>{network.name}</span></h2>
                <h2 className="card-title">Language: <span className='font-bold'>{language}</span></h2>
                <h2 className="card-title">Official site: <Link to={officialSite} className='text-blue-800 underline' target='__blank'>Visit Site</Link></h2>
                <h2 className="card-title">Summary : </h2>
                <p className='font-medium '>{summary.slice(3, -4)}</p>
                <div className='flex items-center justify-between'>
                    <div className="card-actions justify-start">
                        <h2 className='text-xl font-bold'>Ended Date : <span className="text-xl font-black ">{ended}</span></h2>
                    </div>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-3" className="btn">Book Ticket</label>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <form onSubmit={handleMovieTicket}>
                                    <h3 className="text-lg font-bold">{name ? name : 'No Name'} Movie Ticket order form</h3>
                                    <section className='font-bold my-2'>Name</section>
                                    <input type="text" name='name' placeholder="Enter Your Name" className="input w-full max-w-xs" />
                                    <section className='font-bold my-2'>Mobile</section>
                                    <input type="text" name='mobile' placeholder="Your Mobile Number" className="input w-full max-w-xs" />
                                    <section className='font-bold my-2'>Movie Name</section>
                                    <input type="text" name='movie' value={name ? name : 'No Name'} className="input w-full max-w-xs" />
                                    <section className='font-bold my-2'>Ticket</section>
                                    <input type="number" name='tickets' placeholder="How Many tickets you want!" className="input w-full max-w-xs" />
                                    <br />
                                    <button type='submit' className='btn btn-success w-full mt-6'>Confirm</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachUser;

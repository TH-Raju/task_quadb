import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(user);
    return (
        <div className=''>
            <h1 className='text-center text-2xl md:text-3xl my-10 lg:text-5xl font-bold'>Choose Your Favourite Movie From Here</h1>
            <div className='flex justify-center  mb-10'>
                <Link to='/order'><button className='btn btn-primary'>Your Order</button></Link>
            </div>
            <div className='ml-5 md:ml-14 lg:ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    user.map(usr => <div key={usr.show.id}>
                        <div>
                            <div className="card w-80 card-compact bg-base-100 shadow-xl">
                                <figure><img src={(usr.show.image?.medium) ? usr.show.image?.medium : usr.show.image?.original} alt="Movie img" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {usr.show.name}</h2>
                                    <h2 className="card-title">Language: {usr.show.language}</h2>
                                    <h2 className="card-title">Official site: <Link to={usr.show.officialSite} className='text-blue-800 underline' target='__blank'>Visit Site</Link></h2>

                                    <div className='flex items-center justify-between'>
                                        <div className="card-actions justify-start">
                                            <h2 className='text-xl font-bold'>Rating : <span className="text-xl font-black ">{(usr.show.rating.average) ? usr.show.rating.average : '0'}</span></h2>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <Link to={`movie/${usr.show.id}`}>
                                                <button className="btn btn-primary">See Now</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;
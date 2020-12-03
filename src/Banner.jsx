import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

// component
const Banner = () => {

    // useState hook
    const [Movie, setMovie] = useState([])

    // useEffect hook
    useEffect(() => {
        async function movieFetch() {
            const movies = await axios.get(requests.fetchNetflixOriginals)
            setMovie(movies.data.results[Math.floor(Math.random() * movies.data.results.length - 1)])
        }
        movieFetch()
    }, [])

    // custom function
    function truncate(str, n) {
        return str?.length > n ? str?.substr(0 - n) + "..." : str;
    }
    var Xyz = Movie?.overview

    // component return
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
            <div className="banner_contents">
                <h1 className="banner_title">{Movie.title || Movie?.name || Movie.original_name}</h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner_description">{truncate(Xyz, 150)}</h1>
            </div>
        </header>
    )
}

export default Banner

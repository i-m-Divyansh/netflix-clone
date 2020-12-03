import React, { useEffect, useState } from 'react'
import axios from './axios'
import ScrollContainer from "react-indiana-drag-scroll"
import './Row.css'

// image base url
const base_url = "https://image.tmdb.org/t/p/original/";

// component
function Row({ title, fetchUrl, isLargeRow }) {

    // useState hook
    const [Movies, setMovies] = useState([])

    // useEffect hook
    useEffect(() => {
        async function dataFetch() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        dataFetch()
    }, [fetchUrl])

    console.log(Movies);
    // component return
    return (
        <div className="row">
            <h2>{title}</h2>
            <ScrollContainer>
                <div className="row_posters">
                    {Movies.map((movie) => (
                        <img
                            key={movie.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    ))}
                </div>
            </ScrollContainer>
        </div>
    )
}

export default Row

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CurrentAll extends Component {
    state = {
        animes: []
    }
    
    componentDidMount() {
        // Getting top animes using Jikan api
        axios.get("https://api.jikan.moe/v3/season/2020/winter") // {year/season}
            .then(res => {
                // console.log(res.data.anime);
                this.setState({
                    animes: res.data.anime
                })
            })
    }
    
    render() {
        
        const { animes } = this.state;
        // console.log(animes);
        const animeList = animes.length ? (
            animes.map(anime => {
                return (
                    <div className="cur-card w-5/6 md:w-56 roubded overflow-y-scroll overflow-x-hidden md:overflow-hidden bg-primary-color m-auto md:mx-4 my-2 p-2" key={anime.mal_id}>
                        <Link to={'/' + anime.mal_id} title="Click to get more info">
                            <img className="object-fill h-auto md:h-64 w-full" src={anime.image_url} alt="..." />
                        </Link>
                        <div className="p-4">
                            <p className="text-lg font-bold">{anime.title}</p>
                            <p className="text-lg break-words">Genres:&nbsp;
                                {anime.genres.map(genre => {
                                    return (<span>{genre.name}, </span>)
                                })}
                            </p>
                        </div>
                    </div>
                )
            })
        ) : (
            <h2>Loading Animes...</h2>
        );
        
        return (
            <div className="CurrentAll">
                <h3 className="text-4xl text-center"><i>Winter 2020 Anime</i></h3>
                <div className="animes flex flex-column flex-wrap justify-around m-auto">
                    {animeList}
                </div>
            </div>
        );
    }
}

export default CurrentAll;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TopAll extends Component {
    state = {
        animes: []
    }
    
    componentDidMount() {
        // Getting top animes using Jikan api
        axios.get("https://api.jikan.moe/v3/top/anime")
            .then(res => {
                //console.log(res.data.top);
                this.setState({
                    animes: res.data.top.slice
                })
            })
    }
    
    render() {
        
        const { animes } = this.state;
        console.log(animes);
        const animeList = animes.length ? (
            animes.map(anime => {
                return (
                    <div className="top-card w-5/6 md:w-56 roubded overflow-y-scroll overflow-x-hidden md:overflow-hidden bg-primary-color m-auto md:mx-4 my-2 p-2" key={anime.mal_id}>
                        <Link to={'/' + anime.mal_id}>
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
            <div className="TopAll">
                <h3 className="text-4xl text-center"><i>Upcoming Anime</i></h3>
                <div className="animes flex flex-row flex-wrap justify-space-around items-start m-auto">
                    {animeList}
                </div>
            </div>
        );
    }
}

export default TopAll;

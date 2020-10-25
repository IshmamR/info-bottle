import React, { Component } from 'react';
import axios from 'axios';

class UpcomingAll extends Component {
    state = {
        animes: []
    }
    
    componentDidMount() {
        // Getting top animes using Jikan api
        axios.get("https://api.jikan.moe/v3/season/later")
            .then(res => {
                //console.log(res.data.anime);
                this.setState({
                    animes: res.data.anime
                })
            })
    }
    
    render() {
        
        const { animes } = this.state;
        console.log(animes);
        const animeList = animes.length ? (
            animes.map(anime => {
                return (
                    <div className="up-card w-5/6 md:w-56 roubded overflow-y-scroll overflow-x-hidden md:overflow-hidden bg-primary-color m-auto md:mx-4 my-2 p-2" key={anime.mal_id}>
                        <img className="object-fill h-auto md:h-64 w-full" src={anime.image_url} alt="..." />
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
            <div className="UpcomingAll">
                <h3 className="text-4xl text-center"><i>Upcoming Anime</i></h3>
                <div className="animes flex flex-row flex-wrap justify-space-around items-start m-auto">
                    {animeList}
                </div>
            </div>
        );
    }
}

export default UpcomingAll;

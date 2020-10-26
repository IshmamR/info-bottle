import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-elastic-carousel'; // carousel

class Upcoming extends Component {
    state = {
        animes: []
    }
    
    constructor(props) {
        super(props)
        this.breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 350, itemsToShow: 3, itemsToScroll: 3 },
            { width: 550, itemsToShow: 3 },
            { width: 780, itemsToShow: 3, itemsToScroll: 3 },
            { width: 1150, itemsToShow: 3 },
            { width: 1750, itemsToShow: 4 },
        ]
    }
    
    componentDidMount() {
        // Getting top animes using Jikan api
        axios.get("https://api.jikan.moe/v3/season/later")
            .then(res => {
                console.log(res.data.anime);
                this.setState({
                    animes: res.data.anime.slice(0,15)
                })
            })
    }
    
    render() {
        // console.log(this.state);
        
        const { animes } = this.state;
        
        const animeList = animes.length ? (
                <Carousel pagination={false} itemPadding={[10]} breakPoints={this.breakPoints} >
                {animes.map(anime => 
                    <div className="anime item text-center" key={anime.mal_id} >
                        <div className="up-image" >
                            <Link to={'/' + anime.mal_id}>
                                <img src={ anime.image_url } alt={anime.title} />
                            </Link>
                        </div>
                    </div>
                )}
                </Carousel>
        ) : (
            <h4>Loading top anime list.....</h4>
        );
        
        return (
            <div className="Upcoming">
                <div className="w-11/12 border-b border-white mb-2 m-auto">
				    <div className="flex justify-between items-center">
                        <h3 className="text-2xl"><i>Upcoming Anime</i></h3>
                        <Link to="/upcoming-all" className="third-color">view more...</Link>
				    </div>
                </div>
                <div className="animes w-full">
                    { animeList }
                </div>
            </div>
        );
    }
}

export default Upcoming;

import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel'; // carousel

class Top extends Component {
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
        axios.get("https://api.jikan.moe/v3/top/anime")
            .then(res => {
                //console.log(res.data.top);
                this.setState({
                    animes: res.data.top.slice(0,15)
                })
            })
    }
    
    render() {
        // console.log(this.state);
        
        const { animes } = this.state;
        
        const animeList = animes.length ? (
                <Carousel pagination={false} itemPadding={[30]} breakPoints={this.breakPoints} >
                {animes.map(anime => 
                    <div className="anime item text-center" key={anime.mal_id} >
                        <div className="top-image" >
                            <img src={ anime.image_url } alt={anime.title} />
                        </div>
                        <small className="mx-4">{anime.title}</small>
                    </div>
                )}
                </Carousel>
        ) : (
            <h4>Loading top anime list.....</h4>
        );
        
        return (
            <div className="Top">
                <div className="prose w-4/6 md:w-3/4 mt-2 mx-auto text-center">
                    <h2 className="text-3xl"><b>Popular Now</b></h2>
                </div>
                <div className="animes w-full md:w-5/6 m-auto">
                    { animeList }
                </div>
            </div>
        );
    }
}

export default Top;

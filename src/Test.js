import React, { Component } from 'react';
import axios from 'axios';


class Test extends Component {
    state = {
        anime: null,
        episodes: null,
        characters: null
    }
    
    componentDidMount() {
        let id = 38883;
        axios.get('https://api.jikan.moe/v3/anime/' + id)
            .then(res => {
                 // console.log(res);
                this.setState({
                    anime: res.data
                })
            });
        // episodes
        axios.get(`https://api.jikan.moe/v3/anime/${id}/episodes`)
            .then(res => {
                 // console.log(res);
                this.setState({
                    episodes: res.data
                })
            });
        // characters
        axios.get(`https://api.jikan.moe/v3/anime/${id}/characters_staff`)
            .then(res => {
                 // console.log(res);
                this.setState({
                    characters: res.data
                })
            });
    }

    render() {
        //const anim = this.state.anime ? (this.state.anime) : ('');
        //const epis = this.state.episodes ? (this.state.episodes) : ('');
        //const anim = this.state.anime ? (this.state.anime) : ('');
        //console.log(epis);
        return (
            <div>
                hmmmm
            </div>
        )
    }
    
}

export default Test;
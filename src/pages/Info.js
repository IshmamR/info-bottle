import React, { Component } from 'react';
import axios from 'axios';

class Info extends Component {
    state = {
        anime: null,
        episodes: null,
        characters: null
    }
    
    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.mal_id;
        // anime infos
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
        console.log(this.state.characters);
        const anime = (this.state.anime && this.state.episodes && this.state.characters) ? (
                <div key={this.state.anime.mal_id}>
                    <div className="w-full bg-third-color border-double border-t-2 border-white p-3 pl-4">
                        <h2 className="text-3xl"><b><i>{ this.state.anime.title }</i></b></h2>
                    </div>

                    <div className="block flex flex-col md:flex-row h-auto">
                        <img className="h-auto w-full md:w-1/3 object-cover py-2 px-3" 
                            src={ this.state.anime.image_url } alt="..." />
                        <div className="mx-2">
                            <div className="w-1/3 border-b border-white">
                                <h3 className="text-2xl">Synopsis</h3>
                            </div>
                            <div className="pt-1 border-white">
                                <p>{ this.state.anime.synopsis }</p>
                                <br />
                                <p className="my-2">Type: 
                                    <span className="bg-gray-900 p-1 mx-1">{this.state.anime.type}</span> 
                                </p>
                                <p className="my-2 break-words break-all">Genres: 
                                    {this.state.anime.genres.map(genre =>
                                        <span className="bg-gray-900 p-1 mx-1" key={genre.mal_id}>{genre.name}</span>
                                    )}
                                </p>
                                <p className="my-2">Released: 
                                    <span className="bg-gray-900 p-1 mx-1">
                                        {this.state.anime.aired.string.slice(0,11)}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="block flex flex-col md:flex-row h-auto mx-4 my-2">

                        <div className="w-full md:w-1/3">
                            <div className="w-4/5 border-b border-white">
                                <h3 className="text-2xl">Other informations</h3>
                            </div>
                            <ul className="pt-2">
                                <li className="my-2">Status:&nbsp;
                                    <span className="bg-gray-800 p-1">{this.state.anime.status}</span>
                                </li>
                                <li className="my-2">Aired:&nbsp;
                                    <span className="bg-gray-800 p-1">{this.state.anime.aired.string}</span>
                                </li>
                                <li className="my-2">Episodes:&nbsp;
                                    <span className="bg-gray-800 p-1">{this.state.anime.episodes}</span>
                                </li>
                                <li className="my-2">Broadcast:&nbsp;
                                    <span className="bg-gray-800 p-1">{this.state.anime.broadcast}</span>
                                </li>
                                <li className="my-2">Studios:&nbsp;
                                    {this.state.anime.studios.map(studio =>
                                        <span className="bg-gray-800 p-1 mx-1" key={studio.mal_id}>{studio.name}</span>
                                    )}
                                </li>
                                <li className="my-2">Source:&nbsp;
                                    <span className="bg-gray-800 p-1">{this.state.anime.source}</span>
                                </li>
                                <li className="my-2">Duration:&nbsp;
                                    <span className="bg-gray-800 p-1">{this.state.anime.duration}</span>
                                </li>
                                <li className="my-2">Rating:&nbsp;
                                    <span className="bg-gray-800 p-1">{this.state.anime.rating}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full md:w-2/3">
                            <div className="w-4/5 border-b border-white flex justify-between items-end">
                                <h3 className="text-2xl">Characters</h3>
                                <small className="third-color">
                                    <button>more characters</button>
                                </small>
                            </div>
                            <div className="">

                                <div className="flex flex-row flex-wrap justify-between">
                                    {this.state.characters.characters.slice(0,6).map(character => 
                                    <div className="w-1/2 flex my-3" key={character.mal_id}>
                                        <img className="w-1/3 h-full object-cover" 
                                            src={character.image_url} alt="...." />
                                        <h3 className="md:text-lg ml-3">
                                            Character: {character.name} <br/>Role: {character.role}
                                        </h3>
                                    </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row mx-4 my-2">
                        <div className="w-full md:w-1/2 p-0 md:pr-3">
                            <div className="w-4/5 border-b border-white mb-2">
                                <h3 className="text-2xl">Opening theme</h3>
                            </div>
                            {this.state.anime.opening_themes.map(op =>
                                <div className="bg-gray-900 px-1">{op}</div>
                            )}
                        </div>

                        <div className="w-full md:w-1/2 p-0 md:pl-3">
                            <div className="w-4/5 border-b border-white mb-2">
                                <h3 className="text-2xl">Ending theme</h3>
                            </div>
                            {this.state.anime.ending_themes.map(end =>
                                <div className="bg-gray-900 px-1">{end}</div>
                            )}
                        </div>
                    </div>

                    <div className="w-full mx-4 my-2">
                        <div className="w-2/3 border-b border-white flex justify-between items-end">
                            <h3 className="text-2xl">Staff</h3>
                        </div>
                        <div className="w-full flex flex-row flex-wrap justify-between">
                            {this.state.characters.staff.slice(0,4).map(staff=>
                            <div className="w-full md:w-1/2" key={staff.mal_id}>
                                <div className="flex my-3">
                                    <img className="w-1/3 h-48 object-cover" 
                                        src={staff.image_url} alt="...." />
                                    <h3 className="w-1/2 md:text-lg ml-3">
                                        Name: {staff.name} <br/>
                                        Role: {staff.positions.map(pos => <span>{pos},</span>)}
                                    </h3>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>

                    <div className="block my-2 mx-4">
                        <div className="w-1/3 border-b border-white flex justify-between items-end mb-2">
                            <h3 className="text-2xl">Episodes</h3>
                        </div>
                        <table className="w-full md:w-4/5 m-auto text-center">
                            <thead>
                            <tr className="table-row">
                                <th className="p-2 table-cell">No.</th>
                                <th className="p-2 table-cell">Episode title</th>
                                <th className="p-2 table-cell">Aired</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.episodes.episodes.map(episode => 
                            <tr className="table-row bg-gray-900 border-black border-2" key={episode.episode_id}>
                                <td className="p-2 table-cell">{episode.episode_id}</td>
                                <td className="p-2 table-cell">{episode.title}</td>
                                <td className="p-2 table-cell">
                                    {episode.aired ? episode.aired.slice(0,10) : ''}
                                </td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
        ) : (
            <div>Loading Anime...</div>
        );
        
        return (
            <main>
                { anime }
            </main>
        );
    }
}

export default Info;
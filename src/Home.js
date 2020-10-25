import React, { Component } from 'react';

import Top from './components/Top';
import Upcoming from './components/Upcoming';
import Current from './components/Current';

class Home extends Component {
    
    render() {
        return (
            <div className="home">
                <Top />
                
                <div className="main w-full md:w-5/6 m-auto py-5 flex flex-col md:flex-row justify-between">
                    <div className="w-full p-0 md:pr-3">
                        <div className="w-full">
                            <Current />
                        </div>
                        <div className="w-full">
                            <Upcoming />
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/4">	
                        <div className="w-full border-b border-black mb-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl"><i>Latest Episodes</i></h3>
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <div className="h-32 flex my-3">
                                <img className="w-1/4 h-full object-cover flex-1" src="imgs/goku.jpg" alt="yo" />
                                <h3 className="md:text-lg ml-3 flex-1">
                                    Anime name <br/>Episode number
                                </h3>
				            </div>
                            <button className="button w-full p-1 text-xl text-center text-white bg-third-color rounded-lg">
                                <b>Load more...</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

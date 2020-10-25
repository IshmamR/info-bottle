import React from 'react';

const About = () => {
    return (
        <main>
        <div className="w-full bg-third-color border-double border-t-2 border-white p-3 pl-4">
            <h2 className="text-3xl text-center"><b>About us</b></h2>
        </div>

        <div id="aib" className="block text-left">
            <div id="aib-in" className="block w-full px-8 py-3">
                <h1 className="text-4xl text-center primary-color shadow-red"><b>Info Bottle</b></h1>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, repudiandae ut quaerat quae sapiente cum. Nemo, suscipit illo eum, ipsam molestiae magnam dolorem. Alias labore obcaecati, consequatur, distinctio ut esse! Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Atque tempora sit nisi expedita iure aperiam aliquam quidem velit saepe reprehenderit quis eius.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Atque tempora sit nisi expedita iure aperiam aliquam quidem velit saepe reprehenderit quis eius corporis consequuntur, ut repellat rem ea ex. Obcaecati?Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>

        <div id="red-dragon" className="block text-left">
            <div id="red-dragon-in" className="block w-full px-8 py-5">	
                <h1 className="text-4xl danger-color shadow-red text-center"><b>Red Dragon</b></h1>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, repudiandae ut quaerat quae sapiente cum. Nemo, suscipit illo eum, ipsam molestiae magnam dolorem. Alias labore obcaecati, consequatur, distinctio ut esse!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Atque tempora sit nisi expedita iure aperiam aliquam quidem velit saepe reprehenderit quis eius corporis consequuntur, ut repellat rem ea ex. Obcaecati?Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque exercitationem ad, magnam perspiciatis error tempore voluptatum eos suscipit fugit iusto natus consequatur corporis aspernatur, aperiam voluptate! Ducimus tenetur vel esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <div className="block text-left">
                    <h2 className="third-color w-full md:w-1/3 border-b-2 border-gray-200 text-3xl">Faction members</h2>
                </div>

                <div className="w-full flex flex-col justify-center">
                    <h3 className="text-2xl secondary-color text-center my-1"><b>Leader:</b></h3>
                    <div className="w-full flex justify-center text-center">
                        <div className="w-11/12 md:w-1/5 m-1 bg-primary-color">
                            <img className="" src="imgs/goku.jpg" alt="yoo" />
                            <strong className="">Jakaria Blaine</strong>
                        </div>
                    </div>
                        
                    <h3 className="text-2xl secondary-color text-center my-1"><b>Members:</b></h3>
                    <div className="w-full flex flex-wrap justify-center text-center">
                        <div className="w-5/12 md:w-1/6 m-1 flex flex-col bg-primary-color">
                            <img className="" src="imgs/goku.jpg" alt="yoo" />
                            <strong className="">Ayan Aktaruzzaman</strong>
                        </div>
                        <div className="w-5/12 md:w-1/6 m-1 flex flex-col bg-primary-color">
                            <img className="" src="imgs/goku.jpg" alt="yoo" />
                            <strong className="">Farhadul Islam Faisal</strong>
                        </div>
                        <div className="w-5/12 md:w-1/6 m-1 flex flex-col bg-primary-color">
                            <img className="" src="imgs/goku.jpg" alt="yoo" />
                            <strong className="">Shahadat Rahman Hemal</strong>
                        </div>
                        <div className="w-5/12 md:w-1/6 m-1 flex flex-col bg-primary-color">
                            <img className="" src="imgs/goku.jpg" alt="yoo" />
                            <strong className="">Mashrafi Bin Kabir</strong>
                        </div>
                        <div className="w-5/12 md:w-1/6 m-1 flex flex-col bg-primary-color">
                            <img className="" src="imgs/goku.jpg" alt="yoo" />
                            <strong className="">Ishmam Rahman</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}

export default About;
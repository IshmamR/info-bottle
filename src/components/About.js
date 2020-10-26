import React from 'react';
import RedDragon from '../images/red-dragon-logo.png';

const About = () => {
    return (
        <main>
        <div className="w-full bg-third-color border-double border-t-2 border-white p-3 pl-4">
            <h2 className="text-3xl text-center"><b>About us</b></h2>
        </div>

        <div id="aib" className="block text-left">
            <div id="aib-in" className="block w-full px-2 py-3">
                <h1 className="text-4xl text-center primary-color shadow-md"><b>Info Bottle</b></h1>

                <div className="w-11/12 m-auto flex flex-row flex-wrap justify-around items-center">
                    <img className="w-full md:w-1/3" src={RedDragon} alt="YOOO" />
                    <div className="w-full md:w-1/2 p-3 md:px-5 my-4 bg-gray-900 border-white border text-center md:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, repudiandae ut quaerat quae sapiente cum. Nemo, suscipit illo eum, ipsam molestiae magnam dolorem. Alias labore obcaecati, consequatur, distinctio ut esse! Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Atque tempora sit nisi expedita iure aperiam aliquam quidem velit saepe reprehenderit quis eius.</div>
                </div>
            </div>
        </div>
        </main>
    )
}

export default About;
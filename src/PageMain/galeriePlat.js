import React, { useState, useEffect } from 'react';
import sampleItems from './sampleData/sampleData.js';
const Galerie = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [items, setItems] = useState([]);

    useEffect(() => {
        //ici c'est chercher les données de la bdd
        {/* const fetchData = async () => {
            // Fetch data from your database
            // Replace this with your actual fetch logic
            const response = await fetch('your_api_endpoint');
            const data = await response.json();
            setItems(data);
        };

        fetchData();*/}

        // ET ici c'est pour chercher les données sampleData

        setItems(sampleItems);


        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isHorizontal = windowWidth > windowHeight;

    const handleInfoClick = (item) => {
        // handle click to show more information
        console.log(`More info about ${item.name}`);
    };

    const handleChooseClick = (item) => {
        // handle click to choose the dish
        console.log(`You chose ${item.name}`);
    };

    return (
        <div className={`galerie ${isHorizontal ? 'horizontal' : 'vertical'}`}>
            {items.map((item, index) => (
                <div key={index} className="galerie-item">
                    <img src={item.image} alt={item.name}/>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <button onClick={() => handleInfoClick(item)}>More Info</button>
                    <button onClick={() => handleChooseClick(item)}>Choose</button>
                </div>
            ))}
        </div>
    );
};
export default Galerie;
import React, { useState } from 'react';

function Panier() {
    const [items, setItems] = useState([
        { id: 1, name: 'Produit 1', price: 10 },
        { id: 2, name: 'Produit 2', price: 15 },
        { id: 3, name: 'Produit 3', price: 20 }
    ]);

    const [panier, setPanier] = useState([]);

    const ajouterAuPanier = (item) => {
        setPanier([...panier, item]);
    };

    const retirerDuPanier = (id) => {
        const nouveauPanier = panier.filter(item => item.id !== id);
        setPanier(nouveauPanier);
    };

    const calculerTotal = () => {
        return panier.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <h1>Panier</h1>
            <div>
                <h2>Produits</h2>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => ajouterAuPanier(item)}>Ajouter au panier</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Panier</h2>
                <ul>
                    {panier.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => retirerDuPanier(item.id)}>Retirer du panier</button>
                        </li>
                    ))}
                </ul>
                <h3>Total: ${calculerTotal()}</h3>
            </div>
        </div>
    );
}

export default Panier;

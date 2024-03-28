import React, { useState } from 'react';
import './index.css'; // Import Tailwind CSS

function Panier() {
    const [items, setItems] = useState([
        { id: 1, name: 'Produit 1', price: 10 },
        { id: 2, name: 'Produit 2', price: 15 },
        { id: 3, name: 'Produit 3', price: 20 }
    ]);

    const [panier, setPanier] = useState([]);

    const ajouterAuPanier = (item) => {
        // Check if the item already exists in the cart
        const existingItemIndex = panier.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // If the item exists, update the quantity
            const updatedPanier = [...panier];
            updatedPanier[existingItemIndex].quantity += 1; // Assuming you add a 'quantity' property to each item
            setPanier(updatedPanier);
        } else {
            // If the item doesn't exist, add it to the cart
            setPanier([...panier, { ...item, quantity: 1 }]); // Add quantity property to the item
        }
    };

    const retirerDuPanier = (id) => {
        const existingItemIndex = panier.findIndex(item => item.id === id);
        const updatedPanier = [...panier];

        if (updatedPanier[existingItemIndex].quantity === 1) {
            // If there's only one instance of the item, remove it from the cart
            updatedPanier.splice(existingItemIndex, 1);
        } else {
            // If there are multiple instances, decrement the quantity
            updatedPanier[existingItemIndex].quantity -= 1;
        }

        setPanier(updatedPanier);
    };

    const retirerToutDuPanier = () => {
        setPanier([]);
    };

    const calculerTotal = () => {
        return panier.reduce((total, item) => total + item.price * item.quantity, 0); // Multiply price by quantity
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Panier</h1>
            <div>
                <h2 className="text-xl font-semibold mb-2">Produits</h2>
                <ul>
                    {items.map(item => (
                        <li key={item.id} className="flex items-center justify-between mb-2">
                            <span>{item.name} - ${item.price}</span>
                            <button onClick={() => ajouterAuPanier(item)} className="bg-blue-500 text-white px-3 py-1 rounded">Ajouter au panier</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Panier</h2>
                <ul>
                    {panier.map(item => (
                        <li key={item.id} className="flex items-center justify-between mb-2">
                            <span>{item.name} - ${item.price} (Quantité: {item.quantity})</span>
                            <button onClick={() => retirerDuPanier(item.id)} className="bg-red-500 text-white px-3 py-1 rounded">Retirer un</button>
                        </li>
                    ))}
                </ul>
                <button onClick={retirerToutDuPanier} className="bg-red-500 text-white px-3 py-1 rounded mt-4">Vider le panier</button>
                <h3 className="mt-4">Total: ${calculerTotal()}</h3>
            </div>
        </div>
    );
}

export default Panier;

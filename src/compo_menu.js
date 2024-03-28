import React, { useState } from 'react';

function Compo_menu() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: 'Produit 1' },
        { id: 2, name: 'Produit 2' },
        { id: 3, name: 'Produit 3' },
    ];

    const handleChange = (e) => {
        const productId = parseInt(e.target.value);
        const selectedProduct = products.find(product => product.id === productId);
        if (selectedProduct) {
            setSelectedProduct(selectedProduct);
            setCart([...cart, selectedProduct]);
        }
    };

    return (
        <div>
            <h1>Voici le produit choisit : Pate au saumon</h1>
            <h2>Sélectionnez un produit pour compléter le menu:</h2>
            <select onChange={handleChange}>
                <option value="">-- Choisissez un produit --</option>
                {products.map(product => (
                    <option key={product.id} value={product.id}>{product.name}</option>
                ))}
            </select>
            <h2>Panier :</h2>
            <ul>
                {cart.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Compo_menu;
import React, { useState } from 'react';

function Inventaire() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Produit 1', quantity: 0 },
        { id: 2, name: 'Produit 2', quantity: 0 },
        { id: 3, name: 'Produit 3', quantity: 0 },
        { id: 4, name: 'Produit 4', quantity: 0 },
        { id: 5, name: 'Produit 5', quantity: 0 }
    ]);
    const [inventory, setInventory] = useState([]);

    const handleQuantityChange = (e, productId) => {
        const quantity = parseInt(e.target.value);
        setProducts(prevProducts => prevProducts.map(product => {
            if (product.id === productId) {
                return { ...product, quantity: quantity };
            }
            return product;
        }));
    };

    const handleValidate = () => {
        const newInventory = products.filter(product => product.quantity > 0);
        setInventory(newInventory);
    };

    return (
        <div>
            <h2>Inventaire</h2>
            {products.map(product => (
                <div key={product.id}>
                    <label>{product.name}: </label>
                    <input type="number" value={product.quantity} onChange={(e) => handleQuantityChange(e, product.id)} />
                </div>
            ))}
            <button onClick={handleValidate}>Valider</button>
            {inventory.length > 0 && (
                <div>
                    <h3>Stock validé :</h3>
                    <ul>
                        {inventory.map(product => (
                            <li key={product.id}>{product.name}: {product.quantity}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Inventaire;

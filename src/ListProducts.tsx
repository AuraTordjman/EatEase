import React, { Component } from 'react';
interface ProductData {
    name: string;
    ingredients: string[];
}

class Product extends Component<{ product: ProductData }, { isOpen: boolean }> {
    constructor(props: { product: ProductData }) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    render() {
        const { name, ingredients } = this.props.product;
        const { isOpen } = this.state;

        return (
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>{name}</span>
                    <button onClick={this.toggleOpen} style={{ border: 'none', background: 'none', fontSize: '20px' }}>{isOpen ? '<' : '>'}</button>
                    <button>Modifier</button>
                </div>
                {isOpen && (
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                )}
                <hr /> {/* Ligne pour séparer les produits */}
            </div>
        );
    }
}

class ListProducts extends Component {
    // Définition des données de produits avec leurs ingrédients
    products: ProductData[] = [
        { name: 'Sandwich au poulet', ingredients: ['Pain', 'Poulet', 'Laitue', 'Tomate', 'Mayonnaise'] },
        { name: 'Sandwich au saumon', ingredients: ['Pain', 'Saumon', 'Laitue', 'Tomate', 'Mayonnaise'] },
        { name: 'Cookie', ingredients: ['Farine', 'Sucre', 'Beurre', 'Chocolat'] },
        // Ajoutez d'autres produits ici
    ];

    render() {
        return (
            <div>
                <h1>Liste des produits disponibles</h1>
                {this.products.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        );
    }
}
export default ListProducts;

/*import React, { Component, useState } from 'react';

interface ProductData {
    name: string;
    ingredients: string[];
}

class Product extends Component<{ product: ProductData }, { isOpen: boolean, showEditDialog: boolean, ingredients: string[] }> {
    constructor(props: { product: ProductData }) {
        super(props);
        this.state = {
            isOpen: false,
            showEditDialog: false,
            ingredients: props.product.ingredients
        };
    }


    toggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    toggleEditDialog = () => {
        this.setState(prevState => ({
            showEditDialog: !prevState.showEditDialog
        }));
    };

    handleEditIngredients = (ingredients: string[]) => {
        this.setState({ ingredients });
        this.toggleEditDialog();
    };

    render() {
        const { name } = this.props.product;
        const { isOpen, showEditDialog, ingredients } = this.state;

        return (
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>{name}</span>
                    <button onClick={this.toggleOpen} style={{ border: 'none', background: 'none', fontSize: '20px' }}>{isOpen ? '<' : '>'}</button>
                    <button onClick={this.toggleEditDialog}>Modifier</button>
                </div>
                {isOpen && (
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                )}
                {showEditDialog && (
                    <EditDialog ingredients={ingredients} onEditIngredients={this.handleEditIngredients} onCancel={this.toggleEditDialog} />
                )}
                <hr /> {}
            </div>
        );
    }
}


const EditDialog: React.FC<{ ingredients: string[], onEditIngredients: (ingredients: string[]) => void, onCancel: () => void }> = ({ ingredients, onEditIngredients, onCancel }) => {
    const [editedIngredients, setEditedIngredients] = useState(ingredients.join(', '));

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const editedIngredientsArray = editedIngredients.split(',').map(ingredient => ingredient.trim());
        onEditIngredients(editedIngredientsArray);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Ingrédients :
                    <input type="text" value={editedIngredients} onChange={e => setEditedIngredients(e.target.value)} />
                </label>
                <button type="submit">Enregistrer</button>
                <button type="button" onClick={onCancel}>Annuler</button>
            </form>
        </div>
    );
};

class ListProducts extends Component {
    products: ProductData[] = [
        { name: 'Sandwich au poulet', ingredients: ['Pain', 'Poulet', 'Laitue', 'Tomate', 'Mayonnaise'] },
        { name: 'Sandwich au saumon', ingredients: ['Pain', 'Saumon', 'Laitue', 'Tomate', 'Mayonnaise'] },
        { name: 'Cookie', ingredients: ['Farine', 'Sucre', 'Beurre', 'Chocolat'] },
    ];

    render() {
        return (
            <div>
                <h1>Liste des produits disponibles</h1>
                {this.products.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        );
    }
}

export default ListProducts;*/

import React from "react";

export default function Item({ item }) {
    const shouldCraft = item.craftingCost() < item.purchaseCost;

    return <div className=''>
        <h3>{item.name}</h3>
        <p>Crafting cost: <span className={shouldCraft ? 'text-green-600' : 'text-red-600'}>{item.craftingCost()}</span></p>
        <p>Purchase cost: <span className={!shouldCraft ? 'text-green-600' : 'text-red-600'}>{item.purchaseCost}</span></p>
        <p>To acquire: <input className='w-10' placeholder='qty'/></p>

        { item.components.map(c => <ItemComponent key={c.name} {...c} />)}
    </div>
}

const ItemComponent = ({ name, quantity, source }) => {
    return <div className='my-2'>
        <h4>{name}</h4>
        <p>Quantity: {quantity}</p>
        <p>Source: {source}</p>
        <p>Cost ea/total: 56g 50s/169g 50s</p>
    </div>
}
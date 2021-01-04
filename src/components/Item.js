import React from "react";

export default function Item({ name, item }) {

    if (item === undefined) return null;

    return <div className=''>
        <h3 className='text-2xl font-thin'>{item.name}</h3>
        <p>Crafting cost: <span className='text-green-600'>{item.craftingCost()}</span></p>
        <p>Purchase cost: <span className='text-red-600'>{item.purchaseCost}</span></p>
        <p>To acquire: <input className='w-10' placeholder='qty'/></p>

        <ItemComponent name="Vigil's Torch" />
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
    </div>
}

const ItemComponent = ({ name }) => {
    return <div className='my-2'>
        <h4 className='text-lg font-thin'>{name}</h4>
        <p>Quantity: 3</p>
        <p>Source: AH</p>
        <p>Cost ea/total: 56g 50s/169g 50s</p>
    </div>
}
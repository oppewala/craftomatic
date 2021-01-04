import React from "react";

export default function Item() {
    const itemName = 'Potion'


    return <div className=''>
        <h3 className='text-xl font-thin'>{itemName}</h3>
        <p>Crafting cost: <span className='text-green-600'>230g</span></p>
        <p>Purchase cost: <span className='text-red-600'>245g</span></p>
        <p>To acquire: <input className='w-10' placeholder='qty'/></p>
        <h4 className='mt-6'>Details</h4>

        <table className='table-auto'>
            <tbody>
                <tr>
                    <td>Vigil's Torch</td>
                    <td>3</td>
                    <td>ah</td>
                    <td>56g 50s</td>
                    <td>169g 50s</td>
                </tr>
                <tr>
                    <td>Vigil's Torch</td>
                    <td>3</td>
                    <td>ah</td>
                    <td>56g 50s</td>
                    <td>169g 50s</td>
                </tr>
                <tr>
                    <td>Vigil's Torch</td>
                    <td>3</td>
                    <td>ah</td>
                    <td>56g 50s</td>
                    <td>169g 50s</td>
                </tr>
            </tbody>
        </table>
    </div>
}
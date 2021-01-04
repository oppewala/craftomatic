import React from 'react';
import ServerSelect from './components/ServerSelect';
import Item from "./components/Item";
import { items as itemsData, recipes } from "./data";

function App() {
  const items = Object.entries(recipes).map(([itemId, recipe]) => {
    const components = recipe.components.map((component) => {
      const itemData = itemsData[component.id];
      const source = itemData.vendorPurchasePrice === undefined ? 'AH' : 'Vendor';
      const cost = itemData.vendorPurchasePrice === undefined ? 0 : itemData.vendorPurchasePrice;

      return {
        id: component.id,
        name: itemData.name,
        quantity: component.quantity,
        cost: cost,
        source: source
      }
    })

    return {
      id: itemId,
      name: itemsData[itemId].name,
      purchaseCost: 123456,
      craftingCost() {
        return this.components.reduce((pv, v) => {
          return pv + (v.cost * v.quantity);
        }, 0);
      },
      components: components
    };
  });

  return (
    <div className="w-full bg-gray-200 text-gray-700">
      <h1 className="text-6xl font-thin tracking-wider text-center">Craft-o-matic</h1>
      <ServerSelect/>
      <div className='my-6'>
        <h2 className='text-4xl font-thin tracking-wider text-center'>Items</h2>
        <div className='flex flex-col md:flex-row flex-wrap'>
          {items.map(v => <Item key={v.id} item={v} />)}
        </div>
      </div>
      <div className='w-max my-6'>
        <h2 className='text-4xl font-thin tracking-wider text-center'>Shopping List</h2>
        <ul className='list-disc'>
          <li>Oil x4</li>
          <li>Vigil's Torch x24</li>
        </ul>
      </div>
      <div className="mt-6 flex justify-center">
        <a
          className="uppercase hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="ml-10 uppercase hover:underline"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tailwind
        </a>
      </div>
    </div>
  );
}

export default App;

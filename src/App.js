import React from 'react';
import ServerSelect from './ServerSelect';
import Item from "./components/Item";

function App() {
  return (
    <div className="w-full bg-gray-200 text-gray-700">
        <h1 className="text-6xl font-thin tracking-wider text-center">Craft-o-matic</h1>
        <ServerSelect />
        <div className='my-6'>
            <h2 className='text-4xl font-thin tracking-wider text-center'>Items</h2>
            <div className='flex flex-col md:flex-row flex-wrap'>
                <Item itemName='Potion' />
                <Item itemName='Potion' />
                <Item itemName='Potion' />
                <Item itemName='Potion' />
                <Item itemName='Potion' />
                <Item itemName='Potion' />
                <Item itemName='Potion' />
                <Item itemName='Potion' />
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

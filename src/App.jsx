import { NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <h1 className='text-5xl text-center font-bold my-2'>Coffee Store</h1>
      <div className='flex justify-center gap-5 my-4 p-4 bg-slate-200'>
        <NavLink to='/addCoffee' className='btn bg-zinc-600 text-white'>Add Coffee</NavLink>
        {/* <NavLink to='/updateCoffee' className='btn bg-zinc-600 text-white'>Update Coffee</NavLink> */}
      </div>
      <h1 className='text-4xl text-zinc-800 text-center font-semibold my-3'>Total Coffee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-8 max-w-7xl mx-auto'>
        {
          coffees.map(coffee => 
          <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          >
          </CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App

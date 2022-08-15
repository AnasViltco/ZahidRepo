import React from 'react'

const Navbar = ({ setPage }) => {
  return (
    <div className='col-sm-12' >
       <span> <button  onClick={()=> setPage('planets')} className='btn btn-success'> Planets </button> </span>
       <span> <button onClick={()=> setPage('people')} className='btn btn-info   '> People </button> </span>
    </div>
  )
}

export default Navbar
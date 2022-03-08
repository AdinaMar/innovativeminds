import React from 'react'

const GlobalFilter = ({filter, setFilter}) => {
  return (
      <div className='globalFilter'>
    <span>
        Find User: {' '}
        
        <input value={filter || ''}
        onChange={(e) => setFilter(e.target.value)} />
    </span>
    </div>
  )
}

export default GlobalFilter
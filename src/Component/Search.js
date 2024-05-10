import React from 'react'

const Search = (data) => {
    let [search, setSearch] = useState('');
    const search_parameters = Object.keys(Object.assign({}, ...data));
  return (
    <div className='input-box'>
        <input type="text" placeholder='Search' onChange={(e)=>{
            setSearch(e.target.value)
        }}/>
        <button>Search</button>


    </div>
  )
}

export default Search
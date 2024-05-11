import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 const [users, setUsers] = useState([]);
 const [searchQuery, setSearchQuery] = useState('');

 useEffect(() => {
   fetchUsers();
 }, []);

 const fetchUsers = async () => {
   try {
     let response;
     if (searchQuery) {
       response = await fetch(`https://dummyjson.com/users/search?q=${searchQuery}`);
     } else {
       response = await fetch('https://dummyjson.com/users');
     }
     const data = await response.json();
     setUsers(data.users);
   } catch (error) {
     console.log('Error fetching users:', error);
   }
 };

 const handleSearch = (e) => {
   e.preventDefault();
   const query = e.target.elements.searchInput.value;
   setSearchQuery(query);
   fetchUsers();
 };

 return (
   <div>
     <div className="input-box">
       <form onSubmit={handleSearch}>
         <input
           type="search"
           name="searchInput"
           id="search-form"
           className="search-input"
           placeholder="Search user"
         />
         <button type="submit">Search</button>
       </form>
     </div>
     <center>
       <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Address</th>
           </tr>
         </thead>
         <tbody>
           {users.map((user) => (
             <tr key={user.id}>
               <td>{`${user.firstName} ${user.lastName}`}</td>
               <td>{user.email}</td>
               <td>{`${user.address.address}, ${user.address.city}`}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </center>
   </div>
 );
}

export default App;
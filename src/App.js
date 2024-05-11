import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
      fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) =>{
        setUsers(data.users);
        console.log(users);
      })
      .catch((error) =>{
        console.log(error);
      })
  }, []);

  const [query, setQuery] = useState("");

  const search_parameters = users.length > 0 ? Object.keys(users[0]) : [];

  function search(users) {

    return users.filter((user) =>

      search_parameters.some((parameter) =>

        user[parameter].toString().toLowerCase().includes(query.toLowerCase())

      )

    );

  }

  function isMatch(user) {
    return user.firstName.toLowerCase().includes(query.toLowerCase());
  }
  return (
   <div>
       <div className="input-box">

<input

  type="search"

  name="search-form"

  id="search-form"

  className="search-input"

  onChange={(e) => setQuery(e.target.value)}

  placeholder="Search user"

/>

</div>

<center>

{search(users).map((dataObj) => {

  return (

    <div className="box">

      <div class="card">

        <div class="category">@{dataObj.username} </div>

        <div class="heading">

          {dataObj.name}

          <div class="author">{dataObj.email}</div>

        </div>

      </div>

    </div>

  );

})}

</center>
<center>
      <table>
        <tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>maidenName</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
        </tr>
        <tbody>
        {users.map((user, id) =>{
          return(
            <tr key={id} className={isMatch(user) ? 'highlited' : ''}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.maidenName}</td>
              <td>{user.email}</td>
              <td>{user.address.address}</td>
              <td>{user.address.city}</td>
            </tr>
          )
        })}
      </tbody>
      </table>
      </center>      
   </div>
  );
}

export default App;

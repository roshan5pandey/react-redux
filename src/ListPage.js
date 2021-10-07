import React,{useState,useEffect} from 'react'
import axios from 'axios'

function ListPage() {
    const url = 'https://jsonplaceholder.typicode.com/users'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.username}</td> 
          <td>{user.company.name}</td> 
        </tr>
      )
    })
  }

  return (
      
    <div>
      <h1 id="title">User data</h1>
      <table id="users"  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>username</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  )
}


export default ListPage;

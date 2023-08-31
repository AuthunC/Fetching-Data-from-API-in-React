import { useEffect, useState } from "react";
import Table from './Table';
import Form from './Form';
import List from './List';

function App() {
  const API_URL="https://jsonplaceholder.typicode.com/";
  const [userReq,setUserReq]=useState('users')
  const[items,setItems]=useState([]);
  useEffect(()=>{
    const fetchItems=async()=>{
      try{
        const response=await fetch(`${API_URL}${userReq}`);
        const result=await response.json();
        setItems(result);
      }catch(err){
        console.log(err.message);
      }
    }
    fetchItems();
  }, [userReq])
  return (
    <div className="App">
      <Form 
        userReq={userReq}
        setUserReq={setUserReq}
      />
      {/* <List items={items} /> */}
      <Table 
        items={items}
      />
    </div>
  );
}

export default App;

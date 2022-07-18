import React,{useState} from "react";
import axios from 'axios';
import Gallery from './Gallery';
  const App=()=>{
    const apiKey="636e1481b4f3c446d26b8eb6ebfe7127";
    const [data,setData]=useState([]);
    const [search,setSearch] =useState("");
    const changeHandler=(e)=>{
      setSearch(e.target.value);
    }
     const submitHandler=(e)=>{
        e.preventDefault();
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(response=>{setData(response.data.photos.photo);}).catch(error=>{console.log(error);})
        console.log(search);
     } 
    return(
      <div>
        <center>
        <h1>Gallery Snapshots</h1>
        <form onSubmit={submitHandler}>
        <input  size="40" type="text"  placeholder="search here" onChange={changeHandler}></input><br/><br/>
        <input type="submit" name="search" ></input>
        </form>
        <br />
        {(data.length)>=1?<Gallery  data={data}/>:<div>No data found !!</div>}
      </center>
      </div>
    )
  }
export default App;

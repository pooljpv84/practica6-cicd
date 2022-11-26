import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

// https://gateway.marvel.com:443/v1/public/characters?apikey=7a0e5f430855bc2eb3ca4066eaded58f
// key privada: c6c9f082092a0dad8e5c96b0bd2dd7e514d46d47
// key publica: 7a0e5f430855bc2eb3ca4066eaded58f
//1c6c9f082092a0dad8e5c96b0bd2dd7e514d46d477a0e5f430855bc2eb3ca4066eaded58f
//hash md5: 5c997bea38bbef7657f45dfde5e29deb

function App() {

  const [personajes, setPersonajes]=useState([])


useEffect(()=>{
axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7a0e5f430855bc2eb3ca4066eaded58f&hash=5c997bea38bbef7657f45dfde5e29deb').then(res=>{
setPersonajes(res.data.data.results)
console.log(res.data)
}).catch(error=> console.log(error))
},[])

console.log(personajes);
return (
<div className='App'>
  <h1>CI/CD con github y Azure </h1>
  <h2>cambio #1 </h2>
  <h3>Por:</h3> 
  <br/>
  <h4>Paul Velasco - Jhony Llano</h4>
  <br/>
  <br/>
  <br/>


  <div className="row row-cols-1 row-cols-md-3 g-4">

    
    { personajes.map(per=>(
      <div className="col mt-2" key={per.id}>
        <div className="card" style={{width: "18rem", height:"18rem"}}>
            <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} alt={`${per.name}`} 
            className="card-img-top" style={{width:"80%", height:"80%"}}/>
             <div className="card-body">
              <p className="card-text">{per.name}</p>
            </div>
        </div>
    </div>
))}
    
</div>

</div>


);
}

export default App;
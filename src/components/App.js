// create your App component here
import React,{useState,useEffect} from "react";

function App(){
    const [isLoaded,setIsLoaded] = useState(false)
    const [myData,setData]=useState([])
 useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then((data)=> {
        setData(data.message);
        setIsLoaded(true)
      })
 },[])

return(
    <div>
        {isLoaded?( <img src={myData} alt="A Random Dog"/>
        ):(
         <p>Loading...</p>
        )}
    </div>
)
}
export default App
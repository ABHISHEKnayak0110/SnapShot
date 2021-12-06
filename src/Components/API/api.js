
import { useState ,useEffect } from "react";
import axios from 'axios';


function Api(){
    const[state , setState] = useState([])
    //const count =1;

    useEffect(() => {
        axios.get('https://api.unsplash.com/photos/?client_id=FRokfm7-d3PLcIl8eX8GJvOVjLCsjt879MFa54C_OjY')
    .then((data) => {
        setState(data.data)
        
    
    })
    } ,[])
    
    return state
}
  export function ApiSearch(querry){
    const[state , setState] = useState([])
    //const count =1;

    useEffect(() => {
        axios.get("https://api.unsplash.com/search/photos?page=1&query="+querry+"&client_id=FRokfm7-d3PLcIl8eX8GJvOVjLCsjt879MFa54C_OjY")
    .then((data) => {
        setState(data.data.results)
    })
    } ,[querry])
    
    return state
}
export default Api






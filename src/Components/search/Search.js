import React ,{ useState} from "react"
import { ApiSearch } from "../API/api"
import Api from '../API/api';

import ImageResult from "../ImageResult/ImageResult"




export default function Search() {
    const[input, setInput] = useState()
    const[mysearch ,setMysearch] = useState()

    
    const search = () =>{
        setMysearch(input)
    }
     const dataSearch = ApiSearch(mysearch)
     const data = Api()
    
     
    return (
        <div>
            <input type= "text" name = 'Photo Search '
             placeholder = "Search Images"
             className ='searchBox'
             value ={input}
             onChange= {(e) => setInput(e.target.value)}
             /> 
             <div className='btnbox'>
             <button id='btn' onClick = {search}>Search</button>
             </div>
             <div className ="results">
            { mysearch ? dataSearch.map((img ,key) =>  <ImageResult src= {img.urls.thumb} key ={key}/>) : 
                      data.map((img ,key) =>  <ImageResult src= {img.urls.thumb} key ={key}/>)
                     }
     </div>
        
        </div>
        
    )
}

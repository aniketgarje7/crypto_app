import { useEffect, useState } from "react"
import axios from 'axios';
import CryptoTable from "./table";

const CryptoData = ()=>{
    const [crypto,setCrypto] = useState([]);
    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((res)=>setCrypto(res.data)).catch((e)=>console.log(e))
       
    },[])
     return <>
     <CryptoTable crypto ={crypto}/>
              
     </>   
}
export default CryptoData;
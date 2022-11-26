import {Table} from 'react-bootstrap';


const CryptoTable = ({crypto})=>{
    return <>
<Table striped bordered hover variant="dark" >
     
 { crypto.map((singleCrypto)=> {
      return (   
      <tbody key={singleCrypto.market_cap_rank} >
        <tr >
          <td >
          <img
              alt="crypto symbol"
              src={singleCrypto.image}
              width="23"
              height="23"
              className="d-inline-block align-top"
              style={{marginRight:'8px'}}
            />{'  '}
            {singleCrypto.name}
            </td>
          <td >{singleCrypto.symbol.toUpperCase()}</td>
          <td >${singleCrypto.current_price}</td>
          <td >${singleCrypto.total_volume}</td>
          <td >{singleCrypto.price_change_percentage_24h.toFixed(2)}%</td>
          <td >Mkt cap: ${singleCrypto.market_cap}</td>
        </tr>
        </tbody>
    )})}
        </Table>
    </>
}

export default CryptoTable
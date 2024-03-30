import { useState, useEffect } from "react";
import abi from '../contractJson/shop.json'
import { ethers } from "ethers";
import Memos from '../Memos/Memos'
import Send from '../Send/Send'
import './Review.css'
function App() {
    const [state,setState]=useState({
      provider:null,
      signer:null,
      contract:null
    })
    const [account,setAccount]=useState('Not connected');
    useEffect(()=>{
      const template=async()=>{
     
        const contractAddres="0xb39e677F9f78A65DeaD074A9ef866Dd5434f22F2";
        const contractABI= abi.abi;
                try{
  
          const {ethereum}=window;
          const account = await ethereum.request({
            method:"eth_requestAccounts"
          })
   
          window.ethereum.on("accountsChanged",()=>{
           window.location.reload()
          })
          setAccount(account);
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer =  provider.getSigner(); 
          
          const contract = new ethers.Contract(
            contractAddres,
            contractABI,
            signer
          )
          console.log(contract)
        setState({provider,signer,contract});
         
        }catch(error){
          console.log(error)
        }
      }
      template();
    },[])
    return (
      <div className="app-container">
        <small>Connected Account - {account}</small>
        <div className="content-container">
          <Send state={state} />
          <Memos state={state} />
        </div>
      </div>
    )
  }
  
  export default App
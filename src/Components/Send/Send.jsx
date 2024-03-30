import { useState } from "react";
import { ethers } from "ethers";
import "./Send.css";

const Send = ({ state }) => {
  const [name, setName] = useState(""); // Stanje za praćenje unete e-pošte.
  const [message, setMessage] = useState(""); // Stanje za praćenje unete poruke recenzije.

   // Funkcija koja se poziva prilikom slanja  recenzije.
  const leaveReview = async (event) => {
    event.preventDefault(); //Sprecavanje podrazumevanog stanja
    const { contract } = state;
    
    //Proveravanje da li su uneta sva polja 
    if (!name || !message) {
      alert("Please fill in all fields."); //Prikazivanje poruke ukoliko nedostaje neko polje 
      return;
    }

    try { //Pozivanje funkcije
      // Pozivanje funkcije leaveReview iz pametnog ugovora sa prosleđenim argumentima
      const transaction = await contract.leaveReview(name, message, { value: ethers.utils.parseEther("0.001") });
      // Čekanje na završetak transakcije
      await transaction.wait();
      // Obaveštenje o uspešnom slanju recenzije
      alert("Review successfully submitted!");
      // Osvežavanje stranice kako bi se prikazala nova recenzija
      window.location.reload();
    } catch (error) {
      console.error("Error leaving review:", error);
      alert("An error occurred while submitting the review. Please try again."); //"Hvatanje" gresaka
    }
  };
  return (
    <div className="center">
      <h1> Review</h1> {/*Naslov*/}
      <form onSubmit={leaveReview}> {/*Poziv funkcije leaveReview prilikom slanja recenzije*/}
        <div className="inputbox">
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
          <span>Name</span> {/*Polje za unos imena*/}
        </div>
        <div className="inputbox">
          <input type="text" required value={message} onChange={(e) => setMessage(e.target.value)} />
          <span>Message</span> {/*Polje za unos poruke*/}
        </div>
        <div className="inputbox">
          <input type="submit" value="Send" disabled={!state.contract} /> {/*Dugme za slanje recenzije*/}
        </div>
      </form>
    </div>
  );
};
export default Send;

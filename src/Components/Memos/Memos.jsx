import { useState, useEffect } from "react";
import "./Memos.css";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]); 
  const [showMemos, setShowMemos] = useState(false);  
  const { contract } = state;
  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);
  return (
    <div className="container-fluid">
      {}
      <button className= "button-see-reviews"onClick={() => setShowMemos(!showMemos)}>See reviews</button>
      {showMemos && (
        <table>
          <tbody>
            {memos.map((memo) => {
              return (
                <tr key={memo.id}> {}
                  <td
                    style={{
                      backgroundColor: "pink",
                      border: "1px solid pink",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                      color: "white",
                    }}
                  >
                    {memo.name}
                  </td>
                  <td
                    style={{
                      backgroundColor: "white",
                      border: "1px solid pink",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                      color: "black",
                    }}
                  >
                    {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>
                  <td
                    style={{
                      backgroundColor: "white",
                      border: "1px solid pink",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                      color: "black",
                    }}
                  >
                    {memo.message}
                  </td>
                  <td
                    className="container-fluid"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid pink",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "400px",
                      color: "black",
                    }}
                  >
                    {memo.from}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Memos;

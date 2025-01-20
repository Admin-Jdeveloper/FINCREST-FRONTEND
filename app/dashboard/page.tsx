


"use client";

import { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement, 
  LineElement,  
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement, 
  LineElement   
);


export default function Dashboard() {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  // const [creditCards, setCreditCards] = useState([]);
  const [loading, setLoading] = useState(false);



const acc = useSelector((state) => state.ui.accounts)
const trans = useSelector((state) => state.ui.transactions)
const creditCards = useSelector((state) => state.ui.credit)

console.log(trans)

  
  // Prepare data for the charts
  const accountBalances = {
    labels: acc.map((account) => account.name),
    datasets: [
      {
        label: "Account Balances",
        data: acc.map((account) => account.balances.available),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const transactionAmounts = {
    labels: trans.map((transaction) => transaction.name),
    datasets: [
      {
        label: "Transaction Amounts",
        data: trans.map((transaction) => transaction.amount),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  

  return (
    <div className="p-6">
      <h1 className="text-3xl  font-bold mb-6">Dashboard</h1>  
      <button  className=" bg-blue-300 rounded-md mb-4 text-center text-lg font-semibold  w-24 "  onClick={()=> window.print()} >Export</button>


      {loading && <p>Loading data...</p>}

      {/* Account Details Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Account Details</h2>



        {acc.length > 0 ? ( <>




          <Bar data={accountBalances} /> </>
        ) : (
          <p>No account data available</p>
        )}
      </div>

    
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
        {trans.length > 0 ? (
          <Line data={transactionAmounts} />
        ) : (
          <p>No transaction data available</p>
        )}
      </div>

   

      
    </div> 
  );
}

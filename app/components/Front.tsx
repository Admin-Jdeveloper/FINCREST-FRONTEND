// components/FinanceGuard.tsx

"use client"

// import { useEffect } from "react";
import { Chart }  from "chart.js";
// import {Chart as ChartJs} from "chart.js"
// import { Doughnut } from "react-chartjs-2";
import {  useEffect } from "react";
import Connector from "./Connector"
import {
  Chart as ChartJS,
  ArcElement,
  BarController,
  Tooltip,
  LinearScale,
  CategoryScale,
  BarElement,
  DoughnutController,
  Legend,
} from "chart.js";
ChartJS.register(ArcElement,BarElement,LinearScale,DoughnutController,CategoryScale, BarController,Tooltip, Legend );


const FinanceGuard = () => {
  useEffect(() => {
    // Initialize Spending Chart
    const spendingCtx = document.getElementById("spendingChart") as HTMLCanvasElement;
    if (spendingCtx) {
      new Chart(spendingCtx, {
        type: "doughnut",
        data: {
          labels: ["Rent", "Groceries", "Entertainment", "Savings"],
          datasets: [
            {
              label: "Spending Overview",
              data: [500, 300, 150, 200],
              backgroundColor: ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"],
            },
          ],
        },
      });
    }

    // Initialize Category Chart
    const categoryCtx = document.getElementById("categoryChart") as HTMLCanvasElement;
    if (categoryCtx) {
      new Chart(categoryCtx, {
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              label: "Expenses",
              data: [400, 450, 500, 350],
              backgroundColor: "#6366F1",
            },
          ],
        },
      });
    }
  }, []);

  const connectBankAccount = () => {
    alert("Bank account connected!");
  };

  return (
    <div className= "    bg-gray-50">
     

      {/* Hero Section */}
      <div className="bg-indigo-700   text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Take Control of Your Finances</h1>
          <p className="text-xl mb-8">
            Smart spending tracking, fraud protection, and simplified loan management
          </p>
          <div
        
            className="bg-white w-[25vw] ml-[27vw]  text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            <Connector/>
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <section id="dashboard" className="max-w-7xl mx-auto gap-10 px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 text-2xl gap-6">
    {/* Spending Overview Card */}
    <div className="bg-white p-6 rounded-lg h-[30vw] shadow flex justify-center items-center">
      <div className="w-64 h-64">
        <h3 className="text-lg font-semibold mb-4 text-center">Spending Overview</h3>
        <canvas id="spendingChart" width="200" height="200"></canvas>
      </div>
    </div>
    {/* Track Your Spending Card */}
    <div className="bg-white p-6 rounded-lg shadow flex justify-center items-center">
      <div className="w-64 h-64">
        <canvas id="categoryChart" width="256" height="256"></canvas>
      </div>
    </div>
  </div>
</section>



     
 
      
    </div>
  );
};

export default FinanceGuard;

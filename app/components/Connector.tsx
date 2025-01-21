

"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { add_accountdetails, add_transactiondetails , add_creditdetails } from '@/utils/redux/slice';
import { useRouter } from 'next/navigation';

// Dynamic import for PlaidLink
const PlaidLink = dynamic(() => import('react-plaid-link').then((mod) => mod.PlaidLink), {
  ssr: false,
});

export default function Home() {
  const [linkToken, setLinkToken] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [creditCards, setCreditCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loader,setloader] = useState(false)

  const router = useRouter();
  const dispatch = useDispatch();

  // Fetch link token
  const fetchLinkToken = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/api/create_link_token', { method: 'POST' });
      const data = await response.json();
      setLinkToken(data.linkToken);
    } catch (err) {
      console.error('Failed to fetch link token');
    } finally {
      setLoading(false);
    }
  };

  // Handle Plaid Link success
  const handleOnSuccess = async (publicToken) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/api/exchange_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicToken }),
      });
      setloader(true)
      const data = await response.json();
      console.log('Access Token:', data.accessToken);

      
      await fetchAccounts();
      await fetchTransactions();
   
      setloader(false)
      router.push('/dashboard');
      setloader(false)
     
    } catch (err) {
      console.error('Failed to exchange public token');
    } finally {
      setLoading(false);
    }
  };

  // Fetch accounts
  const fetchAccounts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/accounts');
      const data = await response.json();
      setAccounts(data);
      dispatch(add_accountdetails(data));
      console.log(data)
    } catch (err) {
      console.error('Failed to fetch accounts');
    }
  };

  // Fetch transactions
  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/transactions');
      const data = await response.json();
      setTransactions(data);
      console.log(data)
      dispatch(add_transactiondetails(data));
    } catch (err) {
      console.error('Failed to fetch transactions');
    }
  };

  
 
 

  return (

loader ?  <div className="flex items-center justify-center ">
<div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
</div>

:
    <div>
     
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!linkToken && (
        <button className=' text-center h-14 text-sm  pt-2 w-24 lg:pt-5 ' onClick={fetchLinkToken} disabled={loading}>
          {loading ? 'Loading...' : 'Connect Plaid'}
        </button>
      )}

      {linkToken && (
        <PlaidLink className="mt-3 h-16 z-10   font-semibold text-base  w-24" token={linkToken} onSuccess={handleOnSuccess}>
          Bank Connect
        </PlaidLink>
      )}

      
    </div>
  );
}

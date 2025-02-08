import React, { useState } from 'react';
import { eWalletData } from '../data/eWalletData';
import '../App.css';

const EWallet = () => {
  const [showTransactions, setShowTransactions] = useState(false);

  // Toggle transactions visibility
  const toggleTransactions = () => {
    setShowTransactions(!showTransactions);
  };

  // Sort transactions by date (most recent first)
  const sortedTransactions = [...eWalletData.transactions].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Sort in descending order
  });

  return (
    <div className="e-wallet">
      <h2>E-Wallet</h2>
      <div className="wallet-card">
        <div className="wallet-balance">
          <span>Balance</span>
          <h3>{eWalletData.balance} Energy Points</h3>
        </div>
        <button className="view-transactions-button" onClick={toggleTransactions}>
          {showTransactions ? 'Hide Transactions' : 'View Transactions'}
        </button>
      </div>

      {/* Transactions Table */}
      {showTransactions && (
        <div className="transactions-table">
          <h3>Transaction History</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Energy Sent to Grid (kWh)</th>
                <th>Points Earned</th>
              </tr>
            </thead>
            <tbody>
              {sortedTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.energySentToGrid}</td>
                  <td>{transaction.pointsEarned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EWallet;
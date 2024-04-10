import { useEffect, useState } from 'react';


const PORT = process.env.PORT || 80
function DataFetcher() {
  const [data, setData] = useState(null);
 const internalLBURL = 'http://receiptsloadbalancer-1009143669.me-south-1.elb.amazonaws.com/api/receipts'
 const localhostURL = 'http://localhost:5001/api/receipts'

  useEffect(() => {
    fetch(nternalLBURL) // Replace '/api/data' with the URL of your backend API endpoint
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Customer Receipts</h1>
      <ul>
      {Array.isArray(data) && data.map(dataItem => (
  <li key={dataItem.id}>
    Customer: {dataItem.customerName} - Amount: {dataItem.amount}
  </li>
))}
      </ul>
    </div>
  );
}

export default DataFetcher;

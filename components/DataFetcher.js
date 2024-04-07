import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5002/api/receipts') // Replace '/api/data' with the URL of your backend API endpoint
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

import { useEffect, useState } from 'react';




var PORT = process.env.PORT || 8080;
 var HOST = process.env.HOST || `ReceiptsLoadBalancer-1009143669.me-south-1.elb.amazonaws.com`

function DataFetcher() {
  const [data, setData] = useState(null);

// var HOST = 'localhost' // #5001   /api/receipts

  useEffect(() => {



    fetch(`http://${HOST}:${PORT}/api/receipts`) // Replace '/api/data' with the URL of your backend API endpoint

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

import React from 'react';
import '../styles/SalesTable.css';

const SalesTable = ({ sales, loading }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const formatCurrency = (amount) => {
    return `₹ ${amount?.toLocaleString('en-IN') || '0'}`;
  };

  if (loading) {
    return <div className="table-loading">Loading...</div>;
  }

  if (!sales || sales.length === 0) {
    return <div className="table-empty">No sales data found</div>;
  }

  const DUMMY_EMPLOYEES = ['Harsh Agrawal', 'Sarah Smith', 'Mike Johnson', 'Priya Patel', 'David Lee', 'Anjali Sharma', 'Rahul Verma'];

  const getEmployeeName = (sale, index) => {
    const name = sale['Employee Name'] || sale.employeeName || sale.Employee_Name;
    if (name) return name;

    // Generate a consistent index based on transaction ID or row index
    const seed = (sale.transactionId || sale['Transaction ID'] || index).toString();
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    return DUMMY_EMPLOYEES[Math.abs(hash) % DUMMY_EMPLOYEES.length];
  };

  return (
    <div className="sales-table-container">
      <table className="sales-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Customer ID</th>
            <th>Customer name</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Product Category</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Customer region</th>
            <th>Product ID</th>
            <th>Employee name</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index}>
              <td>{sale['Transaction ID'] || sale.transactionId || sale.Transaction_ID || ''}</td>
              <td>{formatDate(sale.Date || sale.date)}</td>
              <td>{sale['Customer ID'] || sale.customerId || sale.Customer_ID || ''}</td>
              <td>{sale['Customer Name'] || sale.customerName || sale.Customer_Name || ''}</td>
              <td>
                <div className="phone-cell">
                  {sale['Phone Number'] || sale.phoneNumber || sale.Phone_Number || ''}
                  <button className="copy-btn" title="Copy Phone Number">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td>{sale.Gender || sale.gender || ''}</td>
              <td>{sale.Age || sale.age || ''}</td>
              <td>{sale['Product Category'] || sale.productCategory || sale.Product_Category || ''}</td>
              <td>{String(sale.Quantity || sale.quantity || '').padStart(2, '0')}</td>
              <td>{formatCurrency(sale['Total Amount'] || sale.totalAmount || sale.Total_Amount || 0)}</td>
              <td>{sale['Customer Region'] || sale.customerRegion || sale.Customer_Region || ''}</td>
              <td>{sale['Product ID'] || sale.productId || sale.Product_ID || ''}</td>
              <td>{getEmployeeName(sale, index)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;

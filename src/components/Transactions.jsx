const Transactions = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <table className="table-auto w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Date</th>
            <th className="p-2">Category</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">2024-11-01</td>
            <td className="p-2">Groceries</td>
            <td className="p-2">$150</td>
          </tr>
          <tr>
            <td className="p-2">2024-11-05</td>
            <td className="p-2">Utilities</td>
            <td className="p-2">$120</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  export default Transactions;
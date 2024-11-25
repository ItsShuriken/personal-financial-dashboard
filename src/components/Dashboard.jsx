const Dashboard = () => (
    <div>
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded shadow">
          <h3 className="text-lg">Total Budget</h3>
          <p className="text-xl">$5000</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded shadow">
          <h3 className="text-lg">Spent</h3>
          <p className="text-xl">$3000</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow">
          <h3 className="text-lg">Remaining</h3>
          <p className="text-xl">$2000</p>
        </div>
      </div>
    </div>
  );
  
  export default Dashboard;
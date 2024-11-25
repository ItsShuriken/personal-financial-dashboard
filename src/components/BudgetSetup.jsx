const BudgetSetup = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Budget Setup</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Budget Amount</label>
          <input type="number" className="w-full p-2 border rounded" />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Save Budget
        </button>
      </form>
    </div>
  );
  
  export default BudgetSetup;
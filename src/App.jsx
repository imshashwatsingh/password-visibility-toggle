import { useState } from "react";

function App() {
  const [isPass, setIsPass] = useState(false);

  const handleClick = ()=>{
    setIsPass((prev) => !prev);
  }

  return (
    <>
      <div class="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg shadow-md">
  <label htmlFor="input" class="sr-only">Input</label>
  <input
    id="input"
    type={isPass ? "text" : "password" }
    class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    placeholder="Type something..."
  />
  <button
    onClick={handleClick}
    class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
  >
    ◓
  </button>
</div>

    </>
  );
}

export default App;

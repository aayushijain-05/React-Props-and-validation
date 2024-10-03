
// function App() {
 
//   return (
//     <>
//     <div className="items-center justify-center">
//   <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
//   <div class="relative mt-2 rounded-md shadow-sm w-40">
//     <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//       <span class="text-gray-500 sm:text-sm">$</span>
//     </div>
//     <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00"/>
//     <div class="absolute inset-y-0 right-0 flex items-center">
//       <label for="currency" class="sr-only">Currency</label>
//       <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
//         <option>USD</option>
//         <option>CAD</option>
//         <option>EUR</option>
//       </select>
//     </div>
//   </div>
// </div>


//   <div class="ml-[44%] mt-10">
//   <label for="email">Email</label>
//   <div class="border border-red-400 rounded-md p-1 focus-within:border-red-600 focus-within:ring-red-500  focus:ring-1 w-56">
//     <input
//       type="text"
//       id="email"
//       placeholder="you@example.com"
//       class="border-0 focus:outline-none"
//     />
    
//   </div>
// </div>



//   <div className="ml-[44%] mt-10">
//   <div>Email</div>
//   <div className="border border-slate-200 rounded-md w-60 p-1 flex items-center focus-within:ring-1 focus-within:border-indigo-600 focus:ring-1 focus:ring-inset ring-1">
//     <span className="mx-2">
//       <i className="fa-solid fa-envelope text-gray-300"></i>
//     </span>
//     <input
//       type="text"
//       placeholder="you@example.com"
//       className="border-0 focus:outline-none w-full"
//     />
//   </div>
// </div>

//     </>
//   )
// }

// export default App


import { useState } from 'react';
import Input from './input';

function App() {

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [time, setTime] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  const [tel, setTel] = useState("");
  const [url, setUrl] = useState("");

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8 justify-center items-center bg-gray-50 min-h-screen'>
      <div className="flex flex-col space-y-4">
        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={setEmail}
         
        />

        <Input
          type="number"
          placeholder="Enter number"
          value={number}
          onChange={setNumber}
         
        />

        <Input
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={setText}
        />

        <Input
          type="date"
          value={date}
          onChange={setDate}
         
        />

        <Input
          type="datetime-local"
          value={dateTime}
          onChange={setDateTime}
         
        />

        <Input
          type="time"
          value={time}
          onChange={setTime}
         
        />

        <Input
          type="file"
         
        />
      </div>

      <div className="flex flex-col space-y-4">
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={setPassword}
         
        />

        <Input
          type="search"
          placeholder="Search"
          value={search}
          onChange={setSearch}
         
        />

        <Input
          type="tel"
          placeholder="Enter Phone Number"
          value={tel}
          onChange={setTel}
         
        />

        <Input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={setUrl}
         
        />

        <Input
          type="submit"
          value="Submit"
    
        />
      </div>
    </div>
  );
}

export default App;

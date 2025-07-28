// import Login from "./pages/login"
// import Signup from './pages/signup'
// import Home from './pages/home'
// import Transactions from './pages/transactions';
// import Invoices from './pages/invoices';
// import Mywallets from './pages/mywallets';
// import Settings from './pages/settings';
// import Help from './pages/help';
// import NotFound from './pages/notFound';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// function App() {

//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login/>}/>
//         <Route path="/signup" element={<Signup/>}/>
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/transactions" element={<Transactions/>}/>
//         <Route path="/invoices" element={<Invoices/>}/>
//         <Route path="/myWallets" element={<Mywallets/>}/>
//         <Route path="/settings" element={<Settings/>}/>
//         <Route path="/help" element={<Help/>}/>
//         <Routes path="/404" element={<NotFound/>}/>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App




// App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing pages
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Transactions from "./pages/transactions";
import Invoices from "./pages/invoices";
import Mywallets from "./pages/mywallets";
import Settings from "./pages/settings";
import Help from "./pages/help";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Authenticated Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/myWallets" element={<Mywallets />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />

        {/* Default fallback route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

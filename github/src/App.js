// // import React from 'react'
// // import Header from './components/Header'
// // import Footer from './components/Footer'

// // const App = () => {
// //   return (
// //     <>
// //     <Header />
// //     <Footer />
// //     </>
// //   )
// // }

// // export default App


// import React from 'react';

// import Home from './pages/Home';

// import Footer from './components/Footer';
// import './index.css';

// function App() {
//   return (
//     <>
//        <div className="App">
        
//         <Home />
//         <Footer />
//         </div>
     
       
//     </>
//   );
// }

// export default App;

import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
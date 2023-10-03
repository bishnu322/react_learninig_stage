// import React from 'react';
// import User from './User';
// import { BrowserRouter as Link, Router, Routes, Route }

// function DynamicRouting(){
    
//         const users = [
//             { id: 1, name: "Bishnu", email: 'bishnu@22.com' },
//             { id: 2, name: "gautam", email: 'gautam@24.com' },
//             { id: 3, name: "laljee", email: 'laljee@26.com' },
//             { id: 4, name: "sautam", email: 'sautam@28.com' },
//             { id: 5, name: "kuldeep", email: 'kuldeep@30.com' },
//             { id: 6, name: "ghanshyam", email: 'ghanshyam@55.com'}
//         ]
//         return (
//             <>
//                 <h2>DynamicRouting</h2>
           
//                 <Router>
//                     {
//                         users.map((items, i) =>
//                            <div key={i}>
//                              <Link to={'/user/'+items.id}>{items.name}</Link>
//                            </div>
//                         )
//                     }
                  
//                     <Routes>
//                         <Route path='/user/:id/'><User /></Route>
//                     </Routes>
//                 </Router>
//             </>
//         )
//     }

// export default DynamicRouting;
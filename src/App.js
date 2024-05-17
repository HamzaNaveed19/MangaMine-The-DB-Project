/* When you have to run User dashboard, run with this code*/

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes, // Import Routes instead of Switch
//   Route
// } from 'react-router-dom';
// import MangaViewer from './scripts/Viewer'; // Ensure the paths are correct
// import ListAndHeader from './scripts/listandHeader';
// import UpdatedTitleWrapper from './scripts/SearchCards.js'

// import WishlistInputPage from './scripts/userWishlist.js'
// import Userhome from './scripts/userHome.js'
// import Fav from './scripts/favorite.js'
// import Wish from './scripts/userWishlist.js'

// import Footer from './scripts/footer.js'
// import Trending from './scripts/trending.js';
// import Login from './scripts/login.js';
// import Signup from './scripts/signup.js';
// import Navbar  from './scripts/navBar.js';


// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar/>
//         <Routes> {/* Use Routes instead of Switch */}
//           <Route path="/" element={<Userhome />} />
//           <Route path="/scripts/listandheader/:mangaTitle/:mangaAuthor/:mangaDescription/:mangaGenre/:mangaCoverImage/:totalChapters" element={<ListAndHeader />} />
//           <Route path="/scripts/Viewer/:mangaTitle/:num/:totalChapters/:coverImage" element={<MangaViewer />} />
//           <Route path="/scripts/favorite" element={<Fav/>} />
//           <Route path="/scripts/userWishlist" element={<Wish />} />
//           <Route path="/scripts/trending" element={<Trending />} />
//           <Route path="/scripts/login" element={<Login />} />
//           <Route path="/scripts/signup" element={<Signup />} />
//           <Route path="/scripts/SearchCards/:searchTerm" element={<UpdatedTitleWrapper />} />
//           <Route path="/scripts/userWishlist/:email" element={<WishlistInputPage />} />
//           <Route path="/scripts/navBar/:email" element={<Navbar />} />
        
//           {/* Add more routes as needed */}
//         </Routes>
//         <Footer/>
//       </div>
//     </Router>
//   );
// };

// export default App;


/* When you have to run admin dashboard, run with this code*/

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes, // Import Routes instead of Switch
//   Route
// } from 'react-router-dom';


// import Navbar from './scripts/adminNav.js';

// import AddManga from './scripts/adminAddManga.js'
// import AddNews from './scripts/adminNews.js'
// import SeeWish from './scripts/adminWishlist.js'
// import AdminDelete from './scripts/adminDelete.js'


// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar/>
//         <Routes> {/* Use Routes instead of Switch */}
//           <Route path="/scripts/adminAddManga" element={<AddManga/>} />                     
//           <Route path="/scripts/adminNews" element={<AddNews/>} />
//           <Route path="/scripts/adminWishlist" element={<SeeWish/>} />
//           <Route path="/scripts/adminDelete" element={<AdminDelete/>} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
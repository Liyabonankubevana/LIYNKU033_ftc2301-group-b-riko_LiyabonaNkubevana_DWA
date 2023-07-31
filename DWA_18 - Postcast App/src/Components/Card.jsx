// eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from 'react';
// import { AllShows } from '../Api/Api';
// import LoadingPage from './Loading'
// // import { genreMapping } from '../Helpers/GenreMapping';
// import { Link } from 'react-router-dom';

// const ShowCard = () => {
//   const [shows, setShows] = useState([]);

//   useEffect(() => {
//     const FetchData = async () => {
//       try {
//         const getShows = await AllShows();
//         setShows(getShows);
//       } catch (error) {
//         alert(error);
//       }
//     };
//     FetchData();
//   }, []);

//   return (
//     <>
//       {shows.length === 0 ? (
//         <LoadingPage />
//       ) : (
//         <div className="container mx-auto">
//           <h1 className="mt-4 mb-4 text-3xl font-bold">Anything Is Poddable</h1>
//           <div className="flex flex-wrap -mx-4">
//             {shows.map((show) => (
//               <div
//                 id={show.id}
//                 key={show.id}
//                 className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4"
//               >
//                 <Link to="/Show" state={{ showId: show.id }}>
//                   <div className="relative bg-black bg-opacity-50 w-full h-64 rounded">
//                     <img
//                       className="object-cover w-full h-full rounded"
//                       src={show.image}
//                       alt={show.title}
//                     />
//                     <div className="absolute bottom-0 left-0 p-4">
//                       <h2 className="text-white text-xl font-bold">{show.title}</h2>
//                       <h5 className="text-white">{"Seasons: " + show.seasons}</h5>
//                       <p className="text-white">
//                         {genreMapping[show.genres[1]]
//                           ? genreMapping[show.genres[1]] + ' ' + genreMapping[show.genres[0]]
//                           : genreMapping[show.genres[0]]}
//                       </p>
//                       <p className="text-white font-semibold">{"Seasons " + show.seasons}</p>
//                       <p className="text-white font-semibold">
//                         {"Last Update " +
//                           new Date(show.updated).toLocaleDateString('en-US', {
//                             day: 'numeric',
//                             month: 'short',
//                             year: 'numeric',
//                           })}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ShowCard;

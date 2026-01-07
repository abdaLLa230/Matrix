 import React from 'react'
 import { Link } from 'react-router-dom'
 import { IoBrowsers } from "react-icons/io5"
 import { BsWindows } from "react-icons/bs"

 const Game = ({ game }) => {
     return (
         <Link 
             to={`/game/${game.id}`}
             className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
         >
             {/* Image Section */}
             <div className="relative h-48 overflow-hidden">
                 <img 
                     src={game.thumbnail} 
                     alt={game.title}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                
                 {/* Free Badge */}
                 <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-xs px-3 py-1 rounded-full">
                     FREE
                 </div>
                
                 {/* Platform Icon */}
                 <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-2">
                     {game.platform === "Web Browser" ? 
                         <IoBrowsers className="text-cyan-300 text-lg" /> : 
                         <BsWindows className="text-blue-300 text-lg" />
                     }
                 </div>
             </div>

             {/* Content Section */}
             <div className="p-5">
                 {/* Title */}
                 <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                     {game.title.length > 18 ? `${game.title.slice(0, 18)}...` : game.title}
                 </h3>
                
                 {/* Publisher */}
                 <p className="text-gray-400 text-sm mb-4">
                     {game.publisher.length > 20 ? `${game.publisher.slice(0, 20)}...` : game.publisher}
                 </p>
                
                 {/* Footer */}
                 <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                     <span className="bg-gray-800 text-cyan-300 text-xs font-medium px-3 py-1.5 rounded-full">
                         {game.genre}
                     </span>
                     <span className="text-xs text-gray-500 group-hover:text-white transition-colors">
                         Play Now →
                     </span>
                 </div>
             </div>
         </Link>
     )
 }

 export default Game
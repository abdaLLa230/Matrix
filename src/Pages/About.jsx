import React from "react";

const About = () => {
  return (
    <div className="min-h-screen text-white px-4 py-20">

      <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-400 mb-10">
        ABOUT OUR GAMES
      </h1>

      <div className="mt-16 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">

        <div className="p-8 rounded-3xl border border-white/10 shadow-lg">
          <h3 className="text-xl text-blue-300 mb-3">🎮 Discover Games</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Browse a wide collection of games from different genres and platforms.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-white/10 shadow-lg">
          <h3 className="text-xl text-blue-300 mb-3">📊 Game Details</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            View system requirements, ratings, release dates, and developer information
            for each game.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-white/10 shadow-lg">
          <h3 className="text-xl text-blue-300 mb-3">🚀 Smooth Experience</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Enjoy a fast, responsive, and modern interface optimized for gamers.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
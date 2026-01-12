"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 p-4">
      <div className="max-w-4xl w-full">
        {/* Animated Header */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="text-6xl mb-4 animate-bounce">🌾</div>
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-500 to-red-600 mb-2">
            பொங்கல்
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4">
            Pongal
          </h2>
          <p className="text-xl md:text-2xl text-orange-800 font-semibold">
            January 15, 2026
          </p>
        </div>

        {/* Main Card */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 mb-6 text-4xl">
            <span className="animate-pulse">🌾</span>
            <span className="animate-pulse delay-75">🍚</span>
            <span className="animate-pulse delay-150">🌾</span>
            <span className="animate-pulse delay-200">🍚</span>
            <span className="animate-pulse delay-300">🌾</span>
          </div>

          {/* Greeting Message */}
          <div className="text-center space-y-6 mb-8">
            <p className="text-2xl md:text-3xl font-bold text-orange-700">
              பொங்கல் வாழ்த்துகள்!
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Wishing you a joyous and prosperous Pongal!
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              May this harvest festival bring you abundance, happiness, and success in all your endeavors.
            </p>
          </div>

          {/* Traditional Elements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl">
              <div className="text-5xl mb-2">🍚</div>
              <p className="text-sm font-semibold text-orange-800">Sweet Pongal</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl">
              <div className="text-5xl mb-2">🌾</div>
              <p className="text-sm font-semibold text-orange-800">Harvest</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl">
              <div className="text-5xl mb-2">🎋</div>
              <p className="text-sm font-semibold text-orange-800">Sugarcane</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl">
              <div className="text-5xl mb-2">🔥</div>
              <p className="text-sm font-semibold text-orange-800">Kolam</p>
            </div>
          </div>

          {/* Personal Message */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 md:p-8 border-2 border-orange-200">
            <p className="text-center text-lg md:text-xl text-gray-800 italic leading-relaxed">
              "Even though you're far from home, may the warmth of Pongal reach you wherever you are. 
              May this new year bring you prosperity, good health, and countless blessings. 
              Thinking of you on this special day!"
            </p>
          </div>

          {/* Bottom Decoration */}
          <div className="flex justify-center gap-3 mt-8 text-3xl">
            <span className="animate-bounce">🎉</span>
            <span className="animate-bounce delay-100">✨</span>
            <span className="animate-bounce delay-200">🎊</span>
            <span className="animate-bounce delay-300">🌟</span>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-8 text-orange-700 font-semibold transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg">தமிழர் திருநாள் - Tamil Harvest Festival</p>
          <p className="text-sm mt-2 text-orange-600">May your pot of happiness always overflow! 🍯</p>
        </div>
      </div>
    </div>
  );
}

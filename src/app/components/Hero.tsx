import { TrendingUp, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <h1 className="text-2xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              myrentis
            </h1>
          </div>

          <p className="text-sm text-gray-900 mb-3">
            Real Neighbors. Real Data.
          </p>
          
          <h1 className="text-xl sm:text-4xl lg:text-5xl mb-2 text-gray-900 tracking-tight">
            Join the{' '}
            <span className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Affordability Movement
            </span>
          </h1>
          
          <p className="text-sm sm:text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            Make smarter rental decisions with real data. Compare your lease terms 
            with similar units in your community before you sign or renew.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-indigo-100">
              <div className="bg-indigo-100 rounded-full p-1">
                <TrendingUp className="w-3 h-3 text-indigo-600" />
              </div>
              <span className="text-gray-700 font-medium text-xs">Market Insights</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-100">
              <div className="bg-blue-100 rounded-full p-1">
                <Users className="w-3 h-3 text-blue-600" />
              </div>
              <span className="text-gray-700 font-medium text-xs">Community Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

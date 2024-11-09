import React from 'react';
import { BookOpenText } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center z-50">
      <div className="text-center">
        <BookOpenText className="w-16 h-16 text-white animate-bounce mb-4 mx-auto" />
        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">PDF TO BOOK</h1>
        <div className="space-y-2">
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-full bg-white animate-[loading_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
};
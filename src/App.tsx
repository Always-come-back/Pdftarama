import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { PDFViewer } from './components/PDFViewer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="min-h-screen bg-gray-50">
        <div className="h-screen flex flex-col">
          <PDFViewer />
        </div>
      </div>
    </>
  );
}

export default App;
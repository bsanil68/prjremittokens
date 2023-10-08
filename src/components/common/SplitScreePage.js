// SplitScreenPage.js
import React from 'react';

// SplitScreenPage.js (continued)
const splitScreenStyle = {
    display: 'flex',
    height: '100vh', // Adjust as needed
  };
  
  const leftPanelStyle = {
    flex: 1, // Left panel takes up 50% of the width
    backgroundColor: '#f0f0f0', // Set your desired background color
  };
  
  const rightPanelStyle = {
    flex: 1, // Right panel takes up 50% of the width
    backgroundColor: '#ffffff', // Set your desired background color
  };

function SplitScreenPage() {
  return (
    <div className="split-screen">
      <div className="left-panel">
        {/* Content for the left panel */}
      </div>
      <div className="right-panel">
        {/* Content for the right panel */}
      </div>
    </div>
  );
}

export default SplitScreenPage;

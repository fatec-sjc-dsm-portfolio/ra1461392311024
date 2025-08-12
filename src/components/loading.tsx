import React from 'react';
import '../styles/loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <h1 className="loading-title">PORTFOLIO</h1>
        <h2 className="loading-subtitle">Douglas Medeiros</h2>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

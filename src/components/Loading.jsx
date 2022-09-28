import React from 'react';
import '../styles/loading.css';

function Loading() {
    return (
        <div className="loader">
            <span className="loader__element"></span>
            <span className="loader__element"></span>
            <span className="loader__element"></span>
        </div>
    )
}

export default Loading
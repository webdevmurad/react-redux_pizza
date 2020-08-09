import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader 
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="137" cy="148" r="120" /> 
            <rect x="0" y="300" rx="6" ry="6" width="280" height="26" /> 
            <rect x="0" y="340" rx="6" ry="6" width="280" height="84" /> 
            <rect x="0" y="NaN" rx="0" ry="0" width="84" height="NaN" /> 
            <rect x="0" y="430" rx="0" ry="0" width="80" height="20" /> 
            <rect x="17" y="435" rx="0" ry="0" width="5" height="7" /> 
            <rect x="199" y="430" rx="0" ry="0" width="80" height="20" />
        </ContentLoader>
    )
}

export default LoadingBlock

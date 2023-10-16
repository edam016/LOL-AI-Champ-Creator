
import React from 'react';


function ImageDisplay({ imageArtifacts }) {
    return (
      <div>
        {imageArtifacts.map((artifact, index) => (
          <div key={index}>
            <img
              src={`data:image/png;base64,${artifact.getBinary_asB64()}`}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>
    );
  }
  
  export default ImageDisplay;
  
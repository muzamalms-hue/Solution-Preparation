// components/BufferSolutions.jsx

import bufferSolutions from "../data/buffer-solutions";

export default function BufferSolutions() {
return (
<div className="solutions-container">
<h2 className="page-title">Buffer Solutions</h2>

<div className="solutions-grid">  
    {bufferSolutions.map((item, index) => (  
      <div className="solution-card" key={index}>  
        <h3 className="solution-name">{item.name}</h3>  

        <div className="solution-details">  
          <p><strong>Composition:</strong> {item.composition}</p>  
          <p><strong>pH Range:</strong> {item.phRange}</p>  
          <p><strong>Use:</strong> {item.use}</p>  
        </div>  
      </div>  
    ))}  
  </div>  
</div>

);
}

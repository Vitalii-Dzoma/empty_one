import React from 'react';

const Section = ({title, children}) => {
 
    return (
      <div>
            {title && <h1 className="feedback">{title}</h1>}
            {children}
      </div>
    );

}
export default Section
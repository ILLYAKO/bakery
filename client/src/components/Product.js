import React from "react";

export const Product = (props) => {
  return (
    
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src="images/sample-1.jpg" />
            <span class="card-title">{props.product.title}</span>
            {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
          </div>
          <div class="card-content">
            <p>{props.product.info}</p>
            {/* <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p> */}
          </div>
        </div>
      
    </div>
  );
};

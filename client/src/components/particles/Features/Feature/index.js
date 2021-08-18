import React from 'react'

const Feature = ({title, text, img}) => {
    return (
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            {title.split(".")[0]}.
            <span class="text-muted">{title.split(".")[1]}.</span>
          </h2>
          <p class="lead">{text}</p>
        </div>
        <div class="col-md-5">
          {/* <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg> */}
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={require("../../../../assets/images/" + img).default.toString()}
            alt={title}
             width="100%"
            // height="500"
          />
        </div>
      </div>
    );
}

export default Feature

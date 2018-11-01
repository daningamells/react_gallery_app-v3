// import all required dependencies

import React from 'react';
import GalleryItem from './Gallery-Item';

// setting data to varibale

const Gallery = (props) => {
  const data = props.data;

// map over array to create li gallery items

  let galleryItems = data.map(galleryItem =>
    <GalleryItem url={`https://farm${galleryItem.farm}.staticflickr.com/${galleryItem.server}/${galleryItem.id}_${galleryItem.secret}.jpg`} key={galleryItem.id}/>
  );

  return (
    <div className="photo-container">
      <h2>{props.title}</h2>
      <ul>
      {galleryItems = (data.length > 0) ? galleryItems : <li class="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>}
      </ul>
    </div>
  );
}

// export component

export default Gallery;

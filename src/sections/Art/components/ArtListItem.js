import { useEffect, useState } from "react";

function ArtListItem(props) {
  const { element } = props;

  return (
    <li key={element.id}>
      <div className="frame">
        <img
          src={
            "https://www.artic.edu/iiif/2/" +
            element.image_id +
            "/full/843,/0/default.jpg"
          }
          alt={element.title}
        />
      </div>
      <h3>{element.title}</h3>
      <p>Artist: {element.artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        {element.term_titles.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </ul>
    </li>
  );
}

export default ArtListItem;

import { useEffect, useState } from "react";
import ArtListItem from "./components/ArtListItem";
function ArtsSection() {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?limit=2")
      .then((res) => res.json())
      .then((art) => {
        setArtist(art.data);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artist.map((element, index) => {
            return <ArtListItem key={index} element={element} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;

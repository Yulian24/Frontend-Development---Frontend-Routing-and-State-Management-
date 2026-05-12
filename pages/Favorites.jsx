import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

function Favorites() {
  const { favorites, removeFavorite } = useContext(RecipeContext);

  return (
    <div>
      <h1>❤️ Favorit</h1>

      {favorites.length === 0 ? (
        <p>Tidak ada favorit</p>
      ) : (
        <div style={styles.grid}>
          {favorites.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.img} alt={item.name} style={styles.img} />
              <h3>{item.name}</h3>
              <button onClick={() => removeFavorite(item.id)}>
                ❌ Hapus
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  },
  img: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
  },
};

export default Favorites;
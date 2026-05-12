import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";

function Home() {
  const { recipes, addFavorite } = useContext(RecipeContext);
  const [search, setSearch] = useState("");

  const filtered = recipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>🍳 Daftar Resep</h1>

      <input
        type="text"
        placeholder="Cari resep..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      <div style={styles.grid}>
        {filtered.map((recipe) => (
          <div key={recipe.id} style={styles.card}>
            <img src={recipe.img} alt={recipe.name} style={styles.img} />
            <h3>{recipe.name}</h3>

            <Link to={`/recipe/${recipe.id}`}>
              <button style={styles.detailBtn}>Detail</button>
            </Link>

            <button
              style={styles.favBtn}
              onClick={() => addFavorite(recipe)}
            >
              ❤️ Favorit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  search: {
    padding: "10px",
    width: "100%",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "0.3s",
  },
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  detailBtn: {
    margin: "5px",
    padding: "8px",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  favBtn: {
    margin: "5px",
    padding: "8px",
    background: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default Home;
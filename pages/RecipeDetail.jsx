import { useParams } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

function RecipeDetail() {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <h2>Resep tidak ditemukan</h2>;

  return (
    <div style={styles.container}>
      <h1>{recipe.name}</h1>
      <p>Ini adalah detail resep dengan ID: {id}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#f4f4f4",
    borderRadius: "10px",
  },
};

export default RecipeDetail;
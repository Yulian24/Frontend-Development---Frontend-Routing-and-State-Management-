import { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes] = useState([
    { id: 1, name: "Nasi Goreng", img: "https://source.unsplash.com/300x200/?fried-rice" },
    { id: 2, name: "Mie Ayam", img: "https://source.unsplash.com/300x200/?noodles" },
    { id: 3, name: "Sate Ayam", img: "https://source.unsplash.com/300x200/?satay" },
  ]);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe) => {
    if (!favorites.find((item) => item.id === recipe.id)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <RecipeContext.Provider value={{ recipes, favorites, addFavorite, removeFavorite }}>
      {children}
    </RecipeContext.Provider>
  );
};
import React, { useEffect, useState } from "react";
import "./asset/main.css";
import { generateFavorite } from "./solution";
import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./component/layout/NavBar";
import CraftingGuide from "./component/content/CraftingGuide";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("basic");
  const [item, setItem] = useState({
    name: "planks",
    category: "basic",
    recipe: "recipe/basic/craft_planks.gif",
    error: "",
  });
  const [favorites, setFavorites] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      var myDoc = db.collection("users").doc(user.uid);
      myDoc.get().then((doc) => {
        if (doc.exists) {
          setFavorites(doc.data().favorites);
          console.log("activate");
        }
      });
    }
  }, [user]);

  const handleFavorites = () => {
    const currentItem = generateFavorite(item.category, item.name);
    if (favorites.includes(currentItem)) {
      console.log("Already included, thus remove it");
      let oldFavorites = [...favorites];
      const newFavorites = oldFavorites.filter(
        (favorite) => favorite !== currentItem
      );
      setFavorites(newFavorites);
      db.collection("users").doc(user.uid).set({ favorites: newFavorites });
    } else {
      let newFavorites = [...favorites];
      newFavorites.push(currentItem);
      setFavorites(newFavorites);
      db.collection("users").doc(user.uid).set({ favorites: newFavorites });
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar changeCategory={setCategory} auth={auth} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <CraftingGuide
                category={category}
                item={item}
                setItem={setItem}
                favorites={favorites}
                setFavorites={setFavorites}
                handleFavorites={handleFavorites}
                auth={auth}
              />
            )}
          />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import db from "./firestore";
import "./App.css";
import { useState, useEffect } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = db.collection("SHOP").onSnapshot((snapshot) => {
      if (snapshot.size) {
        // we have something
        let data = [];
        snapshot.forEach((doc) => data.push({ ...doc.data() }));
        setProducts(data);
        console.log("data: ", data);
        setLoading(false);
      } else {
        // it's empty
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [db]);

  return (
    <div className="App">
      <header className="App-header">
        <p>SHOP</p>
      </header>
    </div>
  );
}

export default Shop;

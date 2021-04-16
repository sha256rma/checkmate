import db from "../firestore";

function Dashboard() {
  const createProduct = (image, name, price, purchased, show) => {
    return db.collection("SHOP").add({
      createdAt: db.FieldValue.serverTimestamp(),
      image,
      name,
      price,
      purchased,
      show,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Dashboard;

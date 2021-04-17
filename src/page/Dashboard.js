import { db, storage } from "../firebase";
import { useState } from "react";

function Dashboard() {
  const [imageAsFile, setImageAsFile] = useState(null);
  const [itemName, setItemName] = useState(null);
  const [itemPrice, setItemPrice] = useState(null);
  const [itemSize, setItemSize] = useState(null);

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            console.log("imageAsUrl: ", fireBaseUrl);
            console.log("itemName: ", itemName);
            console.log("itemPrice: ", itemPrice);
            createProduct(
              fireBaseUrl,
              itemName,
              parseInt(itemPrice),
              itemSize,
              false,
              true
            );
          });
      }
    );
  };

  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const createProduct = (image, name, price, size, purchased, show) => {
    // let image =
    //   "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246";
    // let name = "Jordan 1 Retro High NC to Chi Leather (W)";
    // let price = 249.99;
    // let purchased = false;
    // let show = false;
    // let size = "US 9.5 / EU 42-43";
    return db.collection("SHOP").add({
      image,
      name,
      price,
      purchased,
      show,
      size,
    });
  };

  return (
    <div className="App">
      <form>
        <label for="image">image</label>
        <input type="file" id="image" onChange={handleImageAsFile} />
        <br />
        <label for="name">name</label>
        <input
          type="text"
          id="name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <br />
        <label for="name">size</label>
        <input
          type="text"
          id="size"
          value={itemSize}
          onChange={(e) => setItemSize(e.target.value)}
        />
        <br />
        <label for="price">price</label>
        <input
          type="number"
          id="price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </form>
      <button onClick={handleFireBaseUpload}>upload to firebase</button>
    </div>
  );
}

export default Dashboard;

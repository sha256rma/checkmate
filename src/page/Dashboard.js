import { db, storage } from "../firebase";
import { useState } from "react";

function Dashboard() {
  const [imageAsFile, setImageAsFile] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

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
            createProduct(fireBaseUrl, itemName, itemPrice, false, false);
          });
      }
    );
  };

  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const createProduct = (image, name, price, purchased, show) => {
    return db.collection("SHOP").add({
      image,
      name,
      price,
      purchased,
      show,
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
        <label for="price">price</label>
        <input
          type="text"
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

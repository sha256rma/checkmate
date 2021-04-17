import { db } from "../firebase";
import "../App.css";
import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Box,
  Container,
  Typography,
  GridList,
  GridListTile,
  Paper,
  Chip,
  Modal,
  TextField,
  Select,
  MenuItem,
  FormLabel,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { SettingsPowerRounded } from "@material-ui/icons";

let data = [
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
    size: "US 9.5 / EU 42-43",
  },
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: true,
    show: false,
    size: "US 10 / EU 43-44",
  },
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
    size: "US 8.5 / EU 41",
  },
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
    size: "US 9.5 / EU 42-43",
  },
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
    size: "US 9.5 / EU 42-43",
  },
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
    size: "US 9.5 / EU 42-43",
  },
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
    size: "US 9.5 / EU 42-43",
  },
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
    size: "US 9.5 / EU 42-43",
  },
];

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [address, setAddress] = useState("");
  const [apt, setApt] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");

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

  const renderShop = () => {
    return (
      <Paper
        style={{ maxHeight: 350, overflow: "auto" }}
        variant="outlined"
        elevation={3}
      >
        <GridList
          cellHeight={80}
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          cols={1}
        >
          {data.map((item) => {
            const { image, name, price, size, purchased, show } = item;
            return (
              <GridListTile
                style={{
                  backgroundColor: "#18181b",
                  borderColor: "#18181b",
                }}
                onClick={() => null}
                key={image}
                cols={1}
              >
                <Paper
                  style={{
                    overflow: "auto",
                    backgroundColor: "#18181b",
                    borderColor: "#18181b",
                  }}
                  variant="outlined"
                  elevation={3}
                >
                  <Box
                    style={{
                      backgroundColor: "#18181b",
                      borderColor: "#18181b",
                    }}
                    p={1}
                    display="flex"
                    flexDirection="row"
                  >
                    <img
                      style={{
                        height: 45,
                        aspectRatio: 1,
                        marginTop: 7,
                        marginRight: 10,
                      }}
                      src={image}
                      alt={"content image"}
                    />
                    <Box style={{ borderColor: "#18181b" }}>
                      <Typography
                        variant="caption"
                        style={{
                          fontWeight: "bold",
                          fontSize: 10,
                          color: "white",
                        }}
                      >
                        {name}
                      </Typography>
                      <br />
                      <Typography
                        style={{ fontSize: 10, color: "white" }}
                        display="inline"
                        variant="caption"
                      >
                        {size}
                      </Typography>
                      <Chip
                        size="small"
                        style={{
                          height: 12,
                          marginLeft: 10,
                          backgroundColor: purchased ? "red" : "green",
                          color: "white",
                          fontWeight: "bold",
                          fontSize: 10,
                        }}
                        label={purchased ? "PURCHASED" : "AVAILABLE"}
                      />
                      <br />
                      <Typography
                        variant="caption"
                        style={{
                          textDecorationLine: "line-through",
                          color: "grey",
                          fontSize: 10,
                          color: "white",
                        }}
                      >
                        {(price * 1.1).toFixed(2)} USD
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{
                          color: "red",
                          marginLeft: 10,
                          fontWeight: "bold",
                          fontSize: 10,
                        }}
                      >
                        {price.toFixed(2)} USD
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        justifyContent: "end",
                        alignItems: "end",
                        height: "100%",
                        paddingTop: 35,
                      }}
                      onClick={() => setOpen(true)}
                    >
                      {purchased ? null : (
                        <ShoppingCartIcon style={{ color: "white" }} />
                      )}
                    </Box>
                  </Box>
                </Paper>
              </GridListTile>
            );
          })}
        </GridList>
      </Paper>
    );
  };

  return (
    <Container
      style={{
        backgroundColor: "#18181b",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="sm"
    >
      <Tabs style={{ backgroundColor: "#18181b", borderColor: "#18181b" }}>
        <TabList>
          <Tab
            style={{
              fontWeight: "bold",
              backgroundColor: "#9147ff",
              color: "white",
            }}
          >
            SHOP ({data.length})
          </Tab>
        </TabList>

        <TabPanel
          style={{ backgroundColor: "#18181b", borderColor: "#18181b" }}
        >
          <Box style={{ marginBottom: 10 }}>
            <Chip
              size="small"
              style={{
                backgroundColor: "#9147ff",
                color: "white",
                fontWeight: "bold",
                fontSize: 10,
              }}
              label={"FREE SHIPPING"}
            />
            <Chip
              size="small"
              style={{
                marginLeft: 10,
                backgroundColor: "#9147ff",
                color: "white",
                fontWeight: "bold",
                fontSize: 10,
              }}
              label={"AUTHENTICITY GUARANTEED"}
            />
          </Box>
          {renderShop()}
        </TabPanel>
      </Tabs>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            width: "85%",
            backgroundColor: "white",
            padding: 10,
            paddingVertical: 30,
          }}
        >
          <TextField
            placeholder="Email"
            value={email}
            style={{ width: "100%" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            placeholder="First Name"
            value={first}
            style={{ width: "100%" }}
            onChange={(e) => setFirst(e.target.value)}
          />
          <TextField
            placeholder="Last Name"
            value={last}
            style={{ width: "100%" }}
            onChange={(e) => setLast(e.target.value)}
          />
          <TextField
            placeholder="Address"
            value={address}
            style={{ width: "100%" }}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            placeholder="Apartment, suite, etc (optional)"
            value={apt}
            style={{ width: "100%" }}
            onChange={(e) => setApt(e.target.value)}
          />
          <TextField
            placeholder="City"
            value={city}
            style={{ width: "100%" }}
            onChange={(e) => setCity(e.target.value)}
          />
          {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select> */}
          <TextField
            placeholder="Zip Code"
            value={zip}
            style={{ width: "100%" }}
            onChange={(e) => setZip(e.target.value)}
          />
          <TextField
            placeholder="Phone Number"
            value={phone}
            style={{ width: "100%" }}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Box>
      </Modal>
    </Container>
  );
}

export default Shop;

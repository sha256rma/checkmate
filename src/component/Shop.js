import { db } from "../firebase";
import "../App.css";
import { useEffect, useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import SelectUSState from "react-select-us-states";
import {
  Box,
  Button,
  Container,
  Typography,
  GridList,
  GridListTile,
  Paper,
  Chip,
  Modal,
  TextField,
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
  const [next, setNext] = useState(false);
  const countries = useMemo(() => countryList().getData(), []);

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
        style={{
          maxHeight: 400,
          height: 400,
          backgroundColor: "#464649",
        }}
      >
        <GridList
          style={{
            width: "100%",
            backgroundColor: "blue",
          }}
          cols={1}
        >
          {products.map((item) => {
            const { image, name, price, size, purchased, show } = item;
            return (
              <GridListTile
                style={{ backgroundColor: "yellow" }}
                onClick={() => null}
                key={image}
                cols={1}
              >
                <Box
                  style={{
                    backgroundColor: "#18181a",
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
        width: "100%",
        marginTop: 10,
      }}
    >
      <Tabs
        style={{
          backgroundColor: "#18181b",
          borderColor: "#18181b",
          width: "100%",
        }}
      >
        <TabList>
          <Tab
            style={{
              fontWeight: "bold",
              backgroundColor: "#9147ff",
              color: "white",
              width: "92%",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            SHOP ({products.length})
          </Tab>
        </TabList>

        <TabPanel style={{ backgroundColor: "#18181b" }}>
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
        onClose={() => {
          setOpen(false);
          setNext(false);
        }}
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
            width: "80%",
            backgroundColor: "white",
            padding: 20,
            paddingVertical: 30,
          }}
        >
          {!next ? (
            <Box>
              <TextField
                placeholder="Email"
                value={email}
                style={{ width: "100%", marginBottom: 10 }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#9147ff",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
                onClick={() => setNext(true)}
              >
                Next
              </Button>
            </Box>
          ) : (
            <Box>
              <Box display="flex" flexDirection="row">
                <TextField
                  placeholder="First Name"
                  value={first}
                  style={{ width: "49%", marginBottom: 10 }}
                  onChange={(e) => setFirst(e.target.value)}
                />
                <TextField
                  placeholder="Last Name"
                  value={last}
                  style={{ width: "49%", marginLeft: "2%", marginBottom: 10 }}
                  onChange={(e) => setLast(e.target.value)}
                />
              </Box>
              <TextField
                placeholder="Address"
                value={address}
                style={{ width: "100%", marginBottom: 10 }}
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                placeholder="Apartment, suite, etc (optional)"
                value={apt}
                style={{ width: "100%", marginBottom: 10 }}
                onChange={(e) => setApt(e.target.value)}
              />
              <TextField
                placeholder="City"
                value={city}
                style={{ width: "100%", marginBottom: 10 }}
                onChange={(e) => setCity(e.target.value)}
              />
              <Box
                display="flex"
                flexDirection="row"
                style={{ marginBottom: 10 }}
              >
                <Box style={{ width: "49%" }}>
                  <Select
                    options={countries}
                    value={country}
                    placeholder="Country"
                    onChange={(data) => {
                      setCountry(data);
                    }}
                  />
                </Box>
                <Box style={{ width: "49%", marginLeft: "2%" }}>
                  <Select
                    options={states}
                    value={state}
                    placeholder="State"
                    onChange={(data) => {
                      setState(data);
                    }}
                  />
                </Box>
              </Box>
              <TextField
                placeholder="Zip Code"
                value={zip}
                style={{ width: "100%", marginBottom: 10 }}
                onChange={(e) => setZip(e.target.value)}
              />
              <TextField
                placeholder="Phone Number"
                value={phone}
                style={{ width: "100%", marginBottom: 10 }}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#9147ff",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
                onClick={() => null}
              >
                Finish
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </Container>
  );
}

export default Shop;

const states = [
  { value: "xyz", label: "Alabama" },
  { value: "xyz", label: "Alaska" },
  { value: "xyz", label: "Arizona" },
  { value: "xyz", label: "Arkansas" },
  { value: "xyz", label: "California" },
  { value: "xyz", label: "Colorado" },
  { value: "xyz", label: "Connecticut" },
  { value: "xyz", label: "Delaware" },
  { value: "xyz", label: "Florida" },
  { value: "xyz", label: "Georgia" },
  { value: "xyz", label: "Hawaii" },
  { value: "xyz", label: "Idaho" },
  { value: "xyz", label: "Illinois" },
  { value: "xyz", label: "Indiana" },
  { value: "xyz", label: "Iowa" },
  { value: "xyz", label: "Kansas" },
  { value: "xyz", label: "Kentucky" },
  { value: "xyz", label: "Louisiana" },
  { value: "xyz", label: "Maine" },
  { value: "xyz", label: "Maryland" },
  { value: "xyz", label: "Massachusetts" },
  { value: "xyz", label: "Michigan" },
  { value: "xyz", label: "Minnesota" },
  { value: "xyz", label: "Mississippi" },
  { value: "xyz", label: "Missouri" },
  { value: "xyz", label: "Montana" },
  { value: "xyz", label: "Nebraska" },
  { value: "xyz", label: "Nevada" },
  { value: "xyz", label: "New Hampshire" },
  { value: "xyz", label: "New Jersey" },
  { value: "xyz", label: "New Mexico" },
  { value: "xyz", label: "New York" },
  { value: "xyz", label: "North Carolina" },
  { value: "xyz", label: "North Dakota" },
  { value: "xyz", label: "Ohio" },
  { value: "xyz", label: "Oklahoma" },
  { value: "xyz", label: "Oregon" },
  { value: "xyz", label: "Pennsylvania" },
  { value: "xyz", label: "Rhode Island" },
  { value: "xyz", label: "South Carolina" },
  { value: "xyz", label: "South Dakota" },
  { value: "xyz", label: "Tennessee" },
  { value: "xyz", label: "Texas" },
  { value: "xyz", label: "Utah" },
  { value: "xyz", label: "Vermont" },
  { value: "xyz", label: "Virginia" },
  { value: "xyz", label: "Washington" },
  { value: "xyz", label: "West Virginia" },
  { value: "xyz", label: "Wisconsin" },
  { value: "xyz", label: "Wyoming" },
];

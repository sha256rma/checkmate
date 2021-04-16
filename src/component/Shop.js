import db from "../firestore";
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
  Badge,
  Chip,
  Divider,
  IconButton,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
];

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
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

  const renderShop = () => {
    return (
      <Paper
        style={{ maxHeight: 250, overflow: "auto" }}
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
                style={{ opacity: purchased ? 0.4 : 1 }}
                onClick={() => null}
                key={image}
                cols={1}
              >
                <Paper
                  style={{ overflow: "auto", margin: 5 }}
                  variant="outlined"
                  elevation={3}
                >
                  <Box p={1} display="flex" flexDirection="row">
                    <img
                      style={{ height: 45, aspectRatio: 1 }}
                      src={image}
                      alt={"content image"}
                    />
                    <Box>
                      <Typography
                        variant="caption"
                        style={{ fontWeight: "bold", fontSize: 10 }}
                      >
                        {name}
                      </Typography>
                      <br />
                      <Typography
                        style={{ fontSize: 10 }}
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
                        backgroundColor: "red",
                      }}
                      onClick={() => null}
                    >
                      <AddShoppingCartIcon />
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
    <Container maxWidth="sm">
      <Tabs style={{ backgroundColor: "white" }}>
        <TabList>
          <Tab style={{ fontWeight: "bold" }}>SHOP ({data.length})</Tab>
          <Tab style={{ fontWeight: "bold" }}>CART ({cart.length})</Tab>
        </TabList>

        <TabPanel>{renderShop()}</TabPanel>
        <TabPanel>
          <Typography>Any content 1</Typography>
        </TabPanel>
      </Tabs>
    </Container>
  );
}

export default Shop;

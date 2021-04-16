import {
  Button,
  Grid,
  Box,
  Container,
  Typography,
  GridList,
  GridListTile,
} from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";

let data = [
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
  },
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
  },
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
  },
  {
    image:
      "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Images/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606322288&fit=clip&fm=jpg&ixlib=react-9.0.3&w=1246",
    name: "Jordan 1 Retro High NC to Chi Leather (W)",
    price: 249.99,
    purchased: false,
    show: false,
  },
];

function Shop() {
  return (
    <Container maxWidth="sm">
      <Tabs style={{ backgroundColor: "white" }}>
        <TabList>
          <Tab style={{ fontWeight: "bold" }}>SHOP</Tab>
          <Tab style={{ fontWeight: "bold" }}>CART</Tab>
        </TabList>

        <TabPanel>
          <Typography>Any content 1</Typography>
          <GridList
            cellHeight={70}
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            }}
            cols={1}
          >
            {data.map((item) => {
              const { image, name, price, purchased, show } = item;
              return (
                <GridListTile onClick={() => null} key={image} cols={1}>
                  <Box display="flex" flexDirection="row">
                    <img
                      style={{ height: 60, width: 80 }}
                      src={image}
                      alt={"content image"}
                    />
                    <Box>
                      <Typography>asda</Typography>
                      <Typography>asda</Typography>
                      <Typography>asda</Typography>
                    </Box>
                  </Box>
                </GridListTile>
              );
            })}
          </GridList>
        </TabPanel>
        <TabPanel>
          <Typography>Any content 1</Typography>
        </TabPanel>
      </Tabs>
    </Container>
  );
}

export default Shop;

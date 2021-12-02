import { useEffect, useState} from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout} from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import QuickStart from "components/QuickStart";

import "./style.css";
import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Avenir, sans-serif",
    color: "#041836",
    marginTop: "150px",
    padding: "10px",
    background: "#111",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#111",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Avenir, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "10px 10px",
    paddingTop: "20px",
  },
  headerRight: {
    display: "flex",
    gap: "21px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "400",
    color: "#ffffff",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();



  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "120vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
            <NavLink to="/QuickStart"><Logo /></NavLink>

          <Menu
            theme="dark"
            mode="vertical"
            style={{
              display: "flex",
              fontSize: "15px",
              fontWeight: "500",
              marginLeft: "50px",
              width: "100%",
              background: "#111",
              color: "#ffffff",
            }}
            defaultSelectedKeys={["nftMarket"]}
          >
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/NFTMarketPlace">Marketplace</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">Inventory</NavLink>
            </Menu.Item>
            <Menu.Item key="transactions">
              <NavLink to="/Transactions">Transactions</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
                        <Route path="/QuickStart">
              <QuickStart />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue}/>
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
          </Switch>
          <Redirect to="/QuickStart" />
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
Copyright 2021 Skylandia
        </Text>

      
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div class="logo-skylandia" style={{ display: "flex" }}>
 <img src="https://assets.codepen.io/4625073/skylandia-logo.png" />

  </div>
);

export default App;

import React, { useEffect } from 'react'
import { Layout, Menu, Divider } from "antd";
import 'antd/dist/antd.css';
import "../static/header.css";
import Link from "next/link";
import WrappedContactForm from '../components/Contact';


const { Header, Content, Footer } = Layout;

const Home = () => {

  const shrinkHeader = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("header");
    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    }
    else {
      headerEl.classList.remove("smaller");
    }

  }
  useEffect(() => {
    console.log("useeffect called")
    window.addEventListener("scroll", shrinkHeader);
  }, [shrinkHeader])

  return (
    <div>
      <Layout className="layout">
        <Header id="header" className="header">
          <div className="header-contents" style={{}}>
            <div id="logo" className="logo"><img src="../static/logo.png" /></div>

            <Menu
              theme="dark"
              mode="horizontal"
              className="menu"
              style={{ lineHeight: '64px', textTransform: "uppercase", backgroundColor: "inherit" }}

            >
              <Menu.Item className="menu-item" key="1">Projekt/tidplan</Menu.Item>
              <Menu.Item className="menu-item" key="2">Bilder/Skisser</Menu.Item>
              <Menu.Item className="menu-item" key="3">fakta lokaler</Menu.Item>
              <Menu.Item className="menu-item" key="4">ekonomi/status</Menu.Item>
              <Menu.Item className="menu-item" key="5">kontakt</Menu.Item>
            </Menu>
          </div>
        </Header>
        <WrappedContactForm />
        <Divider style={{ height: "5px", background: "blue" }} />
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}


export default Home

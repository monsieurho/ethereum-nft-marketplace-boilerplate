import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch]
  );

  return (
    <div class="hero-banner">
      <video autoPlay muted loop id="myVideo">
  <source src="https://assets.codepen.io/4625073/marketplace+%282%29.mp4" type="video/mp4" />
  Your browser does not support HTML5 video.
      </video>
      <div class="hero-banner__content">
      <h1 class="hero-headline">
        POWER THE PLAYERS
      </h1>
        <div class="button-container"><a class="button-white-header">Explore The Marketplace</a></div>
      </div>
      </div>
  );
}

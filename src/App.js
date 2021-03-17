import React from "react";
import "./style.css";
import Background from "../src/components/Background";
import { CircleTop } from "../src/components/Background";
import { CircleBottom } from "../src/components/Background";
import ProfileCard from "../src/components/ProfileCard.js";

export default function App() {
  return (
    <>
      <Background>
        <CircleTop />
        <CircleBottom />
        <ProfileCard />
      </Background>
    </>
  );
}

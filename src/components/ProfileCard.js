import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 370px;
  width: 350px;
  background: white;
  border-radius: 15px 15px 15px 15px;
  overflow: hidden;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.2);

  .CardBackground {
    width: 100%;
    height: 130px;
  }

  .Stats {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1.5px solid #e2e2e2;
    height: 90px;
  }
  .UserInfo {
    flex-grow: 1;
    position: relative;
  }

  .Avatar {
    left: 0;
    right: 0;
    top: -50px;
    margin: auto;
    border: 5px solid white;
    position: absolute;
    background: url(../../image-victor.jpg);
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }

  .UserName {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
  }
  p {
    font-size: 18px;
    font-family: "Kumbh Sans", sans-serif;
  }

  .StatContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .City {
    color: hsl(227, 10%, 46%);
    font-size: 14px;
    margin-top: 10px;
  }
`;

const Stat = ({ text, label }) => {
  return (
    <div className="StatContainer">
      <p style={{ fontWeight: 700, color: "hsl(229, 23%, 23%)" }}>{text}</p>
      <p
        style={{
          marginTop: 7,
          fontSize: 9,
          letterSpacing: 2,
          color: "hsl(0, 0%, 59%)",
        }}
      >
        {" "}
        {label}
      </p>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <img
        className="CardBackground"
        src="../../bg-pattern-card.svg"
        alt="patternBg"
      />
      <div className="UserInfo">
        <div className="Avatar" />
        <div className="UserName">
          <p
            style={{
              paddingRight: 10,
              color: "hsl(229, 23%, 23%)",
              fontWeight: 700,
            }}
          >
            Victor Crest
          </p>
          <p style={{ padgingLeft: 10, color: "hsl(227, 10%, 46%)" }}>26</p>
        </div>
        <center>
          <p className="City">London</p>
        </center>
      </div>
      <div className="Stats">
        <Stat text="80K" label="Followers" />
        <Stat text="803k" label="Likes" />
        <Stat text="1.4k" label="Photos" />
      </div>
    </ProfileCardContainer>
  );
};

export default ProfileCard;

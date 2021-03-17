import styled from "styled-components";

export const CircleTop = styled.img.attrs((props) => ({
  src: "../../bg-pattern-top.svg",
}))`
  bottom: 38%;
  right: 51%;
  position: absolute;
`;

export const CircleBottom = styled.img.attrs((props) => ({
  src: "../../bg-pattern-bottom.svg",
}))`
  top: 50%;
  left: 50%;
  position: absolute;
  user-select: none;
`;

const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: hsl(185, 75%, 39%);
  user-select: none;
  overflow: hidden;
`;

export default Background;

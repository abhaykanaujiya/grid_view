import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";

const StyledWrapper = styled.div`
  border: 1px solid;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  row-gap: 25px;
  column-gap: 65px;
  padding: 60px;
  margin: 225px 215px 0px 215px;
  @media (max-width: 664px) {
    border: none;
    padding: 0px;
    margin: 1px 0px 0px 1px;
    column-gap: 15px;
  }
`;

const StyledBox = styled.div`
  border: 1px solid red;
  margin: 5px;
  display: flex;
  padding: 20px 20px 20px 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0px;
  }

  font-style: ${({ clickedType }) =>
    clickedType == "italic" ? clickedType : "normal"};
  font-size: 20px;
  font-weight: ${({ clickedType }) =>
    clickedType == "bold" ? clickedType : "normal"};
  text-decoration: ${({ clickedType }) =>
    clickedType == "underline" ? clickedType : "normal"};
  color: ${({ clickedType }) => (clickedType == "color" ? "red" : "black")};
`;

const descriptionList = [
  "He's not the sharpest knife in the drawer.",
  "The big building was blazing with lights.",
  "Now you must answer some big questions.",
  "Get Your Act Together!",
];

const App = () => {
  const [clickedIndes, setClickedIndex] = useState(null);

  const [clickedType, setClickedType] = useState("");

  return (
    <StyledWrapper>
      {/* mapped array for total number of boxes */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        if (item % 2 !== 0) {
          return (
            <StyledBox clickedIndes={null} clickedType="" index={index}>
              <span onClick={() => setClickedType("bold")}>Bold</span>,
              <span onClick={() => setClickedType("italic")}>Italic</span>,
              <span onClick={() => setClickedType("color")}>Colorr</span>,
              <span onClick={() => setClickedType("underline")}>Underline</span>
            </StyledBox>
          );
        } else {
          return (
            <StyledBox
              clickedIndes={clickedIndes}
              clickedType={clickedType}
              index={index}
            >
              {/* mapped array for description according to even odd logic */}
              {descriptionList[Math.max(item / 2) - 1]}{" "}
            </StyledBox>
          );
        }
      })}
    </StyledWrapper>
  );
};

export default App;

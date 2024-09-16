import styled from "styled-components";
import { useState } from "react";

const NumberSelector = () => {

    const [selectedNumber,setSelectedNumber] = useState();
    return (
        <NumberSelectorContainer>
             <div className="flex">
                <Box isSelected={1 == selectedNumber } onClick={() => setSelectedNumber(1)}>1</Box>
                <Box isSelected={2 == selectedNumber } onClick={() => setSelectedNumber(2)}>2</Box>
                <Box isSelected={3 == selectedNumber } onClick={() => setSelectedNumber(3)}>3</Box>
                <Box isSelected={4 == selectedNumber } onClick={() => setSelectedNumber(4)}>4</Box>
                <Box isSelected={5 == selectedNumber } onClick={() => setSelectedNumber(5)}>5</Box>
                <Box isSelected={6 == selectedNumber } onClick={() => setSelectedNumber(6)}>6</Box>
            </div>
            <p>
                Select Number
            </p>
        </NumberSelectorContainer>
       
    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    .flex{
        display : flex;
        gap : 24px;
    }

    p{
        font-size : 24px;
        font-weight : 700px;
    }
`;

const Box = styled.div`

height : 72px;
width : 72px;
border : 1px solid black;
font-size : 24px;
font-weight : 700;
display : grid;
place-items : center;
background-color : ${(props) => props.isSelected ? "black" : "white"};
color : ${(props) => props.isSelected ? "white" : "black"};

`;
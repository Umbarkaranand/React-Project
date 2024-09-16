
import styled from "styled-components";

const startGame = ({toggle}) =>
{

    return (
        <Container>
             <img
                src="./Images/dices.png"
                alt="Dice Image"
              />
              <div  className="content">
                <h1> DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
              </div>
        </Container>
    );
};

export default startGame;

const Container = styled.div`
max-widht: 1180px;
height : 100vh;
display : flex;
margin : 0 auto;
align-items : center;

.content {
    h1{
        font-size : 96px;
        white-space : nowrap;
    }
    
}`;

const Button =styled.button`
padding : 10px 18px;
background : #000000;
border-radius : 5px;
color : white;
min-width : 220px;
border : none;
font-size: 16px;

&:hover{
    background-color : white;
    border: 1px solid black;
    color: black;
}`;
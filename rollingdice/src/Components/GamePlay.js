
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";

const GamePlay = () =>
{

    return (
        <MainContainer>
            <div className="top">
                <TotalScore></TotalScore>
                <NumberSelector></NumberSelector>
            </div>

            <RoleDice></RoleDice>
            
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.main`
    padding : 30px 50px;
    .top{
        display : flex;
        justify-content : space-between;
        align-items : center;
    }

`;
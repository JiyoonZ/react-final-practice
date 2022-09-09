import styled, {keyframes} from "styled-components";

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">🥰</Emoji>
      </Box>
      <Emoji>🥰</Emoji>
    </Wrapper>
  );
}
const rotateAnimation = keyframes`
0% {
  tranform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius: 100px;
  
}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
  
}
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 100px;
  }
`;
const Wrapper = styled.div`
  display: flex;
`;

export default App;

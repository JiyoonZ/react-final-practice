import styled, {keyframes} from "styled-components";

function App() {
  return (
    <>
      <Wrapper>
        <Box>
          <Emoji as="p">🥰</Emoji>
        </Box>
        <Emoji>🔥</Emoji>
      </Wrapper>
      <Input />
      <Input />
      <Input />
      <Input />
    </>
  );
}

//attrs 사용하기
const Input = styled.input.attrs({required: true, maxLength: 10, minLength: 3})`
  background-color: teal;
  color: white;
`;
// 애니메이션 사용하기
const rotateAnimation = keyframes`
// from{} to{} 혹은
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
// 컴포넌트 자체를 target 해서 css 적용하기
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

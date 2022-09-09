import React from "react";
import styled from "styled-components";

function App() {
  const onClick = (evt: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <Container>
      <Dummy text="hello" active />
      {/* <form> */}
      <button onClick={onClick}>Click me</button>
      {/* </form> */}
    </Container>
  );
}

interface DummyProps {
  text: string;
  active?: boolean;
}
function Dummy({text, active = false}: DummyProps) {
  return (
    <H1>
      {text}
      {String(active)}
    </H1>
  );
}

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
export default App;

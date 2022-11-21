import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 200px;
  background-color: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const cirleVar = {};
function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{borderRadius: "50%", scale: 0.7}} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{borderRadius: "0%", scale: 1}} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;

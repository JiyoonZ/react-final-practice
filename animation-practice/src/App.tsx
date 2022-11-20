import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const box = {
  entry: (back: boolean) => ({
    x: back ? -300 : 300,
    opacity: 0,
    scale: 0.7,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 300 : -300,
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.3,
    },
  }),
};
function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence initial={false} mode="wait" custom={back}>
        <Box
          custom={back}
          key={visible}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App;

import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
  width: 50vw;
  gap: 10px;
  margin-bottom: 30px;
`;
const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  &:hover {
    cursor: pointer;
  }
`;
const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgb(35, 3, 243);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const ToggleBox = styled(motion.div)`
  background: rgba(255, 255, 255, 1);
  width: 300px;
  height: 200px;
  margin: 5px;
  border-radius: 15px;
  box-shadow: 0px 2px 4px black;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const overlayVar = {
  initial: {background: "rgba(0, 0, 0, 0)"},
  animate: {background: "rgba(0, 0, 0, .7)"},
  exit: {background: "rgba(0, 0, 0, 0)"},
};
function App() {
  const [id, setId] = useState<string | null>(null);
  const [circle, setCircle] = useState<string>("3");
  console.log(circle);
  return (
    <>
      <Wrapper>
        <Grid>
          {[1, 2, 3, 4].map((n) => (
            <Box key={n} layoutId={n + ""} onClick={() => setId(n + "")}>
              {n + "" === circle ? <Circle layoutId="circle" /> : null}
            </Box>
          ))}
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlay
              onClick={() => setId(null)}
              variants={overlayVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ToggleBox layoutId={id} style={{width: 400, height: 200}} />
            </Overlay>
          ) : null}
        </AnimatePresence>
        <button
          onClick={() => {
            if (circle === "3") setCircle("2");
            if (circle === "2") setCircle("3");
          }}
        >
          🚀 MOVE!
        </button>
      </Wrapper>
    </>
  );
}

export default App;

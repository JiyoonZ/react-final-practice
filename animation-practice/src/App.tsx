import styled from "styled-components";
import {motion} from "framer-motion";
import {useRef} from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  padding: 10px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 30px;
`;
const Box2 = styled(Box)`
  background-color: rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* gap: 4px; */
`;
const Circle = styled(motion.div)`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: white;
  place-self: center;
`;
const BiggerBox = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
//Varient : start, end...
const myVars = {
  start: {scale: 0},
  end: {scale: 1, rotateZ: 360, transition: {type: "spring", delay: 0.5}},
};

const boxVars = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const circleVars = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};
const gestureVars = {
  click: {
    scale: 0.8,
    borderRadius: "50%",
  },
  hover: {
    scale: 1.2,
    rotateZ: 180,
  },
  drag: {
    backgroundColor: "rgb(0, 0, 0)",
    transition: {
      duration: 5,
    },
  },
};
function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end" />
      <Box2 variants={boxVars} initial="start" animate="end">
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
      </Box2>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={1}
          dragConstraints={biggerBoxRef}
          variants={gestureVars}
          // whileHover="hover"
          // whileTap="click"
          whileDrag="drag"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;

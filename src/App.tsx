import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 600px;
  gap: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.div)`
  margin-top: 20px;
  padding: 8px;
  background-color: white;
  color: blue;
  border-radius: 10px;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const swtichVariants = {
  clicked: (clicked: boolean) => ({
    color: clicked ? "orange" : "blue",
    scale: clicked ? 1.5 : 1,
  }),
};

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper>
      <Grid>
        <Box
          whileHover={{ scaleX: 1.2, originX: 1, scaleY: 1.2, originY: 1 }}
          onClick={() => setId("1")}
          layoutId={"1"}
        ></Box>
        <Box onClick={() => setId(null)} layoutId={"2"}>
          {!clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box onClick={() => setId(null)} layoutId={"3"}>
          {clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          whileHover={{ scaleX: 1.2, originX: 0, scaleY: 1.2, originY: 0 }}
          onClick={() => setId("4")}
          layoutId={"4"}
        ></Box>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box
              layoutId={id}
              style={{ width: 300, height: 200, backgroundColor: "white" }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Button
        variants={swtichVariants}
        animate="clicked"
        custom={clicked}
        onClick={() => setClicked((prev) => !prev)}
      >
        swtich
      </Button>
    </Wrapper>
  );
}

export default App;

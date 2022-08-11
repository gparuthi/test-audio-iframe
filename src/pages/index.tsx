import type { NextPage } from "next";
import styled from "styled-components";
import PauseSVG from "../assets/icons/pause.svg";
import DeviceList from "../components/DeviceList";
import Frame from "./frame";

const Container = styled.div`
  display: flex;
  padding: 10px;
  color: white;
  height: 100vh;
`;
const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid green;
  width: 100vw;
`;
const Content = styled.div`
  display: flex;
  width: 600px;
  height: 500px;
  background-color: charcoal;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  padding: 10px;
  gap: 10px;
`;
export const Pause = styled(PauseSVG)`
  width: 20px;
  height: 20px;
  fill: palevioletred;
`;
const Home: NextPage = () => {
  return (
    <Container>
      <Centered>
        <Content>
          <DeviceList />
        </Content>
        <Content>
          <iframe src="/frame" width="100%" height="100%" />
        </Content>
      </Centered>
    </Container>
  );
};

export default Home;

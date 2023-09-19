import styled from "styled-components";
import QrImage from "./assets/image-qr-code.png";

const MainContainer = styled.div`
  background-color: hsl(212, 45%, 89%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 270px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;

  padding: 15px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px -8px black;

  border: 1px;
  border-color: hsl(220, 15%, 55%);
`;
const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const CardBody = styled.div`
  margin-top: 5px;
  width: 90%;
  text-align: center;
`;
const CardTitle = styled.h2`
  font-size: 18px;
  color: hsl(218, 44%, 22%);
  font-weight: 700;
`;
const CardText = styled.p`

  font-size: 15px;
  color: hsl(220, 15%, 55%);
  font-weight: 400;

`;

function App() {
  return (
    <>
      <MainContainer>
        <Card>
          <ImageContainer>
            <Image src={QrImage} alt="qr-code-img"></Image>
          </ImageContainer>
          <CardBody>
            <CardTitle>
              Improve your front-end skills by building projects
            </CardTitle>
            <CardText>
              Scan the QR code to visit Frontend Mentor and take you coding
              skills to the next level
            </CardText>
          </CardBody>
        </Card>
      </MainContainer>
    </>
  );
}

export default App;

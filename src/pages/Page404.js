import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Page404 = () => {
  return (
    <Container>
      <h1>Page Not Found</h1>
    </Container>
  );
};

export default Page404;

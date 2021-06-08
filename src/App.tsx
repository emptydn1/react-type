import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: red;
`;

function App() {
  return (
    <div>
      {process.env.NAME}
      <Button>Primary</Button>
    </div>
  );
}

export default App;

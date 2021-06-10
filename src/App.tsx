import React, { useState } from "react";

import styled from "styled-components";

const Button = styled.button`
  color: red;
`;

const App: React.FC = () => {
  const [state, setstate] = useState<string>("");

  const a = () => {
    setstate("");
  };

  return (
    <div>
      {state}
      {process.env.NAME}
      <Button>Primary</Button>
    </div>
  );
};

export default App;

import React from 'react';
import Palette from "./palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[4]));

  return (
    <div>
      <Palette {...seedColors[2]} />
    </div>
  );
}

export default App;

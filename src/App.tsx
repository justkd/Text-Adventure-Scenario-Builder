/**
 * @file App.tsx
 * @author justKD
 * @fileoverview
 * App entry point.
 */

import * as React from "react";

import "./css/styles.css";

import { Title } from "./tsx/Title";
import { Diagram } from "./tsx/Diagram";
import { Toolbar } from "./tsx/Toolbar";
import { HelpDrawer } from "./tsx/HelpDrawer";

/** GoJS is being loaded via CDN in index.html. */
// import "./js/lib/go";

export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleHelpDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="App">
      <Title />
      <Diagram />
      <Toolbar handleHelpDrawer={handleHelpDrawer} />
      <HelpDrawer isOpen={open} />
    </div>
  );
}

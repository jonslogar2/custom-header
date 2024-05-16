import React from "react";
import { FlexPlugin } from "@twilio/flex-plugin";

import globoLogo from "./assets/globo-asiatico-logo.jpg";
import cynLogo from "./assets/cyn-logo.jpeg";

const PLUGIN_NAME = "GloboCustomHeaderPlugin";

export default class GloboCustomHeaderPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const options = { sortOrder: -1 };
    // * Main Header
    flex.MainHeader.Content.add(
      <div
        key="custom-header"
        style={{
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "10px",
          marginRight: "-27px",
        }}
      >
        <img
          src={globoLogo}
          alt="Globo Asiatico"
          style={{ height: "30px", marginRight: "5px" }}
        />
        <p>Globo Asiatico Powered by</p>

        <img
          src={cynLogo}
          alt="CYN Solutions Inc."
          style={{ height: "30px", marginRight: "5px", marginLeft: "5px" }}
        />
        <p>CYN Solutions Inc. </p>
        <p style={{ fontSize: "19px", marginLeft: "8px" }}>X</p>
      </div>,
      { sortOrder: 1 }
    );
  }
}

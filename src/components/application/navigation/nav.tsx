import React from "react";
import {
  Container,
  Dropdown,
  DropdownToggle,
  Navbar,
  NavItem,
  DropdownItem,
} from "react-bootstrap";
import { BackgroundMapsOptions } from "../../../layers/base/backgroundMapsOptions";
import FireZone from "../../../layers/fire/zone/fireZone";
import FireStation from "../../../layers/fire/station/fireStation";
import SwitchboardZone from "../../../layers/switchboard/zone/switchboardZone";
import SwitchboardStation from "../../../layers/switchboard/station/switchboardStation";
import { DrawCircleButton } from "../../map/draw/drawCircleButton";
import { DrawPolygonButton } from "../../map/draw/drawPolygonButton";
import ClearDrawingButton from "../../map/draw/clearDrawingButton";

const LOGO_SRC = "./icons/fire-logo.png";
const LOGO_WIDTH = "30";
const LOGO_HEIGHT = "30";

interface DropdownComponentProps {
  children: React.ReactNode;
  title: string;
}

const DropdownComponent = ({ children, title }: DropdownComponentProps) => {
  return (
    <Dropdown>
      <DropdownToggle variant="dark" id="dropdown-basic">
        {title}
      </DropdownToggle>
      <Dropdown.Menu id="dropdown-menu" variant={"dark"}>
        {children}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ padding: "10px 0" }}
      >
        <Container
          fluid
          className="navigation"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand id={"nav-brand"}>
              <img
                src={LOGO_SRC}
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                className={"d-inline block align-top"}
                alt="fire-logo"
              />
              FireHub
            </Navbar.Brand>
            <NavItem>
              <BackgroundMapsOptions />
            </NavItem>
            <DropdownComponent title={"Fire department"}>
              <FireZone />
              <FireStation />
            </DropdownComponent>
            <DropdownComponent title={"Switchboard"}>
              <SwitchboardZone />
              <SwitchboardStation />
            </DropdownComponent>
          </Navbar.Collapse>
        </Container>
        <div className="d-none d-lg-flex" style={{ marginLeft: "20px" }}>
          <DrawCircleButton />
          <DrawPolygonButton />
          <ClearDrawingButton />
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;

import { Box, Indicator } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../Context/ShoppingCartContext";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <nav className="navbar navbar-expand-lg bg-light container">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/store">
                Store
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        {cartQuantity > 0 && (
          <Box onClick={openCart}>
            <Indicator label={cartQuantity} radius={50}>
              <IconShoppingCart />
            </Indicator>
          </Box>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

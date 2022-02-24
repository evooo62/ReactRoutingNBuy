import React from "react";
import {useNavigate} from "react-router";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthService} from "../services/auth.service";
import {useDispatch, useSelector} from "react-redux";
import {ClearAuthState} from "../store/action/auth.action";
import BasketModal from "../pages/BasketModal";

function NavBar() {
  // const isAuth = AuthService.isAuthenticated();
  // const user = AuthService.Name();
  const navigate = useNavigate();

  // bu kısımda ise store içerisinde state bağlandık. bunu yapmak için ise useSelector denilen bir hook kullandık. storedan bilgi çekmek için useSelector hook kullanıyoruz.
  const authState = useSelector((store) => store.authState);
  const dispatch = useDispatch();

  // console.log('isAuth', isAuth);

  const logout = () => {
    AuthService.logout((url) => {
      dispatch(ClearAuthState());
      navigate(url);
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="nav-item nav-link" to="/">
          <Navbar.Brand>Anasayfa</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-item nav-link" to="/">
              Anasayfa
            </Link>
            <Link className="nav-item nav-link" to="/about">
              About
            </Link>

            <NavDropdown title="Api" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link className="nav-item nav-link text-dark" to="/users">
                  Users
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-item nav-link text-dark" to="/comments">
                  Comments
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-item nav-link text-dark" to="/posts">
                  Posts
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-item nav-link text-dark" to="/products">
                  Products
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {authState.isAuthenticated && (
              <>
                <Link className="nav-item nav-link" to="/profile">
                  {authState?.username}
                </Link>
                

                <a className="nav-item nav-link" onClick={() => logout()}>
                  Oturumu Kapat
                </a>
              </>
            )}
            {!authState.isAuthenticated && (
              <>
                 <Link className="nav-item nav-link" to="/login">
                Oturum Aç
             
              </Link>
                 <BasketModal></BasketModal>
              
              </>
           
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

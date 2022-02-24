import React, {useState} from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  Row,
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ClearItems, DecreaseQuantity, IncreaseQuantity, RemoveFromCart} from "../store/action/cart.action";

function BasketModal({name, ...props}) {
  const cartTotal = useSelector((store) => store.cartState.total);
  const cartItem = useSelector((store) => store.cartState.cartItems);
  const dispatch = useDispatch();
 
  const removeAllItem = () => {
    console.log("deneme", cartItem);
    dispatch(ClearItems());
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const decreaseItem = (id,quantity) =>{
    if(quantity != 0){
      dispatch(DecreaseQuantity(id));
    }
  }
  const increaseItem = (id) =>{
      dispatch(IncreaseQuantity(id));
  }
  const removeItem = (id) =>{
    dispatch(RemoveFromCart(id));
  }

  return (
    <>
      <i
        onClick={handleShow}
        className="bi bi-cart3 text-white nav-item nav-link"
      >
        {cartTotal}
      </i>

      <Offcanvas placement={"end"} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sepetim</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {cartItem.map((item, index) => {
              return (
                <ListGroup.Item>
                  <Container>
                    <Row>
                      <Col>{item.name}</Col>
                      <Col>
                        <Button variant="secondary" onClick={ () => decreaseItem(item.id,item.quantity)}>-</Button>
                        <Button variant="secondary">{item.quantity}</Button>
                        <Button variant="secondary" onClick={ () => increaseItem(item.id)}>+</Button>
                        <Button variant="secondary" onClick={ () => removeItem(item.id)}>x</Button>
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <div>Toplam Tutar: {cartTotal}</div>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button onClick={() => removeAllItem()} className="float-end">
                Remove All
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// function Example() {
//   return (
//     <>
//       {["end"].map((placement, idx) => (
//         <BasketModal key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }

export default BasketModal;

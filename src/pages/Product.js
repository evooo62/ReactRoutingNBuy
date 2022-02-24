import React from 'react';
import { Badge, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../store/action/cart.action';

function Product() {
	const products = useSelector((store) => store.productState.products);
	const cartItems = useSelector((store) => store.cartState.cartItems);
	const dispatch = useDispatch();

	console.log('products', products);
	const addToCart = (item) => {
		const cartItem = {
			id: item.ID,
			name: item.Name,
			price: item.Price,
			quantity: 1,
		};

		dispatch(AddToCart(cartItem));
		// dispatch(RemoveFromCart(1));
	};

	return (
		<div>
			<Row md={3}>
				{products.map((item, index) => {
					return (
						// <li key={index}>
						// 	{item.Name} {item.Price}
						// </li>

						<Col key={index} className="my-3">
							<Card style={{ width: '18rem' }}>
								<Card.Body>
									<Card.Title>{item.Name}{cartItems.find(x=>x.id == item.ID) != undefined ?(<Badge>{cartItems.find(x=>x.id == item.ID).quantity}</Badge>) : ' '}</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">
										{item.Categories.map((item) => `${item.Name} `)}
									</Card.Subtitle>
									<Card.Text
										className="border-bottom border-dark"
										style={{ color: 'red' }}
									>
										{item.Price} TL
									</Card.Text>

									<div>
										<Card.Link className="btn btn-secondary" onClick={''}>
											Ürün Detay
										</Card.Link>
										<Card.Link
											className="btn btn-warning"
											onClick={() => addToCart(item)}
										>
											Sepete Ekle
										</Card.Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</div>
	);
}

export default Product;

import axios from 'axios';
import { ProductService } from '../../services/product.service';

// not apiden çekilecek veri ile state güncelleyeceksek yazım şeklimiz aşağıdaki gibi olucak. dispatch function ile yönledirme yapacağız. auth.action.js de apiden çekilmeyen bir örnek mevcut orada direct return etmiştik.

// Promise await async'siz kullanım
export const FetchProducts2 = () => {
	return (dispatch) => {
		//nameless functions
		// Initial action dispatched
		// Return promise with success and failure actions
		return axios
			.get(
				'https://services.odata.org/OData/OData.svc/Products?$expand=Categories,Supplier&$format=json'
			)
			.then((data) => dispatch({ type: 'fetchProduct', payload: data }))
			.catch((err) => {
				console.log('FetchProducts Error', err);
			});
	};
};

export const FetchProducts = () => async (dispatch) => {
	try {
		let data = await ProductService.getAllProducts();
		console.log('FetchProducts', data);
		dispatch({ type: 'fetchProduct', payload: data });
	} catch (error) {
		console.log('FetchProducts Error', error);
	}
};

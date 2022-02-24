import { BaseHttpClientService } from './base-service';

export const ProductService = {
	getAllProducts: async () => {
		try {
			let response = await BaseHttpClientService.get(
				'https://services.odata.org/OData/OData.svc/Products?$expand=Categories,Supplier&$format=json'
			);

			console.log('ProductService', response);

			return response.value;
		} catch (error) {
			console.log('getAllProducts Error', error);
		}
	},
};

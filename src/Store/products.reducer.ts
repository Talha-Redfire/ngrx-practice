import { createReducer, on } from '@ngrx/store';
import { getProductsAction, productsSuccess } from './product.actions';
interface Products {
  products: any[];
}
const initialState: Products = {
  products: [],
};
export const getproductsReducer = createReducer(
  initialState,
  on(getProductsAction, (state, action) => {
    return {
      ...state,
      products: [...state.products],
    };
  }),
  on(productsSuccess, (state, action) => {
    console.log(action);
    return {
      ...state,
      products: [...action.list],
    };
  })
);

import React from 'react';
import clsx from "clsx"
import {useDispatch, useSelector} from "react-redux"
import {deleteItemFromCart, setItemInCart} from "../../store/cart/reducer"

const Dish = ({dish, index, dishes}) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === dish.id)
  const addDishToCart = (event) => {
    if (isItemInCart){
      dispatch(deleteItemFromCart(dishes[event.target.value]))
    }
    else {
      console.log(event.target.value)
      dispatch(setItemInCart(dishes[event.target.value]))
    }
  }
  return (
    <div className={clsx('col-span-4')}>
      <div className="card w-96 mx-auto my-5 bg-base-100 shadow-xl">
        <figure><img src={dish.image} alt="Shoes"/></figure>
        <div className="card-body">
          <h2 className="card-title">{dish.name}</h2>
          <p>{dish.price}$</p>
          <div className="card-actions justify-end">
            <button onClick={event => addDishToCart(event)} value={index} className="btn btn-primary">
              {
                isItemInCart === true ?
                  'Delete from cart'
                  :
                  'Add to cart'
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish;

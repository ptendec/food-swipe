import React from "react"
import classes from "./CartMenu.module.css"
import {useSelector} from "react-redux"

export const CartMenu = ({items}) => {
  const calcTotalPrice = items => items.reduce((acc, dish) => acc += Number(dish.price), 0)
  const dishes = useSelector(state => state.cart.itemsInCart)
  const user = useSelector(state => state.user.user)
  const orderClick = () => {
    let message = `
    Customer: ${user.firstName} ${user.lastName}   %0A
    Address: ${user.address} %0A
    Phone number: ${user.phoneNumber}  %0A
    `
    dishes.forEach(dish => {
      message += `
       Ordered dish: %0A
       ${dish.name}  %0A
       ${dish.price}$ %0A
      `
    })
    message += `Total price: ${calcTotalPrice(items)}$`
    fetch(`https://api.telegram.org/bot5109657187:AAFbP9Agn_5-0mQh-98uYQFKhPrqV33mfBA/sendMessage?chat_id=-714703347&parse_mode=html&text=${message}`, {
      method: 'GET'
    })
  }
  return (
    <div className={classes.cart_menu}>
      <div className={classes.cart_menu__games_list}>
        {
          items.length > 0 ? items.map(dish => (
            <div>
              <p>{dish.name} - {dish.price}$</p>
            </div>
          )) : "Корзина пуста"
        }
      </div>
      {
        items.length > 0 ?
          <div className={classes.cart_menu__arrange}>
            <div className={classes.cart_menu__total_price}>
              <span>Итого</span>
              <span>{calcTotalPrice(items)} $</span>
              <button onClick={orderClick}>Order</button>
            </div>
          </div>
          :
          null
      }
    </div>
  )
}


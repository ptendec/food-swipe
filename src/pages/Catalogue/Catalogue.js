import React, {useEffect, useState} from 'react';
import {doc, setDoc, collection, query, where, getDocs} from 'firebase/firestore'
import {db} from '../../utils/firebase-config'
import clsx from "clsx"
import {useDispatch} from "react-redux"
import {setItemInCart} from "../../store/cart/reducer"
import {CartMenu} from "../../components/CartMenu/CartMenu"
import Dish from "../../components/Dish/Dish"

const Catalogue = () => {
  const queryToGetDishes = query(collection(db, "foods"));
  const [dishes, setDishes] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    setDishes([])
    getDocs(queryToGetDishes).then(querySnapshot => {
      console.log(querySnapshot)
      let allDishes = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        allDishes = [...allDishes, {...data, id: doc.id}]
        setDishes(allDishes)
      });
    })
  }, [])
  return (
    <div className={'container mx-auto grid grid-cols-12'}>
      {
        dishes.map((dish, index) => (
          <Dish dish={dish} index={index} dishes={dishes}/>
        ))
      }
    </div>
  );
};

export default Catalogue;

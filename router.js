const express = require('express');
const router = express.Router();
const Order = require('./models/orderBasket');
const validator = require('validator');

router.post('/pay', async (req, res) => {
  console.log('name', req.body.data_.data.name);
  console.log('address', req.body.data_.data.address);
  let name = req.body.data_.data.name;
  let address = req.body.data_.data.address;

  if(name.length <= 2 || name.length > 10) {
    return res.json({
      key: 'name',
      message: 'Имя должно быть в пределах от 2-ч до 10-ти символов!',
      text: 'NoN'
    })
  }
  if(name === '') return res.status(500).json({key: 'name', message: 'Заполните поле!'})
  if(address.length <= 10 || address.length > 100) {
    return res.json({
      key: 'address',
      message: 'Введите корректный адресс!',
      text: 'NoN'
    })
  }
  if(address === '') return res.status(500).json({key: 'address', message: 'Заполните поле!'});
  try {
    console.log('1')
    const {basket, data, delivery} = req.body.data_;
    console.log('dequired', delivery)
    var order = new Order({
      cart: basket.app_cart,
      quantity: basket.number,
      total: basket.total,
      name: data.name,
      email: data.email ? data.email : 'none',
      address: data.address,
      phone: data.phone ? data.phone : 'none',
      dequired: delivery
    });
    console.log('2')
    await order.save();
    console.log('3')
    res.status(201).json({message: 'Заказ успешно обработан'});
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
  }
})

module.exports = router;
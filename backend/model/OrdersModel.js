const { model } = require('mongoose');
const { OrdersSchema } = require('../schemas/OrdersSchemas');

const OrdersModel = model('Order', OrdersSchema);

module.exports = { OrdersModel };
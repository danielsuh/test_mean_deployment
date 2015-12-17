// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require ('mongoose');
var Order = mongoose.model('Order');
module.exports = (function() {
	return {
		show: function(req, res) {
			Order.find([], function(err, results){
				if(err) {
					console.log(err);
				}
				else 
				{
					res.json(results);
				}
			})
		},
		create: function(req, res) {
			var new_order = new Order({customer: req.body.customer, product: req.body.product, quantity: req.body.quantity, date: Date()});
		    new_order.save(function(err) {
		      if(err){
		        console.log("something went wrong");
		      } else {
		        console.log("order created!");
		        res.redirect('/');
		      }
		    })
		}
	}
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
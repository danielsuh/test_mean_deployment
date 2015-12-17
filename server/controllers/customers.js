// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require ('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function() {
	return {
		show: function(req, res) {
			Customer.find([], function(err, results){
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
			var new_customer = new Customer({name: req.body.name, created: Date()});
		    new_customer.save(function(err) {
		      if(err){
		        console.log("something went wrong");
		        console.log(err);
		        res.json(err);
		      } else {
		        console.log("customer created!");
		        console.log(err);
		        res.redirect('/');
		      }
		    })
		},
		destroy: function(req, res) {
		    Customer.remove({_id: req.body._id}, function(err, results){
		    	console.log("customer removed");
		    	// console.log(req);
		        res.redirect('/');
		    })
		}
	}
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
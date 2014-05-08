/**
 * Created by taylorcase on 5/7/14.
 */

var mongoose = require('mongoose')
    , env = process.env.NODE_ENV || 'development'
    , config = require('../../config/config')[env]
    , Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    restaurant: String,
    phonenumber: String,
    item: [
        String
    ]
});

RestaurantSchema.statics = {
    load: function(id, cb) {
        this.findOne({ _id : id }).populate('restaurant').exec(cb);
    }
};

mongoose.model('Restaurant', RestaurantSchema);
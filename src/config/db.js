const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;

var Jimp = require("jimp");

Jimp.read("https://images5.alphacoders.com/637/thumb-1920-637668.jpg").then(function (image) {
	image.resize(1080, 1080);
	var file = "FromInternet_resizedi." + image.getExtension();
	image.write(file);

}).catch(function (err) {
    // handle an exception 
});
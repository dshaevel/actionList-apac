// AWS credentials are stored in awsCredentials.json
var _file = './awsCredentials.json',
//_inspect = require('util').inspect,
	_jf = require('jsonfile'),
	OperationHelper = require('../node_modules/apac/lib/apac').OperationHelper;

function callAmazonProductApi(credentials, keywords) {
	var opHelper = new OperationHelper({
		awsId: credentials.awsId,
		awsSecret: credentials.awsSecret,
		assocId: credentials.assocId
	});

	opHelper.execute(
		'ItemSearch',
		{
			'SearchIndex': 'All',
			'Keywords': keywords,
			'ResponseGroup': 'Images,ItemAttributes'
		},
		function(error, results) {
			if (error) {
				console.log('Error: ' + error + '\n');
				return;
			}
			//console.log('Results:\n' + _inspect(results, {showHidden: true, depth: null}) + '\n');
			var itemArray = results.ItemSearchResponse.Items[0].Item;
			itemArray.forEach(function(item) {
				var title = item.ItemAttributes[0].Title ? item.ItemAttributes[0].Title : '';
				var upc = item.ItemAttributes[0].UPC ? item.ItemAttributes[0].UPC : '';
				var smImgUrl = item.SmallImage ? item.SmallImage[0].URL[0] : '';
				var medImgUrl = item.MediumImage ? item.MediumImage[0].URL[0] : '';
				var lrgImgUrl = item.LargeImage ? item.LargeImage[0].URL[0] : '';
				console.log('Title ==>' + title + '<==');
				console.log('UPC ==>' + upc + '<==');
				console.log('Small Image URL ==>' + smImgUrl + '<==');
				console.log('Medium Image URL ==>' + medImgUrl + '<==');
				console.log('Large Image URL ==>' + lrgImgUrl + '<==');
				console.log();
			});
		}
	);
}

function run(keywords) {
	console.log('alApac.run()::BEGIN');

	_jf.readFile(_file, function(err, obj) {
		if (err) {
			console.log(err);
			return;
		}
		callAmazonProductApi(obj, keywords);
	});

	console.log('alApac.run()::END');
}

module.exports = {
	run : run
};

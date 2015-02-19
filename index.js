var util = require('util'),
    OperationHelper = require('./node_modules/apac/lib/apac').OperationHelper;

// TODO: read in AWS credentials from an external file. For now, just copy in your AWS credentials.
var opHelper = new OperationHelper({
  awsId: '',
  awsSecret: '',
  assocId: ''
});

opHelper.execute(
	'ItemSearch',
	{
		'SearchIndex': 'All',
		'Keywords': 'sensodyne',
		'ResponseGroup': 'Images,ItemAttributes'
	},
	function(error, results) {
		if (error) {
			util.print('Error: ' + error + '\n');
		}
		//util.print('Results:\n' + util.inspect(results, {showHidden: true, depth: null}) + '\n');
		var itemArray = results.ItemSearchResponse.Items[0].Item;
		itemArray.forEach(function(item) {
			var title = item.ItemAttributes[0].Title ? item.ItemAttributes[0].Title : '';
			var upc = item.ItemAttributes[0].UPC ? item.ItemAttributes[0].UPC : '';
			var smImgUrl = item.SmallImage ? item.SmallImage[0].URL[0] : '';
			var medImgUrl = item.MediumImage ? item.MediumImage[0].URL[0] : '';
			var lrgImgUrl = item.LargeImage ? item.LargeImage[0].URL[0] : '';
			util.print('Title ==>' + title + '<==\n');
			util.print('UPC ==>' + upc + '<==\n');
			util.print('Small Image URL ==>' + smImgUrl + '<==\n');
			util.print('Medium Image URL ==>' + medImgUrl + '<==\n');
			util.print('Large Image URL ==>' + lrgImgUrl + '<==\n');
			util.print('\n');
		});
	}
);

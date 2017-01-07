(function(){
var app = angular.module('store', []);

app.controller('StoreController', function(){
	this.products = gems;	
	
});
app.controller('PanelController', function(){
	this.tab = 1;	
	this.selectTab = function(setTab){ 
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}	
})

var gems =[
	{
		name:'Dodecahedron', 
		price:9.5,	
		description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
		images:[
			{
			 full :'img/full.jpg',
			 thumb: 'img/thumb.jpg'	
			}
		],
		reviews :[
		{
		
			stars:5,
			body:"I love this product!",	
			author:"himanshu.wadhwa@gmail.com",
			
		},
		{
			stars:1,
			body:"This product awful",
			author:"test@gmail.com"
		}
		],
		canPurchase: true,
		soldOut:false
		
	}
];
})();

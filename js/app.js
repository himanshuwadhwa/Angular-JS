(function(){
var app = angular.module('store', [ ]);
app.controller('StoreController', function(){
	this.product = gem;
});
var gem = {
	name:'Dodecahedron',
	price:2.95,
	description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',	
	canPurchase: true,
	soldOut:false	
};
})();

var a = "Himanshu Wadhwa HW"
console.log(a.length)
console.log(a.slice(0, 8))


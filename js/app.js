"use strict";

(function(){
  angular
  	.module("wdinstagram", ['ui.router', 'ngResource'])
  		.config(['$stateProvider', '$locationProvider', RouterFunction])
  			.factory('InstaFactory', ['$resource', function($resource){
				return $resource('http://localhost3000/photos/:id')
					}])

  			.controller('indexController', ['InstaFactory',function(InstaFactory){
  				this.photo = instaFactory.query()
  						this.create = function(){}
  				}])
  			.controller('newController', ['InstaFactory', '$stateParams',function(InstaFactory){
  				this.photo = instaFactory.query()
  					this.photo.$save().then(function(){
  						$state.go("index")
  					})
  			}])
  	.controller('showController', ['InstaFactory', '$stateParams',function(InstaFactory,$stateParams){
  		this.photo = instaFactory.query()
  			this.create = function(){}
  	}])
})


function RouterFunction($stateProvider){
	$stateProvider
		$state('index',{
			url: '/index',
				templateUrl: 'js/ng-views/index.html',
					controller: 'indexController',
						controllerAs: 'vm',
	})
		.state('new',{
			url: '/new',
				templateUrl: 'js/ng-views/new.html',
					controller: 'newController',
						controllerAs: 'vm',
	})
	.state('show',{
			url: '/show/:id',
				templateUrl: 'js/ng-views/show.html',
					controller: 'showController',
						controllerAs: 'vm',
	})

}
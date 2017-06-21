/*!
 * Example component module.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Manu Sporny
 */
import angular from 'angular';
import * as bedrock from 'bedrock-angular';

var module = angular.module('test2-module', []); // content displays
// var module = angular.module('test2-module', ['bedrock.modal']); // content is blank

bedrock.setRootModule(module);

/* @ngInject */
module.config(function($routeProvider) {
  $routeProvider.when('/', {
    title: 'Joel Test Two',
    template: '<p>hello there- test 2</p>'
  });
});

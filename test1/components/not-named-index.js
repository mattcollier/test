/*!
 * Example component module.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Manu Sporny
 */
import angular from 'angular';
import * as bedrock from 'bedrock-angular';
import myComponent from './my-component.js';


var module = angular.module('my-module-name', ['bedrock.modal']);

bedrock.setRootModule(module);

module.component('brMyComponent', myComponent);

/* @ngInject */
module.config(function($routeProvider) {
  $routeProvider.when('/', {
    title: 'Joel Test One',
    templateUrl: 'my-package-name/some.html' // this does not display, tried various variations
  });
});

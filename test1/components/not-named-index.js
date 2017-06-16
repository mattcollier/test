/*!
 * Example component module.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Manu Sporny
 */
import angular from 'angular';
import * as bedrock from 'bedrock-angular';

var module = angular.module('my-module-name', []);

bedrock.setRootModule(module);

/* @ngInject */
module.config(function($routeProvider) {
  $routeProvider.when('/', {
    title: 'Joel Test One',
//    template: '<p>was up?</p>' // this displays
    templateurl: 'some.html' // this does not display, tried various variations
  });
});

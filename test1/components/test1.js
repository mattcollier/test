/*!
 * Example component module.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Manu Sporny
 */
import angular from 'angular';
import * as bedrock from 'bedrock-angular';
import ModalComponent from './modal-component.js';

var module = angular.module('test1-module', ['bedrock.modal']);

bedrock.setRootModule(module);

module.component('brModalComp',ModalComponent);

/* @ngInject */
module.config(function($routeProvider) {
  $routeProvider.when('/', {
    title: 'Joel Test One',
    templateUrl: 'test1-package/some.html' // this does not display, tried various variations
  });
});

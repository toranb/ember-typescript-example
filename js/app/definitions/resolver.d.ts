/// <reference path="ember/ember.d.ts"/>

// This seems weird, why can't 'resolver' implement Ember.DefaultResolver?
// 
declare module 'resolver' {
  var namespace: typeof Ember.DefaultResolver.namespace;
  var resolve: typeof Ember.DefaultResolver.resolve;
  var create: typeof Ember.Object.create; 
}

/// <reference path="definitions/ember/ember.d.ts"/>
/// <reference path="definitions/resolver.d.ts"/>

import Resolver = require("resolver");

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'js',
  Resolver: Resolver['default']
});

export = App;

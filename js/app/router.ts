/// <reference path="definitions/ember/ember.d.ts"/>

var Router = Ember.Router.extend();

Router.map(function() {
    this.resource("people", { path: "/" });
});

export = Router;

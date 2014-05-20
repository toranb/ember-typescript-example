/// <reference path="../definitions/ember/ember.d.ts"/>


var PeopleController = Ember.ArrayController.extend({
    actions: {
        addPerson: function() {
            var person = {
                firstName: this.get('firstName'),
                lastName: this.get('lastName')
            };
            //Person.add(person);
        },
        deletePerson: function(person) {
        //Person.remove(person);
        }
    }
});

export = PeopleController;

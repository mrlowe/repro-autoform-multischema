import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

SimpleSchema.debug = true;
AutoForm.debug();

Template.hello.events({
    'click .force': function() {
        console.log(this);
        Things.insert({type: 'Type1', value1: 'foo'});
    }
})

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import Inpladitor from 'inpladitor';
import "inpladitor/css/style.css";

// npm case
//window.Inpladitor = require('inpladitor/handler');
//import 'inpladitor/css/style.css';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  'click *' : function (e, t) {
    Inpladitor.handler(e, t);
  }
});

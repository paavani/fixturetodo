import DS from 'ember-data';

var Todo = DS.Model.extend({
  name: DS.attr('string'),
  isDone: DS.attr('boolean',{defaultValue:false})
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "prepare list",
      isDone:true
    },
    {
      id: 2,
      name:" install Ember-cli",
    },
    {
      id: 3,
      name: "practise Ember-cli",

    }
  ]
});
export default Todo;

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  comment: DS.attr('string'),
  date: DS.attr('string')
});

import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('string'),
  edited: DS.attr('string'),
  comments: DS.hasMany('comment', { async: true })
});

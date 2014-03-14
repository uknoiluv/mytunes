var SongQueueEntryView = Backbone.View.extend({

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    $(this.el).addClass("songQueueEntry");

    return this.$el.html(this.template(this.model.attributes));
  }

});

// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {

    this.collection.on('add', function(){
      this.render();
    }, this);

    this.collection.on('remove', function(){
      this.render();
    }, this);
  },

  render: function() {

    this.$el.html('<th class="queue">Playlist View</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});

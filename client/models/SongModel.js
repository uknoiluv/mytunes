// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(params){
    // if(params) {
    //   this.set('artist', params.artist);
    //   this.set('title', params.title);
    //   this.set('url', params.url);
    // }
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  end: function(){
    this.trigger('ended', this);
  }

});

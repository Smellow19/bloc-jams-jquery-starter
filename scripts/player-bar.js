{
  //when you click on the play pause button this will check the play state, if song is playing it will change the icon to playing and paused if paused.
  $('button#play-pause').on('click', function(){
    player.playPause();
    $(this).attr('playState', player.playState);
  });

// this will navigate to the next song on the list only if the music is playing
  $('button#next').on('click', function(){
    if(player.playState !== 'playing'){ return };

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;

    // If there is no song after the current one stop
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('button#previous').on('click', function(){
    if(player.playState !== 'playing'){ return };

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex = currentSongIndex - 1;

    // If there is no song previous then stop
    if (prevSongIndex < 0) {return};

    const prevSong = album.songs[prevSongIndex];
    player.playPause(prevSong);
  });






}

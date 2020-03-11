function initJPlayer(objId, file){
    var jpPlayTime = $('#jp-play-time-'+objId);
	var jpTotalTime = $('#jp-total-time-'+objId);
	
    $('#audio-'+objId).jPlayer({
        ready: function () {
            this.element.jPlayer('setFile', file);
        },
        swfPath: '/assets/audio/swf'
    })        
    .jPlayer('cssId', 'pause', 'jp-pause-'+objId)
    .jPlayer('cssId', 'play', 'jp-play-'+objId)
    .jPlayer('cssId', 'stop', 'jp-stop-'+objId)
    .jPlayer('cssId', 'loadBar', 'jp-load-bar-'+objId)
    .jPlayer('cssId', 'playBar', 'jp-play-bar-'+objId)
    .jPlayer('cssId', 'volumeMin', 'jp-volume-min-'+objId)
    .jPlayer('cssId', 'volumeMax', 'jp-volume-max-'+objId)
    .jPlayer('cssId', 'volumeBar', 'jp-volume-bar-'+objId)
    .jPlayer('cssId', 'volumeBarValue', 'jp-volume-bar-value-'+objId)
    .jPlayer('onProgressChange', function(loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime) {
        jpPlayTime.text($.jPlayer.convertTime(playedTime));
        jpTotalTime.text($.jPlayer.convertTime(totalTime));
    })
}
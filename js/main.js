$(function() {
    ajaxCall();
});

function ajaxCall() {
    $.ajax({
        type: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/',
        data: {
            method: 'user.getrecenttracks',
            user: 'corbinmuraro',
            api_key: '1a0f06cdf3adf092204f7fc8a33b09a0',
            format: 'json'
        },
        success: function(tracks) {
            var trackObject = tracks.recenttracks.track[0];

            var songURL = trackObject.url;
            var recentArtist = trackObject.artist["#text"];
            var recentSong = trackObject.name;

            if (isPlaying(trackObject))
            {
                $('.song').css('display', 'inline-block');
                $('.song a').text(recentSong + " — " + recentArtist);
                $('.song a').attr("href", songURL);
            }
        }
    });
}

// checks if a song is currently playing
// RETURNS true if playing
// RETURNS false if not playing
function isPlaying(track)
{
    if(track.hasOwnProperty('@attr')) 
    {
        if(track['@attr'].hasOwnProperty('nowplaying')) 
        {
            if(track['@attr'].nowplaying == 'true') 
            {
                return true;
            }
        }
    }
    else
    {
        return false;
    }
}



// to be used on portfolio pages when talking about release date
function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}

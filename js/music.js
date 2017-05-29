$(function() {
    getSong();
});

function getSong() {
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

            var url = "http://www.last.fm/user/corbinmuraro";
            var recentArtist = trackObject.artist["#text"];
            var recentSong = trackObject.name;

            $('.song a').text(recentSong + " — " + recentArtist);
            $('.song a').attr("href", url);

            if (isPlaying(trackObject))
            {
                $('#icon').css('background-image', 'url(../images/equalizer.gif)');
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

// // to be used on portfolio pages when talking about release date
// function timeDifference(current, previous) {
//     var msPerMinute = 60 * 1000;

//     var msPerHour = msPerMinute * 60;
//     var msPerDay = msPerHour * 24;
//     var msPer1Week = msPerDay * 7;
//     var msPer2Week = msPerDay * 14;
//     var msPer3Week = msPerDay * 21;
//     var msPerMonth = msPerDay * 30;
//     var msPerYear = msPerDay * 365;

//     var elapsed = current - previous;

//     if (elapsed < msPerHour) {
//          return Math.round(elapsed/msPerMinute) + ' minutes ago';   
//     }

//     else if (elapsed < msPerDay ) {
//          return Math.round(elapsed/msPerHour ) + ' hours ago';   
//     }

//     else if (elapsed < msPer1Week ) {
//          return Math.round(elapsed/msPerDay ) + ' days ago';   
//     }

//     else if (elapsed < msPer2Week ) {
//          return '1 week ago';   
//     }

//     else if (elapsed < msPer3Week ) {
//          return 'two weeks ago';   
//     }

//     else if (elapsed < msPerMonth) {
//         return 'three weeks ago';   
//     }

//     else if (elapsed < msPerYear) {
//         return 'over a month ago';   
//     }

//     else {
//         return 'over a year ago';   
//     }
// }

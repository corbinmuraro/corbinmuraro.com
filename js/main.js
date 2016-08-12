var hsv2rgb = function(h,s,v) {
    var rgb, i, data = [];
    if (s === 0) {
        rgb = [v,v,v];
    } 
    else {
        h = h / 60;
        i = Math.floor(h);
        data = [v*(1-s), v*(1-s*(h-i)), v*(1-s*(1-(h-i)))];
        switch(i) {
          case 0:
            rgb = [v, data[2], data[0]];
            break;
          case 1:
            rgb = [data[1], v, data[0]];
            break;
          case 2:
            rgb = [data[0], v, data[2]];
            break;
          case 3:
            rgb = [data[0], data[1], v];
            break;
          case 4:
            rgb = [data[2], data[0], v];
            break;
          default:
            rgb = [v, data[0], data[1]];
            break;
        }
    }
    return '#' + rgb.map(function(x){ 
        return ("0" + Math.round(x*255).toString(16)).slice(-2);
    }).join('');
};

var randHue = Math.floor(Math.random() * (360 + 1));
var displayRGB = hsv2rgb(randHue, 0.05, 0.9);

document.body.style.backgroundColor = displayRGB;


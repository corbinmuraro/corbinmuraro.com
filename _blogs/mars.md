---
layout: blog
title: "Visualizing Mars in Three.JS"
date: 2017-3-12
---

# Visualizing Mars in Three.JS

[Mars Maps](http://corbinmuraro.com/mars-terrain) is a concept website that I built as a way to better take advantage of NASA's Mars terrain imagery captured through [HiRISE](http://www.uahirise.org), one of the instruments on board NASA's [Mars Reconnaissance Orbiter](https://en.wikipedia.org/wiki/Mars_Reconnaissance_Orbiter). 

What follows is a brief introduction to three.js terrain modeling for Mars. A huge amount of credit is due to Bjørn Sandvik, whose [blog posts on terrain generation in three.js](http://blog.mastermaps.com/2013/10/terrain-building-with-threejs.html) are phenomenal resources to those new to terrain modeling.

[![2% VR](images/mars.png){:class="centered-image"}](http://corbinmuraro.com/2percentvr)

## Making Terrain Maps Three.JS Friendly

There are several places to find terrain data from Mars, but as far as I could tell, the best publicly accessible Mars terrain data are HiRISE's [Digital Terrain Models (DTMs)](http://www.uahirise.org/dtm/). For this example, we'll use terrain data from [inside Terby Crater](http://www.uahirise.org/dtm/dtm.php?ID=ESP_021942_1520).

In the top of the DTM column on the left, NASA provides a .IMG file which contains the elevation data that we're after. In order for this terrain data to be accessed from a web browser, we need to convert it to a [GeoTIFF](https://en.wikipedia.org/wiki/GeoTIFF) format. To accomplish this, we need to install [gdal](http://www.gdal.org).

Once gdal is installed, we use the gdalinfo utility, providing the -mm option to find minimum and maximum altitudes in the .IMG file.

~~~~ 
gdalinfo -mm DTEEC_021942_1520_021797_1520_A01.IMG
~~~~

The bottom of the output from gdalinfo contains a pair of Computed Min/Max values that we'll need in a minute. For this file, the minimum altitude is -4575 and the maximum altitude is -3217. Next, to convert the file, we run gdal_translate.

~~~~ 
gdal_translate -scale -4575 -3217 0 65535 -outsize 100 1000 -ot UInt16 -of ENVI DTEEC_021942_1520_021797_1520_A01.IMG output.bin
~~~~

This command does several things for us. First, we're converting the elevation range from the given range to between 0 and 65535, which is 2<sup>16</sup>-1, or the range of a 16-bit integer. Appropriately, we're also having the output 'pixels' represented as 16 bit integers.

We're also dramatically reducing the size of the output file to holding height data for each 'pixel' in a 100x1000 plane. You can play with these -outsize dimensions if you'd like. Once you get above 250,000 total 'pixels' of terrain information, you start seeing some serious performance issues when rendering the file in three.js. The last part of our gdal_translate command converts our .IMG file to a .bin GeoTIFF file, which fits nicely into Bjørn Sandvik's terrainLoader.

## Rendering Terrain Data on the Web

Now that we have some WebGL-friendly Martian terrain, let's start writing some Javascript to render it in the browser.

First, we import three.js and Sandvik's terrainLoader. Then, we set up our three.js project. I create a scene, camera, and renderer object, add some lighting, and get my camera pointed at the terrain we're about to generate. For those new to three.js, [here's a great primer video that goes into more depth on the basics of three.js](https://www.youtube.com/watch?v=PN0uwzgPe3c).

<script src="https://gist.github.com/corbinmuraro/ad129c64a7d389c534e449540b3760d3.js?file=threejs-setup.js"></script>

Next, we need to capture the terrain data from our output.bin file. This is where terrainLoader comes in, returning to us an array of integers between 0 and 65535, corresponding to each 'pixel', or vertex of elevation data in output.bin. 

We create a plane, in which the first two parameters are the dimensions of the plane in three.js, and the second two parameters are the 'resolution' from output.bin. We then iterate through these points of data and assign the vertex the associated elevation from the array of integers. We texture our terrain and add it to the scene. For now, I'm using an image of a grid as my texture, just to make sure everything is working properly.

<script src="https://gist.github.com/corbinmuraro/ad129c64a7d389c534e449540b3760d3.js?file=terrain-loader.js"></script>

Lastly, we append our scene to a div declared in the HTML body and render it.

<script src="https://gist.github.com/corbinmuraro/ad129c64a7d389c534e449540b3760d3.js?file=render-scene.js"></script>

![grid terrain]({{site.baseurl}}/images/blog-images/mars-images/grid.png)

## Texturing Mars

While HiRISE doesn't provide any colorized images of Mars, they do provide a [shaded relief](http://hirise-pds.lpl.arizona.edu/PDS/EXTRAS/DTM/ESP/ORB_021900_021999/ESP_021942_1520_ESP_021797_1520/DTEEC_021942_1520_021797_1520_A01.sa.jpg) with each DTM. These shaded reliefs are lifelike black and white images. By cropping out the top and bottom borders of the shaded relief for inside Terby Crater, we have a texture map that we can lay on top of our plane of vertices to improve our visualization of the crater.

![black and white terrain]({{site.baseurl}}/images/blog-images/mars-images/bw.png)

To colorize the HiRISE-supplied black and white relief image, I opened up Photoshop and made a few adjustments. First, I found a reference image of the Martian surface online, taken from a similar perspective with an appropriate color profile[^1]. I used the Match Color command (Image > Adjustments > Match Color) to convert the black and white relief into the color profile of the reference image. From this point, I adjusted the hues of particular colors and made other tweaks to better mirror the reference image.

![colored terrain]({{site.baseurl}}/images/blog-images/mars-images/color.png)

The up-and-running demo that I went through in this post can be viewed [here](http://corbinmuraro.com/mars-demo). The code is also available on GitHub [here](https://github.com/corbinmuraro/mars-demo). Reach out to me on my Twitter [@corbinmuraro](https://twitter.com/corbinmuraro) if you have any questions and I'll try my best to help you out!

[^1]: [Don Davis has a great (albeit terribly formatted) read for those interested in what the colors on Mars actually are](http://www.donaldedavis.com/PARTS/MARSCLRS.html)


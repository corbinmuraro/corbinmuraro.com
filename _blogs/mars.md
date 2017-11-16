---
layout: blog
htmltitle: "🚀 — Corbin Muraro"
title: "Visualizing Mars in Three.JS"
date: 2017-3-28
---

# Visualizing Mars in Three.JS

[Mars Maps](http://corbinmuraro.com/mars-terrain) is a concept website that I built as a way to better take advantage of NASA's Mars terrain imagery captured through [HiRISE](http://www.uahirise.org), one of the instruments on board NASA's [Mars Reconnaissance Orbiter](https://en.wikipedia.org/wiki/Mars_Reconnaissance_Orbiter). 

What follows is a distillation of what I learned as a brief introduction to modeling Mars in three.js. A huge amount of credit is due to Bjørn Sandvik, whose [blog posts on terrain generation in three.js](http://blog.mastermaps.com/2013/10/terrain-building-with-threejs.html) are phenomenal resources for those new to the subject.

![colored terrain]({{site.baseurl}}/images/blog-images/mars-images/color-sky.png)

## Making Mars Terrain Data Three.JS Friendly

There are several places to find terrain data from Mars, but as far as I could tell, the best public resource are HiRISE's [Digital Terrain Models (DTMs)](http://www.uahirise.org/dtm/). In this walkthrough, we'll use terrain data from [inside Terby Crater](http://www.uahirise.org/dtm/dtm.php?ID=ESP_021942_1520).

With each DTM, NASA provides a .IMG file containing the elevation data that we're after. In order for this terrain data to be accessible from a web browser, we need to convert it to a [GeoTIFF](https://en.wikipedia.org/wiki/GeoTIFF) format. To accomplish this, we need to install [gdal](http://www.gdal.org).

Once gdal is installed, we use the gdalinfo utility, providing the -mm option to find minimum and maximum altitudes in the .IMG file.

~~~~ 
gdalinfo -mm DTEEC_021942_1520_021797_1520_A01.IMG
~~~~

The output from gdalinfo contains a pair of Computed Min/Max values that we'll need for the conversion. For this IMG file, gdalinfo returned a minimum altitude of -4575 and a maximum altitude of -3217. 

Next, to convert the file, we run gdal_translate.

~~~~ 
gdal_translate -scale -4575 -3217 0 65535 -outsize 100 1000 -ot UInt16 -of ENVI DTEEC_021942_1520_021797_1520_A01.IMG output.bin
~~~~

This command does several things for us. First, we're converting the elevation range to being between 0 and 65535, or the range of values for a 16-bit integer. Appropriately, we're also setting the output type of each elevation 'pixel' to UInt16, or a 16-bit integer.

NASA provides provides extremely high resolution files, at a resolution that simply can't work on the web. Hence, we're also dramatically reducing the 'resolution' of our output to being 100x1000 'pixels' of terrain data. You can play with these -outsize dimensions if you'd like. From my testing, once you get above 250,000 total 'pixels' of terrain information, you start seeing some serious performance issues when rendering the file in three.js. 

The last part of our gdal_translate command converts our .IMG file to a .bin GeoTIFF file, which fits nicely into Bjørn Sandvik's terrainLoader.

## Rendering Mars Terrain Data on the Web

Now that we have some WebGL-friendly Martian terrain, let's start writing some Javascript to render it in the browser.

First, we import three.js and Sandvik's [terrainLoader](https://github.com/turban/webgl-terrain/blob/master/lib/TerrainLoader.js). Then, we set up our three.js project. We build a scene, camera, and renderer object, add some lighting, and get our camera pointed at the terrain we're about to generate. For those new to three.js, [here's a great primer video that goes into more depth on the basics of three.js](https://www.youtube.com/watch?v=PN0uwzgPe3c).

<script src="https://gist.github.com/corbinmuraro/ad129c64a7d389c534e449540b3760d3.js?file=threejs-setup.js"></script>

Next, we need to capture the terrain data from our output.bin file. This is where terrainLoader comes in, returning to us an array of integers between 0 and 65535, corresponding to each 'pixel', or vertex of elevation data in output.bin. 

We create a plane, in which the first two parameters are the dimensions of the plane in three.js, and the second two parameters are the 'resolution' from output.bin. We then iterate through these points of data and assign the vertex the associated elevation from the array of integers. We texture our terrain and add it to the scene. For now, I'm using an image of a grid as my texture, just to ensure everything is working properly.

<script src="https://gist.github.com/corbinmuraro/ad129c64a7d389c534e449540b3760d3.js?file=terrain-loader.js"></script>

Lastly, we append our scene to a div declared in the HTML body and render it.

<script src="https://gist.github.com/corbinmuraro/ad129c64a7d389c534e449540b3760d3.js?file=render-scene.js"></script>

![grid terrain]({{site.baseurl}}/images/blog-images/mars-images/grid.png)

## Texturing Mars

While HiRISE doesn't provide any colorized images of Mars, they do provide a [shaded relief](http://hirise-pds.lpl.arizona.edu/PDS/EXTRAS/DTM/ESP/ORB_021900_021999/ESP_021942_1520_ESP_021797_1520/DTEEC_021942_1520_021797_1520_A01.sa.jpg) with each DTM. By cropping out the top and bottom borders of the shaded relief for inside Terby Crater, we have a texture that we can lay on top of our plane of vertices to give it some realistic depth and shading.

![black and white terrain]({{site.baseurl}}/images/blog-images/mars-images/bw.png)

To colorize the HiRISE-supplied black and white relief image, I opened up Photoshop and made a few adjustments. First, I found a reference image of the Martian surface online, taken from a similar perspective with an appropriate color profile[^1]. I used Photoshop's Match Color command (Image > Adjustments > Match Color) to convert the black and white relief into the color profile of the reference image. From this point, I adjusted the hues of particular colors and made some other tweaks to better mirror the reference image.

![colored terrain]({{site.baseurl}}/images/blog-images/mars-images/color.png)

As a final step, I added a gradient skydome by following [Ian Webster's blog post](http://www.ianww.com/blog/2014/02/17/making-a-skydome-in-three-dot-js/).

![colored terrain]({{site.baseurl}}/images/blog-images/mars-images/color-sky.png)

Without too much work, gdal and three.js have turned some real Mars data into a visualization that runs in a web browser. 

The model that I built can be seen in the browser [here](http://corbinmuraro.com/mars-demo/terby.html). My code available on GitHub [here](https://github.com/corbinmuraro/mars-demo). Reach out on Twitter [@corbinmuraro](https://twitter.com/corbinmuraro) if you have any questions and I'll do my best to help you out!

[^1]: [Don Davis has a great read](http://www.donaldedavis.com/PARTS/MARSCLRS.html) for those interested in what the colors on Mars actually are

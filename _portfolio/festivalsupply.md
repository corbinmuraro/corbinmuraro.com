---
layout: portfolio
title: "Festival Supply"
---

# Festival Supply

[http://festival.supply](http://festival.supply) is a website that I designed and built to consolidate music festival information, helping people discover and browse music festival lineups.

![polished website]({{site.baseurl}}/images/festivalsupply-images/festivalsupply-main.png)

## Background

Recently, I overheard some friends discussing what music festivals to go to this summer. When I asked how they learned about music festivals, they all mentioned word-of-mouth. While word-of-mouth is extremely valuable, there are definitely appealing music festivals that go unnoticed. [Spotify's Discover Weekly](https://www.spotify.com/us/discoverweekly/) and [last.fm](https://www.last.fm) exist and thrive by filling in gaps to provide a more comprehensive music discovery experience. I wondered if I could do the same for music festival discovery.

After doing some research into the available options, the best I could find was [JamBase](https://www.jambase.com), which announces music festival lineups as blog posts, adding a photo of the lineup poster and a link to the festival's website for more information. The lack of unified formatting or intuitive design left a lot to be desired; I wanted to make it better.

## Approach

With an understanding of existing solutions and the gaps I wanted to fill in, I set out to redesign the music festival discovery experience. Based on discussions I had with friends on the concept, I noticed that users can be categorized into two groups — casual browsers and directed browsers. Casual browsers skim through the website without the intention of choosing a festival to attend. On the other hand, directed browsers are more goal-directed, and are looking to efficiently find a festival that suits their criteria. Maybe they live in New York, and only want festivals nearby. Or maybe they are only looking for festivals that feature Chance the Rapper.

## Wireframes

To build a product that is intuitive and efficient for both casual browsers and directed browsers, my initial wireframes combined a filtered search with a list of festivals. A list of festivals would fill the page body, accommodating the casual browser, while a filtered search would provide extra refinement for directed browsers.

![iteration 1]({{site.baseurl}}/images/festivalsupply-images/festivalsupply-v1.png)

I noticed that Festival Supply is relatively unique in that search doesn't have to be broken down into categories defined by the website itself. A product like [AngelList's Jobs page](https://angel.co/jobs) needs filters, as users need to choose from categories defined by AngelList (job types, job positions, etc.). Festival Supply only uses artists, locations, and festival names, all of which are categories known by the user. A less intrusive solution and similarly effective would be to provide a single search bar, while making it clear that the search bar worked for all potential categories.

## Lineup Design

Festival lineup design on the web leaves a lot to be desired. Most music festival websites either list artists in alphabetical order or just upload an image of their lineup poster. Neither approach works great on web, so I went looking for an alternative. Tapping into the fact that many festival-goers have interest in a specific genre of music, I grouped each lineup into four broad categories — Rock, Hip-Hop, Electronic, and Everything Else. While not the perfect solution, this helps to break down a large clump of information into more easily digestible pieces.

![iteration 2]({{site.baseurl}}/images/festivalsupply-images/festivalsupply-v2.png)

## Visual Design

I wanted to keep the visuals clean and modern for the young, festival-going audience. Pulling inspiration from the [flags](http://www.nme.com/photos/glastonbury-2016-the-best-flags-inflatables-and-random-stuff-on-sticks-1406947) associated with [Glastonbury](https://en.wikipedia.org/wiki/Glastonbury_Festival), I drew up a flag icon as Festival Supply's logo. 

I also added images to provide some visual interest (and color) to the website. The addition of images also helped tremendously in conveying a feel for the festival that is otherwise lost in uniformly-formatted artist lineups.

Lastly, I tucked the search bar into an icon in the header, which can be toggled through a tab press or by clicking the search icon.

![final landing page]({{site.baseurl}}/images/festivalsupply-images/festivalsupply-finished-1.png)

![final artists page]({{site.baseurl}}/images/festivalsupply-images/festivalsupply-finished-2.png)

<video loop="true" muted style="opacity: 0.3">
	<source src="{{site.baseurl}}/images/festivalsupply-images/festivalsupply-search.mov" type="video/mp4">
	Your browser doesn’t support embedded videos. 
</video>




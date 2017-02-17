---
layout: post
title: "Corbin Muraro"
---

# [Screenkraut](https://devpost.com/software/big-decision)

I attended [PennApps XV](http://2017w.pennapps.com) last January and worked with 3 total strangers from around the world on an ultra-lightweight presentation webapp called Screenkraut. I was responsible for design and contributed to front-end development of the webapp.

## Background

Realizing that [Prezi](http://prezi.com) is still a Flash application ([I’m not kidding](https://prezi.com/support/article/troubleshooting/system-requirements-for-prezi/#highendusage)), our team decided to build a similar presentation editor and viewer around the fantastic Javascript framework [impress.js](https://github.com/impress/impress.js/), complete with flashy 3D transitions, lots of themes, etc. 

However, after thinking deeper about where we can add value given the many presentation tools already available on the market, we decided to turn the project into a lightweight and synchronized presentation builder and presenter for on-the-fly presentations.

## Approach

Before starting to build product, we brainstormed a list of adjectives and a list of features that we determined as necessary in order to have a functioning and valuable final product 36 hours in the future. From this point, we sketched out a loose flow for how a user would interact with the product.

![brainstorming](images/screenkraut-images/screenkraut-brainstorm.jpeg){:class="magnify"}


![sketches](images/screenkraut-images/screenkraut-sketch.jpeg){:class="magnify"}


Screenkraut’s design centered around this idea of on-the-fly presentation building, in which it takes as few clicks as possible to create a presentation and as little effort as possible to share a presentation. In the process of building a super simple product, we tried to remain cognizant of the use cases that we were eliminating, striking a balance between a simple product and a useful product.

![presentation builder](images/screenkraut-images/screenkraut-main.png){:class="centered-image"}

### Navigation

One of the core features of a presentation app is navigating between slides. In almost all products on the market (Google Slides, Keynote, Powerpoint, Prezi, etc.), navigation is accomplished through a list of thumbnails visible along an edge of the window. We determined that this sort of navigation pushes us away from what makes our product most appealing. Meanwhile, the thumbnails also provide some value when slides are all formatted in a similar way. 

As an alternative to the thumbnail list, we built a carousel for slide navigation and slide creation. Both the previous and next slide are visible to the left and right sides of the focused slide. If no next page exists, moving forward creates a new slide and moves it into view. Clicking / tabbing / using the arrow keys are all ways to navigate between slides. Once a new slide enter the view, it is automatically selected. This allows for power users to create an entire presentation without leaving the keyboard, using tabs to navigate through the presentation.


### Slide Formatting

Again, when determining how slides should be formatted, we needed to strike a balance between practicality and simplicity. Preventing any customization results in frustration for the user, but providing too many options changes our product and results in Screenkraut being an underpowered Google Slides. 

After looking into presentations for a variety of fields on [SlideShare](http://www.slideshare.net), we determined that providing three formats would cover most use cases for on-the-fly presentation building: full title, full description, and title + description. Each description element could be a combination of text and images, while title fields could only be text. Additionally, element placement, font size, font color, and font family were all left predetermined, turning users to focus on the content.

I built some mocks of the input fields, with headings that make clear what is being selected and what each field can be used for. Additionally, layout icons were added underneath the active slide to toggle between layouts.

![editing slide description](images/screenkraut-images/screenkraut-edit-description.png){:class="centered-image"}

![editing slide title](images/screenkraut-images/screenkraut-edit-title.png){:class="centered-image"}



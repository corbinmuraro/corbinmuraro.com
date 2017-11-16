---
layout: portfolio
title: "Screenkraut"
htmltitle: "👨‍🏫 — Corbin Muraro"
---

# Screenkraut

I attended [PennApps XV](http://2017w.pennapps.com) last January and worked with 3 total strangers from around the world on an ultra-lightweight presentation webapp called Screenkraut. I was responsible for product design and also contributed to front-end development.

## Background

Realizing that [Prezi](http://prezi.com) is still a Flash application ([I’m not kidding](https://prezi.com/support/article/troubleshooting/system-requirements-for-prezi/#highendusage)), our team decided to build a similar presentation editor and viewer around the fantastic Javascript framework [impress.js](https://github.com/impress/impress.js/), complete with flashy 3D transitions, lots of themes, etc. 

However, after thinking deeper about where we can add value in the presentation tools marketplace, we decided to pivot, and build a lightweight presentation builder and presenter for on-the-fly presentations.

## Approach

Before starting to build the product, we brainstormed a list of features that we determined as necessary in order to have a functioning and valuable final product ready in 36 hours. We needed a slide builder view and a slide viewer, a way to input text, and a way to publish and share created presentations. From this core, 

Screenkraut’s design centered around this idea of on-the-fly presentation building, in which it takes as few clicks as possible to create a useful presentation and as little effort as possible to share the presentation. In the process of building a super simple product, we tried to remain cognizant of the use cases that we were eliminating, striking a balance between a simple product and a useful product.

![editing slide description]({{site.baseurl}}/images/screenkraut-images/screenkraut-edit-description.png)

![editing slide title]({{site.baseurl}}/images/screenkraut-images/screenkraut-edit-title.png)

## Slide Formatting

When determining how slides should be formatted, we needed to strike a balance between practicality and simplicity. Preventing any customization results in frustration for the user, but providing too many options changes our product and results in Screenkraut being an underpowered alternative to products like Powerpoint or Google Slides. 

After looking researching what existing presentations use in a variety of fields on [SlideShare](http://www.slideshare.net), we determined that providing three formats would cover most use cases for on-the-fly presentation building: full title, full description, and title + description. By allowing each description element to be either text or an image, the number of views further increases. This is where we decided to stop further customization to encourage speed and simplicity — element placement, font size, font color, and font family were all left predetermined.

I built some mocks of the input fields, with headings that make clear what is being selected and what each field can be used for. Additionally, layout icons were added underneath the active slide to toggle between layouts.

## Navigation

One of the core features of a presentation app is navigating between slides. In almost all products on the market (Google Slides, Keynote, Powerpoint, Prezi, etc.), navigation is accomplished through a list of thumbnails visible along an edge of the window. We determined that this sort of navigation pushes Screenkraut away from what makes our product most appealing. Plus, the small thumbnails would provide less value on Screenkraut, as the lack of variety in slide formatting would make determining which slide is which more difficult.

As an alternative to the thumbnail list, we built a carousel for slide navigation and slide creation. Both the previous and next slide are visible to the left and right sides of the current slide. If no next slide exists, moving forward creates a new slide and moves it into view. To make slide creation even quicker for more web-experienced users, clicking, tabbing, and using the arrow keys are all viable interactions to navigate between slides. Furthermore, when moving transitioning to a new slide, the new slide is selected. Again with the focus of efficiency, these decisions allow users the option to create an entire presentation without ever leaving the keyboard, using tabs or arrow keys to navigate through the presentation.

![presentation builder]({{site.baseurl}}/images/screenkraut-images/screenkraut-main.png)

It was an incredibly rewarding experience collaborating with a team of random people from a variety of backgrounds on Screenkraut. The product is continuing to be built by some of our team, look forward to a full public release in the future!



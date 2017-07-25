---
layout: portfolio
title: "Fairy Case Study"
---

# Fairy Onboarding Case Study

To provide some feedback on the Fairy onboarding process, I have put together a deck with my thoughts, critique, and some suggested improvements.

<div class="slider">
    <div class="flexslider" style="width: 900px;">
      <div class="custom-navigation">
            <a href="#" class="flex-prev"></a>
            <div class="custom-controls-container"></div>
            <a href="#" class="flex-next"></a>
        </div>
        <ul class="slides">
            {% for image in site.static_files %}
            {% if image.path contains 'images/fairy-images/carousel' %}
                <li><img src="{{site.baseurl}}{{image.path}}"></li>
            {% endif %}
            {% endfor %}
        </ul>
    </div>
</div>

<br>
<br>

Thanks for reading. If you enjoyed this, give me a call!

<!-- ## Research

Unfortunately, I couldn’t find anyone that I knew personally that uses Nextdoor. Thus, I turned to the product itself, and made an account in two neighborhoods: my home neighborhood in Berkeley, CA and my college neighborhood in Los Angeles, CA. I also browsed through user feedback in online communities (namely [Twitter](https://twitter.com/search?f=tweets&q=nextdoor%20app&src=typd) and [r](https://www.reddit.com/r/sanfrancisco/comments/3tcpor/things_found_on_nextdoorcom/)[e](https://www.reddit.com/r/pittsburgh/comments/1zj4cy/nextdoorcom_is_in_pitttsburgh_and_wants_to_help/)[d](https://www.reddit.com/r/SanJose/comments/3jcuiz/nextdoor_when_a_neighborhood_website_turns/)[dit](https://www.reddit.com/r/mildlyinfuriating/comments/58abth/someone_on_nextdoor_was_asking_how_to_exterminate/)) to get a sense of what value people got from Nextdoor and what they thought of the product.

I was surprised by how prevalent Nextdoor is in both of my communities. Among my neighbors in Berkeley, many of whom are around the age of 50, both the number of users and the amount of user activity was astounding. Meanwhile, in Los Angeles, CA, I was surprised to find UCLA students living in apartments with accounts on Nextdoor. Before looking into the user base, I expected Nextdoor to only be widely adopted among young tech-savvy homeowners. -->

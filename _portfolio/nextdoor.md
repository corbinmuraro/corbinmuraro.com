---
layout: portfolio
title: "Nextdoor Redesign"
---

# Nextdoor iOS Sign-Up Redesign

What follows is my redesign of Nextdoor’s sign-up flow. I originally intended to redesign the app itself, but before I got through to the actual UI of the Nextdoor app, I noticed some things about the sign-up experience that could be improved, and consequently decided to focus my redesign there.

## Critique

As a first step, I ran through the current sign-up process a couple times and took notes on what could be improved on each page.

<div class="critique">
	{% for image in site.static_files %}
	{% if image.path contains 'images/nextdoor-images/nextdoor-critique' %}
	    <img src="{{site.baseurl}}{{image.path}}">
	{% endif %}
	{% endfor %}
</div>


## Research

Unfortunately, I couldn’t find anyone that I knew personally that uses Nextdoor. Thus, I turned to the product itself, and made an account in two neighborhoods: my home neighborhood in Berkeley, CA and my college neighborhood in Los Angeles, CA. I also browsed through user feedback in online communities (namely [Twitter](https://twitter.com/search?f=tweets&q=nextdoor%20app&src=typd) and [r](https://www.reddit.com/r/sanfrancisco/comments/3tcpor/things_found_on_nextdoorcom/)[e](https://www.reddit.com/r/pittsburgh/comments/1zj4cy/nextdoorcom_is_in_pitttsburgh_and_wants_to_help/)[d](https://www.reddit.com/r/SanJose/comments/3jcuiz/nextdoor_when_a_neighborhood_website_turns/)[dit](https://www.reddit.com/r/mildlyinfuriating/comments/58abth/someone_on_nextdoor_was_asking_how_to_exterminate/)) to get a sense of what value people got from Nextdoor and what they thought of the product.

I was surprised by how prevalent Nextdoor is in both of my communities. Among my neighbors in Berkeley, many of whom are around the age of 50, both the number of users and the amount of user activity was astounding. Meanwhile, in Los Angeles, CA, I was surprised to find UCLA students living in apartments with accounts on Nextdoor. Before looking into the user base, I expected Nextdoor to only be widely adopted among young tech-savvy homeowners.

## Core Issues

After running through the existing flow and noticing that Nextdoor’s user base is from a very wide demographic, there are two core issues that I wanted to focus the sign-up redesign around solving.

### 1. The Sign-Up Process Takes a Frustratingly Long Time to Complete. 
You need to transfer codes between devices, say no to some prompts twice, and click through 11 screens *at minimum*.

### 2. The Sign-Up Process is Confusing. 
There are points in the flow where the user is unable to go back to the previous page to edit an incorrect input. There are other places in the flow where the user is left unsure, or a button directs somewhere unexpected. Particularly for the non-tech-savvy demographic, these problems can be annoying or even disabling.

## Redesigning the Flow

The second half of the existing sign-up flow requires lots of clicks to get through. While frustrating for the user, it seems likely that many of these inconveniences are quite intentional. Some people will only opt to add profile photos or invite their friends when the option is strongly pushed on them.

### Removing Pages

Adding a profile photo was out of place and unrelated to the rest of Nextdoor’s sign-up flow, so I decided to move that page out of the flow. The importance of uploading a profile photo for the Nextdoor community could be emphasized via a hint when the user naturally explores their profile page in the app, or a profile photo could automatically be added if the user signs up using Facebook.

Meanwhile, the invite neighbors page also seemed out of place, given that users were still in the process of signing up for Nextdoor, and were already being told to tell their friends about it. This prompt would make more sense for existing Nextdoor users who are downloading the app for the first time. Otherwise, moving this prompt to a notification or as an alert inside the app after a period of use might result in a better conversion rate, while also resulting in one less decision to make during the sign-up process.

<div class="critique">
	<img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-sketches/sketch-combined.jpg" class="magnify">
</div>

## The New Flow

### Basic Account Creation

Given that signing up with Facebook still creates a Nextdoor account with a Nextdoor username and password, there is no need to split the Facebook link into both a sign up and a log in button. 

I dispersed information across multiple pages to make the forms more easily readable. This dispersion of requests also provides a sense of easy and rapid progress as a user moves through the flow.

The arrows on each page turn opaque when information has been inputted into the forms, and hence function as both a next button and input verification.

<div class="mocks">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/1-Landing.png">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/2-LogIn.png">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/3-SignUp.png">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/4-Name.png">
</div>

### Address Input

As opposed to inputting an address and hoping that Nextdoor finds it valid on clicking the 'Next' button, address suggestions pop up when the user starts typing, and refine themselves as more characters are inputted.

Additionally, unlike Nextdoor’s current flow, if the map indicates that the address isn’t yours, you can return to the prior page to make changes to the address and try again.

<div class="mocks">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/5-Address.png">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/6-AddressResults.png">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/7-AddressMap.png">
</div>

### Address Validation

Instead of presenting the three validation options as equivalents (listing a credit card number over a phone call, no less), this design gives clear weight to a phone call over the other two options. The phone field is properly formatted for readability, and is only the length of the expected input. Additionally, the check mark is shown and the next arrow becomes opaque when a valid phone number (a phone number associated with the address) is entered.

The other two options remain available, but for most users, the alternative options don’t need to be explored to progress in the sign-up process.

<div class="mocks">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/8-Validation.png">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/9-Validation2.png">
</div>

### CTAs

Pulling from public records, the "invite your spouse" page would adjust to fit the user’s living situation. If the user lived alone, this page wouldn’t be included in the flow. If the user lived with roommates, it would provide input fields to invite each roommate. And if the user lived with a spouse, the below page would be displayed.

<div class="mocks">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/91-InviteOthers.png">
    <img src="{{site.baseurl}}/images/nextdoor-images/nextdoor-mocks/92-Notifications.png">
</div>

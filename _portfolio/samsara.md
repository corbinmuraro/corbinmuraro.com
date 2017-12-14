---
layout: portfolio
title: "Samsara Design Challenge"
htmltitle: "Samsara Design Challenge — Corbin Muraro"
---

# Samsara Design Challenge

For this challenge, I was tasked with building an interface to help people find dogs to adopt from local adoption centers. Start to finish, this project took me around five hours (apologies for getting a bit carried away).

### Background / Research

The night before I dove into the project, I spent some time compiling a [quick survey](https://goo.gl/forms/J7RY2duGHWkvuE582) that I posted on some large dog adoption pages on Facebook. By the next day, I had 12 responses, helping me better understand what matters most to people looking for a dog to adopt. Though the dataset was limited, results suggested that the two most crucial criteria to prospective dog adopters are photos and the breed of the dog. The results also suggested that adopters are willing to travel to adopt — finding the right dog is more important than adopting from hyperlocal adoption centers.

To help better understand potential users, I also read through some research on the demographics of adopters ([1](https://www.petsmartcharities.org/blog/attitudes-about-pet-adoption-are-changing), [2](https://hbr.org/2014/04/the-tricky-economics-of-dog-adoption), [3](http://assets.pewresearch.org/wp-content/uploads/sites/3/2010/10/Pets.pdf), [4](http://americanpetproducts.org/Uploads/MemServices/GPE2017_NPOS_Seminar.pdf)). These studies provided valuable information to help guide the design process. Most pet adopters are between the ages of 30 and 50. Additionally, more so than economic benefits or ease of access, emotional/empathetic reasons are the biggest driving force behind pet adoption.

### First Sketches

The constraints of the assignment broke the UI into at least two views — a results view and a detail view. Beyond this, I sketched out a few directions for a landing page to help provide context to new users before jumping into a more complex UI (which would potentially be in an empty state).

![landing page sketches]({{site.baseurl}}/images/samsara-images/landing-sketch.png)

I also sketched out directions for the main results list view, thinking about search and filter placement, along with different options for the list UI. 

![results page sketches]({{site.baseurl}}/images/samsara-images/results-sketch.png)

### The Landing Page

![adoption landing page]({{site.baseurl}}/images/samsara-images/landing.png)

Given that the vast majority of visitors landing on the site will be looking to search for a dog to adopt, a prominent search bar was a natural way to clearly provide this functionality. This preliminary search needed to find middle ground between a search component that tries to provide perfect results, but consequently becomes inconvenient and overwhelming by asking for too much information up front[^1], and a search component that asks for too little information to quickly move users into search results, but consequently provides largely irrelevant results[^2].

![adoption search detail]({{site.baseurl}}/images/samsara-images/search-detail.png)

I found the balance between these two extremes in asking for both location information and desired breeds in the search component. The location field would be auto-filled with "Near {location detected}" on load, with the location detected coming from the user's IP address. While using location services would provide a far more precise approximation of location (IP just gives you a city), the friction that requesting location service access generates outweighs the marginal benefit of a more precise location. After all, most prospective adopters aren't worried about having to drive a bit to pick up their new dog, so a slightly imprecise location is no huge detriment to the search results.

I also worked through a few directions for landing page content below the search component. Displaying "suggested" or "nearby" dogs up for adoption was one approach, providing a quick jump to detail pages, dodging the need to browse through search results. However, unlike products like food delivery apps where users already have the context behind quick actions (e.g. they've been to the restaurant mentioned in the quick action card), an image of a dog doesn't provide enough information to be a valuable and attractive option for users. I settled on showing "Popular Searches", providing an easy transition to the results view, without jumping over the information needed before a user moves to a detail view.

### The Results Page

![adoption results list]({{site.baseurl}}/images/samsara-images/results-list.png)

The results page moves the search component to the top of the page, filling in the page body with a filter sidebar on the left and a main content view on the right. Given that my user research suggested that additional constraints like age and gender were also desired by most potential dog adopters. Making these filters prominent helps improve the browsing experience,  constraining results to precisely what they're looking for. Additionally, the sidebar can be easily adapted to the mobile web with a button near the top of the page toggling a full-screen filter view. 

![adoption results map]({{site.baseurl}}/images/samsara-images/results-map.png)

Toggling between the list view and map view can be accomplished via the "Show Map" button. Several other directions were considered, including using a toggle switch to alternate between list and map view, or even including a small, expandable map alongside the list search results. Again, because proximity to the adoption center was reported as less of a concern by potential users, the map view would likely not be very valuable for many use cases. Hence, a less prominent view toggle could suffice.

Regarding map functionality, dragging or rescaling the map would re-search the new map area for dogs matching the filter criteria.

Given that emotion and empathy are the biggest drivers of dog adoption, in both the map and list view, I emphasized the dog's name and photo. Connecting with the dogs is incredibly important, and humanizing them through their name and photo helps users differentiate between dogs and make a decision. For instance, with 100 young male German Shepherds in Los Angeles, these personal data points are hugely important, and I wanted the interface to reflect that.

### The Detail View

![adoption detail view]({{site.baseurl}}/images/samsara-images/detail.png)

After working through a few alternatives, I landed on a modal detail view. Though preloading detail pages and a prominent back button in the top right of the detail page would also work well, the lightweight nature of the information on the detail view  makes loading new pages to display it excessive. Using modals also allows for a new browsing behavior — moving directly between detail views with the arrow keys or the arrow buttons, instead of jumping back and forth between the browse view and detail views.

In similar fashion to the browse views, I focused on humanizing and differentiating each dog from the rest by placing additional emphasis on photos and the dog's name in the detail modal.

### Final User Flow

Click to expand.

<figure>
<img src="/images/samsara-images/flow.png" alt="user flow" class="magnify" style="margin-bottom: 3px;">
</figure>


### Closing Thoughts

There are lots of future directions this project can take. For one, given the long process of finding a dog to adopt, adding bookmarking functionality would be hugely beneficial for users. Additionally, considering a grid view instead of a list view could help maximize screen real estate and place additional emphasis on photos when browsing.

Thanks for taking the time to read this over, I hope you found it interesting!

[^1]: [Adopt A Pet](https://www.adoptapet.com) exemplifies this problem.
[^2]: [Petfinder](http://petfinder.com) exemplifies this problem.
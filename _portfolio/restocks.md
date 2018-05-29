---
layout: portfolio
title: "Restocks Post-Order Flow"
htmltitle: "📦 — Corbin Muraro"
---

# Restocks Post-Order Flow

[Restocks](https://www.restocks.io) is a huge force in the ever-growing sneaker and streetwear community, helping enthusiasts buy and sell limited releases from brands like Supreme, Nike, and Adidas via their mobile app. Around a year ago, Restocks launched the Restocks marketplace, enabling secondhand transactions between buyers and sellers within the Restocks community. Over the last year, both buyers and sellers provided a wealth of feedback regarding the post-order shipping and tracking experience. I was tasked with designing a solution to address this feedback, building an experience to better serve both buyers and sellers.

### Background / Research

On top of the customer support data to sift through, I also was fortunate to have a friend who had experienced both sides of the Restocks marketplace. Though the thoughts he provided largely echoed the customer support data, the ability to push deeper was hugely beneficial to the design process.

The initial version of the Restocks post-order flow was a chat interface:

![old screens]({{site.baseurl}}/images/restocks-post-order-images/old.png)

While having a chat was beneficial for communication between buyers and sellers, the implementation concealed the information that really mattered on both sides of the experience. Sellers had trouble finding crucial information like shipping destinations and revenue breakdowns, and buyers had to navigate through several screens to see when their package would arrive.

On top of this, the chat was rarely used. Most orders were shipped on time, and the tracking number provided all further information requested by both buyers and sellers.

### A New Approach

Instead of making a chat interface central to the post-order experience, I moved towards an interface that focused on immediately providing the information that buyers and sellers need most. After sketching out several directions for both buyers and sellers, I jumped into Sketch and started drawing up a few possible views for both buyers and sellers.

On the buyer side, I wanted to increase the focus on order progress. With this in mind, I tried a few iterations centered around a progress bar, some iterations with more detail than others, some iterations with more transparency into the buyer side than others, and some in which actions were nested under the appropriate step of progress.

![early buyer mocks]({{site.baseurl}}/images/restocks-post-order-images/first-buyer.png)

These early buyer screens ran into a few issues. Most notably, a progress bar didn't help to provide buyers with the most important information — the delivery date.

On the seller side of things, I also drew up a few different directions.

![early seller mocks]({{site.baseurl}}/images/restocks-post-order-images/first-seller.png)

These early seller screens lacked a clear hierarchy, and didn't provide thorough transaction details. Both Restocks and Stripe take a cut of the transaction, and it was crucial to reinforce this to sellers whenever possible to account for the discrepancy between listing price and amount earned.

### Final Mocks

![review flow]({{site.baseurl}}/images/restocks-post-order-images/final.png)

Building off of these early mocks, I worked to better incorporate hierarchy and provide additional details where necessary. We were able to incorporate an API to retrieve tracking information, making it possible to provide a precise delivery date as the point of focus for the buyer. Meanwhile, the final seller view emphasizes and explains the need for tracking information, while also providing a full breakdown of fees.

### Seller Ratings

![review flow]({{site.baseurl}}/images/restocks-post-order-images/review-flow.png)

I also worked with the review flow to clarify states, and provide better context for why ratings matter. I also split ratings into three separate screens, helping users better digest the question and provide higher quality responses.

### Final Flow

![entire flow]({{site.baseurl}}/images/restocks-post-order-images/entire-flow.png)


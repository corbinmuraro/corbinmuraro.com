---
layout: blog
htmltitle: "🔗 — Corbin Muraro"
title: "My Beef With Deep Links"
date: 2017-11-15
---

# My Beef With Deep Links

You're on your brand new iPhone X, reading a blog post that mentions a twitter rant. You want to hop over to Twitter to read it in its full form. You tap the well-labeled [rant link (twitter.com)](https://twitter.com/gravislizard/status/927593460642615296) and *boom* — the Twitter app instantly opens to provide an immersive and sticky experience. After all, the native Twitter app provides a much better experience for reading through threads than the mobile site. What a win for the user, all thanks to the power of deep links. Right?

[Journalists](https://techcrunch.com/2015/06/12/a-brief-history-of-deep-linking/) [and](https://apsalar.com/2017/02/wtf-are-universal-links-and-why-should-you-care/) [UX](https://www.tune.com/blog/optimizing-user-experience-with-deferred-deep-linking/) [writers](https://www.uxmatters.com/mt/archives/2016/01/the-crucial-role-deep-linking-should-play-in-your-mobile-app.php) [seem](https://blog.markgrowth.com/deep-linking-what-is-it-why-does-your-app-need-it-and-how-to-use-it-fe45a957aa0f) [to](https://www.linkedin.com/pulse/we-examined-universal-links-across-hundreds-apps-data-austin-hay/) [think](https://www.sitepoint.com/ios-universal-links-for-a-seamless-app-user-experience/) [so](https://clearbridgemobile.com/7-benefits-of-mobile-app-deep-linking/). An implementation of deep linking called Universal Linking[^1] has been widely praised as a means to improve user experience. However, much of this praise is a result of only considering ideal use cases. Looking at how content is actually displayed and consumed on the web tells a different story. Three things are often overlooked when discussing UX implications of deep links:

### 1. They're slow.

Not everyone has the latest and greatest iDevice. For many users, launching a native app is much slower than opening the link within the browser.

### 2. Hyperlinks don't address the where.

While hyperlinks usually provide a good idea of what you will be looking at via link text, users rarely know where a link is going until they click it. Compounding this with the fact that launching native apps is often slow on old devices results in a really frustrating user experience. Users don't know which links are going to pull them out of web browsing and make them wait for the native app to load.

### 3. Web browsing often isn't directed or goal-oriented.

Deep links disrupt a web browser's navigation UI. This isn't a big deal if the user wants to stay within the app that they were deep linked into, but for a user behavior like briefly reading a Facebook post before jumping back into an article, this inconsistency of UI is clumsy and inconvenient for the user.

<br />

Like anything else, discussion around Universal Links requires a dose of reality alongside the ideal vision. User behavior is messy and old phones aren't blazing fast. Designing for only the latest and greatest can leave the [majority of users](https://newzoo.com/insights/articles/63-percent-of-all-iphones-ever-sold-still-in-use/) with a poor experience.

Web apps have improved significantly over the last few years, with Javascript frameworks like Electron and React Native now serving as viable replacements to natively-built apps. There is no reason that this compelling deep link experience can't be replicated within the browser.

[^1]: Universal Linking is an iOS 9+ implementation of deep linking that allows for seamless, modal-free transitions from web to native apps. For the uninitiated, [Branch](https://branch.io/what-is-deep-linking/) has a great breakdown of the various types of deep links.
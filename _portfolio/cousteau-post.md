---
layout: portfolio
title: "Cousteau"
---

# Cousteau

[Cousteau](http://corbinmuraro.com/cousteau) is a browser extension that helps users learn a foreign language while browsing the web. The current iteration translates select portions of text on every website a user visits. Stay tuned for a full product launch in the near future!

![cousteau screenshot](images/cousteau-images/cousteau-everything.png){:class="centered-image"}

## Background

I finished my Chinese coursework last spring, and was looking for a way to preserve my Chinese language skills. I didn’t want to spend hours every weekend practicing, and didn’t want to put down a lot of money on a program like Rosetta Stone. To solve this issue, I built Cousteau, a browser extension that replaces pieces of text with the translated equivalent, hence teaching a foreign language through reading immersion.

## Approach

I started this project by thinking about the extension’s core functionality — how users interact with Cousteau’s translated text. I sketched out some potential interactions and began thinking about what sort of UI would be necessary to communicate any additional information.

![cousteau early notes](images/cousteau-images/cousteau-notes1.jpeg){:class="centered-image"}
![cousteau early notes](images/cousteau-images/cousteau-notes2.jpeg){:class="centered-image"}

After building the extension’s back-end and figuring out what sort of words to target for translation, there were three key user-facing design challenges that I realized I needed to tackle.

### The Extension Pop-Up

Chrome extensions provide developers with two places to display extension-related UI: the options page and the pop-up window. I pushed all configuration options, such as the language to be learned and a website blacklist to the options page. 

After several iterations on the pop-up page, I determined it would helpful for the pop-up to display all pairs of words (the untranslated and the translated version), along with toggles to translate individual words on the page, or translate all words at once.

![cousteau popup list](images/cousteau-images/cousteau-popup.png){:class="centered-image" style="width: auto;"}

### Viewing Original Text

Another big design problem I confronted was determining how translated text should be displayed on a website. I wanted the original text to be accessible, but didn’t the interaction to view original text to interfere with the default site behavior. For example, an interaction such as clicking on the translation to see the original text may not work if the translated text is inside of a link. I also considered making the pop-up the only way to view original text, but I was concerned about this flow being too frustrating for the user. 

The solution that worked best was a hover to view the original text. This solution worked on nearly every website and wasn’t too much of a burden on the user.

<video loop="true" muted style="opacity: 0.3; margin: 80px auto;">
	<source src="https://dl.dropboxusercontent.com/s/t2q0j8vdt4p1se3/cousteau-hover.mov?dl=0" type="video/mp4">
	Your browser doesn’t support embedded videos. 
</video>

### Displaying Translated Text

I also went through several iterations of display text. At first, I tried highlighting the translated terms in yellow, thinking that yellow would be a color unlikely to blend in with elements on the website. However, the yellow highlight was far too attention grabbing, and it made reading articles difficult; users kept anticipating the next portion of translated text instead of reading the article normally. I also tried underlining the translated portion of text, hoping that an underline would be more subtle, but the same issue persisted. 

Ultimately, I removed any translated text CSS, as a way to be as non-intrusive as possible, allowing users to read the article without looking ahead for translated terms.



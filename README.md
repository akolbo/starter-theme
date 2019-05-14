## Notes

## Overall Methodology

## Context Levels
1. Global - HTML/Global/Base/Index
2. View - Body/Template/Page/Single/Entry/Post/Home/About/Landing/Product/Blog/Client/Service/Recipe
3. Region - Header/Main/Aside/Footer
4. Section - Topic/Collection/Feed/Listings/Category
5. Unit - Entry/Property/Product/Listing
6. Field - Text/Paragraph
7. Span - Bold/italic/Pseudo/Icon

### CSS Writing Structure: 
1. Every css declaration block should have minimum 2 selectors.
1. You should ask, "what context level owns this class?"
1. Html Element will have the 'global' class
1. Body Element will have a 'view' class
1. Selector Specificity Types
    1. Parent and Child vs. noun + adjective classes
        1. .global + .child (for global styling)            
            2. ```.global body { background-color: red }```
            2. ```.global body.homepage { background-color: orange }```
            2. ```.global body.product { background-color: yellow }```
            2. ```.global .hamburger-header { background-color: green } ```
        1. .parent + .child
            2. ```.global .homepage .footer { background-color: red }```
            2. ```.global .page .footer { background-color: orange }```
            2. ```.global .entry .footer { background-color: yellow }```
            2. ```.global .product .footer { background-color: green }```
        1. .topic.format         
            2. ```.feature.collection { background-color: black; border: white }```
            2. ```.news.listings { background-color: black; border: white }```
            ```.listings.property { background-color: black; border: white }```
        1. .topic.format
            2. ```.global .service.collection { background-color: black }```
            2. ```.global .blog.feed { background-color: black }```
            2. ```.global .job.listings { background-color: black }```
        1. .topic .property
            2. ```.blog .entry { background-color: black }```
            2. ```.job .entry { background-color: black }```
        1. .topic .property.transformation        
            2. ```.job .entry.feature { background-color: black }``` 
            2. ```.job .entry.feed { background-color: black }``` 
            2. ```.job .entry { background-color: black }``` 
    

### Naming convention through content types
1. database retrieval methods; 
2. A property is a style utility that is created separately and applied through `@extend` property within css. 
1. The context is the page type--it's a single "view" on any device for an entire "page". Web page, app "window", smart watch "screen". 
1. "What context is this 'property' exist?
1. "A property will have multiple fields"
1. A Topic will enclose a content chunk which holds a fragment/field/unit

### Pair a Content "Chunk" within Context ()

## Quick Note on Permalinks...
Make sure you change the Permalink structure under Settings, or the "views" pages will not be visible unless you visit mysite.com/index.php/custom-page.

## Timber Template "Views" Tip
Then you need to create a page in the WP dashboard in order for the page to show up!

## Inspiration

Inspired by html5-boilerplate_v7.1.0, bk.com, GetPocket.com, ikea.com, clearleft.com, vaersaagod.no, advancedcustomfields.com, cypress.io, goodyear.com (great accessibility)



## Page Section Purpose Level - Same hierarchy as a Region. Think of these as 'table name in a database', 'marketing point'

1. .splash-area
1. .splash
1. .global .shrink-header
1. .global .hamburger-header
1. .global .footer
1. .case-study.feature-set
1. .case-study.listings
1. .services.collection
1. .company-process.marketing
1. .values.marketing
1. .client-testimonial.listings
1. .created-with.feature-set - A group of "featured individuals that helped with the companies' product.
1. .compatibility.topic
1. .how-to.topic
1. .membership.topic
1. .step-by-step-guide.topic
1. .our-supporters.topic
1. .our-sponsors.channel
    2. .latest.level
    2. .platinum.level
    2. .gold.level
    2. .silver.level
    2. .bronze.level
    2. .backers.level
1. .trending-now - ex. Merriam-Webster.com
1. .act-now
1. .get-started
1. .purchase-options
1. .blog
1. .subscribe
1. .social Media
1. .contact
1. .steps
1. .contribute
1. .vote
1. .comparison
1. .search
1. .lifestyle
1. .disclosure
1. .full-disclosure
1. .access
1. .discover
1. .promotion.feature-set
1. .offer.feature-set
1. .delivery-service.overview
1. .construction-service.overview
1. .white-labeling-service.overview
1. .new-product.listings
1. .our-work
1. .our-projects
1. .project-archive 
1. .project-current
1. .project-notable
1. .notable-mention(s)
1. .award.listings
1. .structure()
1. .partnership
1. .organization-structure
1. .cloud-Structure/Event-Structure
1. .biography
1. .admission
1. .evaluation
1. .the-competition
1. .guests-attending.feature-set
1. .job.listings
1. .career.listings
1. .career.overview
1. .goals.marketing
1. .purpose.overview
1. .news.listings
1. .press.listings
1. .trusting-clients.feature-set
1. .client.feature-set
1. .trusted-by.feature-set
1. .advertising
1. .twitter.feed
1. .twitter.feature
1. .blog.listings
1. .conference.listings
1. .to-do
1. .on-boarding
1. .premium-integrations

## Page Purpose Level (Product Page, Service Page, etc.)
1. .detail-specs > .detail-spec-[emphasis]
2. .star-rating
1. .related-content > .related-lessons/.related-articles/.related-courses/.related-products/.related-services
1. .suggested-content
1. .feature-set
1. .list

### Pull Level - How the content is being 'pulled from' or 'populated by' the cms.
Describes how it's pulled from the database. 
How the element(s) within a topic are iterated over or hard coded.

### Motif Level - Div or Element that has no structural or content purpose, it's only there for style purposes.
1. .motif
1. .style

### Plural-Groupings/Collections Classes (always written after the Topic)
1. .class-name.collection
- Is a parent of a curated list of entries/posts.
- Most common class combo might be *.feature.collection*, *.business-objective.collection*, *.career-benefit.collection* .
- The *collection* may contain multiple related or unrelated features like "Self-Driving, Costs Nothing, Prepares Your Taxes, Third Thursdays and Weekends Off". 
- Usually these would come in a group of 3, but not necessarily.

1. .class-name.listings
- The parent class of a list of entries/posts that are pulled from the database as a for-loop in an alphabetical, newest/oldest, etc. + number of entries. 

1. .class-name.feed
- The parent class of a list of a group of entries/posts that come from outside sources such as twitter, rss feed or instagram posts, or from an api such as rest api or graphql.

1. .class-name.feature-set
- The parent class of the a .feature entry
- Includes an option in the CMS within an entry/post with a "on/off" state 
- it's one single piece/article/product of featured or starred item (ex. .case-study.feature)

1. .class-name.marketing
- An area that describes a marketing content section

1. .class-name.overview
- An area that describes a marketing content section

1. .class-name.cta
- An area that describes a marketing content section

1. .class-name.warning
- An area that describes a marketing content section

## Supplemental or Auxiliary Elements
1. .button
2. .href
3. .tag
1. .legend
1. .marketing-burst
1. .tire-detail-fit-checker
1. .tire-detail-fit-confirmation
1. .trust-mark
1. .trust-burst
1. .product-rates
1. .ribbon


## Singular Topic Units (format?)
1. class-name entry - a subdivision of a listings section. In the context of a database posts or entries. They mirror the database in alphabetical, newest/oldest, etc. + number of entries. 
1. class-name feature - one piece of featured or starred item (ex. case-study_feature)
1. class-name field - a one-off probably "custom" field found on a specific page. 
1. class-name static - hardcoded piece of html. Not included in the database.

# Structure and Grid Specific Classes
- .section
- .container
- .split (from running a race, a descendent of the container. Multiple splits exist on the same level)

# Pull Type Transformation
- .entry.id - specified by the individual entry/post id
- .entry.feature - feature boolean radio button or check box
- .entry.repeating - a repeating element in a loop
- .entry.pick - choose a status from a dropdown menu in the cms (ex. low-tier, mid-tier, high tier)


## Properties

## Contexts


## Tag Class Functions/Purpose

3. Section - Used for Enclosing a Topic. Can include full width backgrounds, or motifs, but not intended for paddings or margins. Should be flush next to the previous and following section using floats--display block leaves a wierd gap!
3. Container - a div that only declares max widths and minimal horizontal padding on small screens.
3. Content - Responsible for vertical padding and 
3. Panel - Also thought of as a content panel. Includes visual aids, text, and headings. Can have multiple panels inside a container.

## Field/Asset Level
1. text field
1. text-area field
1. checkbox field
1. link field
1. tags
1. Excerpt
1. FeaturedImage/Thumbnail
1. Visual Aid - Venn Diagram
1. Visual Aid - Chart
1. Visual Aid - Image
1. Visual Aid - Figure > FigCaption    


## Types of Design Pieces

### Action Elements - Items that Execute a function or action
1. .navigation
1. .site-search
1. .sales-cart
1. .contact-forms
1. .user-access-signin
1. .user-sign-in
1. .get-next-entry
1. .get-prev-entry

### Utility Elements
1. .href-block.utility - Div to make the href block level so it makes the entire parent div clickable
1. .clearboth
1. .clearleft
1. .clearright

# Topic Headings

1. Objective Characteristics Topics - Quantifiable. Desicribes a portion of the business that you can prove exists.     
    2. We *are/have/do/make* this
    2. Jon's hair *is* brown. 
    2. Our supporters *are* the following companies.
    2. We *have* many lamps
    2. These companies *are* already [doing something] better with [Our Company]
    2. Client list (also a good credibility builder). 

1. Subjective Opinionated Topics - Can't prove that it's true, and influences the user to think in a certain way.
- Our services are done *better*. 
- We make the *smoothest* smoothies.
- *Made* for people like you
- Shopping *made easy*.

4. Directive Action Topics - Suggest that the Customer Do something. 
- *Enter* our universe
- *Come* to our country
- *Visit* our Tribe
- You should *do* this
- *Do* vote
- *Do* contribute
- *support* our cause
- *become* one of us
- *contact* us
- *test* your code, not your patience
- *Read* our Docs
- *Chat* with Us
- *Contribute* to ...
- Do you love us? *Say* it!

5. Visual Motifs (Can be structural such as a div box, an absolutely positioned div, large svg, etc.)

## Compare/Contrast Headlines (h1 tags)
1. *A broader thing has done something, finally this has done that too* - The web has evolved. Finally, testing has too.
2. *Do this, Not That* - Test your code, not your patience.
3. *What sets us apart?*
1. *The thing has been doing something for too long, we've figured out how to fix it*
1. *We do not use artificial something*
1. *We focus on something and do it well*
1. *We are compatible with something*
1. *We are written in the best language*
1. *We do something faster*
1. *Our product is for*
1. *This is a new way of doing something*
1. *You can save time by doing something*


A Page is like a series of essays.
See How to Choose a Win-Win Essay Topic 
https://www.essaytigers.com/how-choose-win-win-essay-topic

### Types of Essays from Essay Tiger.com:
1. Argumentative
2. Biography - About-Us
3. Cause and Effect
4. Classification
5. Compare and Contrast
In a comparison essay, you need to show that you can find similarities and differences between two people, books, or concepts.
6. Critical 
7. Definition
8. Descriptive
In a narrative essay (or personal essay, it’s sometimes called), the goal is to tell a story. Often, these are combined with descriptive essays, which are designed to make you feel as though you are in a particular place or time.
9. Evaluation
10. Explanatory
In an explanatory essay, you are showing why or how something should be done
11. Expository
12. First Person - Testimonials
13. How-To
14. Informal
15. Narrative
In a narrative essay (or personal essay, it’s sometimes called), the goal is to tell a story. Often, these are combined with descriptive essays, which are designed to make you feel as though you are in a particular place or time.
16. Opinion
17. Persuasive
In a persuasive essay, you are asked to argue an opinion or point of view
18. Profile
19. Reflective
20. Scholarship


### Descriptive Enclosures

### Subjective Enclosures (Compare, Contrast, )

## Other Style Naming Conventions

## Other Unit Naming Conventions
1. .flux Area (changes quickly...like an advertising section)
1. .auxiliaries - supplemental piece of info
1. .parallel - comparing information side-by-side
1. .side-by-side - comparing information side-by-side
1. .table
1. .chime Added Benefit Burst...Maybe a small circle
1. .jot - Quick Idea associated with an article or product (ex. maybe the author wanted to point out a thought like, "Made me smile")
1. .concurrent-thought
1. .alternatives - Alternative product or approach that may cover the same use case
1. .revision
1. .argument
1. .roundup - A Roundup of items

## Motif Naming Conventions (Shaped)
1. .skid
1. .bar
1. .ribbon - such as a breadcrumb ribbon
1. .peg
1. .chime/dot
1. .dot
1. .tag

## Motif Naming Conventions (Applied To a Shape)
1. .pattern
1. .pattern-primary
1. .curvy-
1. .fluid (as in it looks like a liquid with curvy line contours)
1. .blended (Gradient Blend)
1. .blend-from-bg (Gradient Blend FROM the background color on the TOP of the div)
1. .blend-to-bg (Gradient Blend TO the background color on the BOTTOM of the div)
1. .contour-left - absolutely position the div to the parent div and use an svg
1. .motif-primary

## Motif Naming Conventions (Other)
1. .reserved-for (maybe a motif/style div that can be reserved for a motif or background)

## State Naming Conventions
These are most likely ```@extend``` properties
1. .auto-morph (automatically changes color in a continuos loop with css or javascript)
1. .looping-morph (automatically changes color in a continuos loop with css or javascript)
1. .looping-morph (automatically changes color in a continuos loop with css or javascript)
1. .exit-modal
1. .mobile-nav-dimmer
1. .flipped/reversed (Reversed colors on every other item, or item specific)
1. .shrinking

## TBD Title
1. Characteristic(s)
1. Structure(s)
1. UX Fragment
1. Experience Fragment
1. Channel
1. Context






# The Timber Starter Theme

The "_s" for Timber: a dead-simple theme that you can build from. The primary purpose of this theme is to provide a file structure rather than a framework for markup or styles. Configure your Sass, scripts, and task runners however you would like!

[![Build Status](https://travis-ci.org/timber/starter-theme.svg)](https://travis-ci.org/timber/starter-theme)

## Installing the Theme

Install this theme as you would any other, and be sure the Timber plugin is activated. But hey, let's break it down into some bullets:

1. Make sure you have installed the plugin for the [Timber Library](https://wordpress.org/plugins/timber-library/) (and Advanced Custom Fields - they [play quite nicely](https://timber.github.io/docs/guides/acf-cookbook/#nav) together). 
2. Download the zip for this theme (or clone it) and move it to `wp-content/themes` in your WordPress installation. 
3. Rename the folder to something that makes sense for your website (generally no spaces and all lowercase). You could keep the name `timber-starter-theme` but the point of a starter theme is to make it your own!
4. Activate the theme in Appearance >  Themes.
5. Do your thing! And read [the docs](https://github.com/jarednova/timber/wiki).

## What's here?

`static/` is where you can keep your static front-end scripts, styles, or images. In other words, your Sass files, JS files, fonts, and SVGs would live here.

`templates/` contains all of your Twig templates. These pretty much correspond 1 to 1 with the PHP files that respond to the WordPress template hierarchy. At the end of each PHP template, you'll notice a `Timber::render()` function whose first parameter is the Twig file where that data (or `$context`) will be used. Just an FYI.

`bin/` and `tests/` ... basically don't worry about (or remove) these unless you know what they are and want to.

## Other Resources

The [main Timber Wiki](https://github.com/jarednova/timber/wiki) is super great, so reference those often. Also, check out these articles and projects for more info:

* [This branch](https://github.com/laras126/timber-starter-theme/tree/tackle-box) of the starter theme has some more example code with ACF and a slightly different set up.
* [Twig for Timber Cheatsheet](http://notlaura.com/the-twig-for-timber-cheatsheet/)
* [Timber and Twig Reignited My Love for WordPress](https://css-tricks.com/timber-and-twig-reignited-my-love-for-wordpress/) on CSS-Tricks
* [A real live Timber theme](https://github.com/laras126/yuling-theme).
* [Timber Video Tutorials](http://timber.github.io/timber/#video-tutorials) and [an incomplete set of screencasts](https://www.youtube.com/playlist?list=PLuIlodXmVQ6pkqWyR6mtQ5gQZ6BrnuFx-) for building a Timber theme from scratch.


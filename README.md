## Notes

## Overall Methodology

## Context Levels
1. Global - HTML/Global/Base/Index
2. View - Body/Template/Page/Landing/Product/Blog/Home/Single/About/Clients/Services/Manual
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
        1. Parent + Child (for global styling)
        ```.global .footer { background-color: black; border: white } ```
        ```.global body { background-color: black }```
        1. Parent + Child
        ```.global .homepage .footer { background-color: black; border: white }```
        ```.global .page .footer { background-color: black; border: white }```
        ```.global .entry .footer { background-color: black; border: white }```
        ```.global .product .footer { background-color: black; border: white }```
        1. .topic.format 
        ex.
        ```.feature.collection { background-color: black; border: white }```
        ```.news.listings { background-color: black; border: white }```
        ```.listings.property { background-color: black; border: white }```
        1. .topic.format
        ```.global .service.collection { background-color: black }```
        ```.global .blog.feed { background-color: black }```
        ```.global .job.listings { background-color: black }```
        1. .topic .property
        ```.blog .entry { background-color: black }```
        ```.job .entry { background-color: black }```
        1. .topic .property.transformation        
        ```.job .entry.feature { background-color: black }``` 
        ```.job .entry.feed { background-color: black }``` 
        ```.job .entry { background-color: black }``` 
    

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





## Home Section Purpose Level - Same hierarchy as a Region. Think of these as 'table name in a database', 'marketing point'

1. .splash-area
1. .splash
1. .global .header
1. .global .footer
1. .case-study.features
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
1. .supporters.topic
1. .sponsors.
    2. .latest.level
    2. .platinum
    2. .gold
    2. .silver
    2. .bronze
    2. .backers
Act/Get-Started
Options
Blog
Subscribe
Social Media
Contact

Steps
Contribute
Vote
Comparison
Search
Lifestyle
Disclosure
Full-Disclosure
Access
Discover
Promotion(s)/Offer(s)
Delivery
New-Product(s)
Work/Project(s)
Project-Archive 
Project-Current
Project-Notable
Notable-Mention(s)
Award_Listings
Structure()
Partnership
Organization-Structure
Cloud-Structure/Event-Structure
Biography
Admission
Evaluation
The-Competition
1. .guests-attending.feature-set
1. .job.listings
1. .career.listings
1. .career.overview
1. .goals
1. .purpose
1. .news
1. .press
1. .trusting-clients
1. .client
1. .trusted-by
1. .advertising
1. .twitter.feed
1. .twitter.feature
1. .blog.listings
1. .conference.listings
1. .to-do
1. .on-boarding
1. .white-labeling
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

### Plural-Groupings/Collections Classes (always written after the Topic)
1. .class-name.collection
- Is a parent of a curated list of entries/posts. Singular class names precedes, such as *.business-objective* not *.business-objectives*. Including *.collection* perfects the plural nature of the elements children.
- Most common class combo might be *.feature.collection*, *.business-objective.collection*, *.career-benefit.collection* .
- The *collection* may contain multiple related or unrelated features like "Self-Driving, Costs Nothing, Prepares Your Taxes, Third Thursays and Weekends Off". 
- Usually these would come in a group of 3, but not necessarily.

1. .class-name .set
- Prefer the class *.collection* as *.set* is too vague. 
- References a selection all of the same type. 

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

## Supplemental or Auxiliary Elements
1. Button
2. Href
3. Tag
1. Legend
1. Marketing Burst
1. Tire Detail Fit Checker/Confirmation
1. Trust Mark
1. Trust Burst
1. Product Rates
1. Ribbon


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
### Utilities - Items that Execute a function or action
1. .navigation
1. .site-search
1. .sales-cart
1. .contact-forms
1. .user-access-signin
1. .user-sign-in


# Topic Headings

1. Descriptive Topics

1. Objective Topics - Quantifiable or you can prove exist.     
    2. We *are/have/do/make* this
    2. Jon's hair *is* brown. 
    2. Our supporters *are* the following companies.
    2. We *have* many lamps
    2. These companies *are* already [doing something] better with [Our Company]
    2. Client list (also a good credibility builder). 

1. Subjective Topics - Can't prove that it's true, and influences the user to think in a certain way.
- Our services are done *better*. 
- We make the *smoothest* smoothies.
- *Made* for people like you
- Shopping *made easy*.

4. Directive Topics - Suggest that the Customer Do something. 
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
1. 


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
1. Flux Area (changes quickly...like an advertising section)
1. Auxiliaries - supplemental piece of info
1. Parallel - comparing information side-by-side
1. Side-by-side - comparing information side-by-side
1. Table
1. Chime Added Benefit Burst...Maybe a small circle
1. Jot - Quick Idea associated with an article or product (ex. maybe the author wanted to point out a thought like, "Made me smile")
1. concurrent-thought
1. Alternatives - Alternative product or approach that may cover the same use case
1. Revision
1. Argument
1. Roundup - A Roundup of items

## Motif Naming Conventions (Shaped)
1. Skid
1. Bar
1. Ribbon
1. Peg
1. Chime/Dot
1. Dot
1. Tag

## Motif Naming Conventions (Applied To a Shape)
1. Pattern
1. Pattern-Primary
1. Curvy
1. Fluid (as in it looks like a liquid with curvy line contours)
1. Blended (Gradient Blend)
1. Contoured
1. Motifs

## Motif Naming Conventions (Other)
1. Reserved-For (maybe a motif/style div that can be reserved for a motif or background)

## State Naming Conventions
1. Auto Morph
1. Exit-Modal
1. Mobile Nav Dimmer
1. Flipped/Reversed (Reversed colors on every other item, or item specific)

## State Naming Conventions
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


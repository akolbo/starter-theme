## Notes

## Overall Methodology
### Separation of Content: 
1. Naming convention through content types
1. database retrieval methods; 
2. Style utilities are created separately and applied through `@extend` property within css. 

### 



## Quick Note on Permalinks...
Make sure you change the Permalink structure under Settings, or the "views" pages will not be visible unless you visit mysite.com/index.php/custom-page.

## Views
Then you need to create a page in the WP dashboard in order for the page to show up!

## Class Hierarchy

Inspired by html5-boilerplate_v7.1.0, bk.com, GetPocket.com, ikea.com, clearleft.com, vaersaagod.no, advancedcustomfields.com, cypress.io/

## Page (Index) Classes 
Home | About | Clients | Services | Manual 

## Enclosure Topics (AKA Tables in a Database)
Splash | Splash_Global | Header_Global | Footer_Global | Case-Study(s)_Feature | Case-Study(s)-Listings | Services | Membership(s) | Process(s) | Value(s) | Testimonial(s) | Created-With | Compatibility | How-To | Supporters | Act/Get-Started | Options | Blog | Subscribe | Social Media | Contact | Sponsors(latest,platinum,gold,silver,bronze,backers) | Steps | Contribute | Vote | Comparison | Search | Lifestyle | Disclosure | Full-Disclosure | Access | Discover | Promotion(s)/Offer(s) | Delivery | New-Product(s) | Work/Project(s) | Project-Archive | Project-Current | Project-Notable | Notable-Mention(s) | Award_Listings | Structure() | Partnership | Organization-Structure | Cloud-Structure/Event-Structure | Biography | Admission | Evaluation | The-Competition | Guests | Career_listings | Career_overview | Goals | Purpose | News/Press | Trusting-Client/Client/Trusted-by | Advertising | Twitter_feed | Twitter_feature | Blog_Listings | Conference(s) | To-Do | On-Boarding | White-Labeling | Premium Integrations | 

### Topic Functional Types
Describes how it's pulled from the database. 
How the element(s) within a topic are iterated over or hard coded.


### Plural-Groupings/Collections Classes (always written after the Topic)
1. class-name collection
Most common section name might be *.feature_collection*. A group or collection of elements, probably of different types. So the section may contain multiple features like "Self-Driving, Costs Nothing, Prepares Your Taxes". Usually these would come in a group of 3.
1. class-name listings
A list of posts or entries that are pulled from the database as a for-loop in an alphabetical, newest/oldest, etc. + number of entries. 
1. class-name feed
A group of informational pieces that come from outside sources such as twitter or instagram posts, or api. 
1. class-name features - Includes an option within a post or entry with a "on/off" state one piece of featured or starred item (ex. case-study_feature)

## Page Specific Enclosure Topics Based on the Template Name
(another word for global...think footer, header, logo copyright, anything found on all or most pages)
1. [footer] global
1. [footer] base 
1. [footer] page
1. [footer] home - found only on the homepage
1. [footer] blog
1. [footer] entry - CraftCMS naming convention found on all entry pages
1. [footer] entry - found on all 


## Singular Topic Units
1. class-name listing - each in a list of database posts or entries. They mirror the database in alphabetical, newest/oldest, etc. + number of entries. 
1. class-name feature - one piece of featured or starred item (ex. case-study_feature)
1. class-name field - a one-off probably "custom" field found on a specific page. 
1. class-name static - hardcoded piece of html. Not included in the database.


## Tag Class Functions/Purpose

3. Section - Used for Enclosing a Topic. Can include full width backgrounds, or motifs, but not intended for paddings or margins. Should be flush next to the previous and following section using floats--display block leaves a wierd gap!
3. Container - a div that only declares max widths and minimal horizontal padding on small screens.
3. Content - Responsible for vertical padding and 
3. Panel - Also thought of as a content panel. Includes visual aids, text, and headings. Can have multiple panels inside a container.

## Fields 
1. text field
1. text-area field
1. checkbox field
1. link field

## Images
1. Visual Aid
    1. Venn Diagram
    2. Chart
    3. 
2. Patterns
3. Motifs

## Types of Design Pieces
1. Utilities
(Navigation, Search, Cart, User Sign-In, Forms, Access Signin )
2. Descriptive Topics
Things that are quantifiable. Client list (also a good credibility builder). 
(ex. We *are/have/do/make* this | Jon's hair *is* brown. Our supporters *are* the following companies. We *have* many lamps | These companies *are* already testing better with Cypress )
3. Subjective Topics 
(ex. Our services are done *better*. We make the *smoothest* smoothies. *Made* for people like you, shopping *made easy*. )
4. Directive Topics
(ex. You should *do* this | *Do* vote | *Do* contribute | *support* our cause | *become* one of us | *contact* us | *test* your code, not your patience | *Read* our Docs | *Chat* with Us | *Contribute* to ... | Do you love us? *Say* it!)
5. Visual Motifs (Can be structural such as a div box, an absolutely positioned div, large svg, etc.)

## Compare/Contrast Headlines
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

## Other Naming Conventions
1. Jot (Quick Idea)
2. Characteristic(s)
3. Parallel
4. Structure()
5. Argument
6. Revision
7. Alternative(s)
8. Roundup
9. Flux Area (changes quickly...like an advertising section)
10. Flipped/Reversed (Reversed colors on every other item, or item specific)
11. Blended (Gradient Blend)
12. Reserved-For (maybe a motif/style div that can be reserved for a motif or background)
13. Chime
14. Tag
15. Skid
16. Bar
17. Mobile Nav Dimmer





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


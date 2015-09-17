# Awesome Meteor [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of awesome Meteor Packages, libraries and software.

The official Meteor resources page can be found [here](https://www.meteor.com/tools/resources)

- [Awesome Meteor](#awesome-meteor)
    - [Getting Started](#getting-started)
    - [Collections](#collections)
    - [Forms and Templates](#forms-and-templates)
    - [Users and Authentication](#users-and-authentication)
    - [REST](#rest)
    - [Files](#files)
    - [Routers](#routers)
    - [Debugging Tools](#debugging-tools)
    - [Editor Plugins](#editor-plugins)
    - [Search sort paginate](#search-sort-paginate)
    - [Mobile](#mobile)
    - [Offline](#offline)
    - [Testing](#testing)
    - [SEO](#seo)
    - [Analytics](#analytics)
    - [ES2015](#ES2015)
    - [Cron Jobs](#cron-jobs)
    - [Payments](#payments)
    - [Deployment](#deployment)
    - [Front End Frameworks](#front-end-frameworks)
    - [Altervative Databases](#altervative-databases)
    - [Package managers](#package-managers)
    - [Internationalization](#internationalization)
    - [Scaffolding](#scaffolding)
- [Resources](#resources)
    - [Books](#books)
    - [Courses](#courses)
    - [Tutorials](#tutorials)
    - [Blogs](#blogs)
    - [Websites](#websites)
    - [Weekly](#weekly)
    - [Twitter](#twitter)
    - [Job Boards](#job-boards)
- [Contributing](#contributing)

- - -


## Getting Started

*Where to start*

* [Official Meteor tutorial](https://www.meteor.com/try)
* [Discover Meteor Book](https://www.discovermeteor.com/)
* [Meteor-Cookbook](https://github.com/awatson1978/meteor-cookbook) - Meteor Cookbook

## Collections

*Helpers and expensions for collections*

* [aldeed:collection2](https://github.com/aldeed/meteor-collection2/) - Automatic validation of insert and update operations on the client and server.
* [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers/) – Transform your collections with helpers that you define.
* [matb33:collection-hooks](https://github.com/matb33/meteor-collection-hooks/) - Extends Mongo.Collection with before/after hooks for insert/update/remove/find/findOne.
* [reywood:publish-composite](https://github.com/englue/meteor-publish-composite) - publish a set of related documents from various collections using a reactive join

## REST

*REST support for Meteor*

* [simple:rest](https://github.com/stubailo/meteor-rest) - automatically make your Meteor app accessible over HTTP and DDP alike.

## Forms and Templates

*Helpers for templates*

* [aldeed:autoform](https://github.com/aldeed/meteor-autoform) - UI components and helpers to easily create basic forms with automatic insert and update events, and automatic reactive validation.
* [dispatch:scrollview](https://github.com/DispatchMe/meteor-scrollview) - A high performance infinite scrollview for meteor
* [themeteorites:blaze-magic-events](https://github.com/themeteorites/blaze-magic-events) - A new way of binding event handlers to html elements for Meteor's Blaze
* [manuel:viewmodel](https://github.com/ManuelDeLeon/viewmodel) - MVVM for Meteor
* [webix:webix](https://github.com/dandv/meteor-webix) - Meteor.js - Webix UI integration

## Users and Authentication

*Tools for handling users and authentication*

* [alanning:roles](https://github.com/alanning/meteor-roles) - Roles support for the built-in accounts packages.

## Deployment

*Tools for deploying and maintaining Meteor apps*

* [When a Meteor finally hits production](https://medium.com/@davidyahalomi/when-a-meteor-finally-hits-production-6c37b81f795b) - Blog post about deploying Meteor apps
* [BulletProof Meteor](https://bulletproofmeteor.com/)
* [meteorhacks:kadira](https://github.com/meteorhacks/kadira) - Performance Monitoring for Meteor.
* [meteor-up](https://github.com/arunoda/meteor-up) – Meteor Deployments.
* [davidyaha:collection2-migrations](https://github.com/davidyaha/meteor-collection2-migrations) - Auto DB migrations with collection2 and simple schema on Meteor
* [percolate:migrations](https://github.com/percolatestudio/meteor-migrations) - Simple migration system for Meteor
* [meteorhacks:fast-render](https://github.com/meteorhacks/fast-render) - Render you app even before the DDP connection is live
* [meteorhacks:cluster](https://github.com/meteorhacks/cluster) - Clustering solution for Meteor with load balancing and service discovery
* [yogiben:admin](https://github.com/yogiben/meteor-admin) - A complete admin dashboard solution
* [demeteorizer](https://github.com/onmodulus/demeteorizer) - Converts a Meteor app into a "standard" Node.js application
* [Amazon auto scaling and Meteor](http://allandequeiroz.com/post/allan-de-queiroz-meteor-amazon-auto-scaling-and-meteor/DawZ6PM9P4RdStrcf)

## Routers

*Routers for Blaze*

* [iron:router](https://github.com/iron-meteor/iron-router) - A client and server side router designed specifically for Meteor.
* [meteorhacks:flow-router](https://github.com/meteorhacks/flow-router) - Client Side Router for Meteor.

## Offline

*Tools for Meteor offline support*

* [ground:db](https://github.com/GroundMeteor/db) - GroundDB is a thin layer providing Meteor offline database and methods

## Testing

*Testing tools*

* [Meteor Testing Manual](http://www.meteortesting.com/)
* [Velocity](http://velocity.meteor.com/) - A reactive test-runner for Meteor.
* [mike:mocha](https://github.com/mad-eye/meteor-mocha-web/) – Run mocha tests within the Meteor framework.
* [sanjo:jasmine](https://github.com/Sanjo/meteor-jasmine/) - Run Jasmine tests for all your Meteor code.
* [xolvio:cucumber](https://github.com/xolvio/meteor-cucumber) - Reactive BDD for Meteor using Cucumber.js and Velocity.
* [velocity:html-reporter](https://github.com/meteor-velocity/html-reporter) - HTML reporter for Meteor velocity testing framework.

## Files

*Handling files in Meteor*

* [Meteor-CollectionFS](https://github.com/CollectionFS/Meteor-CollectionFS) - Meteor webbased filesystem handling up and downloads.
* [netanelgilad:excel](https://github.com/netanelgilad/meteor-excel) - Parsing and generating excel files (xlsx, xls).

## Search sort paginate

*Search sort paginate related tools*

* [tmeasday:publish-counts](https://github.com/percolatestudio/publish-counts) - Publish the count of a cursor, in real time.
* [percolate:find-from-publication](https://github.com/percolatestudio/find-from-publication) - Enable finding all documents that have been published by a given publication.
* [meteorhacks:search-source](https://github.com/meteorhacks/search-source) - Reactive Data Source for Search
* [matteodem:easy-search](https://github.com/matteodem/meteor-easy-search) - Easy-to-use search with Blaze Components (+ Elastic Search Support
* [alethes:pages](https://github.com/alethes/meteor-pages) - Out of the box Meteor pagination
* [Discover Meteor Blog about pagination](https://www.discovermeteor.com/blog/pagination-problems-meteor/)
 
## Mobile

*Mobile Developement*

* [meteoric:ionic](https://github.com/meteoric/meteor-ionic) - Ionic components for Meteor.
* [raix:push](https://github.com/raix/push) - Push notifications for cordova (ios, android) browser (Chrome, Safari, Firefox).
* [martijnwalraven:meteor-ios](https://github.com/martijnwalraven/meteor-ios) - Integrates native iOS apps with the Meteor platform through DDP.
* [delight-im/Android-DDP](https://github.com/delight-im/Android-DDP) - DDP for clients on Android.
* [okland:accounts-phone](https://github.com/okland/accounts-phone) - A login service based on mobile phone number for Meteor.
* [okland:camera-ui](https://github.com/okland/camera-ui) - Meteor package for taking photos with user interface, one function call on desktop and mobile. Allows to choose between camera to photoLibrary on mobile.

## Analytics

*Analytics*

* [okgrow:analytics](https://github.com/okgrow/analytics/) - Google Analytics, Mixpanel, KISSmetrics (and more) integration for meteor.

## ES2015

*ES2015 transpilers*

[grigio:babel](https://github.com/grigio/meteor-babel) - Write javascript ES6 / ES7 in your Meteor app. A port of the Babel transpiler

## Cron Jobs

*Cron Jobs in Meteor*

* [percolate:synced-cron](https://github.com/percolatestudio/meteor-synced-cron) - Cron system for Meteor. It supports syncronizing jobs between multiple processes.

## Debugging Tools

*Debugging Tools*

* [msavin:mongol](https://github.com/msavin/Mongol/) - Visual Editing Tool for Meteor for MongoDB Collections.
* [msavin:jetsetter](https://github.com/msavin/JetSetter) - Visual Get/Set Tool for Meteor Session Variables.
* [meteorhacks:kadira-debug](https://github.com/meteorhacks/kadira-debug) - Full Stack Debugging Solution for Meteor.
* [babrahams:constellation](https://github.com/JackAdams/constellation-distro/) - An extensible dev console for Meteor.

## Package Managers

*Using package managers in Meteor*

* [meteorhacks:npm](https://github.com/meteorhacks/npm/) - Use Npm Modules with Your Meteor App.
* [cosmos:browserify](https://github.com/elidoran/cosmos-browserify) - Browserify npm modules for client side in Meteor packages.

## Scaffolding

*Scaffolding*

* [Meteor Kitchen](http://www.meteorkitchen.com/) - Code generator for Meteor
* [Differential - meteor-boilerplate](https://github.com/Differential/meteor-boilerplate)
* [matteodem - meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate)
* [meteoris2](https://github.com/radiegtya/meteoris2)

## Open source apps
* [Telescope](https://github.com/TelescopeJS/Telescope) - An open-source social news app built with Meteor
* [Microscope](https://github.com/DiscoverMeteor/Microscope) - The Discover Meteor book's example app
* [Wekan](https://github.com/wekan/wekan) - Open source Trello-like kanban
* [Reaction Commerce](https://github.com/reactioncommerce/reaction) - Open source Commerce platform developed with Meteor
* [Crowducate Platform](https://github.com/Crowducate/crowducate-platform) - Open source education platform Powered by meteor
* [Orion CMS](http://orionjs.org/)

## Front End Frameworks

*Alternative Front End Frameworks to Blaze*

* [Blaze](https://www.meteor.com/blaze)
* [React](http://react-in-meteor.readthedocs.org/en/latest/) - Working with React and Meteor
* [Angular](https://github.com/Urigo/angular-meteor) - Working with Angular and Meteor
* [Famo.us](https://github.com/gadicc/meteor-famous-views/) - Famo.us and Meteor

* [frozeman:build-client](https://github.com/frozeman/meteor-build-client) - A tool to bundle the client part of a Meteor app.
* [Asteroid](https://github.com/mondora/asteroid) - An alternative client for a Meteor backend
* [ddp.js](https://github.com/mondora/ddp.js) - Isomorphic JavaScript DDP client

## Altervative Databases

**Alternative Databases for MongoDB

* [numtel:pg](https://github.com/numtel/meteor-pg) - Reactive PostgreSQL for Meteor
* [numtel:mysql](https://github.com/numtel/meteor-mysql) - Reactive MySQL for Meteor
* [simple:rethink](https://github.com/Slava/meteor-rethinkdb) - RethinkDB integration for Meteor

# Resources

Where to discover new Meteor things.

## Books

* [Meteor Explained](https://gumroad.com/l/meteor-explained)
* [Meteor Tips](http://meteortips.com/)

## Courses

* [EventedMind](https://www.eventedmind.com/)
* [Udemy — Meteor: Build a real-time web app using only JavaScript](https://www.udemy.com/meteor-course/)
* [Udemy - A Beginner's Guide to the Meteor JavaScript Framework](https://www.udemy.com/meteorjs/)
* [tuts+ - Single Page Web Apps with Meteor](http://code.tutsplus.com/courses/single-page-web-apps-with-meteor)
* [DevFreeCasts.org](http://devfreecasts.org/meteor/)
* [MeteorTuts](http://meteortuts.com/)

## Tutorials

* [scotch.io - Building a Slack Clone in Meteor](https://scotch.io/tutorials/building-a-slack-clone-in-meteor-js-getting-started)
* [Rocket-Chat Slack Clone](https://rocket.chat/)
* [Meteor Learning](https://github.com/ericdouglas/Meteor-Learning) - List of resources to learn
* [Learning Resources for Meteor](https://www.yauh.de/best-learning-resources-for-meteorjs/)
* [Phusion Passenger: Meteor tutorial](https://github.com/phusion/passenger/wiki/Phusion-Passenger:-Meteor-tutorial)

## Blogs

* [Blog about Optimistic UIi With Meteor Latency Compensation](http://info.meteor.com/blog/optimistic-ui-with-meteor-latency-compensation)
* [Meteor Hacks Blog](https://meteorhacks.com/)
* [Meteor Create](http://meteorcreate.com/) - Discover the Best Meteor Tutorials
* [The Meteor podcast](http://www.meteorpodcast.com/)
* [Meteor club podcast](http://podcast.meteorjs.club/)

## Websites

* [Official Meteor](http://www.meteor.com) - Official website
* [Official Documentation](http://docs.meteor.com/#/full/)
* [Meteor Manual](http://manual.meteor.com/) 
* [Meteor forums](http://forums.meteor.com)
* [Atmosphere](http://atmospherejs.com/) - A catalog for Meteor packages, resources and tools.
* [Bullet Proof Meteor](https://bulletproofmeteor.com/) - Online course for Meteor performance in production
* [Meteor-Cookbook](https://github.com/awatson1978/meteor-cookbook) - Meteor Cookbook
* [Meteorpedia](http://www.meteorpedia.com)
* [DiscoverMeteor Encyclopedia](https://www.discovermeteor.com/encyclopedia)
* [Roadmap](https://trello.com/b/hjBDflxp/meteor-roadmap)
* [Meetups](http://meteor.meetup.com/)
* [Stack Overflow](http://stackoverflow.com/questions/tagged/meteor?sort=newest&pagesize=15)
* [Reddit](https://www.reddit.com/r/meteor)
* [YouTube](https://www.youtube.com/channel/UC3fBiJrFFMhKlsWM46AsAYw)
* [Made With Meteor](http://madewith.meteor.com/)
* [Unofficial Meteor FAQ](https://github.com/oortcloud/unofficial-meteor-faq)

## Weekly

* [Meteor-Blog](http://info.meteor.com/blog)
* [Crater.io](https://crater.io/)

## Twitter

* [Official Meteor](https://twitter.com/meteorjs)

## Job Boards
* [We Work Meteor](http://www.weworkmeteor.com/)


# [Contributing](https://github.com/urigo/awesome-meteor/blob/master/CONTRIBUTING.md)

Your contributions are always welcome!

Thank you @gillesfabio for creating this repo!

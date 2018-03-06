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
    - [Search, sort and paginate](#search-sort-paginate)
    - [Mobile](#mobile)
    - [Offline](#offline)
    - [Testing](#testing)
    - [SEO](#seo)
    - [Data Visualization](#data-visualization)
    - [Analytics](#analytics)
    - [Cron Jobs](#cron-jobs)
    - [Payments](#payments)
    - [Deployment](#deployment)
    - [Front End Frameworks](#front-end-frameworks)
    - [Alternative Databases](#alternative-databases)
    - [Package managers](#package-managers)
    - [Internationalization](#internationalization)
    - [Scaffolding](#scaffolding)
    - [Tooling](#tooling)
- [Boilerplate](#boilerplate)
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
* [Official Guide](http://guide.meteor.com/)
* [Why Meteor](https://wiki.dandascalescu.com/essays/why_meteor) to begin with, and [Meteor vs. the MEAN stack](https://wiki.dandascalescu.com/essays/meteor_js_vs_the_mean_stack)

## Collections

*Helpers and expensions for collections*

* [node-simple-schema](https://github.com/aldeed/node-simple-schema/) - A JavaScript schema validation package that supports direct validation of MongoDB update modifier objects
* [aldeed:collection2](https://github.com/aldeed/meteor-collection2/) - Automatic validation of insert and update operations on the client and server.
* [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers/) – Transform your collections with helpers that you define.
* [matb33:collection-hooks](https://github.com/matb33/meteor-collection-hooks/) - Extends Mongo.Collection with before/after hooks for insert/update/remove/find/findOne.
* [reywood:publish-composite](https://github.com/englue/meteor-publish-composite) - publish a set of related documents from various collections using a reactive join
* [jagi:astronomy](https://github.com/jagi/meteor-astronomy/) - The Model layer for Meteor

## REST

*REST support for Meteor*

* [simple:rest](https://github.com/stubailo/meteor-rest) - automatically make your Meteor app accessible over HTTP and DDP alike.
* [nimble:restivus](https://github.com/kahmali/meteor-restivus) - Make REST endpoints for your Meteor app with incredible ease.

## Forms and Templates

*Helpers for templates*

* [aldeed:autoform](https://github.com/aldeed/meteor-autoform) - UI components and helpers to easily create basic forms with automatic insert and update events, and automatic reactive validation.
* [aldeed:template-extension](https://github.com/aldeed/meteor-template-extension) - A Meteor package: Replace already defined templates, inherit helpers and events from other templates.
* [kadira:blaze-layout](https://github.com/kadirahq/blaze-layout) - Layout Manager for Blaze (works well with Meteor FlowRouter)
* [dispatch:scrollview](https://github.com/DispatchMe/meteor-scrollview) - A high performance infinite scrollview for meteor
* [themeteorites:blaze-magic-events](https://github.com/themeteorites/blaze-magic-events) - A new way of binding event handlers to html elements for Meteor's Blaze
* [manuel:viewmodel](https://github.com/ManuelDeLeon/viewmodel) - MVVM for Meteor
* [webix:webix](https://github.com/dandv/meteor-webix) - Meteor.js - Webix UI integration
* [uniforms](https://github.com/vazco/uniforms) - Bunch of React components and helpers to easily generate and validate forms. [Seamlessly integrate with `aldeed:simple-schema` and `simpl-schema`](https://github.com/vazco/uniforms/blob/master/INTRODUCTION.md#quick-start).

## Users and Authentication

*Tools for handling users and authentication*

* [accounts-base](https://guide.meteor.com/accounts.html) - Meteor's user account system.
* [alanning:roles](https://github.com/alanning/meteor-roles) - Roles support for the built-in accounts packages.

## Deployment

*Tools for deploying and maintaining Meteor apps*
* [Meteor Candy](https://www.meteorcandy.com/) - Fastest and easier way to add an admin panel to your app
* [When a Meteor finally hits production](https://medium.com/@davidyahalomi/when-a-meteor-finally-hits-production-6c37b81f795b) - Blog post about deploying Meteor apps
* [BulletProof Meteor](https://bulletproofmeteor.com/)
* [meteorhacks:kadira](https://github.com/meteorhacks/kadira) - Performance Monitoring for Meteor.
* [meteor-up](https://github.com/arunoda/meteor-up) – Meteor Deployments.
* [davidyaha:collection2-migrations](https://github.com/davidyaha/meteor-collection2-migrations) - Auto DB migrations with collection2 and simple schema on Meteor
* [percolate:migrations](https://github.com/percolatestudio/meteor-migrations) - Simple migration system for Meteor
* [meteorhacks:fast-render](https://github.com/kadirahq/fast-render) - Render you app even before the DDP connection is live
* [meteorhacks:cluster](https://github.com/meteorhacks/cluster) - Clustering solution for Meteor with load balancing and service discovery
* [yogiben:admin](https://github.com/yogiben/meteor-admin) - A complete admin dashboard solution
* [demeteorizer](https://github.com/onmodulus/demeteorizer) - Converts a Meteor app into a "standard" Node.js application
* [Amazon auto scaling and Meteor](https://allandequeirozblog.wordpress.com/2015/09/27/amazon-auto-scaling-and-meteor/) - An detailed description of how to build an infrastructure that auto scale and auto update without human interaction.
* [houston:admin](https://github.com/gterrono/houston) - A zero-config, Django Admin-like admin for Meteor
* [pm2-meteor](https://github.com/andruschka/pm2-meteor) - Simplest way to deploy, scale and run Meteor Apps with PM2.

## Routers

*Routers for Blaze*

* [iron:router](https://github.com/iron-meteor/iron-router) - A client and server side router designed specifically for Meteor.
* [kadira:flow-router](https://github.com/kadirahq/flow-router) - Client Side Router for Meteor.
* [meteorhacks:picker](https://github.com/meteorhacks/picker) - Server Side Router for Meteor.

## Offline

*Tools for Meteor offline support*

* [ground:db](https://github.com/GroundMeteor/db) - GroundDB is a thin layer providing Meteor offline database and methods.

## Testing

*Testing tools*

* [Meteor Testing Manual](http://www.meteortesting.com/)
* [Velocity](http://velocity.meteor.com/) - A reactive test-runner for Meteor.
* [mike:mocha](https://github.com/mad-eye/meteor-mocha-web/) – Run mocha tests within the Meteor framework.
* [xolvio:chimp](https://github.com/xolvio/chimp) - Testing so easy, a primate could do it! Supports mocha, Cucumber, jasmine, and chai.
* [velocity:html-reporter](https://github.com/meteor-velocity/html-reporter) - HTML reporter for Meteor velocity testing framework.
* [Gagarin](https://github.com/anticoders/gagarin) - Another testing framework for your meteor apps. 

## Files

*Handling files in Meteor*

* [Meteor-CollectionFS](https://github.com/CollectionFS/Meteor-CollectionFS) - Meteor webbased filesystem handling up and downloads.
* [ostrio:files](https://github.com/VeliovGroup/Meteor-Files) - Upload files via DDP, HTTP and WebRTC/DC. To Meteor server FS, AWS, GridFS, DropBox or Google Drive. Fast, secure and robust.
* [netanelgilad:excel](https://github.com/netanelgilad/meteor-excel) - Parsing and generating excel files (xlsx, xls).

## Search, sort and paginate

*Search, sort and paginate related tools*

* [tmeasday:publish-counts](https://github.com/percolatestudio/publish-counts) - Publish the count of a cursor, in real time.
* [percolate:find-from-publication](https://github.com/versolearning/find-from-publication) - Enable finding all documents that have been published by a given publication.
* [meteorhacks:search-source](https://github.com/meteorhacks/search-source) - Reactive Data Source for Search
* [matteodem:easy-search](https://github.com/matteodem/meteor-easy-search) - Easy-to-use search with Blaze Components (+ Elastic Search Support)
* [alethes:pages](https://github.com/alethes/meteor-pages) - Out of the box Meteor pagination
* [Discover Meteor Blog about pagination](https://www.discovermeteor.com/blog/pagination-problems-meteor/)

## Mobile

*Mobile Development*

* [meteoric:ionic](https://github.com/meteoric/meteor-ionic) - Ionic components for Meteor.
* [driftyco:ionic](https://github.com/driftyco/ionic) - Official Ionic support for Meteor.
* [raix:push](https://github.com/raix/push) - Push notifications for cordova (ios, android) browser (Chrome, Safari, Firefox).
* [martijnwalraven:meteor-ios](https://github.com/martijnwalraven/meteor-ios) - Integrates native iOS apps with the Meteor platform through DDP.
* [delight-im/Android-DDP](https://github.com/delight-im/Android-DDP) - DDP for clients on Android.
* [okland:accounts-phone](https://github.com/okland/accounts-phone) - A login service based on mobile phone number for Meteor.
* [okland:camera-ui](https://github.com/okland/camera-ui) - Meteor package for taking photos with user interface, one function call on desktop and mobile. Allows to choose between camera to photoLibrary on mobile.
* [percolatestudio/cordova-plugin-safe-reload](https://github.com/percolatestudio/cordova-plugin-safe-reload) - Cordova plugin to watch and recover after a broken Meteor Hot Code Push.

## Data Visualization

*Data Visualization in Meteor: charts, maps, tables, etc.*

* [AnyChart-Meteor](https://github.com/AnyChart/AnyChart-Meteor) - This package provides a simple way to use AnyChart JavaScript charting component in Meteor.
* [aldeed:tabular](https://github.com/aldeed/meteor-tabular) - Reactive datatables for large or small datasets.

## Analytics

*Analytics*

* [okgrow:analytics](https://github.com/okgrow/analytics/) - Google Analytics, Mixpanel, KISSmetrics (and more) integration for meteor.

## Cron Jobs

*Cron Jobs in Meteor*

* [msavin:sjobs](https://github.com/msavin/stevejobs/) - A Meteor-first jobs queue / task scheduler
* [vsivsi:job-collection](https://github.com/vsivsi/meteor-job-collection/) - A persistent and reactive job queue for Meteor, supporting distributed workers that can run anywhere.

## Debugging Tools

*Debugging Tools*

* [msavin:mongol](https://github.com/msavin/Mongol/) - Visual Editing Tool for Meteor for MongoDB Collections.
* [msavin:jetsetter](https://github.com/msavin/JetSetter) - Visual Get/Set Tool for Meteor Session Variables.
* [meteorhacks:kadira-debug](https://github.com/kadirahq/meteor-debug) - Full Stack Debugging Solution for Meteor.
* [babrahams:constellation](https://github.com/JackAdams/constellation-distro/) - An extensible dev console for Meteor.
* [Meteor DDP Monitor](https://github.com/thebakeryio/meteor-ddp-monitor) - Chrome Dev tools extension for monitoring Meteor DDP traffic
* [Dr. Mongo](http://www.drmongo.com/) - Open-source MongoDB admin app built on MeteorJs.

## Package Managers

*Using package managers in Meteor*

* [meteorhacks:npm](https://github.com/meteorhacks/npm/) - Use Npm Modules with Your Meteor App.
* [cosmos:browserify](https://github.com/elidoran/cosmos-browserify) - Browserify npm modules for client side in Meteor packages.

## Scaffolding

*Scaffolding*

* [Meteor Kitchen](http://www.meteorkitchen.com/) - Code generator for Meteor
* [iron-cli](https://github.com/iron-meteor/iron-cli) - A scaffolding command line tool for Meteor applications 
* [Differential - meteor-boilerplate](https://github.com/Differential/meteor-boilerplate)
* [meteoris2](https://github.com/radiegtya/meteoris2)
* [Base](https://github.com/themeteorchef/base)

## Tooling

* [ESLint-plugin-Meteor](https://github.com/dferber90/eslint-plugin-meteor/) - ESLint plugin for Meteor

## Boilerplate

* [matteodem - meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate)
* [React with Webpack + Meteor as a backend](http://julian.io/react-with-webpack-meteor-as-a-backend/)

## Open source apps
* [VulcanJS](https://github.com/VulcanJS/Vulcan) - A toolkit to quickly build apps with React, GraphQL & Meteor
* [Microscope](https://github.com/DiscoverMeteor/Microscope) - The Discover Meteor book's example app
* [Wekan](https://github.com/wekan/wekan) - Open source Trello-like kanban
* [Reaction Commerce](https://github.com/reactioncommerce/reaction) - Open source Commerce platform developed with Meteor
* [Crowducate Platform](https://github.com/Crowducate/crowducate-platform) - Open source education platform Powered by meteor
* [Orion CMS](http://orionjs.org/)

## Front End Frameworks

*Alternative Front End Frameworks to Blaze*

* [Blaze](http://blazejs.org/guide/introduction.html)
* [React](http://react-in-meteor.readthedocs.org/en/latest/) - Working with React and Meteor
* [Angular](https://github.com/Urigo/angular-meteor) - Working with Angular and Meteor
* [Angular 2](https://github.com/Urigo/angular2-meteor) - Working with Angular 2 and Meteor
* [Famo.us](https://github.com/gadicc/meteor-famous-views/) - Famo.us and Meteor
* [Vue](https://github.com/Akryum/meteor-vue-component) - Working with Vue and Meteor (plus single-file components & apollo support)

* [frozeman:build-client](https://github.com/frozeman/meteor-build-client) - A tool to bundle the client part of a Meteor app.
* [Asteroid](https://github.com/mondora/asteroid) - An alternative client for a Meteor backend
* [ddp.js](https://github.com/mondora/ddp.js) - Isomorphic JavaScript DDP client

## Alternative Databases

**Alternative Databases for MongoDB

* [meteor-pg](https://github.com/Richie765/meteor-pg) - New and improved PostgreSQL support for Meteor
* [numtel:pg](https://github.com/numtel/meteor-pg) - Reactive PostgreSQL for Meteor
* [numtel:mysql](https://github.com/numtel/meteor-mysql) - Reactive MySQL for Meteor
* [simple:rethink](https://github.com/Slava/meteor-rethinkdb) - RethinkDB integration for Meteor

# Resources

Where to discover new Meteor things.

## Books

* [Meteor Explained](https://gumroad.com/l/meteor-explained)
* [Meteor Tips](http://meteortips.com/)
* [Meteor Cookbook](https://github.com/awatson1978/meteor-cookbook)

## Courses

* [EventedMind](https://www.eventedmind.com/)
* [Udemy — Meteor: Build a real-time web app using only JavaScript](https://www.udemy.com/meteor-course/)
* [Udemy - A Beginner's Guide to the Meteor JavaScript Framework](https://www.udemy.com/meteorjs/)
* [tuts+ - Single Page Web Apps with Meteor](http://code.tutsplus.com/courses/single-page-web-apps-with-meteor)
* [DevFreeCasts.org](http://devfreecasts.org/meteor/)
* [MeteorTuts](http://meteortuts.com/)

## Tutorials

* [Building a CMS-powered blog in Meteor](https://buttercms.com/blog/meteor-cms-blog-tutorial)
* [scotch.io - Building a Slack Clone in Meteor](https://scotch.io/tutorials/building-a-slack-clone-in-meteor-js-getting-started)
* [Rocket-Chat Slack Clone](https://rocket.chat/)
* [Meteor Learning](https://github.com/ericdouglas/Meteor-Learning) - List of resources to learn
* [Learning Resources for Meteor](https://www.yauh.de/best-learning-resources-for-meteorjs/)
* [Phusion Passenger: Meteor tutorial](https://github.com/phusion/passenger/wiki/Phusion-Passenger:-Meteor-tutorial)

## Blogs

* [Official Meteor blog](http://blog.meteor.com)
* [Meteor Hacks Blog](https://meteorhacks.com/)
* [Meteor Create](http://meteorcreate.com/) - Discover the Best Meteor Tutorials
* [The Meteor podcast](http://podcast.crater.io)
* [Meteor club podcast](https://podcast.meteorjs.club/)
* [Blog about Optimistic UIs With Meteor Latency Compensation](http://info.meteor.com/blog/optimistic-ui-with-meteor-latency-compensation)

## Websites

* [Official website](https://www.meteor.com/)
* [Official Documentation](http://docs.meteor.com/)
* [Official Guide](http://guide.meteor.com/) 
* [Atmosphere](https://atmospherejs.com/) - The catalog of Meteor packages, resources and tools.
* [BulletProof Meteor](https://bulletproofmeteor.com/) - Online course for Meteor performance in production, by Arunoda Susiripala
* [Meteorpedia](http://www.meteorpedia.com) ([infrequently](http://www.meteorpedia.com/special/RecentChanges/) updated)
* [DiscoverMeteor Encyclopedia](https://www.discovermeteor.com/encyclopedia)
* [Roadmap](https://trello.com/b/hjBDflxp/meteor-roadmap)
* [Meetups](http://meteor.meetup.com/)
* [Reddit](https://www.reddit.com/r/meteor)
* [YouTube](https://www.youtube.com/channel/UC3fBiJrFFMhKlsWM46AsAYw) videos from meetups around the world
* [Unofficial Meteor FAQ](https://github.com/oortcloud/unofficial-meteor-faq)
* [The Meteor Chef](https://themeteorchef.com) 

### Q&A

* [Stack Overflow](http://stackoverflow.com/questions/tagged/meteor?sort=newest&pagesize=15)
* [Meteor forums](https://forums.meteor.com/)
* [Gitter IM channel](https://gitter.im/meteor/meteor)
* [The Meteor Chef Slack channel](https://themeteorchef.slack.com)
* IRC - #meteor on freenode


## Weekly

* [Meteor-Blog](http://info.meteor.com/blog)
* [Meteor Weekly](https://goodbits.io)
* [Crater.io](https://crater.io/)
* [This Week In Meteor](https://goodbits.io)

## Twitter

* [Official Meteor](https://twitter.com/meteorjs)

## Job Boards

* [We Work Meteor](https://www.weworkmeteor.com/)

# [Contributing](https://github.com/urigo/awesome-meteor/blob/master/CONTRIBUTING.md)

Your contributions are always welcome!

Thank you @gillesfabio for creating this repo!

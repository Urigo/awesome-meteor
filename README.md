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
    - [Administration](#administration)
    - [Performance](#performance)
    - [Monitoring](#monitoring)
    - [Deployment](#deployment)
    - [Front End Frameworks](#front-end-frameworks)
    - [Alternative Databases](#alternative-databases)
    - [Boilerplate](#boilerplate)
    - [Open Source Apps](#open-source-apps)
    - [Internationalization](#internationalization)
    - [Scaffolding](#scaffolding)
    - [Tooling](#tooling)
- [Resources](#resources)
    - [Books](#books)
    - [Courses](#courses)
    - [Tutorials](#tutorials)
    - [Blogs](#blogs)
    - [Websites](#websites)
    - [Twitter](#twitter)
    - [Job Boards](#job-boards)
    - [Related](#related)
- [Built With Meteor](#built-with-meteor)    
- [Contributing](#contributing)

- - -


## Getting Started

*Where to start*

* [Official Meteor tutorial](https://www.meteor.com/tutorials/react/creating-an-app)
* [Official Guide](http://guide.meteor.com/)
* [Why Meteor](https://wiki.dandascalescu.com/essays/why_meteor) to begin with, and [Meteor vs. the MEAN stack](https://wiki.dandascalescu.com/essays/meteor_js_vs_the_mean_stack)

## Collections

*Helpers and expensions for collections*

* [simple-schema](https://github.com/aldeed/simple-schema-js) - A JavaScript schema validation package that supports direct validation of MongoDB update modifier objects.
* [aldeed:collection2](https://github.com/aldeed/meteor-collection2/) - Automatic validation of insert and update operations on the client and server.
* [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers/) – Transform your collections with helpers that you define.
* [matb33:collection-hooks](https://github.com/Meteor-Community-Packages/meteor-collection-hooks) - Extends Mongo.Collection with before/after hooks for insert/update/remove/find/findOne.
* [reywood:publish-composite](https://github.com/Meteor-Community-Packages/meteor-publish-composite) - publish a set of related documents from various collections using a reactive join.
* [jagi:astronomy](https://github.com/jagi/meteor-astronomy/) - The Model layer for Meteor.
* [cultofcoders:grapher](https://github.com/cult-of-coders/grapher) - Grapher: Meteor Collection Joins + Reactive GraphQL like queries.
* [sakulstra:aggregate](https://github.com/sakulstra/meteor-aggregate) - Add proper aggregation support for Meteor.

## REST

*REST support for Meteor*

* [simple:rest](https://github.com/stubailo/meteor-rest) - automatically make your Meteor app accessible over HTTP and DDP alike.
* [nimble:restivus](https://github.com/kahmali/meteor-restivus) - Make REST endpoints for your Meteor app with incredible ease.

## Forms and Templates

*Helpers for templates*

* [uniforms](https://github.com/vazco/uniforms) - Bunch of React components and helpers to easily generate and validate forms. [Seamlessly integrate with `simpl-schema`](https://uniforms.tools/docs/installation).
* [aldeed:autoform](https://github.com/aldeed/meteor-autoform) - UI components and helpers to easily create basic forms with automatic insert and update events, and automatic reactive validation.
* [aldeed:template-extension](https://github.com/aldeed/meteor-template-extension) - A Meteor package: Replace already defined templates, inherit helpers and events from other templates.
* [kadira:blaze-layout](https://github.com/TeamGrid/blaze-layout) - Layout Manager for Blaze (works well with Meteor FlowRouter)
* [dispatch:scrollview](https://github.com/DispatchMe/meteor-scrollview) - A high performance infinite scrollview for meteor
* [manuel:viewmodel](https://github.com/ManuelDeLeon/viewmodel) - MVVM for Meteor
* [webix:webix](https://github.com/dandv/meteor-webix) - Meteor.js - Webix UI integration

## Users and Authentication

*Tools for handling users and authentication*

* [accounts-base](https://guide.meteor.com/accounts.html) - Meteor's user account system.
* [alanning:roles](https://github.com/Meteor-Community-Packages/meteor-roles) - Roles support for the built-in accounts packages.

## Payments

*Tools for handling payments in Meteor*

* [Stripe](https://atmospherejs.com/mrgalaxy/stripe) - payment gateway for Stripe
* [PayPal](https://atmospherejs.com/mrt/paypal) - payment gateway for PayPal
* [BrainTree](https://atmospherejs.com/patrickml/braintree) - payment gateway for BrainTree
* [Instamojo](https://atmospherejs.com/instamojo/instamojo) - payment gateway for Instamojo

## Administration

*Tools for administrating your Meteor apps*

* [Meteor Candy](https://www.meteorcandy.com/) - Fastest and easier way to add an admin panel to your app.
* [yogiben:admin](https://github.com/yogiben/meteor-admin) - A complete admin dashboard solution.
* [houston:admin](https://github.com/gterrono/houston) - A zero-config, Django Admin-like admin for Meteor.


## Monitoring

*Tools for monitoring your Meteor apps*

* [kschingiz:meteor-elastic-apm](https://github.com/kschingiz/meteor-elastic-apm) - Perfomance Monitoring for Meteor based on Elastic APM
* [monti-apm-agent](https://github.com/monti-apm/monti-apm-agent) - Performance Monitoring for Meteor
* [lmachens:kadira](https://github.com/lmachens/kadira) - Performance Monitoring for Meteor

## Performance

*Tools for speeding up your Meteor apps*

* [cultofcoders:redis-oplog](https://github.com/cult-of-coders/redis-oplog) - Redis Oplog implementation to fully replace MongoDB Oplog in Meteor
* [staringatlights:fast-render](https://github.com/abecks/meteor-fast-render) - An active fork of fast-render
* [epotek:method-cache](https://github.com/e-Potek/method-cache) - Meteor method caching using DataLoader


## Deployment

*Tools for deploying and maintaining Meteor apps*

* [meteor-up](https://github.com/zodern/meteor-up) – Meteor Deployments.
* [meteor-google-cloud](https://github.com/EducationLink/meteor-google-cloud) - Automate Meteor deployments on Google Cloud App Engine Flexible
* [mup-aws-beanstalk](https://github.com/zodern/mup-aws-beanstalk) - Deploy Meteor apps to AWS Elastic Beanstalk using Meteor Up
* [meteor-azure](https://github.com/fractal-code/meteor-azure) - Automate Meteor deployments on Azure App Service
* [pm2-meteor](https://github.com/andruschka/pm2-meteor) - Simplest way to deploy, scale and run Meteor Apps with PM2.
* [meteor-hero](https://github.com/jkrup/meteor-hero) - Deploy MeteorJS applications for free with one command utilizing Heroku's service.
* [meteor-kubernetes-guide](https://github.com/Gregivy/meteor-kubernetes-guide) - Deploy a Meteor app with Kubernetes.
* [meteorhacks:cluster](https://github.com/lmachens/cluster) - Clustering solution for Meteor with load balancing and service discovery
* [demeteorizer](https://github.com/onmodulus/demeteorizer) - Converts a Meteor app into a "standard" Node.js application
* [percolate:migrations](https://github.com/percolatestudio/meteor-migrations) - Simple migration system for Meteor

## Routers

*Routers for Blaze*

* [ostrio:flow-router-extra](https://github.com/VeliovGroup/flow-router) - Carefully extended `flow-router` package. Up-to-date version with support of latest Meteor's releases.
* [msavin:parrot](https://github.com/msavin/Parrot) - Web router specially designed for building SPAs using Meteor
* [meteorhacks:picker](https://github.com/meteorhacks/picker) - Server Side Router for Meteor.

## Offline

*Tools for Meteor offline support*

* [ground:db](https://github.com/GroundMeteor/db) - GroundDB is a thin layer providing Meteor offline database and methods.
* [npdev:collections](https://github.com/CaptainN/npdev-collections) - An easy way to create offline collections with SSR for Meteor

## Testing

*Testing tools*

* [meteortesting:mocha](https://github.com/meteortesting/meteor-mocha) - Mocha test driver package for Meteor.
* [lmieulet:meteor-coverage](https://github.com/serut/meteor-coverage) - Test coverage for Meteor.
* [hubroedu:mocha](https://github.com/hubroedu/meteor-mocha/) - Decaffed cultofcoders:mocha fork. 
* [Gagarin](https://github.com/anticoders/gagarin) - Another testing framework for your meteor apps.

## SEO

*Search Engine Optimization tools*

* [ostrio:spiderable-middleware](https://github.com/VeliovGroup/spiderable-middleware/) - Prerendering (*a.k.a. Spiderable*) with support of ES6 (ECMAScript2015) - Meteor app crawled perfectly by search engines.

## Files

*Handling files in Meteor*

* [ostrio:files](https://github.com/VeliovGroup/Meteor-Files) - Upload files via DDP, HTTP and WebRTC/DC. To Meteor server FS, AWS, GridFS, DropBox or Google Drive. Fast, secure and robust.
* [netanelgilad:excel](https://github.com/netanelgilad/meteor-excel) - Parsing and generating excel files (xlsx, xls).

## Search, sort and paginate

*Search, sort and paginate related tools*

* [percolate:find-from-publication](https://github.com/versolearning/find-from-publication) - Enable finding all documents that have been published by a given publication.
* [tmeasday:publish-counts](https://github.com/percolatestudio/publish-counts) - Publish the count of a cursor, in real time.
* [meteorhacks:search-source](https://github.com/meteorhacks/search-source) - Reactive Data Source for Search.
* [matteodem:easy-search](https://github.com/matteodem/meteor-easy-search) - Easy-to-use search with Blaze Components (+ Elastic Search Support)
* [alethes:pages](https://github.com/alethes/meteor-pages) - Out of the box Meteor pagination.

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
* [aslagle:reactive-table](https://github.com/aslagle/reactive-table/) - Reactive table for Meteor, using Blaze.
* [luixal:blaze-paginated-custom-list](https://github.com/luixal/meteor-blaze-paginated-custom-list) - Reactive and paginated item list.
* [luixal:meteor-apexcharts](https://github.com/luixal/meteor-apexcharts) - Reactive ApexCharts library packaged for Meteor.

## Analytics

*Analytics*

* [okgrow:analytics](https://github.com/okgrow/analytics/) - Google Analytics, Mixpanel, KISSmetrics (and more) integration for meteor.

## Cron Jobs

*Cron Jobs in Meteor*

* [msavin:sjobs](https://github.com/msavin/stevejobs/) - A Meteor-first jobs queue / task scheduler.
* [percolate:synced-cron](https://github.com/percolatestudio/meteor-synced-cron) - Cron system for Meteor. It supports syncronizing jobs between multiple processes.
* [ostrio:cron-jobs](https://github.com/VeliovGroup/Meteor-CRON-jobs) - Package with similar API to native `setTimeout` and `setInterval` methods, but synced between all running Meteor (NodeJS) instances.

## Debugging Tools

*Debugging Tools*

* [msavin:mongol](https://github.com/msavin/Mongol/) - Visual Editing Tool for Meteor for MongoDB Collections.
* [msavin:jetsetter](https://github.com/msavin/JetSetter) - Visual Get/Set Tool for Meteor Session Variables.
* [babrahams:constellation](https://github.com/JackAdams/constellation-distro/) - An extensible dev console for Meteor.
* [Meteor DDP Monitor](https://github.com/thebakeryio/meteor-ddp-monitor) - Chrome Dev tools extension for monitoring Meteor DDP traffic.
* [meteorhacks:kadira-debug](https://github.com/kadirahq/meteor-debug) - Full Stack Debugging Solution for Meteor.

## Editor Plugins

* [meteor-api](https://atom.io/packages/meteor-api) - Meteor addons for Atom.
* [meteor-zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins#meteor) - Completion for the meteor command.

## Scaffolding

*Scaffolding*

* [Meteor Kitchen](http://www.meteorkitchen.com/) - Code generator for Meteor.
* [iron-cli](https://github.com/iron-meteor/iron-cli) - A scaffolding command line tool for Meteor applications.

## Tooling

* [ESLint-plugin-Meteor](https://github.com/dferber90/eslint-plugin-meteor/) - ESLint plugin for Meteor.

## Boilerplate

* [Pup](https://github.com/cleverbeagle/pup)
* [matteodem - meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate)
* [React with Webpack + Meteor as a backend](http://julian.io/react-with-webpack-meteor-as-a-backend/)

## Open source apps

* [Rocket.Chat](https://rocket.chat/) - Realtime chat application built with Meteor.
* [Wekan](https://github.com/wekan/wekan) - Open source Trello-like kanban.
* [Reaction Commerce](https://github.com/reactioncommerce/reaction) - Open source Commerce platform developed with Meteor.
* [VulcanJS](https://github.com/VulcanJS/Vulcan) - A toolkit to quickly build apps with React, GraphQL & Meteor.
* [Crowducate Platform](https://github.com/Crowducate/crowducate-platform) - Open source education platform Powered by Meteor.
* [Nosqlclient](https://github.com/nosqlclient/nosqlclient) - MongoDB management tool.

## Front End Frameworks

*Alternative Front End Frameworks to Blaze*

* [React](http://react-in-meteor.readthedocs.org/en/latest/) - Working with React and Meteor.
* [Vue](https://github.com/Akryum/meteor-vue-component) - Working with Vue and Meteor (plus single-file components & apollo support).
* [Svelte](https://github.com/meteor-svelte/meteor-svelte) - Build cybernetically enhanced web apps with Meteor and Svelte.
* [Angular 2](https://github.com/Urigo/angular2-meteor) - Working with Angular 2 and Meteor.
* [Angular](https://github.com/Urigo/angular-meteor) - Working with Angular and Meteor.
* [Famo.us](https://github.com/gadicc/meteor-famous-views/) - Famo.us and Meteor.
* [frozeman:build-client](https://github.com/frozeman/meteor-build-client) - A tool to bundle the client part of a Meteor app.
* [Asteroid](https://github.com/mondora/asteroid) - An alternative client for a Meteor backend.
* [ddp.js](https://github.com/mondora/ddp.js) - Isomorphic JavaScript DDP client.
* [elm](https://github.com/ni-ko-o-kin/meteor-elm-example) -  elm as the view layer for a meteor based project.

## Alternative Databases

*Alternative Databases for MongoDB*

* [vlasky:mysql](https://github.com/vlasky/meteor-mysql) - Reactive MySQL for Meteor
* [meteor-pg](https://github.com/Richie765/meteor-pg) - New and improved PostgreSQL support for Meteor
* [ostrio:neo4jdriver](https://github.com/VeliovGroup/ostrio-neo4jdriver/) - Neo4j Driver for Meteor, with support of GrapheneDB
* [numtel:pg](https://github.com/numtel/meteor-pg) - Reactive PostgreSQL for Meteor
* [simple:rethink](https://github.com/Slava/meteor-rethinkdb) - RethinkDB integration for Meteor

# Resources

*Where to discover new Meteor things*

## Books

* [Meteor Explained](https://gumroad.com/l/meteor-explained)
* [Meteor Tips](http://meteortips.com/)
* [Meteor Cookbook](https://github.com/awatson1978/meteor-cookbook)
* [Secure Meteor](https://www.securemeteor.com/)

## Courses

* [EventedMind](https://www.eventedmind.com/)
* [MeteorTuts](http://meteor-tuts.com/)
* [BulletProof Meteor](https://bulletproofmeteor.com/) - Online course for Meteor performance in production, by Arunoda Susiripala
* [Udemy — Meteor: Build a real-time web app using only JavaScript](https://www.udemy.com/meteor-course/)
* [Udemy - A Beginner's Guide to the Meteor JavaScript Framework](https://www.udemy.com/meteorjs/)
* [tuts+ - Single Page Web Apps with Meteor](http://code.tutsplus.com/courses/single-page-web-apps-with-meteor)

## Tutorials

* [Building a CMS-powered blog in Meteor](https://buttercms.com/blog/meteor-cms-blog-tutorial)
* [scotch.io - Building a Slack Clone in Meteor](https://scotch.io/tutorials/building-a-slack-clone-in-meteor-js-getting-started)
* [Meteor Learning](https://github.com/ericdouglas/Meteor-Learning) - List of resources to learn
* [Phusion Passenger: Meteor tutorial](https://github.com/phusion/passenger/wiki/Phusion-Passenger:-Meteor-tutorial)
* [When a Meteor finally hits production](https://medium.com/@davidyahalomi/when-a-meteor-finally-hits-production-6c37b81f795b) - Blog post about deploying Meteor apps


## Blogs

* [Official Meteor blog](http://blog.meteor.com)
* [The Meteor podcast](http://podcast.crater.io) 

## Websites

* [Official website](https://www.meteor.com/)
* [Official Documentation](http://docs.meteor.com/)
* [Official Guide](http://guide.meteor.com/)
* [Atmosphere](https://atmospherejs.com/) - The catalog of Meteor packages, resources and tools.
* [Discover Meteor](https://book.discovermeteor.com/)
* [Meteorpedia](http://www.meteorpedia.com) ([infrequently](http://www.meteorpedia.com/special/RecentChanges/) updated)
* [Meetups](http://meteor.meetup.com/)
* [Reddit](https://www.reddit.com/r/meteor)
* [YouTube](https://www.youtube.com/channel/UC3fBiJrFFMhKlsWM46AsAYw) videos from meetups around the world
* [Unofficial Meteor FAQ](https://github.com/oortcloud/unofficial-meteor-faq)
* [The Meteor Chef](https://themeteorchef.com)

### Q&A

* [Stack Overflow](http://stackoverflow.com/questions/tagged/meteor?sort=newest&pagesize=15)
* [Meteor forums](https://forums.meteor.com/)
* [Meteor Community Organization Slack Channel](https://github.com/Meteor-Community-Packages/organization#slack)

## Twitter

* [Official Meteor](https://twitter.com/meteorjs)

## Job Boards

* [We Work Meteor](https://www.weworkmeteor.com/)

## Related

* [Awesome Meteor Developers](https://github.com/harryadelb/awesome-meteor-developers)
* [Awesome Blaze](https://github.com/arggh/awesome-blaze)


## Built With Meteor

*Commercial Grade Applications Built With Meteor*

* [Qualia](https://www.qualia.com/) - Real Estate Startup
* [Code Signal](https://codesignal.com/) - Skills-based assessment platform
 

# [Contributing](https://github.com/urigo/awesome-meteor/blob/master/CONTRIBUTING.md)

Your contributions are always welcome!

Thank you @gillesfabio for creating this repo!

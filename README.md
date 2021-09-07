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
  - [Administration](#administration)
  - [Performance](#performance)
  - [Monitoring](#monitoring)
  - [Deployment](#deployment)
    - [Docker Images](#docker-images)
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
    - [Free](#free)
    - [Paid](#paid)
  - [Tutorials](#tutorials)
  - [Blogs](#blogs)
  - [Websites](#websites)
  - [Q&A](#q&a)
  - [Community Newsletters](#community-newsletters)	
  - [Social](#social)
  - [Work Opportunities](#work-opportunities)
  - [Related](#related)
- [Built With Meteor](#built-with-meteor)
- [Deprecated](#deprecated)
- [Contributing](#contributing)

---

## Getting Started

_Where to start_

- [Official Meteor tutorial](https://www.meteor.com/tutorials/react/creating-an-app)
- [Official Guide](http://guide.meteor.com/)

## Collections

_Helpers and expensions for collections_

- [simple-schema](https://github.com/aldeed/simple-schema-js) - A JavaScript schema validation package that supports direct validation of MongoDB update modifier objects.
- [aldeed:collection2](https://github.com/aldeed/meteor-collection2/) - Automatic validation of insert and update operations on the client and server.
- [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers/) – Transform your collections with helpers that you define.
- [matb33:collection-hooks](https://github.com/Meteor-Community-Packages/meteor-collection-hooks) - Extends Mongo.Collection with before/after hooks for insert/update/remove/find/findOne.
- [reywood:publish-composite](https://github.com/Meteor-Community-Packages/meteor-publish-composite) - publish a set of related documents from various collections using a reactive join.
- [jagi:astronomy](https://github.com/jagi/meteor-astronomy/) - The Model layer for Meteor.
- [cultofcoders:grapher](https://github.com/cult-of-coders/grapher) - Grapher: Meteor Collection Joins + Reactive GraphQL like queries.
- [sakulstra:aggregate](https://github.com/sakulstra/meteor-aggregate) - Add proper aggregation support for Meteor.
- [quave:collections](https://github.com/quavedev/collections) - Create collections in a standard way.

## REST

_REST support for Meteor_

- [maka:rest](https://atmospherejs.com/maka/rest) - automatically make your Meteor app accessible over HTTP and DDP alike.
- [vatfree:restivus](https://github.com/vatfree/meteor-restivus) - Make REST endpoints for your Meteor app with incredible ease.

## Forms and Templates

_Helpers for templates_

- [uniforms](https://github.com/vazco/uniforms) - Bunch of React components and helpers to easily generate and validate forms. [Seamlessly integrate with `simpl-schema`](https://uniforms.tools/docs/installation).
- [aldeed:autoform](https://github.com/aldeed/meteor-autoform) - UI components and helpers to easily create basic forms with automatic insert and update events, and automatic reactive validation.
- [ostrio:templatehelpers](https://github.com/VeliovGroup/Meteor-Template-helpers) - Utility helpers for your Blaze templates.
- [aldeed:template-extension](https://github.com/aldeed/meteor-template-extension) - A Meteor package: Replace already defined templates, inherit helpers and events from other templates.
- [kadira:blaze-layout](https://github.com/TeamGrid/blaze-layout) - Layout Manager for Blaze (works well with Meteor FlowRouter)

## Users and Authentication

_Tools for handling users and authentication_

- [accounts-js](https://github.com/accounts-js/accounts) - A suite of packages aims to provide all the tools you need to build a flexible authentication and accounts management solution for your application.
- [alanning:roles](https://github.com/Meteor-Community-Packages/meteor-roles) - Roles support for the built-in accounts packages.
- [meteor-user-status](https://github.com/Meteor-Community-Packages/meteor-user-status) - Keeps track of users and their meta data.
- [accounts-ui](https://github.com/e-Potek/accounts-ui/) - Accounts UI for React in Meteor 1.3+.

## Administration

_Tools for administrating your Meteor apps_

- [Meteor Candy](https://www.meteorcandy.com/) - Fastest and easier way to add an admin panel to your app.
- [yogiben:admin](https://github.com/yogiben/meteor-admin) - A complete admin dashboard solution.
- [houston:admin](https://github.com/gterrono/houston) - A zero-config, Django Admin-like admin for Meteor.
- [zodern:pure-admin](https://github.com/zodern/meteor-pure-admin) - An isolated, customizable admin panel for Meteor.

## Monitoring

_Tools for monitoring your Meteor apps_

- [kschingiz:meteor-elastic-apm](https://github.com/kschingiz/meteor-elastic-apm) - Perfomance Monitoring for Meteor based on Elastic APM
- [monti-apm-agent](https://github.com/monti-apm/monti-apm-agent) - Performance Monitoring for Meteor
- [lmachens:kadira](https://github.com/lmachens/kadira) - Performance Monitoring for Meteor

## Performance

_Tools for speeding up your Meteor apps_

- [cultofcoders:redis-oplog](https://github.com/cult-of-coders/redis-oplog) - Redis Oplog implementation to fully replace MongoDB Oplog in Meteor
- [staringatlights:fast-render](https://github.com/abecks/meteor-fast-render) - An active fork of fast-render
- [epotek:method-cache](https://github.com/e-Potek/method-cache) - Meteor method caching using DataLoader
- [maestroqadev:pub-sub-lite](https://github.com/adtribute/pub-sub-lite) - Transform publications to be non-reactive.
- [artillery-engine-meteor](https://github.com/kschingiz/artillery-engine-meteor) - Artillery load testing for MeteorJS applications.

## Deployment

_Tools for deploying and maintaining Meteor apps_

- [meteor-up](https://github.com/zodern/meteor-up) – Meteor Deployments.
- [meteor-google-cloud](https://github.com/EducationLink/meteor-google-cloud) - Automate Meteor deployments on Google Cloud App Engine Flexible
- [mup-aws-beanstalk](https://github.com/zodern/mup-aws-beanstalk) - Deploy Meteor apps to AWS Elastic Beanstalk using Meteor Up
- [meteor-azure](https://github.com/fractal-code/meteor-azure) - Automate Meteor deployments on Azure App Service
- [pm2-meteor](https://github.com/andruschka/pm2-meteor) - Simplest way to deploy, scale and run Meteor Apps with PM2.
- [meteor-hero](https://github.com/jkrup/meteor-hero) - Deploy MeteorJS applications for free with one command utilizing Heroku's service.
- [meteor-kubernetes-guide](https://github.com/Gregivy/meteor-kubernetes-guide) - Deploy a Meteor app with Kubernetes.
- [meteorhacks:cluster](https://github.com/lmachens/cluster) - Clustering solution for Meteor with load balancing and service discovery
- [demeteorizer](https://github.com/onmodulus/demeteorizer) - Converts a Meteor app into a "standard" Node.js application
- [percolate:migrations](https://github.com/percolatestudio/meteor-migrations) - Simple migration system for Meteor
- [yamup](https://github.com/bordalix/yamup) - Deploy Meteor apps to your own Ubuntu server (EC2, ...) without dockers
- [waveshosting](https://github.com/nicolaslopezj/waveshosting) - Web application to manage meteor deployments.

## Docker Images

- [meteor-docker](https://github.com/zodern/meteor-docker)
- [meteor-base](https://github.com/disney/meteor-base)
- [docker-meteor](https://github.com/tozd/docker-meteor)

## Routers

_Routers for Blaze_

- [ostrio:flow-router-extra](https://github.com/VeliovGroup/flow-router) - Carefully extended `flow-router` package. Up-to-date version with support of latest Meteor's releases.
- [msavin:parrot](https://github.com/msavin/Parrot) - Web router specially designed for building SPAs using Meteor
- [meteorhacks:picker](https://github.com/meteorhacks/picker) - Server Side Router for Meteor.
- [iron:router](https://github.com/iron-meteor/iron-router) - A router that works on the server and the browser, designed specifically for Meteor. 

## Offline

_Tools for Meteor offline support_

- [ground:db](https://github.com/GroundMeteor/db) - GroundDB is a thin layer providing Meteor offline database and methods.
- [npdev:collections](https://github.com/CaptainN/npdev-collections) - An easy way to create offline collections with SSR for Meteor
- [meteor-service-worker](https://github.com/NitroBAY/meteor-service-worker) - Meteor specific service worker implementaion.
- [quave:pwa](https://github.com/quavedev/pwa) - A Meteor package that allows you to configure your PWA.

## Testing

_Testing tools_

- [meteortesting:mocha](https://github.com/meteortesting/meteor-mocha) - Mocha test driver package for Meteor.
- [lmieulet:meteor-coverage](https://github.com/serut/meteor-coverage) - Test coverage for Meteor.
- [hubroedu:mocha](https://github.com/hubroedu/meteor-mocha/) - Decaffed cultofcoders:mocha fork.
- [antwaremx:meteorman](https://github.com/antwaremx/meteorman) - Meteorman: A DDP Client with GUI to test Meteor methods and publications (like Postman).

## SEO

_Search Engine Optimization tools_

- [ostrio:spiderable-middleware](https://github.com/VeliovGroup/spiderable-middleware/) - Prerendering (_a.k.a. Spiderable_) with support of ES6 (ECMAScript2015) - Meteor app crawled perfectly by search engines.

## Files

_Handling files in Meteor_

- [ostrio:files](https://github.com/VeliovGroup/Meteor-Files) - Upload files via DDP, HTTP and WebRTC/DC. To Meteor server FS, AWS, GridFS, DropBox or Google Drive. Fast, secure and robust.
- [@reactioncommerce/file-collections](https://github.com/reactioncommerce/reaction-file-collections) - Reaction FileCollections is a set of NPM packages that provide the ability to support file uploads, storage, and downloads in Node and Meteor apps, and in browser JavaScript.
- [netanelgilad:excel](https://github.com/netanelgilad/meteor-excel) - Parsing and generating excel files (xlsx, xls).
- [mikkelking:slingshot](https://github.com/Back2bikes/meteor-slingshot) - Upload files directly to AWS S3, Google Cloud Storage and others in meteor.

## Search, sort and paginate

_Search, sort and paginate related tools_

- [percolate:find-from-publication](https://github.com/versolearning/find-from-publication) - Enable finding all documents that have been published by a given publication.
- [meteor-publish-join](https://github.com/nlhuykhang/meteor-publish-join#readme) - A performant NPM package for publishing non-reactive or aggregated values.
- [tmeasday:publish-counts](https://github.com/percolatestudio/publish-counts) - Publish the count of a cursor, in real time.
- [meteorhacks:search-source](https://github.com/meteorhacks/search-source) - Reactive Data Source for Search.
- [matteodem:easy-search](https://github.com/matteodem/meteor-easy-search) - Easy-to-use search with Blaze Components (+ Elastic Search Support)
- [alethes:pages](https://github.com/alethes/meteor-pages) - Out of the box Meteor pagination.

## Mobile

_Mobile Development_

- [meteor-react-native](https://github.com/TheRealNate/meteor-react-native) - Meteor client for React Native matching Meteor Spec.
- [meteor-push](https://github.com/activitree/meteor-push) - Push notifications for cordova (ios, android) browser (Chrome, Safari, Firefox).
- [quave:universal-links](https://github.com/quavedev/universal-links) - A Meteor package that allows you to expose your native iOS settings to enable Universal Links. 
- [meteoric:ionic](https://github.com/meteoric/meteor-ionic) - Ionic components for Meteor.
- [driftyco:ionic](https://github.com/driftyco/ionic) - Official Ionic support for Meteor.
- [martijnwalraven:meteor-ios](https://github.com/martijnwalraven/meteor-ios) - Integrates native iOS apps with the Meteor platform through DDP.
- [delight-im/Android-DDP](https://github.com/delight-im/Android-DDP) - DDP for clients on Android.
- [okland:accounts-phone](https://github.com/okland/accounts-phone) - A login service based on mobile phone number for Meteor.
- [okland:camera-ui](https://github.com/okland/camera-ui) - Meteor package for taking photos with user interface, one function call on desktop and mobile. Allows to choose between camera to photoLibrary on mobile.
- [percolatestudio/cordova-plugin-safe-reload](https://github.com/percolatestudio/cordova-plugin-safe-reload) - Cordova plugin to watch and recover after a broken Meteor Hot Code Push.

## Data Visualization

_Data Visualization in Meteor: charts, maps, tables, etc._

- [aldeed:tabular](https://github.com/aldeed/meteor-tabular) - Reactive datatables for large or small datasets.
- [aslagle:reactive-table](https://github.com/aslagle/reactive-table/) - Reactive table for Meteor, using Blaze.
- [luixal:blaze-paginated-custom-list](https://github.com/luixal/meteor-blaze-paginated-custom-list) - Reactive and paginated item list.
- [luixal:meteor-apexcharts](https://github.com/luixal/meteor-apexcharts) - Reactive ApexCharts library packaged for Meteor.

## Analytics

_Analytics_

- [okgrow:analytics](https://github.com/okgrow/analytics/) - Google Analytics, Mixpanel, KISSmetrics (and more) integration for meteor.
- [quave:analytics](https://github.com/quavedev/analytics) - A Meteor package that allows you to send your page views and more to Google Analytics.

## Cron Jobs

_Cron Jobs in Meteor_

- [msavin:sjobs](https://github.com/msavin/stevejobs/) - A Meteor-first jobs queue / task scheduler.
- [percolate:synced-cron](https://github.com/percolatestudio/meteor-synced-cron) - Cron system for Meteor. It supports syncronizing jobs between multiple processes.
- [ostrio:cron-jobs](https://github.com/VeliovGroup/Meteor-CRON-jobs) - Package with similar API to native `setTimeout` and `setInterval` methods, but synced between all running Meteor (NodeJS) instances.

## Debugging Tools

_Debugging Tools_

- [meteor-devtools-evolved](https://github.com/leonardoventurini/meteor-devtools-evolved) - A chrome extension.
- [msavin:mongol](https://github.com/msavin/Mongol/) - Visual Editing Tool for Meteor for MongoDB Collections.
- [msavin:jetsetter](https://github.com/msavin/JetSetter) - Visual Get/Set Tool for Meteor Session Variables.
- [babrahams:constellation](https://github.com/JackAdams/constellation-distro/) - An extensible dev console for Meteor.

## Editor Plugins

- [meteor-api](https://atom.io/packages/meteor-api) - Meteor addons for Atom.
- [meteor-zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins#meteor) - Completion for the meteor command.

## Scaffolding

_Scaffolding_

- [Meteor Kitchen](http://www.meteorkitchen.com/) - Code generator for Meteor.
- [iron-cli](https://github.com/iron-meteor/iron-cli) - A scaffolding command line tool for Meteor applications.
- [maka-cli](https://github.com/maka-io/maka-cli) - Maka-CLI is a command line tool, which organizes a web application's file structure and automates everyday package installation tasks for various application frameworks.

## Tooling

- [ESLint-plugin-Meteor](https://github.com/dferber90/eslint-plugin-meteor/) - ESLint plugin for Meteor.

## Boilerplate

- [CaptainN - meteor-react-starter](https://github.com/CaptainN/meteor-react-starter) - A starter project on Meteor with React.
- [Pup](https://github.com/cleverbeagle/pup)
- [matteodem - meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate)
- [React with Webpack + Meteor as a backend](http://julian.io/react-with-webpack-meteor-as-a-backend/)

## Open source apps

- [Rocket.Chat](https://rocket.chat/) - Realtime chat application built with Meteor.
- [Wekan](https://github.com/wekan/wekan) - Open source Trello-like kanban.
- [Unchained Shop](https://github.com/unchainedshop/unchained) - Open source Commerce platform developed with Meteor.
- [VulcanJS](https://github.com/VulcanJS/Vulcan) - A toolkit to quickly build apps with React, GraphQL & Meteor.
- [Nosqlclient](https://github.com/nosqlclient/nosqlclient) - MongoDB management tool.
- [radgrad2](https://github.com/radgrad/radgrad2) - Meteor based education management system.
- [coauthor](https://github.com/edemaine/coauthor) - Coauthor supercollaboration/discussion forum.

## Internationalization

- [Meteor-Internationalization](https://github.com/veliovgroup/Meteor-Internationalization) - Super-Lightweight and fast i18n isomorphic driver for Meteor with support of placeholders.
- [meteor-accounts-t9n](https://github.com/softwarerero/meteor-accounts-t9n/) - Translations for meteor account's error messages.
- [meteor-universe-i18n](https://github.com/vazco/meteor-universe-i18n) - Internationalization package for React and Meteor.

## Front End Frameworks

_Alternative Front End Frameworks to Blaze_

- [React](http://react-in-meteor.readthedocs.org/en/latest/) - Working with React and Meteor.
- [Vue](https://github.com/meteor-vue) - Working with Vue and Meteor (plus single-file components & apollo support).
- [Svelte](https://github.com/zodern/melte) - Build cybernetically enhanced web apps with Meteor and Svelte.
- [Angular 2](https://github.com/Urigo/angular2-meteor) - Working with Angular 2 and Meteor.
- [Angular](https://github.com/Urigo/angular-meteor) - Working with Angular and Meteor.
- [Famo.us](https://github.com/gadicc/meteor-famous-views/) - Famo.us and Meteor.
- [frozeman:build-client](https://github.com/frozeman/meteor-build-client) - A tool to bundle the client part of a Meteor app.
- [Asteroid](https://github.com/mondora/asteroid) - An alternative client for a Meteor backend.
- [ddp.js](https://github.com/mondora/ddp.js) - Isomorphic JavaScript DDP client.
- [elm](https://github.com/ni-ko-o-kin/meteor-elm-example) - elm as the view layer for a meteor based project.

## Alternative Databases

_Alternative Databases for MongoDB_

- [vlasky:mysql](https://github.com/vlasky/meteor-mysql) - Reactive MySQL for Meteor
- [meteor-pg](https://github.com/Richie765/meteor-pg) - New and improved PostgreSQL support for Meteor
- [ostrio:neo4jdriver](https://github.com/VeliovGroup/ostrio-neo4jdriver/) - Neo4j Driver for Meteor, with support of GrapheneDB
- [numtel:pg](https://github.com/numtel/meteor-pg) - Reactive PostgreSQL for Meteor
- [simple:rethink](https://github.com/Slava/meteor-rethinkdb) - RethinkDB integration for Meteor

# Resources

_Where to discover new Meteor things_

## Books

- [Meteor Explained](https://gumroad.com/l/meteor-explained)
- [Secure Meteor](https://www.securemeteor.com/)
- [meteor-tuts](https://www.meteor-tuts.com/) - Free
- [Meteor Tips](http://meteortips.com/) - Free
- [Pro Meteor](https://pdfslide.net/documents/pro-meteor-book.html) - Free
- [Meteor Cookbook](https://github.com/awatson1978/meteor-cookbook)

## Courses

- #### Free

  - [How to Create an App](https://www.youtube.com/c/Howtocreateanappdev/videos) - Most updated.
  - [EventedMind](https://learn-meteor.netlify.app/) - It's old but goes into detail regarding how Meteor internals.

- #### Paid
  - [Udemy - Learn React and Meteor in 2021: Build a multiplayer game](https://www.udemy.com/course/modern-web-development-with-react-and-meteor-2021/)
  - [Udemy - Realtime Applications with Meteor and Vue](https://www.udemy.com/course/meteor-vue) - Course in Spanish.
  - [leveluptutorials](https://www.leveluptutorials.com/) - Contains some free tutorials but mostly on 1.x.

## Tutorials


- [Phusion Passenger: Meteor tutorial](https://github.com/phusion/passenger/wiki/Phusion-Passenger:-Meteor-tutorial)
- [When a Meteor finally hits production](https://medium.com/@davidyahalomi/when-a-meteor-finally-hits-production-6c37b81f795b) - Blog post about deploying Meteor apps
- [Transform any Meteor App into a PWA](https://dev.to/jankapunkt/transform-any-meteor-app-into-a-pwa-4k44)

## Blogs

- [Official Meteor blog](http://blog.meteor.com)
- [The Meteor podcast](http://podcast.crater.io)

## Websites

- [Official website](https://www.meteor.com/)
- [Official Documentation](http://docs.meteor.com/)
- [Official Guide](http://guide.meteor.com/)
- [Atmosphere](https://atmospherejs.com/) - The catalog of Meteor packages, resources and tools.
- [Packosphere](https://packosphere.com/) - Alternative front-end for Meteor package system, built by [Kelly Copley
](https://github.com/copleykj)
- [Discover Meteor](https://book.discovermeteor.com/)
- [Meteorpedia](http://www.meteorpedia.com) ([infrequently](http://www.meteorpedia.com/special/RecentChanges/) updated)
- [Meetups](http://meteor.meetup.com/)
- [Reddit](https://www.reddit.com/r/meteor)
- [YouTube](https://www.youtube.com/channel/UC3fBiJrFFMhKlsWM46AsAYw) videos from meetups around the world
- [Unofficial Meteor FAQ](https://github.com/oortcloud/unofficial-meteor-faq)
- [The Meteor Chef](https://themeteorchef.com)

### Q&A

- [Stack Overflow](http://stackoverflow.com/questions/tagged/meteor?sort=newest&pagesize=15)
- [Meteor forums](https://forums.meteor.com/)

### Community Newsletters

- [zodern](https://zodern.me/newsletter.html)
- [StorytellerCZ](https://forums.meteor.com/t/meteor-community-newsletter/50598)

## Social

- [Official Twitter Account](https://twitter.com/meteorjs)
- [Meteor Community Organization Slack Channel](https://github.com/Meteor-Community-Packages/organization#slack)


## Work Opportunities

- [Awesome Meteor Jobs](https://github.com/harryadel/awesome-meteor-jobs)
- [We work Meteor](https://www.weworkmeteor.com/)
- [Official Job Board](https://jobs.meteor.com/)

## Related

- [Awesome Meteor Developers](https://github.com/harryadelb/awesome-meteor-developers)
- [Awesome Blaze](https://github.com/arggh/awesome-blaze)

## Built With Meteor

_Commercial Grade Applications Built With Meteor_

- [Qualia](https://www.qualia.com/) - Real Estate Startup
- [Code Signal](https://codesignal.com/) - Skills-based assessment platform
- [Pathable](Pathable) - Events managment suite
- [MaestroQA](https://www.maestroqa.com/) - Quality assurance software

## Deprecated

_This section is desginated for resources which are no longer compatible with the current version of Meteor_

- [Meteor 1.4 + React For Everyone Tutorials](https://www.leveluptutorials.com/tutorials/meteor-1-4-react-for-everyone-tutorials)
- [Meteor 1.4 For Everyone](https://www.leveluptutorials.com/tutorials/meteor-1-4-for-everyone)
- [Intermediate Meteor](https://www.leveluptutorials.com/tutorials/intermediate-meteor)
- [Meteor For Everyone Tutorials](https://www.leveluptutorials.com/tutorials/meteor-for-everyone-tutorials)
- [tuts+ - Single Page Web Apps with Meteor](http://code.tutsplus.com/courses/single-page-web-apps-with-meteor)
- [Building a CMS-powered blog in Meteor](https://buttercms.com/blog/meteor-cms-blog-tutorial)
- [scotch.io - Building a Slack Clone in Meteor](https://scotch.io/tutorials/building-a-slack-clone-in-meteor-js-getting-started)

## [Contributing](https://github.com/urigo/awesome-meteor/blob/master/CONTRIBUTING.md)

Your contributions are always welcome!

Thank you @gillesfabio for creating this repo!

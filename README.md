# SalesScout (CPSC-2600 Project)
SalesScout is a simple web interface which allows individuals to get notifications via WebHooks when deals are trending where you can sign up by providing a username and customizing your webhook urls. The web interface is built using React and the backend is built using Node.js and Express. The database is built using MongoDB and the data is scraped from the website [redflagdeals.com](https://redflagdeals.com/). Notifications are integrated using webhooks specifically [Discord Webhooks](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks), and providing webhooks for other services is possible however I cannot guarantee that it will work.

>  **NOTE**: As I only had around two weeks to complete this project, there is no authentication implemented. This means that anyone can access and view your webhook/ntfy urls. So it is strongly advised that you do not use your personal webhook/ntfy urls. Or run your own instance of SalesScout.

## Overview

### Demo
You can find a live demonstration of this project at [https://a7.wtf/p/salesscout](https://a7.wtf/p/salesscout). The frontend is hosted on Vercel with the backend being hosted on my server which is then being proxied through Cloudflare.

### Features
- [x] Discord Webhook Notifications
- [x] Filter Only Highly Upvoted Deals
- [ ] Deal Lookup by Title
- [x] Trending Deals (over 2d)
# SalesScout (CPSC-2600 Project)
SalesScout is a simple web interface which allows individuals to get notifications via WebHooks when deals are trending where you can sign up by providing a username and customizing your webhook urls. The web interface is built using React and the backend is built using Node.js and Express. The database is built using MongoDB and the data is scraped from the website [redflagdeals.com](https://redflagdeals.com/). Notifications are integrated using webhooks specifically [Discord Webhooks](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks), and providing webhooks for other services is possible however I cannot guarantee that it will work.

>  **NOTE**: As I only had around two weeks to complete this project, there is no authentication implemented. This means that anyone can access and view your webhook/ntfy urls. So it is strongly advised that you do not use your personal webhook/ntfy urls. Or run your own instance of SalesScout.

## Overview

### Demo
You can find a live demonstration of this project at [https://zoro.a7.wtf/](https://zoro.a7.wtf/). The demo instance is running on a hosted Linux VPS.

### Features
- Sign up by providing a username
- Customize webhook URL
- Get notifications via WebHooks when deals are trending
- Integration with Discord Webhooks
- Web interface built using React
- Backend built using Node.js and Express
- Database built using MongoDB
- Data scraped from redflagdeals.com


### Setup/Running Locally
- [Backend](backend/README.md)
- [Frontend](frontend/README.md)

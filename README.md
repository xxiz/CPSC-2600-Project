# CPSC-2600 Project

## Idea
This project will be based around notifications for a forum called "RedFlagDeals" where: users can sign up to recieve customized/filtered notifications (if there is enough time). After which they can user eithe a: webhook or a ntfy server to recieve notifications.

## How it will work
Updating Deals
- Where it will incrementally check every few minutes and update the local database of trending deals every x seconds (Using https://www.npmjs.com/package/node-cron to acomplish this or setup a some form of script to automate this) no matter user settings.

Notification Delivery
- Webhooks: Which are very straightforward
- Ntfy: An open source self-hostable notification server (https://ntfy.sh/)
- TBA: More to come maybe

User Handling
- Users are able to register and login with nothing more than a username and password (no email verification required)
- Users are able to set their own notification settings such as: regex matching for the deals
- Users are able to set their own notification delivery method (webhook or ntfy)
- TBA: Selectable scraping sections
- TBA: Users can customize their own scraping settings (if there is enough time)

## Requirements
- MongoDB stores:
    - User Data
    - TBA: Customized deal history
    - Notification History
    - All Deal history
- Express for the Backend
- ReactJs for the Frontend

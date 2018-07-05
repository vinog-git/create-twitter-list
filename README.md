# Create Twitter list and add users from MongoDB

### Run `npm start 'collection_name'`

Ensure you've created a .env  file with the following details before you run the above command.
**PORT**=3000
**twitter_key**={"consumer_key": "YOUR_KEY","consumer_secret":"YOUR_KEY","access_token_key":"YOUR_KEY","access_token_secret": "YOUR_KEY"}
**mongo_key**=mongodb://USERNAME:PASSWORD@MONGODBURL:MONGOPORT/DBNAME

*!Important: [Nondeterminstic behavior for lists/members/create_all](https://twittercommunity.com/t/nondeterminstic-behavior-for-lists-members-create-all/53640 "Twitter Community")*
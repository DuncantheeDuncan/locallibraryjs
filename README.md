
# Local Library in Express



## Description

The purpose of the website is to provide an online catalog for a small local library, where users can browse available books and manage their accounts.

We will define a simple browse-only library that library members can use to find out what books are available. This allows us to explore the operations that are common to almost every website: reading and displaying content from a database.

As we progress, the library example naturally extends to demonstrate more advanced website features. For example we extend the library to allow new books to be created, and use this to demonstrate how to use forms and support user authentication.

As a result we'll store information about books, copies of books, authors and other key information. We won't however be storing information about other items a library might lend, or provide the infrastructure needed to support multiple library sites or other "big library" features. 


## Installation

You have first to clone your repo:

	https://github.com/DuncantheeDuncan/locallibraryjs

Then when the repository has been cloned:

	cd your-destination-folder
	npm install # installing the dependencies
	DEBUG=express-locallibrary-tutorial:* npm run devstart


## Usage

When the app is successfully running, look for a consoled message about which port is the webApp running. Open your browser and type:

	127.0.0.1:3000 / localhost:3000

You will be Re-directed to:

	127.0.0.1:3000/catalog # landing page



# test node tutorial


- Installing [Express](https://expressjs.com/en/starter/installing.html)



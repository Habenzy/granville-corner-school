Welcome to the Granville Corner School Resource Center Web App

The Corner School Resource Center of Granvile, VT is dedicated to restoring the upper village "Corner School" one room school house, and transforming it into a technological resource center for residents, and a repository of town history.

Audio files are hosted on, and served by Soundcloud

Images are hosted on and served by the site itself, and are located in ./client/public/images/{the corresponding folder}, and can be accessed through ./images/{directory}/{file name}, and their names must be added to the imageNames array in the componentDidMount function in their corresponding galleries to include them in the gallery. Photos used on non-gallery pages are located in the top level photo directory and can be accessed at ./photos/{file name}.

Quotes and events to be displayed on the main page can be added by putting them (as a string) in the quotes array located at client/src/App/pages/home.js in the displayQuotes function.

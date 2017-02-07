


*Everything is kept simple so you should not have any problems implementing the template. I will try to answer few of the possible questions below.*


**Changing the colour of the theme**

Every colour variant has its appropriate stylesheets located in the /css directory. To change the colour of the template simply change the path in the header of the HTML template, i.e. from *style.default.css* to *style.pink.css*.


**Javascript**

Apart from Bootstrap JS components majority of JS is located in /js/front.js. In this file you can change the settings of the owl carousel, google maps settings etc.

**Google Maps**

Google maps are used on the contact page. If you need just to show location of the company on the map, the only neccessary thing is to change coordinates in the header of contact.html. For further settings and possibilities please consult [Google Maps API documentation](https://developers.google.com/maps/documentation/javascript/).

**Contact form**

To set up contact form:

1. Upload a template to your webhosting or set up HTTP server on your local machine (XAMPP, WAMP or similar).
2. Make directory php/temp writeable (change attributes to 777)
3. Edit the options in contact.php file. The most important are: `$from` and `$sendTo`. The rest can remain as it is.

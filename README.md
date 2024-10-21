# Restauran-Booking-System
Restaurant Booking System

![responsive view](https://github.com/user-attachments/assets/436d9089-3f6f-4eb4-b0da-109712a7a3af)


Project Overview

Welcome to the Restaurant Booking System! This project allows users to browse the menu, make reservations, and view restaurant contact information.

Table of Contents
## CONTENTS


* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Features](#features)
    * [The Home Page](#the-home-page)
    * [The Reservation Page](#the-game-page)
    * [The Samsung Page](#the-samsung-page)
    * [The About page](#the-about-us-page)
    * [The 404 Error Page](#the-404-error-page)
    * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)
  
* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)
 
  ## Design

### Colour Scheme

As the pages of the site have a background image, I wanted to keep the colour scheme used on the site quite small so as to not overwhelm users.

* I have used `#ffffff` & `##000000` as the primary and secondary colours used for the sites text.
* I have used `##5b5c5e` as the overlay used over the sites background image.

### Typography

Google Fonts was used to import the chosen fonts for use in the site.

 ### Features
*	Responsive design for optimal viewing on different devices.
*	Navigation menu for easy access to different sections.
*	Contact form for user feedback.
* Social media links for better connectivity.

#### The Home Page
Content
Home Page (index.html)
Smartphones Deal Webpage
The Ethiopian Flavors Restaurant Booking System is a responsive web application designed to provide an intuitive and user-friendly platform for restaurant customers to view the menu, check opening hours, and make reservations. The site features a clean and modern design, with a focus on accessibility and performance across devices.
![home page](https://github.com/user-attachments/assets/d84c1af9-48d4-451a-86a5-aa74872ec1b5)





Features
1. Responsive Navigation Bar
*  Simple and clear navigation to Home, Menu, and Reservation 
  pages.
2. Menu Section: Organized using an accordion for easy browsing 
   of menu items.
3. SEO and Metadata
* Meta tags for description and keywords are included to 
 optimize the page for search engines, improving 
 discoverability.
* Keywords such as Ethiopian restaurant, Ethiopian food, restaurant booking, online reservation, Ethiopian cuisine, food in Berlin, Ethiopian flavors, traditional Ethiopian dishes, African cuisine, restaurant Berlin.
3. Favicon and Web Manifest
* The page includes a favicon for brand recognition on various 
  devices and platforms.
* A web manifest is integrated, allowing the webpage to act as 
  a Progressive Web App (PWA) on supported browsers, providing 
  users with an app-like experience when installed on their 
  devices.
4. Content Sections
*Title: Large and prominent text, conveying your restaurant's brand (e.g., "Ethiopian Flavors").
* Subtext: A tagline or inviting phrase (e.g., "Come and Taste...").
* Call-to-Action: A button that encourages users to take immediate action, such as "Reserve Now" or "Order Online."
* User Experience: This draws visitors in right away and directs them to take immediate action (booking a table or viewing the menu).
5. User-Centered Design
* Mobile-Friendly: The site is fully responsive, ensuring a 
  smooth user experience on all devices, including desktops, 
  tablets, and smartphones.
* Fast Loading: The design prioritizes speed and efficiency, offering fast loading times to enhance user experience.
6. Social Media Integration
* Social media icons are integrated into the footer, allowing 
  users to connect with the business on platforms like 
  Facebook, YouTube, Instagram, and Twitter. Each icon is 
  represented using Font Awesome for consistency and 
  accessibility.
* Links open in new tabs for uninterrupted browsing.
  
  
### Pages
### Menu Page (menu.html)

![iphone page](asset/images/iphonepage.png)


Overview

Features

1.Head Section:

* Defines the metadata, character set, viewport settings for 
  responsiveness, links to the favicon, and stylesheets.
  Includes a reference to the website’s main CSS file 
  (style.css) and a title for the webpage.
  
2.Navigation Bar (navbar):

* Simple navigation with an unordered list for links to 
  different pages (home, menu, reservation).
* The class="active" marks the currently active page, i.e., the 
  menu page in this case.

3.Menu Section:

* Accordion-style menu: The items are grouped by categories 
  (Starter, Main Menu, Cocktails, etc.), which can be expanded 
   or collapsed.
* Each menu item has a name, description (in three languages: 
  Amharic, English, and German), and price.
* You use <button class="accordion"> for the menu categories 
   and the <div class="panel"> for expandable content.

  4. Contact Section:

* Displays restaurant hours, contact details (phone and email), 
  and the address.
* Structured using tables for hours and separate divs for 
   contact information.
5.Footer:

* Contains copyright information and social media links using 
  icons from Font Awesome.
* The social media links are wrapped in a tags that open in a 
  new tab (target="_blank"), with appropriate ARIA labels for 
   accessibility.
6. JavaScript Includes:

* The script for Font Awesome is included via CDN for social 
  media icons.
* A custom JS file is referenced (./asset/js/script.js), likely 
  for enabling the accordion menu functionality and other 
  interactive behavior.

  
  ### Restaurant Reservation System (Reservation.html)

![samsung page](asset/images/samsung.png)



Overview

This README provides a comprehensive guide for the Restaurant Reservation System implemented in the HTML file above. The system allows customers to book tables at the restaurant and offers essential information such as contact details and operating hours.

###Features
1.User-Friendly Interface: The system has an intuitive layout, 
  making it easy for users to navigate and complete their 
  reservations.

2.Reservation Form: Users can fill out a form to book a table 
  by providing their name, email, phone number, reservation 
  date, time, number of guests, and any special requests.

3. Contact Information: The page displays essential contact 
   details, including phone number, email, and physical 
   address, as well as the restaurant's operating hours.

4.Success Message: Upon successful submission of the 
  reservation form, users receive a confirmation message 
  thanking them for their reservation.

5.Social Media Links: The footer includes links to various 
  social media platforms for additional connectivity and 
  engagement with customers.
  
6. Footer Section
   
* The footer contains social media links, making it easy for 
  users to connect with the brand on various platforms.
* Fully responsive and visually appealing icons powered by Font 
  Awesome.
7. Mobile-Friendly Design
* The webpage is responsive and designed to look great on all 
   devices, including desktops, tablets, and smartphones.
*  Utilizes meta viewport tags and CSS to ensure a seamless 
  user experience on all screen sizes.
  
### Contact Information
* A detailed contact section providing business hours (opening/closing times), phone number, email, and physical address.
* Displays information in a user-friendly table format.
	### Social Media Links
* Links to various social media platforms (Facebook, YouTube, 
  Instagram, Twitter) with icons.
* External links are designed to open in a new tab for a smooth 
  user experience.
  ### Font Awesome Integration
* Includes Font Awesome icons for the social media links and feedback form (like the heartbeat icon) to enhance the visual appeal.
  ###  Mobile-Friendly Design
* Fully responsive design for optimal viewing on various screen 
 sizes, including mobile, tablet, and desktop.
* Utilizes meta viewport tags and CSS to ensure a user-friendly experience across devices.
  
### Future Implementations 
1. User Authentication
* Feature: Allow users to create accounts to manage their 
  reservations.
* Benefit: Users can view, modify, or cancel their existing 
  reservations and receive personalized offers or promotions.
2. Table Management System
* Feature: Implement a backend system for restaurant staff to 
  manage table availability.
* Benefit: Allows for real-time updates on table availability, 
  reducing double bookings and improving reservation accuracy.

 ### File Structure

![File Structure](asset/images/Screenshot 2024-10-16 175802.png)



### Technologies Used
*	HTML5 : The core structure of the webpage.
*	CSS3:Used for styling and layout, ensuring the site 
             looks modern and professional.
*	Font: For icons in the navigation bar and footer 
             sections.
*	Web Manifest: For enabling Progressive Web App 
      functionality.
  
### Installation
Deployment & Local Development
### Deployment
* The site is deployed using GitHub Pages  (https://github.com/GetanehT/Smart-phone)
To Deploy the site using GitHub Pages:
1.	Login (or signup) to Github.
2.	Go to the repository for this project, https://getaneht.github.io/Smart-phone/
3.	Click the settings button.
4.	Select pages in the left hand navigation menu.
5.	From the source dropdown select main branch and press save.
6.	The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

### How to Fork

To fork the repository:

1.	Log in (or sign up) to Github.
2.	Go to the repository for this project,  
3.	Click the Fork button in the top right corner.
   
### How to Clone

To clone the repository:

1.	Log in (or sign up) to GitHub.
2.	Go to the repository for this project, kera-cudmore/TheQuizArms
3.	Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4.	Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5.	Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.
Usage
Navigate through the website using the menu links to explore different sections. You can view the deals on iPhones and Samsung smartphones, provide feedback through the feedback form, and get in touch via the contact section.                                                                                                                                                                             
### About Us Page (aboutus.html)
Overview
The About Us page provides information about the company, its mission, and its team.

Features

*	Header: Same as the home page, with site logo and navigation menu.
*	Main Content: Includes a detailed description of the company's background, mission statement, and information about the team members.

*	Feedback Form
Users can provide their feedback through the form, which includes fields for first name, last name, email address, and their comments.
*	Contact Information
Provides details on open times, contact phone number, email address, and the physical address of the store.
*	Footer: Same as the home page, with social media links.



 
### Testing

To ensure that all features of the website are functioning correctly, follow these testing steps:

1.	Responsive Design Testing
o	Open the website in different browsers (Chrome, Firefox, Safari, Edge).
o	Resize the browser window to check how the layout adapts to different screen sizes.
o	Test on various devices (desktop, tablet, smartphone).
2.	Form Testing
o	Navigate to the feedback form.
o	Fill in all fields with valid data and submit the form to ensure it processes correctly.
o	Try submitting the form with invalid data (e.g., incorrect email format) to check validation.
3.	Navigation Testing
o	Click on each navigation link to ensure they redirect to the correct pages.
o	Check if the active page is highlighted in the navigation menu.
4.	Content Testing
o	Review all text for typos and grammatical errors.
o	Ensure all images load correctly.
o	Verify all links (internal and external) work properly.
5.	Google Maps Integration
o	Verify that the map loads correctly and points to the correct location.
6.	Social Media Links
o	Click on each social media icon to ensure it opens the correct platform in a new tab.
Common Sections Across All Pages
Header
•	Logo: Links to the home page.
•	Navigation Menu: Links to the Home, iPhone, Samsung, and About Us pages.
Feedback Section
•	Feedback Form: Collects user feedback, including fields for first name, last name, email address, and feedback comments.
Contact Information
•	Open Times: Table showing the store's operating hours.
•	Contact Details: Phone number and email address for customer inquiries.
•	Physical Address: Store location address.
Footer
•	Social Media Links: Icons linking to the store's profiles on Facebook, YouTube, Instagram, and Twitter.

Contributing
Contributions are welcome! Please follow these steps:
1.	Fork the repository.
2.	Create a new branch:
bash
Copy code
git checkout -b feature-branch
3.	Make your changes and commit them:
bash
Copy code
git commit -m "Add new feature"
4.	Push to the branch:
bash
Copy code
git push origin feature-branch
5.	Open a pull request.

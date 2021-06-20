# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: Use migration to update the database. Name of the foreign key is Animal_id.

  Researched answer: The foreign key always goes on the belongs_to side. By convention the foreign key should always be the modelname_id and the data type should be integer. The has_many model is singular, the belongs_to model is plural. A Person (singular) has_many emails (plural).



2. Which RESTful routes must always be passed params? Why?

  Your answer: get, post, patch, delete.

  Researched answer: To bring the operations that can be applied to an object into HTTP requests



3. Name three rails generator commands. What is created by each?

  Your answer: rails new app - creates an app, rails db:create - sets up a database rails s - runs the server

  Researched answer: rails new app_name: generates a new folder with the entire Rails directory structure with all the code you need to run our simple application right out of the box

  rails db:create: sets up an empty database

  rails s: starts the Rails application by starting the server


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students - students# displays a list of students

method="GET"    /students/2  - displays a specific student

method="GET"    /students/new - returns an HTML form for creating a new student

method="GET"    /students/edit/2 - returns an HTML form for editing a student

method="POST"   /students/       - Sends students to the database.

method="PATCH"  /students/2       - update a specific student

method="DELETE" /students/2      destroy a specific student



5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.

As the consumer of the API, I want to see validation errors if my to do list doesn't include a time and date

In my API, I want to see validation errors if my to do list doesn't have a name.

I want to see validation errors if I am unable to add a task to my to do list.

In my API, I want to see validation errors if my to do list doesn't have a name for each task.

I want to see validation errors if my to do list repeats a task

I want to see validation errors if my to do list doesn't update if a task is complete.

I want to see validation errors if my to do list doesn't remove a task when cancelled

I want to see validation errors if i can't set reminders in my to do list.

I want to see validation errors if my to do list can't add a date

I want to see validation errors if my to do list can't update the date

I want to see a status code of 422 when a post request can not be completed because of validation errors.

# General Assembly SEI Project 4 - Snow Trip
![snowTrip](https://github.com/miya-w/GA-SEI-Project-4-Snow-Trip/blob/main/mern-infrastructure/src/components/images/Screen%20Shot%202023-09-15%20at%2010.53.46%20am.png)
## Overview
The forth project of the software engineering immersive course at GA Australia. The assignment was to create a full-stack application with MERN This project was completed in a week.
About **Snow Trip**. It’s a platform is for planning the snow trip in both Australia and Japan.

### User Stories
I  created simple list of user-stories for this project,which were keys for our MVP application.
- As a visitor, I would like to be able to see the list of ski resorts of Australia and Japan.

- As a visitor, I could create a simple itinerary to plan the upcoming snow trip.

- Web-Auth
![web-details](https://github.com/miya-w/GA-SEI-Project-4-Snow-Trip/blob/main/mern-infrastructure/src/components/images/Screen%20Shot%202023-09-15%20at%2010.53.56%20am.png)
- Main-page
![Main Page](https://github.com/miya-w/GA-SEI-Project-4-Snow-Trip/blob/main/mern-infrastructure/src/components/images/Screen%20Shot%202023-09-15%20at%2010.53.46%20am.png)
- Resort details
![Resort details](https://github.com/miya-w/GA-SEI-Project-4-Snow-Trip/blob/main/mern-infrastructure/src/components/images/Screen%20Shot%202023-09-15%20at%2010.54.23%20am.png)

- Itinerary
![Itinerary](https://github.com/miya-w/GA-SEI-Project-4-Snow-Trip/blob/main/mern-infrastructure/src/components/images/Screen%20Shot%202023-09-15%20at%2010.54.30%20am.png)

### Technologies Used:
- React
- MongoDB / Mongoose
- Node.js / Express.js
- JavaScript, JSX, HTML/CSS
- Git
- Figma and Trello for planning/visualization

# Back End

Models:
A crucial part of the this web backend wasthe models. There are 3 main Schemas using Mongoose.  Utilizing Mongoose's capabilities to provide each schema with either Embedded Schemas or Virtual Schema properties to build complex schemas that supply the front end with comprehensive APIs.

Note(itinerary) Model
```javascipt
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  date: {
    type: Date,
    trim: true,
},

  country: {
    type: String, // Change from 'text' to 'String'
    enum: ['Australia', 'Japan'], // Correct placement of 'enum'
  },


 skiresort:{
  type: String,
 },
 text:{
  type: String,
 },
  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);
```

Item(resort) model
```
const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  state: String,
  picture: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  lift: { type: Number, required: true },
  website: { type: String, required: true },
  image: String,
  slope: Number,
  elevation: String,
  description: String,
  trail:String,

}, {
  timestamps: true
});

module.exports = itemSchema;
```
user Model
```
const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    }
  }, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
          delete ret.password;
          return ret;
        }
      }
  }
  );
  
```

# Front End

In this Mern Project, React was used for the main front-end tools. When I render the data from the backend with the map() method, it brings lots of benefits to reduce the code.  Also, because of JSX's trait, I can write the expression in the form, and it is easy to management in the future.

fornt end code 
```javascript
<div className="form-container">
        <form onSubmit={handleSubmit} >
      
          <label>date</label>
          <input type="date" name="date" value={newNote.date} onChange={handleChange}/>
          <label>Country</label>
          <select name="country" value={newNote.country} onChange={handleChange}>
            <option value="">Select a country</option>
            <option value="Australia">Australia</option>
            <option value="Japan">Japan</option>
          </select>
          <label>Ski Resort</label>
            <select name="skiresort" value={newNote.skiresort} onChange={handleChange}>
              <option value="">Select a ski resort</option>
              {newNote.country === 'Australia' && (
                <>
                  <option value="Perisher">Perisher</option>
                  <option value="Thredbo">Thredbo</option>
                  <option value="Falls Creek">Falls Creek</option>
                  <option value="Mt Hotham">Mt.Hotham</option>
                  <option value="Mt Buller">Mt.Buller</option>
                </>
              )}
              {newNote.country === 'Japan' && (
                <>
                  <option value="Niseko">Niseko</option>
                  <option value="Furaro">Furaro</option>
                  <option value="Rusutsu">Rusutsu</option>
                  <option value="Kamui Ski Links">Kamui Ski Links</option>
                  <option value="Sapporo Teine">Sapporo Teine</option>
                </>
              )}
</select>

          <label>Text</label>
          <input type="text" name="text" value={newNote.text} onChange={handleChange}/>
          <button className="submit" type="submit">Add Note</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </div>
  );
```


# Bugs
- In the / MenuListItem.jsx, I tried to create the detaile page of each resort, and I forget the data was actually render from the data base, so, I was put the name instead of ._id, and it brought the error. and I feel it's quite easily lost between the backend abd front end .
```javascript
<Link to={`/items/${ menuItem._id}`}>
```
- The time format

```javascript
new Date(note.date).toDateString()
```


# Wins and Hurdles.
One of the biggest challenges was understanding how the loading and rendering of the data between the clent side and server side,the integration Complexity could let me lost easily onn the way. Building well-structured RESTful API with endpoints, managing request validation, and effectively handling error responses bring the more challenge, however it's definitely a lood learn how to see a project with a full stack with a full stack developer's eyes.

---
Resources
- [Brief-Project4](https://git.generalassemb.ly/seir66anz/project-4-brief)

- [Trello Board](https://trello.com/b/6DzLyOca/project-4)

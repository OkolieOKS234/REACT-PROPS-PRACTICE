# PRACTICE USING PROPS

I decided to build a simple contact list app that makes understanding the concept of Props very easily and straight to the point. Below is the picture of how the React App looks like.

![contacts.PNG](./src/components/contacts.PNG)

```javascript
import React from "react";
import "../styles/styles.css";
import Card from "./Card";
import contacts from "../contacts";
```

We start by doing the basics of any React using the concept of import and export... We are importing React(What our app needs to run), Our styles.css, Card from Card.jsx(Various contact cards) and several contacts from the contacts.js

```javascript
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        src={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        src={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        src={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}
export default App;
```

In our App.jsx we create a function that gets array of data for all the contacts, this way we can access all the array data easily...this is just a basic example so I didn't use Foreach or map for this.

#### Card.jsx

```javascript
function Card(props) {
  return (
    // props in action
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img src={props.src} alt="avatar_img" className="circle-img" />
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info">{props.email}</p>
          <p className="view_link">
            <a href="">View More >></a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
```

This basically shows the action of props allowing us to access the properties of each Card in our App.jsx. We can do this by passing props(Stands for properties) as a param.

```javascript
const contacts = [
  {
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com",
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com",
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
];
export default contacts;
```

A simple array of all the information that was accessed. Again we used

```javascript
export default contacts;
```

to export the contacts array

---

##### Hope you enjoyed this short tutorial on Props...................🚀🚀

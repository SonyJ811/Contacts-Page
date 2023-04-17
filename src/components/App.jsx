import React from "react";
import Card from "./Cards";
function App() {
  return (
    <div>
      <header>
        <h1>My Netflix Contacts</h1>
      </header>
      <div className="body">
        <Card
          name="WW"
          image="https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png"
          tel="5908243148"
          email="walterwhite@gmail.com"
        />
        <Card
          name="Ed Warren"
          image="https://s.abcnews.com/images/Entertainment/HT_conjuring_2_patrick_wilson_as_160609_16x9t_992.jpg"
          tel="1589825659"
          email="Paranormalinvestigator@gmail.com"
        />
        <Card
          name="Eleven"
          image="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Eleven-Stranger-Things-Cropped-1-e1582307434991.jpg"
          tel="1111111111"
          email="11@gmail.com"
        />
        <Card
          name="Noah flynn"
          image="https://i.pinimg.com/736x/ab/d1/a6/abd1a63c27349a747240db29e7bfce01.jpg"
          tel="8596887875"
          email="flynn@gmail.com"
        />
      </div>
    </div>
  );
}

export default App;

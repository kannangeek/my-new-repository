import express from "express";

const app = express();
const port = 3000; 


app.get("/", (req,res) => {
    const today = new Date();
    const day = today.getDay("Septemeber 14,2024 11:13:00");

    
    let type = "a weekday";
    let adv = "it's time to workhard";

    if (day === 0  || day=== 6) {
      type = "the weekend ";
      adv = "it's time to have some fun";
    }
    res.render("index.ejs",{
      dataType: type,
      advice: adv,
    })
  });


app.listen(port , () => {
    console.log('Server is running on port ${port}.');
} );
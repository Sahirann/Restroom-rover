const {createClient} = require("@supabase/supabase-js")
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { azAZ } = require("@mui/material/locale");



const supabaseUrl = "https://iqzrfujkwqdtypeuanlr.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());



app.get("/", async (req, res) => {
  const { data, error } = await supabase.from("latlng").select('*,infoCard(*),type(*)');
  if (error) {
    console.log(error);
  } else {
    res.status(200).json(data);
    // console.log(data);
  }
})
app.get("/admin", async (req, res) => {
  const { data, error } = await supabase.from("latlng").select('infoCard(id,name,address),lat,lng,type(color)');
  if (error) {
    console.log(error);
  } else {
    res.status(300).json(data);
    // console.log(data);
  }
})

app.get("/comment1", async (req,res) =>{
  const {data,error} = await supabase.from("comment").select('comment,star,name,profiles(username)');
  if (error) {
    console.log(error);
  } else {
    res.status(200).json(data);
    console.log(data)
  }
})

app.post("/comment",async (req,res)=>{
  const id = req.body.id
  const star = req.body.star
  const comment = req.body.comment
  const name = req.body.name
  
  const { error } = await supabase
  .from('comment')
  .insert({ id: id,comment:comment,name:name,star:star })
  if (error){
    console.log(error)
  } else {
    res.send("Value inserted")
  }
})
app.get("/getprofile", async (req, res) => {
  const { data, error } = await supabase.from("profiles").select('avatar_url');
  if (error) {
    console.log(error);
  } else {
    res.status(201).json(data);
    // console.log(data);
  }
})

//     db.query("SELECT * FROM detail", (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     });
// });

app.listen(3001, () => {
  console.log("Good job, your server is running on port 3001");
});
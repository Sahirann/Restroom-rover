const { createClient } = require("@supabase/supabase-js")
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
    res.status(203).json(data);
    console.log(data);
  }
})
app.post("/role", async (req, res) => {
  const {token_id} = req.body
  const { data, error } = await supabase.from("profiles").select('role,verify,avatar_url').eq('id',token_id);
  if (error) {
    console.log(error);
  } else {
    res.status(206).json(data[0]);
    // res.status(206).json(data);
    console.log(data);
  }
})
app.post("/star", async (req, res) => {
  const {name} = req.body
  const { data, error } = await supabase.from("commentfromuser").select('star').eq('name',name);
  if (error) {
    console.log(error);
  } else {
    res.status(207).json(data);
    // res.status(206).json(data);
    // console.log(data);
  }
})

app.post("/verify", async (req, res) => {
  const id = req.body.id
  const ID_CARD = req.body.ID_CARD
  const picture = req.body.picture

  const { error } = await supabase
    .from('Verify')
    .upsert({ id: id, ID_CARD: ID_CARD, picture:picture})
    .eq("id", id)
  if (error) {
    console.log(error)
  } else {
    res.send("Value inserted")
  }
})
app.get("/comment1", async (req, res) => {
  const { data, error } = await supabase.from("commentfromuser").select('comment,star,name,picture,profiles(username,avatar_url)');
  if (error) {
    console.log(error);
  } else {
    res.status(200).json(data);
    // console.log(data)
  }
})

app.post("/comment", async (req, res) => {
  const id = req.body.id
  const star = req.body.star
  const comment = req.body.comment
  const name = req.body.name
  const picture = req.body.picture

  const { error } = await supabase
    .from('commentfromuser')
    .upsert({ id: id, comment: comment, name: name, star: star, picture: picture })
    .eq("id", id)
  if (error) {
    console.log(error)
  } else {
    res.send("Value inserted")
  }
})
app.post("/newpin", async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const address = req.body.address
  const information = req.body.information
  const picture = req.body.picture
  console.log(name)
  const { error } = await supabase
    .from('user_pin_info')
    .upsert({ id: id,name: name, address: address,  information: information, picture: picture })
    .eq("id", id)
  if (error) {
    console.log(error)
  } else {
    res.send("Value inserted")
  }
})

// app.delete('/delete/:id'),(req,res) =>{
//   const id = req.params.id;
//   const { error } = await supabase
//   .from('latlng')
//   .delete()
//   .eq('id', id)
// }

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
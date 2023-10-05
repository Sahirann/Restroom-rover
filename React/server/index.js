const {createClient} = require("@supabase/supabase-js")
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");



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
    console.log(data);
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
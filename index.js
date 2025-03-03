const express = require("express")
const app = express()
const dbConnection = require("./config/db")
const User = require("./models/user.modle")
const Post = require("./models/post.modle")
const path = require("path")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", async (req, res)=>{
  try{

    
    const allPosts = await Post.find().populate("author")

    // allPosts.forEach((ele)=>{
    //   console.log(ele.author.name)
    // })
    // console.log(allPosts);
    
    res.render("index.ejs", {allPosts: allPosts});
    // res.render("index.ejs");

  }catch(error){
    console.error("Some Error found ==> ", error.message)
    res.send(error.message)
  }
})

app.post("/data", async (req, res)=>{
  try{

    const {name, title, content} = (req.body)

    // await User.deleteMany({})
    // await Post.deleteMany({})

    const user = new User({
      name: name
    })

    const post = new Post({
      title: title,
      content: content,
      author: user._id
    });

   await user.save()
   await post.save()

  // const letfine = await Post.findOne({title: "second Post"}).populate("author")

  const yourPost = await (post).populate("author")




    res.redirect("/")

  }catch(error){
    console.error(error.message)
    res.send("something went wrong")
  }
})

app.listen(3000, ()=>console.log("Server is running on port no. 3000"))
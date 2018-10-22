const walk = require('./tightwalk')

walk(process.env.HOME + "/Code", (err, path, stat) => {
  if (err)
    console.log(err)
  console.log(path)
}, () => {
  console.log("DONE!")
})

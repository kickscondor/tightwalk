const fs = require('fs')
const path = require('path')

module.exports = function tightwalk(dir, walkCb, finishCb, prelen) {
  prelen = prelen || dir.length + 1
  let callback = function (err, dir, stats) {
    walkCb(err, dir.slice(prelen), stats)
    finishCb()
  }

  try {
    fs.stat(dir, (err, stats) => {
      if (err)
        return callback(err, dir, stats)

      if (stats.isDirectory()) {
        fs.readdir(dir, (err, files) => {
          if (err)
            return callback(err, dir, stats)

          let count = files.length
          if (count == 0)
            return finishCb()

          files.forEach(file => {
            tightwalk(path.join(dir, file), walkCb, () => {
              if (--count == 0) {
                finishCb()
              }
            }, prelen)
          })
        })
      } else {
        callback(err, dir, stats)
      }
    })
  } catch (err) {
    callback(err, dir, stats)
  }
}

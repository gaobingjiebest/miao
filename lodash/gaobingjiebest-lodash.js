var gaobingjiebest = {
  chunk: function(array, size) {
    let len = array.length
    let res = []
    let item = []
    let n = 0

    for (var i = 0; i < len; i++) {
      item[n] = array[i]
      n++
      if (n === size) {
        res.push(item)
        item = []
        n = 0
      } else if (i === len - 1) {
        res.push(item)
        return res
      }
    }

    return res
  },
  compact: function (array) {
    let res = []

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }

    return res
  },
  concat: function (array, ...value) {
    let concated = []

    for (var i = 0; i < array.length; i++) {
      concated.push(array[i])
    }

    let len = arguments.length

    for (var i = 1; i < len; i++) {
      if (Array.isArray(arguments[i])) {
        for (var o = 0; o < arguments[i].length; o++) {
          concated.push(arguments[i][o])
        }
      } else {
        concated.push(arguments[i])
      } 
    }

    return concated
  }
}

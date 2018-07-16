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
  }
}

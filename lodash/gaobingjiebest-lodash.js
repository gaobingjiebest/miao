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
      }
    }

    return res
  }
}

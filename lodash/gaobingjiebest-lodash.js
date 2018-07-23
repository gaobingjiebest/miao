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
  },
  flatten: function (array) {
    let result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var o = 0; o < array[i].length; o++) {
          result.push(array[i][o])
        }
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  flattenDeep: function (array) {
    let result = []

    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result = result.concat(this.flattenDeep(array[i]))
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  flattenDepth: function (array, depth = 1) {
    if (depth === 0) {
      return array
    }
    let result = []

    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result = result.concat(this.flattenDepth(array[i], depth - 1))
      } else {
        result.push(array[i])
      }
    }
    return result
  },
  difference: function (array, ...value) {
    let result = []
    let compare = []
    for (var i = 1; i < arguments.length; i++) {
      compare = compare.concat(arguments[i])
    }
    for (var o = 0; o < array.length; o++) {
      if(compare.indexOf(array[o]) === -1) {
        result.push(array[o])
      }
    }
    return result
  },
  differenceBy: function (array, ...argu) {
    let compare = []
    for (var i = 1; i < arguments.length; i++) {
      compare = compare.concat(arguments[i])
    }
    let len = compare.length - 1
    let result = []
    let count = 0
    if ((typeof compare[len])  === "function") {
      let func = compare[len]
      for (var i = 0; i < array.length; i++) {
        for (var o = 0; o < len; o++) {
          if (func(array[i]) === func(compare[o])) {
            count++
          }
        }
        if (count === 0) {
          result.push(array[i])
        } else {
          count = 0
        }
      }
    } else {
      for (var i = 0; i < array.length; i++) {
        let n = compare[len]
        let count = 0
        for (var o = 0; o < len; o++) {
          if (array[i][n] === compare[o][n]) {
            count++
          }
        }
        if (count === 0) {
          result.push(array[i])
        } else {
          count = 0
        }
      }
    }
    return result
  },

  differenceWith: function (array, value, comparator) {
    return array.this.filter(value => value.this.every(item => !comparator(value, item)))
  },

  filter: function (collection, predicate=gaobingjiebest.identity) {
    let result= []
    predicate = _.iteratee(predicate)
    for (var i in collection) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i])
      }
    }
    return result
  },

  identity: function (value) {
    return value
  },

  fill: function (array, value, start = 0, end=array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  every: function (collection, predicate = this.identity) {
    for (var i = 0; i < collection.length; i++) {
      if (!predicate(collection[i])) {
        return false
      }
    }
    return true
  },
  some: function (collection, predicate = this.identity) {
    if (typeof predicate === "function") {
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return true
        }
      }
      return false
    } else {
      for (var i = 0; i < collection.length; i++) {
        if () {}
      }
    }

  },
  matches: function (source) {
    return 
  }
}

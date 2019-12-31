export const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)
// 함수를 특정 시점에 평가 할 수 있는 함수

export const range = l => {
  let i = -1
  let res = []
  while (++i < l) res.push(i)
  return res
}

export const take = curry((l, iter) => {
  let res = []
  for(const a of iter){
    res.push(a)
    if(res.length === l) return res
  }
  return res
})

export const Infinity = function* (){
  let i = -1
  while(++i) yield i
}

export const filter = curry((f, iter) => {
  let res = []
  iter = iter[Symbol.iterator]()
  let cur
  while (!(cur = iter.next()).done) {
    const a = cur.value
    if (f(a)) res.push(a)
  }
  return res
})


export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  }
  for(const a of iter){
    acc = f(acc, a)
  }
  return acc
})

export const go = (...args) => reduce((a, f) => f(a), args)
// 인자로 받은 값들을 다음 인자로 전달해 평가하여 값을 reduce 하는 함수

export const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
//축약된 함수를 리턴하는 함수 pipe함수에 값을 전달하면 go 함숭에 값이 전달~

export const L = {}
L.range = function* (l) {
  let i = -1
  while (++i < l) {
    yield i
  }
}
L.map = curry(function* (f, iter) {
  for(const a of iter){
    yield f(a)
  }
})
L.filter = curry(function* (f, iter) {
  iter = iter[Symbol.iterator]()
  let cur
  while (!(cur = iter.next()).done) {
    const a = cur.value
    if (f(a)) yield a
  }
})

L.flatten = function* (iter){
  for(const a of iter){
    if(isIterable(a)) yield *a
    else yield a
  }
}


export const flatten = pipe(
    L.flatten,
    take(Infinity)
)
L.deepFlatten = function* deep(iter){
  for(const a of iter){
    if(isIterable(a)) yield *deep(a)
    else yield a
  }
}

L.flatMap = curry(pipe(L.map, L.flatten))

L.entries = function* (obj) {
  for (const key in obj) {
    yield [key, obj[key]]
  }
}

export const map = curry(pipe(
    L.map,
    take(Infinity)
))

export const isIterable = a => a && a[Symbol.iterator]


export const join = curry((sep = ',', iter) => reduce((a, b) => `${a}${sep}${b}`, iter))

export const queryStr = pipe(
    L.entries,
    L.map(([k, v]) => `${k}=${v}`),
    join('&')
)

export const find = pipe(
    L.filter,
    take(1)
)

export const size = iter => {
  let i = 0
  for(const a of iter) i++
  return i
}
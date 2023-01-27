---
title: JavaScript Interview questions
date: "2020-08-15T18:35:00.284Z"
description: "Basic interview questions"
tags: ['interview', 'javascript']
---

Those are just some random questions I sometimes ask when evaluating junior developers.

⭐

- What is the difference between `==` and `===` ?

- What is the output ?

  ```javascript
  const animals = {};
  ['zebra', 'horse'].forEach(function(k) {
  	animals[k] = undefined;
  });
  console.log(animals); ?
  ```

 ⭐⭐

- What is the difference ?

  ```javascript
  [1,2,3].map(/*() => { ... }*/);
  [1,2,3].forEach(/*() => { ... }*/);
  ```

- What is the output ?
```javascript
const numbersAndStuff = [0, 2, 4, 6, undefined];
const filtered = numbersAndStuff.filter(element => element);
console.log(filtered);
```

- What is a closure ?

- What is a Promise ?

- What is the output ?
```javascript
function updateUserName(user, name) {
  user.name = name;
  return user;
}
const john = {
  name: 'John',
  age: 48,
};
console.log('John', john);
const jane = updateUserName(john, 'Jane');
console.log('Jane', jane);
console.log('John', john);
```


⭐⭐⭐

- What is the event loop ?
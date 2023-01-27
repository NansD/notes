---
title: React Interview questions
date: "2020-08-15T18:35:00.284Z"
description: "Basic interview questions"
tags: ['interview', 'frontend', 'react']
---

⭐

- What is the difference between state and props?
- How do you update a component's state ?
- What is the lifecycle of a component ?

⭐⭐

- What are React hooks ?
- How would you refactor this code ?
```javascript
function Form() {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);
  // ...
}
```

- How do you handle a complex state ?
  
  Let's say I have a `useState` which in a parent component. This state represents complex data, and multiple children components want to update that state. What to do ?
- What is "Context" ? What do you use it for ?
- What is prop drilling ?
- How do you handle code duplication in a React codebase ?

⭐⭐⭐

- What are sources of memory leaks in React ?
- How would you refactor this code ?
```javascript
function ProductPage({ product, addToCart }) {
  useEffect(() => {
    if (product.isInCart) {
      showNotification(`Added ${product.name} to the shopping cart!`);
    }
  }, [product]);

  function handleBuyClick() {
    addToCart(product);
  }

  function handleCheckoutClick() {
    addToCart(product);
    navigateTo('/checkout');
  }
  // ...
}
```

https://blog.scrimba.com/react-interview-questions/
https://beta.reactjs.org/learn/you-might-not-need-an-effect

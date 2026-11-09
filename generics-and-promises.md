# Generics in TypeScript and How They Work with Promises

## Introduction

When I started learning TypeScript, generics looked confusing because of the angle brackets. The idea is actually simple. A generic lets you write one function that can work with different types, instead of copying the same function for strings, numbers and so on. TypeScript still checks the types for you. They are also used in `Promise<T>`, which is what I want to cover here.

## How generics work

In `<T>`, the `T` is only a placeholder name for a type. The real type is decided when the function is called.

```typescript
const getFirstItem = <T>(items: T[]): T => {
    return items[0];
};

const firstName = getFirstItem<string>(["Alice", "Bob"]);
const firstNumber = getFirstItem<number>([10, 20]);
```

Here `getFirstItem` returns the first element of an array. When I pass an array of strings, `T` becomes `string`, so `firstName` is a string. When I pass numbers, `firstNumber` is a number. I only wrote the function once.

Most of the time TypeScript can guess `T` from the argument, so writing `<string>` or `<number>` is not always needed.

## Generics with Promise

A Promise is something that will give you a value later, like data from an API. `Promise<T>` tells TypeScript what type that value will be when it is ready.

```typescript
const getUser = async (): Promise<string> => {
    return "Alice";
};
```

This function is async and `Promise<string>` says that it will eventually give a string.

If the data is an object, I can make an interface and put it inside the Promise:

```typescript
interface User {
    id: number;
    name: string;
}

const getUser = async (): Promise<User> => {
    return { id: 1, name: "Alice" };
};
```

Now TypeScript knows the result has `id` and `name`. If I write something wrong like `user.nam`, I get an error straight away. This is useful when working with API responses, because I always know what shape the data has.

## Conclusion

Generics let me reuse the same code for different types without losing type checking. With `Promise<T>`, they show what an async function returns, so it is easier to use the result correctly.

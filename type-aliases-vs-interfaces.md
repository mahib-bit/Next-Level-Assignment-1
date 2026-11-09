# Type Aliases vs. Interfaces in TypeScript

## Introduction

TypeScript gives us two ways to describe the shape of data, `type` and `interface`. For a normal object they look almost the same, so it is easy to think they are the same thing. They are not, and each one can do something the other can't.

## Interfaces

An interface describes the structure of an object or a class. It can be extended by another interface, and it also supports declaration merging, which means if you declare the same interface twice, TypeScript joins them into one.

```typescript
interface User {
    name: string;
    age: number;
}

interface Admin extends User {
    permissions: string[];
}
```

`Admin` gets `name` and `age` from `User` and then adds `permissions`.

## Type aliases

A type alias can also describe an object, but it can do more. It can be used for union types, tuples and primitive types.

```typescript
type Status = "pending" | "approved" | "rejected";

type Product = {
    title: string;
    price: number;
};
```

`Status` is a union, so its value can only be one of those three strings. An interface can't be written like this.

A type alias can't be merged by declaring it twice, but we can combine types using an intersection (`&`).

```typescript
type Person = { name: string };
type Employee = Person & { employeeId: number };
```

`Employee` has the `name` from `Person` and also `employeeId`.

## Which one to use

For normal objects that may be extended, or classes that need to implement them, an interface is a natural choice. When I need unions, tuples or a mix of different types, a type alias is better.

## Conclusion

Both make TypeScript code clearer and safer. Use an interface for extendable object structures and a type alias for unions, intersections, tuples and other more complex types. The right one depends on what kind of data I am describing.

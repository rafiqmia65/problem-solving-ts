# TypeScript Concepts – Bangla Blog Style

## 🏷️ ১. Interface vs Type

TypeScript এ `interface` এবং `type` দুইভাবে structure define করা যায়, কিন্তু কিছু subtle পার্থক্য আছে।

### 📝 Interface

- Object বা class structure define করতে ব্যবহৃত।
- একাধিক interface merge করা যায়।
- Extend করা যায়।

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}
```

### 📝 Type Alias

- Object ছাড়া primitive, union, tuple সব define করা যায়।
- Merge করা যায় না।
- Extend করতে হলে `&` ব্যবহার করতে হয়।

```ts
type Point = { x: number; y: number };
type Circle = Point & { radius: number }; // Intersection
```

**💡 সংক্ষেপে:**

- **Interface** → object/class-centric, mergeable
- **Type** → flexible, merge হয় না

---

## 🔑 ২. `keyof` keyword

`keyof` দিয়ে একটি object type এর **all keys** কে type হিসেবে পাওয়া যায়।

```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"

const key: PersonKeys = "name"; // ✅
```

### Generic এর সাথে ব্যবহার:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person: Person = { name: "Rafiq", age: 30 };
console.log(getProperty(person, "name")); // Rafiq
```

**💡 সুবিধা:** Type-safe access এবং dynamic property access

---

## ⚡ ৩. `any`, `unknown`, `never` types

### any

- যেকোনো value assign করা যায়
- Type-checking skip করে

```ts
let a: any;
a = 10;
a = "Hello"; // ✅
```

### unknown

- `any` এর মতো flexible, কিন্তু stricter
- কোনো operation করার আগে type check করতে হয়

```ts
let b: unknown;
b = 5;
b = "Hi";

if (typeof b === "string") {
  console.log(b.toUpperCase()); // ✅ নিরাপদ
}
```

### never

- কোনো value রাখে না
- সাধারণত function যা **throw করে** বা **infinite loop** এর জন্য

```ts
function error(message: string): never {
  throw new Error(message);
}
```

---

## 📊 ৪. Enums in TypeScript

**Enum** হলো named constants declare করার জন্য।

- Numeric বা String ধরনের হতে পারে
- Code readable ও maintainable হয়

### 🔢 Numeric Enum:

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 1
console.log(Direction.Right); // 4
```

- যদি value না দেওয়া হয়, TypeScript automatically 0 থেকে increment করে।
- ব্যবহার: Magic numbers এর পরিবর্তে readable names

### ✨ String Enum:

```ts
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

console.log(Status.Active); // "ACTIVE"
```

**💡 সারসংক্ষেপ:**

- Enum → readable constants
- Numeric → auto-incrementing numbers
- String → fixed readable strings

---

## 🔗 ৫. Union & Intersection Types

### Union Type

একটি variable একাধিক type এর হতে পারে

```ts
let value: string | number;
value = "Hello";
value = 42; // ✅
```

### Intersection Type

Multiple types combine করে একত্রিত করা হয়

```ts
type Person = { name: string };
type Employee = { employeeId: number };

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = { name: "Rafiq", employeeId: 101 }; // ✅
```

- **Union** → multiple options
- **Intersection** → multiple types একত্রিত করে

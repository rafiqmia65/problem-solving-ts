const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type FilterPropertyType = {
  title: string;
  rating: number;
};

const filterByRating = (value: FilterPropertyType[]): FilterPropertyType[] => {
  let filterData: FilterPropertyType[] = [];

  for (const item of value) {
    if (item.rating >= 4) {
      filterData.push(item);
    }
  }

  return filterData;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (persons: User[]): User[] => {
  let activePersons: User[] = [];

  for (const person of persons) {
    if (person.isActive === true) {
      activePersons.push(person);
    }
  }

  return activePersons;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const { title, author, publishedYear, isAvailable } = book;

  let availableOrNot: string;

  if (isAvailable === true) {
    availableOrNot = "Yes";
  } else {
    availableOrNot = "No";
  }

  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${availableOrNot}`
  );
};

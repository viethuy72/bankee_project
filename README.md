# Reactjs boilerplate

## Coding conventions

## Naming

- **Filename** Use PascalCase for filenames. E.g., ReservationCard.tsx.
- **Reference Naming**: Use PascalCase for React components and camelCase for their instances.

```tsx
// bad
import reservationCard from './ReservationCard';

// good
import { ReservationCard } from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

- **Component Naming** Use the filename as the component name. For example, ReservationCard.tsx should have a reference name of ReservationCard. However, for root components of a directory, use index.tsx as the filename and use the directory name as the component name:

```tsx
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// bad because don't use export default
import Footer from './Footer';

// good
import { Footer } from './Footer';
```

- **Props Naming**: Avoid using DOM component prop names for different purposes.
  > Why? People expect props like `style` and `className` to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.

```tsx
// bad
<MyComponent style="fancy" />

// bad
<MyComponent className="fancy" />

// good
<MyComponent variant="fancy" />
```

**File names** Directories and files must be named in camel cases. Except

- front/pages (page URLs are in snake cases.)
- front/components (component file names are in PascalCase.)

## Props

- Always use camelCase for prop names, or PascalCase if the prop value is a React component.

```tsx
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>
```

- Omit the value of the prop when it is explicitly true. eslint: react/jsx-boolean-value

```tsx
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

- Always include an alt prop on <img> tags. If the image is presentational, alt can be an empty string or the <img> must have role="presentation". eslint: jsx-a11y/alt-text

```tsx
// bad
<img src="hello.jpg" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// good
<img src="hello.jpg" alt="" />

// good
<img src="hello.jpg" role="presentation" />
```

- Avoid using an array index as `key` prop, prefer a stable ID. eslint: [`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

> Why? Not using a stable ID [is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) because it can negatively impact performance and cause issues with component state.

We don’t recommend using indexes for keys if the order of items may change.

```tsx
// bad
{
  todos.map((todo, index) => <Todo {...todo} key={index} />);
}

// good
{
  todos.map(todo => <Todo {...todo} key={todo.id} />);
}
```

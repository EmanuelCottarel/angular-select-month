_# Month-select

## What is it?

Month-Select is a universal month type input, compatible with all browsers.

## How does it work?

The component simply return a month date in the following format: YYYY-mm using an eventEmitter

## How to get the value from the month select

parent-component.html

``` html
<lib-month-select (selectValueEvent)="getMonth($event)"></lib-month-select>
 ```

parent-component.ts

``` typescript
 getMonth(month: string) {
    console.log(month)
  }
 ```

Output

```
 "2023-10"
```


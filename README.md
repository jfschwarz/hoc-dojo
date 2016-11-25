#### Setup

Prerequisites: node >=4, npm >=3

```
git clone https://github.com/jfschwarz/hoc-dojo.git
cd hoc-dojo
npm install
npm start
```


### Task 1: Labels

Each field in the example form has a `label` prop. Render these labels.


### Task 2: Address component

The `Address` component should be based on the `base/Textarea` component, but
instead of a string value, it should take an array of strings (address lines)
as its `value` prop, e.g.:

```
['Kurfürstenstr. 111', '10787 Berlin', 'Germany' ]
```

The value propagated in `onChange` must have an array type, too.


### Task 3: Validation

The `Email` and `Phone` fields should validate the user input and show a green
checkmark (`src/components/Checkmark.js`) if the value is valid.

You can use the validation functions from `src/validation.js`.

Only valid values must ever be propagated and written to the global app state.

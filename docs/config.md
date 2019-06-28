# Configuration
Accessabar must be configured before it will work.

Configuration options are currently limited, but will be expanded over time. 

## Example
```javascript
const accessabar = new Accessabar({
    enableButton: '#enable-accessabar',
});
```

## Configuration Options
```javascript
{
    enableButton: string,
    bindTo: string,
}
```

### enableButton
Default | Type | Optional
--- | --- | ---
`undefined` | `string` | Yes

Selector for the element that opens Accessabar when clicked.
If this option is not provided, then Accessabar must be opened manually.

### bindTo
Default | Type | Optional
--- | --- | ---
`body` | `string` | Yes

Selector for the element Accessabar will bind to. Accessabar will be placed inside this element as the first child.

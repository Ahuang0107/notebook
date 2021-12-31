# HOC 高阶组件

```typescript jsx
interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * use HOC component
 * @param WrappedComponent
 * @constructor
 */
const Button = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
    class extends React.Component<P & ButtonProps> {
        render() {
            return <WrappedComponent {...this.props}>
                <LayerIcon/>
            </WrappedComponent>
        }
    }
```

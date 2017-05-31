import * as React from "react";

export interface HelloProps { compiler: string; framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        const props: HelloProps = this.props;
        return <div className="text-success">Hello from {props.compiler} and {props.framework}!</div>;
    }
}
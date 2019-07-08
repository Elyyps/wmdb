import React from "react";
import { Subtract } from "utility-types";
import { StylingOverrideUtil, IStyles } from "@app/util/styling";

export interface InjectedStylingProps {
  styling: StylingOverrideUtil;
}

interface IWithStylingProps {
  propStyles?: IStyles;
}

interface IState {
  styleUtil: StylingOverrideUtil;
}

const withStyling = <P extends InjectedStylingProps>(Component: React.ComponentType<P>) =>
  class MakeCounter extends React.Component<Subtract<P, InjectedStylingProps> & IWithStylingProps, IState> {
    public constructor(props: any) {
      super(props);

      this.state = {
        styleUtil: new StylingOverrideUtil(props.propStyles)
      };
    }

    public render() {
      return <Component styling={this.state.styleUtil} {...this.props as P} />;
    }
  };

export { withStyling };

import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { IPlaygroundComponentProps, PlaygroundComponent } from "@app/modules/playground";
import { IAppState } from "@app/stores";
import { ITestItem } from "@app/api";
import { playgroundThunks } from "@app/middleware/thunk/playground.thunk";

interface IStateProps {
  testItems: ITestItem[];
}
interface IDispatchProps {
  getItems: () => void;
}

const mapStateToProps: MapStateToProps<IStateProps, IPlaygroundComponentProps, IAppState> = state => {
  const { testItems } = state.playground;

  return { testItems };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IPlaygroundComponentProps> = dispatch => ({
  getItems: () => dispatch(playgroundThunks.getItems("dummy search param"))
});

export type PlaygroundContainerProps = IStateProps & IDispatchProps;
export const PlaygroundContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaygroundComponent);

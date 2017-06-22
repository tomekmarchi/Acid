import acid from '../namespace/index';
import { assign } from '../internal/object';
const appState = {
  screenHeight: screen.height,
  screenWidth: screen.width
};
assign(acid, {
  appState
});

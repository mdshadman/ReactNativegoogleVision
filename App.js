
import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CameraContainer from './screens/CAmeraContainer';

const App = () => {
  return (
    <Fragment>
      <CameraContainer />
    </Fragment>
  );
};



export default App;

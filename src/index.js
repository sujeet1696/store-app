import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Info from './Info';

ReactDOM.render(<Info />, document.getElementById('root'));

serviceWorker.unregister();

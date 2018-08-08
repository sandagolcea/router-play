import React from 'react';
import { withRouter } from 'react-router-dom';

const Notebooks = ({ history }) => (
	<div>
      <h3>Notebooks</h3>
      <div>{history.action}</div>
	</div>
)

export default withRouter(Notebooks);

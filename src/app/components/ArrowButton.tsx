import * as React from 'react';
import ArrowDirection from '../misc/ArrowDirection';
import {Link} from 'react-router';

interface IArrowButtonState {
}
interface IArrowButtonProps {
  to: any;
  direction: ArrowDirection;
}


export default class ArrowButton extends React.Component<IArrowButtonProps, IArrowButtonState> {

  constructor(props: IArrowButtonProps) {
    super(props);
  }

  render() {
    return (
      <div className='row center middle margin-auto'>
        <Link to={this.props.to} className={
        'arrow-button ' + (this.props.direction === ArrowDirection.LEFT ? 'left' : 'right')}>
        </Link>
      </div>
    );
  }
}

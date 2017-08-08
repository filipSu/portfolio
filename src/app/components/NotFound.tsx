import * as React from 'react';
import {Link} from 'react-router';

interface INotFoundState {
}
interface INotFoundProps {
}


export default class NotFound extends React.Component<INotFoundProps, INotFoundState> {

  constructor(props: INotFoundProps) {
    super(props);
  }

  render() {
    return (
      <div className='col-xs-12 row middle-xs start-lg center no-padding not-found-wrapper'>
        <div>
          <img className='rick' src='app/assets/images/Rick_and_morty_icon.png'/>
          <span className='rick-text'>
            Look Morty, NOTHING! <br/>
            There is NOTHING here! <br/>
            Let's Wubba lubba dub dub
            <br/> outta here!
          </span>
          <div className='home-btn-wrapper'>
            <Link to={'/'} className='home-btn' >HOME</Link>
          </div>
        </div>
      </div>
    );
  }
}

import * as React from 'react';
import PlatformImage from './PlatformImage';
import PlatformType from '../misc/PlatformType';
import {Link} from 'react-router';


interface IProjectCardState {
  isActive?: boolean;
}
interface IProjectCardProps {
  name: string;
  description: string;
  platformType: PlatformType;
  thumbnail: string;
  url: string;
}


export default class ProjectCard extends React.Component<IProjectCardProps, IProjectCardState> {

  constructor(props: IProjectCardProps) {
    /*  */
    super(props);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
    this.state = {
      isActive: false
    };
  }

  render() {
    let {isActive} = this.state;
    let {name, description, platformType, thumbnail, url} = this.props;
    const bgImage = {
      backgroundImage: 'url(' + thumbnail + ')',
      backgroundPositionX: 'center',
      backgroundPositionY: '10px',
      backgroundRepeat: 'no-repeat',
      backgroundOrigin: 'border-box',
      backgroundSize: 'cover'
    };
    return (
      <div style={bgImage} className={'project-card-wrapper' + (isActive ? ' active' : '')} onClick={this.activate}>
        <div className='detail-triangle-button'>
          <img src='app/assets/images/ic_zoom_in_white_24px.svg' />
        </div>
        <div className='row project-description'>
          <div className='col-xs-12 header row start middle'>
            <div className='close col-xs-1' onClick={this.deactivate}></div>
            <div className='col-xs-9 row middle'>
              <h3>{name}</h3>
            </div>
            <div className='col-xs-2 row middle center'>
              <PlatformImage type={platformType} />
            </div>
          </div>
          <div className='col-xs-12  description row start top'>
            <div className='col-xs-offset-1 col-xs-11'>
              {description}
            </div>
          </div>
          <div className='col-xs-12 see-more-btn-wrapper row start bottom'>
            <Link to={'/project/' + url} className='see-more-btn col-xs-offset-8 col-xs-4' >SEE MORE</Link>
          </div>
        </div>
      </div>
    );
  }

  private activate() {
    if (!this.state.isActive) {
      this.setActive(true);
    }
  }

  private deactivate() {
    if (this.state.isActive) {
      this.setActive(false);
    }
  }

  private setActive(active: boolean) {
    this.setState({
      isActive: active
    });
  }
}

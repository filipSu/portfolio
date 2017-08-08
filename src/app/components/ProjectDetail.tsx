import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import VisibilitySensor = require('react-visibility-sensor');
import BottomBar from './BottomBar';
import {Project} from '../misc/Project';
import Utilities from '../misc/Utilities';
import ImageGallery from 'react-image-gallery';
import {ScreenFull} from '../misc/Screenfull';

interface IProjectDetailState {
  showBottomBar?: boolean;
  project?: Project;
}
interface IProjectDetailProps {
  params: any;
}


export class ProjectDetail extends React.Component<IProjectDetailProps, IProjectDetailState> {

  static contextTypes = {router: React.PropTypes.object};
  private _imageGallery;
  private _screenfull;

  constructor(props: IProjectDetailProps) {
    super(props);
    this.handleBottomBarVisibility = this.handleBottomBarVisibility.bind(this);
    const params = props.params;
    this.state = {
      showBottomBar: false,
      project: Utilities.getProject(params.id)
    };
    if (this.state.project === null) {
      this.context.router.replace({ pathname: '/' });
    }
    this._screenfull = new ScreenFull();
  }

  componentWillReceiveProps(nextProps: IProjectDetailProps) {
    let params = nextProps.params;
    let project = Utilities.getProject(params.id);
    if (project !== null) {
      this.setProject(project);
    } else {
      this.context.router.replace({ pathname: '/' });
    }
  }

  render() {

    const visibilitySensor = (
      <VisibilitySensor
        onChange={this.handleBottomBarVisibility}
        partialVisibility={true}
        minTopValue={-300}
        scrollCheck={true}
        scrollDelay={50}/>
    );
    const project = this.state.project;
    const screens = project.screens;
    const bottomBar = this.state.showBottomBar ?
      (<BottomBar projectsMode={true} previousProject={project.previousProjectUrl} nextProject={project.nextProjectUrl} />) : ('');
    return (
      <div className='col-xs-12 row middle-xs start-lg projects no-padding'>
        <div className='row start middle projects-top'>
        </div>

        <div className='row center middle projects-middle'>
          <div className='col-xs-0 col-sm-1 no-padding hide-xs show-sm'>
            <div className='row center middle margin-auto'>
              <a onClick={this._imageGallery ? this.handlePreviousScreen.bind(null,this._imageGallery, screens.length) : null} className='arrow-button left'/>
            </div>
          </div>
          <ReactCSSTransitionGroup
            component='div'
            className='col-xs-12 col-sm-10 projects-cards row no-padding center middle'
            transitionName='project-card'
            transitionAppear={false}
            transitionLeave={false}
            transitionEnterTimeout={400}>
            <ImageGallery
              ref={i => this._imageGallery = i}
              items={screens}
              showBullets={true}
              showNav={false}
              showFullscreenButton={this._screenfull.enabled}
              showPlayButton={false}
              showThumbnails={false}/>
          </ReactCSSTransitionGroup>
          <div className='col-xs-0 col-sm-1 no-padding hide-xs show-sm'>
            <div className='row center middle margin-auto'>
              <a onClick={this._imageGallery ? this.handleNextScreen.bind(null,this._imageGallery, screens.length) : null} className='arrow-button right'/>
            </div>
          </div>
        </div>
        {visibilitySensor}
        <div className='row middle center projects-bottom'>
        </div>
        {bottomBar}
      </div>
    );
  }

  private handlePreviousScreen(gallery: ImageGallery, screensCount: number) {
    let currentScreenIndex = gallery ? gallery.getCurrentIndex() : -1;
    let previous = -1;
    if (currentScreenIndex !== -1) {
      previous = ((+currentScreenIndex - 1) + +screensCount) % +screensCount;
      /*next = ((+currentScreenIndex + 1) % +screensCount);*/
      gallery.slideToIndex(previous);
    }
  }

  private handleNextScreen(gallery: ImageGallery, screensCount: number) {
    let currentScreenIndex = gallery ? gallery.getCurrentIndex() : -1;
    let next = -1;
    if (currentScreenIndex !== -1) {
      next = ((+currentScreenIndex + 1) % +screensCount);
      gallery.slideToIndex(next);
    }
  }

  private handleBottomBarVisibility(isVisible: boolean) {
    this.setState({
      showBottomBar: isVisible
    });
  }

  private setProject(proj: Project) {
    this.setState({
      project: proj
    });
  }

}

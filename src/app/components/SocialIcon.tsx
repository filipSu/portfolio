import * as React from 'react';
import * as ReactGA from 'react-ga';

interface ISocialIconState {
  isHovered: boolean;
}
interface ISocialIconProps {
  url: string;
  css_class: string;
  src: string;
  title: string;
}


export default class SocialIcon extends React.Component<ISocialIconProps, ISocialIconState> {

  constructor(props: ISocialIconProps) {
    super(props);
    this.toggleHover = this.toggleHover.bind(this);
    this.state = {
      isHovered: false
    };
  }

  render() {
    let {url, css_class, src, title} = this.props;
    let additionalClass = '';
    if (this.state.isHovered) {
      additionalClass = ' hovered';
    }
    return (
      <div className={'col-md-2' + additionalClass}>
        <ReactGA.OutboundLink
          eventLabel={title}
          to={url}
          className={css_class}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          target='_blank'>
          <img src={src} alt={title} />
        </ReactGA.OutboundLink>
      </div>
    );
  }

  private toggleHover() {
    this.setState({isHovered: !this.state.isHovered});
  }
}

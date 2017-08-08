import * as React from 'react';
import PlatformType from '../misc/PlatformType';

interface IPlatformImageState {
  source: string;
}
interface IPlatformImageProps {
  type: PlatformType;
}


export default class PlatformImage extends React.Component<IPlatformImageProps, IPlatformImageState> {

  constructor(props: IPlatformImageProps) {
    super(props);
    this.state = {
      source: PlatformType.getImageSrc(props.type)
    };
  }

  componentWillReceiveProps(nextProps: IPlatformImageProps) {
    this.setState({
      source: PlatformType.getImageSrc(nextProps.type)
    });
  }

  render() {
    let source = this.state.source;
    return (
      <div className='platform-image col-xs-12'>
        <img className={source === '' ? 'hidden' : ''} src={source} />
      </div>
    );
  }
}

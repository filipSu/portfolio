import * as React from 'react';
import {Link} from 'react-router';

interface INavigationState {
  items: JSX.Element[];
}
interface INavigationProps {
  totalPages: number;
  currentPage: number;
  link?: boolean;
  handleClick?: any;
}


export default class Navigation extends React.Component<INavigationProps, INavigationState> {

  constructor(props: INavigationProps) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.updateItems(this.props);
  }

  componentWillReceiveProps(nextProps: INavigationProps) {
    this.updateItems(nextProps);
  }

  render() {
    return (
      <div className='navigation'>
        {this.state.items}
      </div>
    );
  }

  private updateItems(props: INavigationProps) {
    let newItems = [];
    let {currentPage, totalPages, link = true} = props;
    for (let i = 0; i < totalPages; i++) {
      let item;
      let cName = (currentPage === i ? 'active' : '') + (totalPages < 2 ? ' hide' : '');
      if (link) {
        item = <Link
          key={i}
          to={{ pathname: '/', query: {page: i}}}
          className= {cName}
        />;
      }else {
        item = <a
          key={i}
          onClick={(i) => this.props.handleClick(i)}
          className={cName}
        />;
      }
      newItems.push(item);
    }
    this.setState({
      items: newItems
    });
  }
}

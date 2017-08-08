import * as React from 'react';

interface IMainLayoutState {}
interface IMainLayoutProps {
  content: any;
  sidebarWide?: any;
  sidebar?: any;
  isWidePanel: boolean;
  routeParams: any;
}


export class MainLayout extends React.Component<IMainLayoutProps, IMainLayoutState> {

  constructor(props: IMainLayoutProps) {
    super(props);
  }

  render() {
    const {content, sidebar, sidebarWide} = this.props;
    let sidebarClass = ' col-xs-12 col-md-5';
    let contentClass = ' col-xs-12 col-md-6';
    if (sidebar) {
      sidebarClass = sidebarClass + ' col-lg-4';
      contentClass = contentClass + ' col-lg-7';
    }
    return (
      <div className='container full-height-md'>
        <div className='full-height-md row middle app-wrapper'>
          <section className={'sidebar-wrapper row middle end-md center-xs' + sidebarClass}>
            {sidebar ? sidebar : sidebarWide}
          </section>
          <section className='side-polygon-wrapper col-xs-0 col-md-1 row start no-padding hide-xs show-md'>
            <div className='side-polygon left-side-polygon'/>
          </section>
          <section className='down-polygon-wrapper col-xs-12 row start top no-padding hide-md'>
            <div className='down-polygon'/>
          </section>
          <section className={'content-wrapper row center-xs start-lg' + contentClass}>
            {content}
          </section>
        </div>
      </div>
    );
  }
}

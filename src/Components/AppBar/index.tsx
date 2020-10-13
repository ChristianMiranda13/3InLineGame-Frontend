import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { map } from 'lodash';
import React from 'react';
import TabPanel from './TabPanel';

interface ITitleObj {
  title: string;
  icon?: React.ReactNode;
}

interface IProps {
  titles: ITitleObj[];
  contents?: any[];
  tabStyle?: string;
  refreshAction: () => any;
}

interface IState {
  value: any;
}

class TabsBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderTabs = this.renderTabs.bind(this);
    this.renderContents = this.renderContents.bind(this);
    this.showRefreshButton = this.showRefreshButton.bind(this);
    this.state = { value: 0 };
  }

  handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    this.setState({ value: newValue });
  }

  renderTabs() {
    const { titles, tabStyle } = this.props;
    const { value } = this.state;
    return (
      <Tabs value={value} onChange={this.handleChange} centered>
        {map(titles, (titleObj, i) => (<Tab
          label={titleObj.title}
          icon={titleObj.icon}
          className={tabStyle}
          key={i} />))}
      </Tabs>
    );
  }

  renderContents() {
    const { contents } = this.props;
    const { value } = this.state;
    return (
      <div>
        {map(contents, (content, i) => (
          <TabPanel value={value} index={i} key={i} >
            {content}
          </TabPanel>
        ))}
      </div>
    );
  }

  showRefreshButton() {
    return (
      <IconButton
        aria-label='refresh'
        fontSize='large'
        color='primary'
        onClick={this.props.refreshAction} >
        <AutorenewIcon fontSize='inherit' />
      </IconButton>
    );
  }

  render() {
    return (
      <div>
        <AppBar position='static'>
          {this.renderTabs()}
        </AppBar>
        <div>
          <div style={{
            left: '15px',
            position: 'relative',
            paddingTop: '10px',
          }}>
            {this.showRefreshButton()}
          </div>
          {this.renderContents()}
        </div>
      </ div>
    );
  }
}

export default TabsBar;

import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../sidebar';
import Pages from '../Pages';

import 'antd/dist/antd.css';
import Logo from '../../components/common/Logo';
import webLogo from '../../assets/images/logo.svg';
const { Header, Content, Sider } = Layout;

export default class Wrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const dataUrl = "https://jsonplaceholder.typicode.com/users";
        console.log('Hi');
        fetch(dataUrl)
			.then(response => response.json())
			.then(data => {
				this.setState({ data })
		})
		.catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        const data = this.state;
        return (
            <div className="Wrapper">
                <Layout>
                    <Header className="header">
                        <Logo logo={webLogo} />
                    </Header>
                    <Layout>
                        <Sider width={300} style={{ background: '#fff', margin: '20px 0 0 0' }}>
                            <Sidebar />
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px', margin: '20px 0 0 0' }}>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                                <Pages data={data.data} />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

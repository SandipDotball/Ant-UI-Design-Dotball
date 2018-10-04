import React from 'react';
import { Card, Row, Col, List } from 'antd';
import 'antd/dist/antd.css';

export default class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterData: []
        }
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(e, id) {
        const data = this.props.data;
        const filterData = data.filter(item => item.id === id );
        this.setState({ filterData });
        console.log(this.state.filterData);
    }
    render() {
        const data = this.props;
        const filterData = this.state;
        console.log(filterData);
        return (
            <div className="pages">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            title="Card title"
                            style={{  }}
                        >
                            <List
                                dataSource={data.data}
                                renderItem={item => (<List.Item>
                                    <List.Item.Meta
                                        title={<span onClick={e => this.onClickItem(e, item.id)} >{item.name}</span>}
                                    />
                                    </List.Item>)}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            title="Card title"
                            style={{  }}
                        >
                            <List
                                itemLayout="vertical"
                                size="large"
                                dataSource={filterData.filterData}
                                renderItem={item => (<List.Item>
                                    <List.Item.Meta
                                        title={<span>{item.username}</span>}
                                        description={item.website}
                                    />
                                        {item.email}
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            title="Card title"
                            style={{  }}
                        >
                            <List
                                itemLayout="vertical"
                                size="large"
                                dataSource={filterData.filterData}
                                renderItem={item => (<List.Item>
                                    <List.Item.Meta
                                        title={<span>{item.company.bs}</span>}
                                        description={item.company.catchPhrase}
                                    />
                                        {item.company.name}
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

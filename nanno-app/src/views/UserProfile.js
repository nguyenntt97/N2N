import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from './../styles/UserProfile.module.scss';
import { Card, Icon, Avatar, Row, Col, Tag, Button, Tabs, Table } from 'antd';

const { Meta } = Card;
const TabPane = Tabs.TabPane;

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cover: '/user-profile-bg.png',
            avatar: '/sample-ava.jpg',
            username: 'Irohasu',
            level: [
                {
                    background: 'magenta',
                    label: 'admin',
                },
                {
                    background: 'red',
                    label: 'member of sonako',
                },
            ],
            tabs: [
                {
                    title: 'Truyện đã đăng',
                    num: 4,
                    content: [
                        {  
                            id: 0,
                            name: 'Iris on Rainy Days',
                            status: 'Completed',
                            changedTime: '06/02/2019',
                        },
                        {  
                            id: 1,
                            name: 'Looking at the Half Moon',
                            status: 'Stalled',
                            changedTime: '06/02/2019',
                        },
                        {  
                            id: 2,
                            name: '3 minutes boy meets girl',
                            status: 'Teaser',
                            changedTime: '06/02/2019',
                        },
                        {  
                            id: 2,
                            name: 'Hyouka',
                            status: 'Active',
                            changedTime: '06/02/2019',
                        },
                    ],
                },
                {
                    title: 'Truyện đã đăng',
                    num: 4,
                    content: [
                        {  
                            id: 0,
                            name: 'Iris on Rainy Days',
                            status: 'Completed',
                            changedTime: '06/02/2019',
                        },
                        {  
                            id: 1,
                            name: 'Looking at the Half Moon',
                            status: 'Stalled',
                            changedTime: '06/02/2019',
                        },
                        {  
                            id: 2,
                            name: '3 minutes boy meets girl',
                            status: 'Teaser',
                            changedTime: '06/02/2019',
                        },
                        {  
                            id: 2,
                            name: 'Hyouka',
                            status: 'Active',
                            changedTime: '06/02/2019',
                        },
                    ],
                },
            ],
            avatarSize: 150,
            shortInfo: 'Sau một khoảng thời gian tìm hiểu và đã có thể tự coi mình không còn là gà mờ trong cái thế giới "hỗn tạp" kia, sweec không chỉ muốn là một "thường dân A" mà phải để lại chút thành tựu gì đó như trong "thế giới" cũ mà sweec đã ra đi. Sau một thời gian chuẩn bị, sweec bước vào con đường "tội lỗi" với hi vọng làm được cái gì đó trong khi tìm kiếm thêm những "đồng chí" cùng sát cánh với mình!!!',
        }
    }
    mergeLevelToUserName = (name, level) => {
        const rslt = <Row className={styles.usernameBlock}
                            type="flex"
                            justify="space-between">
                        <Col>
                            <span className={styles.username}>{name}</span>
                            {
                                level.map((item, idx) => <Tag key={idx}
                                                            color={item.background}>
                                                            {item.label}
                                                        </Tag>)
                            }
                        </Col>
                        <Col>
                            <Button type="primary">Edit</Button>
                        </Col>
                    </Row>;
        return rslt;
    }
    generateTabs = tabs => {
        const rslt = <Tabs>
                        {
                            tabs.map((item, idx) => <TabPane key={idx}
                                                        tab={item.title}>
                                                        {this.generateTabContent(item.content)}
                                                    </TabPane>)
                        }
                    </Tabs>
        return rslt;
    }
    generateTabContent = content => {
        const cols = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: 'LastChangedTime',
                dataIndex: 'changedTime',
                key: 'changedTime',
            },
        ];
        const rslt = <Table dataSource={content}
                            columns={cols}></Table>;
        return rslt;
    }
    render() {
        const cover = <div className={styles.imgBlock}>
                            <img src={this.state.cover} />
                        </div>;
        const avatar = <Avatar src={this.state.avatar}
                                size={this.state.avatarSize} />;
        const title = this.mergeLevelToUserName(this.state.username, this.state.level);
        const tab = this.generateTabs(this.state.tabs);
        return <div>
                    <Row>
                        <Col span={18} offset={3}>
                            <Card cover={cover}>
                                <Meta avatar={avatar}
                                        title={title}
                                        description={this.state.shortInfo}>
                                </Meta>
                            </Card>
                            {tab}
                        </Col>
                    </Row>
                </div>;
    }
}

export default UserProfile;
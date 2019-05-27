import React, { Component } from 'react';
import styles from './AdvancedSearch.module.scss';
import { Row, Col, Card, Form, Button, Radio, Checkbox, Rate } from 'antd';
const RadioGroup = Radio.Group;
class AdvancedSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortResultByModel: 'abc',
            viewsModel: 'detailed',
            sortResultsBy: [
                {
                    name: 'Alphabet',
                    value: 'abc',
                },
                {
                    name: 'Last Changed Time',
                    value: 'lct',
                },
                {
                    name: 'View',
                    value: 'v',
                },
                {
                    name: 'Comment',
                    value: 'cmt',
                },
            ],
            genreList: [
                {
                    id: 0,
                    name: 'action',
                },
                {
                    id: 0,
                    name: 'adult',
                },
                {
                    id: 0,
                    name: 'adventure',
                },
                {
                    id: 0,
                    name: 'comedy',
                },
                {
                    id: 0,
                    name: 'drama',
                },
                {
                    id: 0,
                    name: 'ecchi',
                },
                {
                    id: 0,
                    name: 'fantasy',
                },
                {
                    id: 0,
                    name: 'game',
                },
                {
                    id: 0,
                    name: 'gender bender',
                },
                {
                    id: 0,
                    name: 'harem',
                },
                {
                    id: 0,
                    name: 'historical',
                },
                {
                    id: 0,
                    name: 'horror',
                },
                {
                    id: 0,
                    name: 'martial arts',
                },
                {
                    id: 0,
                    name: 'mature',
                },
                {
                    id: 0,
                    name: 'mecha',
                },
                {
                    id: 0,
                    name: 'mystery',
                },
                {
                    id: 0,
                    name: 'psychological',
                },
                {
                    id: 0,
                    name: 'romance',
                },
                {
                    id: 0,
                    name: 'school life',
                },
                {
                    id: 0,
                    name: 'sci-fi',
                },
                {
                    id: 0,
                    name: 'seinen',
                },
                {
                    id: 0,
                    name: 'shotacon',
                },
                {
                    id: 0,
                    name: 'shoujo',
                },
                {
                    id: 0,
                    name: 'shounen',
                },
                {
                    id: 0,
                    name: 'slice of life',
                },
                {
                    id: 0,
                    name: 'supernatural',
                },
                {
                    id: 0,
                    name: 'tragedy',
                },
            ],
            resultList: [
                {
                    cover: '/vol1_sample.jpg',
                    title: {
                        id: 0,
                        value: 'Zaregoto',
                    },
                    author: [
                        {
                            value: 'Nishio Isin',
                            id: 1,
                        },
                    ],
                    artist: [
                        {
                            value: 'Take',
                            id: 1,
                        },
                    ],
                    translator: [
                        {
                            value: 'Pikeman',
                            id: 0,
                        },
                    ],
                    editor: [
                        {
                            value: 'Pikeman',
                            id: 0,
                        },
                    ],
                    genres: [
                        {
                            id: 1,
                            value: 'Action',
                        }
                    ],
                    rate: 4.5,
                    view: 23000,
                    comment: 120,
                    status: {
                        id: 0,
                        value: 'Completed',
                    },
                    description: 'On Wet Crow’s Feather Island, a tiny speck in the Sea of Japan, lives Akagami Iria, the exiled daughter of a powerful family. Born into great wealth, she was a princess of the highest pedigree–until she was cut off by the leader of the Akagami Foundation. For the last five years, she’s lived on Feather Island with her maids. But she hasn’t been alone. She has invited the best minds Japan has to offer to come and stay with her.',
                },
                {
                    cover: '/vol3_sample.jpg',
                    title: {
                        id: 0,
                        value: 'Hanbun no Tsuki',
                    },
                    author: [
                        {
                            value: 'Nishio Isin',
                            id: 1,
                        },
                    ],
                    artist: [
                        {
                            value: 'Take',
                            id: 1,
                        },
                    ],
                    translator: [
                        {
                            value: 'Pikeman',
                            id: 0,
                        },
                    ],
                    editor: [
                        {
                            value: 'Pikeman',
                            id: 0,
                        },
                    ],
                    genres: [
                        {
                            id: 1,
                            value: 'Action',
                        },
                        {
                            id: 1,
                            value: 'Romance',
                        }
                    ],
                    rate: 3,
                    view: 55000,
                    comment: 60,
                    status: {
                        id: 0,
                        value: 'On going',
                    },
                    description: 'Felmenia Stingray was a genius magician. She quickly became the most distinguished magician of the Astel Kingdom after her discovery of white fire magic, which had the power to burn anything.',
                },
                {
                    cover: '/vol2_sample.jpg',
                    title: {
                        id: 1,
                        value: '3 minutes boy meets girl 3 minutes boy meets girl 3 minutes boy meets girl',
                    },
                    author: [
                        {
                            value: 'Akihiko Ureshino',
                            id: 1,
                        },
                        {
                            value: 'Kenji Inoue',
                            id: 1,
                        },
                        {
                            value: 'Mizuki Nomura',
                            id: 1,
                        },
                        {
                            value: 'Sadanatsu Anda',
                            id: 1,
                        },
                    ],
                    artist: [
                        {
                            value: 'kyo',
                            id: 0,
                        },
                        {
                            value: 'Shibari',
                            id: 1,
                        },
                        {
                            value: 'Won',
                            id: 1,
                        },
                    ],
                    translator: [
                        {
                            value: 'T.stella',
                            id: 0,
                        },
                        {
                            value: 'Perfectstrong',
                            id: 0,
                        },
                        {
                            value: 'Sweec',
                            id: 0,
                        },
                        {
                            value: 'Marethyu98',
                            id: 0,
                        },
                        {
                            value: 'Ihsara',
                            id: 0,
                        },
                        {
                            value: 'Konoha-sama',
                            id: 0,
                        },
                    ],
                    editor: [],
                    genres: [
                        {
                            id: 1,
                            value: 'Slice of lice',
                        }
                    ],
                    rate: 4.5,
                    view: 23000,
                    comment: 120,
                    status: {
                        id: 0,
                        value: 'On going',
                    },
                    description: '‘3 Minutes Boy Meets Girl’ is an anthology of short stories produced by the authors working at Famitsu Bunko. There are 19 chapters from 19 different authors.',
                },
            ]
        }
    }
    ts = e => {
        if(e.target.readOnly) {
            e.target.checked = e.target.readOnly = false;
        } else if (!e.target.checked) {
            e.target.readOnly = e.target.indeterminate = true;
        }
    }
    generateCheckbox = name => <Checkbox className={styles.antdTristateCheckbox}
                                        onClick={e => this.ts(e)}
                                        name={name}>{name}</Checkbox>
    genre = (list, col) => {
        const span = 24 / col;
        const rslt = [];
        const n = list.length;
        for (let i = 0; i < n; i += col) {
            const tmp = [];
            for (let j = i; j < i + col; j += 1) {
                const item = list[j];
                if (typeof item === 'undefined') break;
                tmp.push( 
                    <Col key={j} span={span}>
                        {this.generateCheckbox(item.name)}
                    </Col>
                );
            }
            rslt.push(<Row>{tmp}</Row>);
        }
        return <div>{rslt}</div>;
    }
    handleSubmit = e => {
        e.preventDefault();
        const selectedList = [];
        const deniedList = [];
        const nonActionList = [];
        const n = e.target.length;
        for (let i = 0; i < n; i += 1) {
            const item = e.target[i];
            if (item.name !== '' && item.type === 'checkbox') {
                if (item.checked && !item.indeterminate && !item.readOnly) {
                    selectedList.push(item.name);
                } else if (!item.checked && item.indeterminate && item.readOnly) {
                    deniedList.push(item.name);
                } else {
                    nonActionList.push(item.name);
                }
            }
        }
        console.log('selected - ', selectedList);
        console.log('denied - ', deniedList);
        console.log('nonAction - ', nonActionList);
    }
    onRadioChange = (e, key) => {
        this.setState({[key]: e.target.value});
        console.log(key, this.state[key]);
    }
    sectionName = name => <Row>
                            <Col>
                                <h3>-- {name} --</h3>
                            </Col>
                        </Row>
    sort = (list, key, isSort = true) => <div>
                        <RadioGroup value={this.state[key]}
                                    onChange={e => this.onRadioChange(e, key)}>
                            {list.map((item, idx) => <Radio key={idx} value={item.value}>{item.name}</Radio>)}
                        </RadioGroup>
                        {isSort && (<Checkbox onClick={e => this.ts(e)}>
                            Desc
                        </Checkbox>)}
                    </div>
    searchSection = () => {
        const genres = <div>
                            {this.sectionName('Genres')}
                            <Row>
                                <Col>
                                    {this.genre(this.state.genreList, 4)}
                                </Col>
                            </Row>
                        </div>;
        const sorts = <div style={{marginTop: '1em'}}>
                        {this.sectionName('Sort results by')}
                        <Row>
                            <Col>
                                {this.sort(this.state.sortResultsBy, 'sortResultByModel')}
                            </Col>
                        </Row>
                    </div>
        const views = <div style={{marginTop: '1em'}}>
                        {this.sectionName('Views')}
                        <Row>
                            <Col>
                                {this.sort([{name: 'Grid', value: 'grid'}, {name: 'Detailed', value: 'detailed'}], 'viewsModel', false)}
                            </Col>
                        </Row>
                    </div>
        const buttons = <Row>
                            <Col style={{textAlign: 'right'}}>
                                <Button type="primary"
                                        htmlType="submit">Search</Button>
                                <Button style={{marginLeft: 8}}>Clear</Button>
                            </Col>
                        </Row>
        return <Card title='Advanced Search'
                        style={{marginBottom: '5px'}}>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}
                                className="ant-advanced-search-form">
                            {genres}
                            {sorts}
                            {views}
                            {buttons}
                        </Form>
                    </Col>
                </Row>
            </Card>
    }
    resultListSection = viewMode => {
        switch (viewMode) {
            case 'detailed':
                return this.detailResultList(this.state.resultList);
            case 'grid':
                return this.gridResultList(this.state.resultList);
            default:
                break;
        }
    }
    detailResultTemplate = novel => {
        const cover = <div className={styles.cover}>
                        <img src={novel.cover}/>
                    </div>;
        const info = <div>
                        <Row>
                            <Col style={{padding: '5px'}}>
                                <h4 className={styles.title}>{novel.title.value}</h4>
                                <Row type="flex" justify="space-between">
                                    <Col>
                                        <span style={{marginRight: '.5em'}}>
                                            <i className="fa fa-lg fa-eye"></i>
                                            {novel.view}
                                        </span>
                                        <Rate style={{marginRight: '.5em'}} 
                                                disabled allowHalf value={novel.rate}></Rate>
                                        <span>
                                            <i className="fa fa-comment"></i>
                                            {novel.comment}
                                        </span>
                                    </Col>
                                    <Col>
                                        <Button size="small"><i className="fa fa-bookmark"></i></Button>
                                    </Col>
                                </Row>
                                <div className={styles.detailedDescrpition}>
                                    <p>{novel.description}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>;
        return <Row className={styles.detailResultTemplate}>
                    <Col span={6}>
                        {cover}
                    </Col>
                    <Col span={18}>
                        {info}
                    </Col>
                </Row>
    }
    gridResultTemplate = novel => {
        const info = <div className={styles.info}>
            <h5 className={styles.title}><a href="#" title={novel.title.value}>{novel.title.value}</a></h5>
        </div>
        return <Row>
                <Col className={styles.gridResultTemplate}>
                    <div className={styles.cover}>
                        <img src={novel.cover} />
                        {info}
                    </div>  
                </Col>
            </Row>
    }
    generateResultList = (list, col, template) => {
        const n = list.length;
        const span = 24 / col;
        const rslt = [];
        for (let i = 0; i < n; i += span) {
            const tmp = [];
            for (let j = i; j < i + span; j += 1) {
                const item = list[j];
                if (typeof item === 'undefined') break;
                tmp.push(<Col key={j} span={span}>{template(item)}</Col>);
            }
            rslt.push(<Row>{tmp}</Row>);
        }
        return <Row>
                    <Col>
                        {rslt}
                    </Col>
                </Row>
    }
    detailResultList = list => this.generateResultList(list, 2, this.detailResultTemplate)
    gridResultList = list => this.generateResultList(list, 6, this.gridResultTemplate)
    render() {
        const rslt = <div>
                        <Row>
                            <Col span={18} offset={3}>
                                {this.searchSection()}
                                {this.resultListSection(this.state.viewsModel)}
                            </Col>
                        </Row>
                    </div>;
        return rslt;
    }
}

export default AdvancedSearch;
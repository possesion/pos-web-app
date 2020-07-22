import React, { Component } from 'react';
import profile from '../assets/profile2.jpg';
import portfolio from '../assets/game.png';
import tourism from '../assets/portfolioS.jpg';
import ContactList from './ContactList.js';
import _ from 'lodash';
import { Card, Container, Badge, Button, Col, Row, ListGroup } from 'react-bootstrap';

class Main extends Component {
  render() {
    const { data } = this.props;

    const getSkills = data.map((item) => (
      <React.Fragment key={_.uniqueId()}>
        <Badge variant="success">{item}</Badge>{' '}
      </React.Fragment>
    ));

    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Card>
              <Card.Img variant="top" src={profile} />
              <Card.Body>
                <Card.Title>Казанцев Геннадий</Card.Title>
                <Card.Text>
                  Junior frontend разработчик. Увлекаюсь: <br />• Каллиграфией <br /> • Астрономией <br /> • Грокаю алгоритмы <hr />Реализовал несколько учебных проектов. Эксперементирую над интересными задачами в Codepen.
                </Card.Text>
                <ContactList />
                <Button variant="primary" size='sm' href='https://drive.google.com/file/d/1ikkIR3v_RrHTWTvFt1Yi3VoreyWJpcc0/view?usp=sharing'>скачать резюме</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} xs={12}>
            <Card>
              <Card.Img variant="top" src="https://asciinema.org/a/G1z1wfYaV4qpjtHwB9KLhsudY.svg" />
              <Card.Body>
                <Card.Title>Проект: Игры разума</Card.Title>
                <Card.Text>
                  Набор мини игр, запускающихся из командной строки. Реализованно на чистом JS.
                </Card.Text>
                <Button variant="primary" size='sm' href='https://github.com/possesion/frontend-project-lvl1'>Узнать больше</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" style={{ height: '300px' }} src={tourism} />
              <Card.Body>
                <Card.Title>Верстка- Сайт туроператора</Card.Title>
                <Card.Text>
                  Набор мини игр, запускающихся из командной строки. Реализованно на чистом JS.
                </Card.Text>
                <Button variant="primary" size='sm' href='https://possesion.github.io/websiteAnimate/'>Посмотреть</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={portfolio} style={{ width: '50%', margin: 'auto' }} />
              <Card.Body>
                <Card.Title>Пятнашки на чистом JS</Card.Title>
                <Card.Text>
                  Передвиньте блоки так, чтобы сформировался натуральный ряд чисел от 1 до 20.
                </Card.Text>
                <Button variant="primary" size='sm' action href='https://codepen.io/possesion/pen/eYpzeWW'>Играть</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h3>Скиллы</h3>
            {getSkills}
            <div style={{marginTop: '20px'}}>
              <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link2" disabled>
                  <strong>Примеры кода</strong>
                </ListGroup.Item>
                <ListGroup.Item action href="https://codepen.io/possesion/pen/PoZQqyr">
                  Бинарная сортировка
                </ListGroup.Item>
                <ListGroup.Item action href='https://codepen.io/possesion/pen/QWyaWGq'>
                  Пример формы на React
                </ListGroup.Item>
                <ListGroup.Item action href='https://codepen.io/possesion/pen/abvxLBQ?editors=1112'>
                  Проверка на коллизию
                </ListGroup.Item>
                <ListGroup.Item action href='https://codepen.io/possesion/pen/KKdxxrL?editors=1112'>
                  Фильтр почтовых адресов
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}


const skills = ['HTML', 'CSS', 'JS', 'React Native', 'React Native', 'Git', 'Linux', 'Bash', 'CD/CI', 'модульное тестирование', 'Jest', 'Bootstrap', 'npm' ];
export { skills };
export default Main;

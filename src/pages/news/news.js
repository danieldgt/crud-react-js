import React, { Component } from 'react';
import { Content, Row, Col, Box, Button } from 'adminlte-2-react';
import styles from './style-news.css'; 

function News(props) {
  const [noticias, setNoticias] = React.useState('Default');

  function loadNews() {
    console.log('iniciando busca de notícias!');
    fetch("http://localhost:3001/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNoticias(JSON.stringify(data));
      });
  }

  const CleanNews = () => {
    setNoticias("Novas Notícias");
  }

  return (<Content title="Notícias" subTitle="Getting started with adminlte-2-react" browserTitle="News">
    <Row>
      <Col xs={12}>
        <Box title="Clique no Botal Para carregar novas notícias" type="primary" closable collapsable
          
          footer={[
          <Button type="primary" className={styles.buttonsFooter} text="Notícias" onClick={loadNews} />,
          <Button type="default" text="Limpar" onClick={CleanNews} />
          ]}>
          <h3>{noticias}</h3>
        </Box>
      </Col>
    </Row>
  </Content>);
}
export default News;
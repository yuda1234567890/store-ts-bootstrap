import { FC, ReactElement } from "react";
import styles from "./style.module.css"
import { Container, Row, Col } from "react-bootstrap"

const Home: FC = (): ReactElement => {
    return (<>

        <div className={`${styles.main} d-flex justify-content-center align-items-center`}>
            <h1 className="text-light">my store</h1>
        </div>

        <Container fluid>
            <Row className="py-4">
                <h2>about</h2>
            </Row>

            <Row>
                <Col className={styles.aboutImg} xs={12} md={6} >

                </Col>
                <Col xs={12} md={6} className="p-5" >
                    <h3>we are soooo great!!</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis omnis sit magnam nam aspernatur nostrum saepe. Quae repellat ad perferendis quo dicta quas, nesciunt nemo autem ex, animi laborum.
                    </p>
                </Col>
            </Row>

        </Container>


    </>)
}

export default Home
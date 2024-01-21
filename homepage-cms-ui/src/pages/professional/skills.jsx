import React from "react";
import { useLoaderData } from "react-router-dom";
import SkillEditor from "../../components/skillEditor";
import { Container, Row } from "react-bootstrap";

const Skills = () => {

    const skills = useLoaderData();

    return (


        <Container>
            <Row md={1} />
            <Row md={10}>
                <h1>Skills</h1>
                <br />
                {
                    skills.map(s => <SkillEditor skill={s} key={s.categoryName} />)
                }
            </Row>
            <Row md={1} />
        </Container>
    )
}

export default Skills;
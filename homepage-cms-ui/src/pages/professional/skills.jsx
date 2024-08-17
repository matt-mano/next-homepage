import React from "react";
import SkillEditor from "../../components/skillEditor";
import { Container, Row } from "react-bootstrap";

const Skills = () => {

    React.useEffect(() => {
        fetch("/api/skills", { mode: 'cors' }).then(resp => {
            resp.json().then((s) => setSkills(s));
        });
    }, []);

    const [skills, setSkills] = React.useState([]);

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
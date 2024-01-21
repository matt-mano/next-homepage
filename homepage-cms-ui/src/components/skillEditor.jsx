import React, { useState } from "react";
import { ButtonGroup, Card, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SkillEditor = (props) => {

    const [skill, setSkill] = useState({ ...props.skill });

    const setTitle = (title) => {
        setSkill({
            ...skill,
            categoryName: title
        });
    }

    const updateSkill = (value, idx) => {
        const list = skill.skills;
        list[idx] = value;

        setSkill({
            ...skill,
            skills: list
        });
    }

    const addSkill = () => {
        const list = skill.skills;
        list.push("");

        setSkill({
            ...skill,
            skills: list
        });
    }

    const submit = () => {
        alert("TO DO");
    }

    const del = () => {
        alert("TODO")
    }

    return (
        <Form>
            <Card>
                <Card.Header>
                    <Card.Title>
                        <Form.Group className="mb-3">
                            <Form.Label>Skill Category</Form.Label>
                            <Form.Control type="text" placeholder="Skill Category" onChange={(val) => setTitle(val.value)} value={skill.categoryName} />
                        </Form.Group>
                    </Card.Title>
                </Card.Header>
                <Card.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Skills</Form.Label>
                    </Form.Group>
                    {
                        skill.skills.map((s, i) => <Form.Group key={i} className="mb-3">
                            <FormControl type="text" onChange={(val) => updateSkill(val.value, i)} value={s} />
                        </Form.Group>
                        )
                    }
                    <ButtonGroup>
                        <Button variant="primary" type="button" onClick={addSkill}>
                            Add
                        </Button>
                        <Button variant="danger" type="button" onClick={del}>
                            Delete
                        </Button>
                        <Button variant="success" type="button" onClick={submit}>
                            Update
                        </Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
            <br />
        </Form>
    )

}
export default SkillEditor;
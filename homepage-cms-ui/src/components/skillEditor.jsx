import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SkillEditor = (props) => {
    const [skill, editedSkill] = useState(props.skill);

    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Skill Category</Form.Label>
                    <Form.Control type="text" placeholder="Skill Category" value={skill.categoryName} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Skills</Form.Label>

                </Form.Group>

                {
                    skill.skills.map(s => <Form.Group key={s} className="mb-3">
                        <FormControl type="text" value={s} />
                    </Form.Group>
                    )
                }

                <Button variant="primary" type="button">
                    Save
                </Button>
            </Form>
        </div>
    )

}

export default SkillEditor;
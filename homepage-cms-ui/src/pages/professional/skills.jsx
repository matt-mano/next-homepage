import React from "react";
import { useLoaderData } from "react-router-dom";
import SkillEditor from "../../components/skillEditor";

const Skills = () => {

    const skills = useLoaderData();

    return (


        <div>
            <h1>Skills</h1>
            <br />
            {
                skills.map(s => <SkillEditor skill={s} key={s.categoryName} />)
            }
        </div>
    )
}

export default Skills;
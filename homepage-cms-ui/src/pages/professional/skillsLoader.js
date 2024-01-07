const skillsLoader = async () => {
    const resp = await fetch("/api/skills", { mode: 'cors' });
    const data = await resp.json();
    console.log(data);
    return data;
}

export default skillsLoader;
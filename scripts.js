document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");

    const aboutSection = `
        <section id="about">
            <h2>About Me</h2>
            <p>A brief description about yourself.</p>
        </section>
    `;

    const resumeSection = `
        <section id="resume">
            <h2>Resume</h2>
            <p>UNSW Aerospace Engineering with Honours.</p>
        </section>
    `;

    const projectsSection = `
        <section id="projects">
            <h2>Projects</h2>
            <p>Coming Soon.</p>
        </section>
    `;

    const contactSection = `
        <section id="contact">
            <h2>Contact</h2>
            <p>Email me at liana.sellam@hotmail.com.</p>
        </section>
    `;

    content.innerHTML = aboutSection + resumeSection + projectsSection + contactSection;
});

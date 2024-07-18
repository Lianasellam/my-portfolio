document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");

    const aboutSection = `
        <section id="about">
            <h2>About Me</h2>
            <p>Hi.</p>
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
            <div class="project">
                <img src="Images/IMG_1401.png" alt="Project 1">
                <p>Pulsed light with a 3D printed chopper: I used a Raspberry Pico with a motor and created pulses through the 100 slots of the blade.</p>
            </div>
            <p>Coming Soon.</p>
        </section>
    `;

    const contactSection = `
        <section id="contact">
            <h2>Contact</h2>
            <p>Email: liana.sellam@hotmail.com</p>
        </section>
    `;

    content.innerHTML = aboutSection + resumeSection + projectsSection + contactSection;
});

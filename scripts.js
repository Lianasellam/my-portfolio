document.addEventListener("DOMContentLoaded", function() {
    const enterButton = document.getElementById('enter-button');
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    const content = document.getElementById('content');

    enterButton.addEventListener('click', function() {
        landingPage.style.display = 'none';
        mainContent.style.display = 'block';
        loadMainContent();
    });

    function loadMainContent() {
        const aboutSection = `
            <section id="about">
                <h2>About Me</h2>
                <p>Hi, I am a US & French freshly Graduate Aerospace Engineer living in Sydney.</p>
            </section>
        `;

        const resumeSection = `
            <section id="resume">
                <h2>Resume</h2>
                <p>Bachelor of Aerospace Engineering (Honours), University of New South Wales (UNSW), June 2024</p>
                <p>Relevant Coursework: Financial Engineering, Statistical Analysis, Advanced Programming</p>
                <p>Thesis: IR Device and Website Development for Sports Bar TV Channel Automation</p>
                <p>Award: Warwick Slade Royal Aeronautical Society Prize 2022</p>
                <p>Activities: Outreach Director, UNSW Aerospace Society</p>
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
    }
});

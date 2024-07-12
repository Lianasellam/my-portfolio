document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");

    const aboutSection = `
        <section id="about">
            <h2>About Me</h2>
            <p>Coming Soon.</p>
        </section>
    `;

    const resumeSection = `
        <section id="resume">
            <h2>Resume</h2>
            <button id="viewResumeBtn">View Resume</button>
            <div id="resumeContainer" style="display: none;">
                <iframe src="https://github.com/lianasellam/portfolio/raw/main/assets/resume.pdf" width="100%" height="600px"></iframe>
            </div>
        </section>
    `;

    const projectsSection = `
        <section id="projects">
            <h2>Projects</h2>
            <div class="project">
                <h3>Edge AI: Satellite Imagery Recognition with Raspberry Pi Pico</h3>
                <p><strong>Description:</strong></p>
                <p>Implemented a machine learning model on a Raspberry Pi Pico to recognize features in satellite images, demonstrating the capabilities of edge computing.</p>
                <p><strong>Components/Tools Used:</strong></p>
                <p>Raspberry Pi Pico, TensorFlow Lite, Edge Impulse, Python</p>
                <p><strong>Skills Demonstrated:</strong></p>
                <p>Machine Learning, Edge Computing, Programming</p>
            </div>
        </section>
    `;

    const contactSection = `
        <section id="contact">
            <h2>Contact</h2>
            <p>Coming Soon</p>
        </section>
    `;

    content.innerHTML = aboutSection + resumeSection + projectsSection + contactSection;

    document.getElementById('viewResumeBtn').addEventListener('click', function() {
        const resumeContainer = document.getElementById('resumeContainer');
        if (resumeContainer.style.display === 'none') {
            resumeContainer.style.display = 'block';
        } else {
            resumeContainer.style.display = 'none';
        }
    });
});


    content.innerHTML = aboutSection + resumeSection + projectsSection + contactSection;
});

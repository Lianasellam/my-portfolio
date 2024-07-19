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
                <img src="Images/your-photo.png" alt="Liana McMillan Sellam">
                <p>Hi, I'm Liana McMillan Sellam, an aerospace engineer with a passion for innovation and technology. Welcome to my portfolio!</p>
            </section>
        `;

        const journeySection = `
            <section id="journey">
                <h2>My Journey</h2>
                <div class="timeline">
                    <div class="event">
                        <h3>2019-2024: Bachelor of Engineering in Aerospace (honours) - University of New South Wales</h3>
                         <p>Relevant Coursework: Financial Engineering, Statistical Analysis, Advanced Programming</p>
                         <p>Thesis: IR Device and Website Development for Sports Bar TV Channel Automation</p>
                         <p>Award: Warwick Slade Royal Aeronautical Society Prize 2022</p>
                         <p>Activities: Outreach Director, UNSW Aerospace Society</p>
                    </div>
                    <div class="event">
                        <h3>2023: Space Intern - Vidi Astra</h3>
                        <p>R&D for Space based LiDAR.</p>
                    </div>
                    <!-- Add more events as needed -->
                </div>
            </section>
        `;

        const skillsSection = `
            <section id="skills">
                <h2>My Skills</h2>
                <div class="skills-list">
                    <div class="skill">
                        <span>HTML</span>
                        <div class="skill-bar" style="width: 90%;"></div>
                    </div>
                    <div class="skill">
                        <span>CSS</span>
                        <div class="skill-bar" style="width: 80%;"></div>
                    </div>
                    <div class="skill">
                        <span>JavaScript</span>
                        <div class="skill-bar" style="width: 75%;"></div>
                    </div>
                    <div class="skill">
                        <span>Python</span>
                        <div class="skill-bar" style="width: 70%;"></div>
                    </div>
                    <!-- Add more skills as needed -->
                </div>
            </section>
        `;

        const contactSection = `
            <section id="contact">
                <h2>Contact Me</h2>
                <form class="contact-form">
                    <input type="text" placeholder="Full Name">
                    <input type="email" placeholder="Email Address">
                    <input type="text" placeholder="Mobile Number">
                    <input type="text" placeholder="Email Subject">
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
        `;

        content.innerHTML = aboutSection + journeySection + skillsSection + contactSection;
    }
});

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
                <img src="Images/your-photo.png" alt="Liana McMillan Sellam">
                <p>Hi, I'm Liana McMillan Sellam, an aerospace engineer with a passion for innovation and technology. Welcome to my portfolio!</p>
            </section>
        `;

        const journeySection = `
            <section id="journey">
                <h2>My Journey</h2>
                <div class="tabs">
                    <button class="tab-link active" onclick="openTab(event, 'education')">Education</button>
                    <button class="tab-link" onclick="openTab(event, 'experience')">Experience</button>
                </div>
                <div id="education" class="tab-content active">
                    <div class="timeline">
                        <div class="event">
                            <h3>2019-2024: Bachelor of Engineering in Aerospace (honours) - University of New South Wales</h3>
                         <p>Relevant Coursework: Financial Engineering, Statistical Analysis, Advanced Programming</p>
                         <p>Thesis: IR Device and Website Development for Sports Bar TV Channel Automation</p>
                         <p>Award: Warwick Slade Royal Aeronautical Society Prize 2022</p>
                         <p>Activities: Outreach Director, UNSW Aerospace Society</p>
                        </div>
                        <div class="event">
                            <h3>2018-2019: Intern - Focus4communications </h3>
                            <p>Paris France.</p>
                        </div>
                        <!-- Add more events as needed -->
                    </div>
                </div>
                <div id="experience" class="tab-content">
                    <div class="timeline">
                        <div class="event">
                            <h3>Oct2023 - Feb2024: Space Intern - Vidi Astra</h3>
                            <p>R&D for Space based LiDAR.</p>
                        </div>
                        <div class="event">
                            <h3>2024-Now: Space Missions Manager - Spiral Blue</h3>
                            <p>Developping Earth Observation applications.</p>
                        </div>
                        <!-- Add more events as needed -->
                    </div>
                </div>
            </section>
        `;

        const skillsSection = `
           

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
                <p>Hi, I'm a recent graduate from UNSW with a bachelor's degree in aerospace engineering. </p>
                <p>  have one year of work experience and dual French and American citizenship. </p>
                <p> In addition to my engineering background, I have taken courses in data modeling and enjoy playing games like poker and chess. </p>
                <p> Currently, I am based in Sydney, working as a Mission Space Manager for a space edge computing company. </p>
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
           

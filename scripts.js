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
                <p>Hi, I'm a recent graduate from UNSW with a bachelor's degree in aerospace engineering.</p>
                <p>I have one year of work experience and dual French and American citizenship.</p>
                <p>In addition to my engineering background, I have taken courses in data modeling and enjoy playing games like poker and chess.</p>
                <p>Currently, I am based in Sydney, working as a Mission Space Manager for a space edge computing company.</p>
            </section>
        `;

        const journeySection = `
            <section id="journey">
                <h2>My Journey</h2>
                <div class="timeline">
                    <div class="event">
                        <h3>2019-2024: Bachelor of Engineering (Honours) in Aerospace - University of New South Wales</h3>
                        <p>Description of your degree and activities.</p>
                    </div>
                    <div class="event">
                        <h3>2024-Now: Space Missions Manager - Spiral Blue</h3>
                        <p>Developping Earth Observation Methods.</p>
                    </div>
                    <div class="event">
                        <h3>2023-2024: Space Engineer - Vidi Astra</h3>
                        <p>R&D in Developping Space Based LiDAR .</p>
                    </div>
                     <div class="event">
                        <h3>2018-2019: Intern - Focus4Communications</h3>
                        <p> Paris, France.</p>
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


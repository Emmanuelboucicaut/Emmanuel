import _ShowcaseTitle from "./_ShowcaseTilte";
import _ShowcaseOverview from "./_ShowcaseOverview";
import Swal from "sweetalert2";
import "../styles/Showcase.css";

const Showcase = () => {
  const handlePopup = () => {
    Swal.fire({
      title: '<h2 class="text-dark">My Expertise Overview</h2>',
      html: `
        <div class="container py-2">
        <!-- Front-End Section -->
        <div class="mb-4">
            <h3 class="text-sm-start text-dark">Front-End Technologies</h3>
            <ul class="text-sm-start m-2 text-primary text-tech">
                <li><strong>Core Languages:</strong> HTML5, CSS3, JavaScript (ES6+)</li>
                <li><strong>Frameworks and Libraries:</strong> React.js, Angular</li>
                <li><strong>CSS Frameworks:</strong> Bootstrap</li>
                <li><strong>UI Libraries:</strong> Material-UI</li>
                <li><strong>Version Control:</strong> Git, GitHub/GitLab</li>
            </ul>
        </div>

        <!-- Back-End Section -->
        <div class="mb-4">
            <h3 class="text-sm-start text-dark">Back-End Technologies</h2>
            <ul class="text-sm-start m-2 text-primary text-tech">
                <li><strong>Languages:</strong> Node.js, Python, Java, C#</li>
                <li><strong>Frameworks:</strong> Express.js, ASP.NET Core</li>
                <li><strong>Databases:</strong> SQL (MySQL, PostgreSQL), NoSQL (MongoDB), In-Memory (Redis)</li>
                <li><strong>Authentication:</strong> JWT, OAuth2</li>
                <li><strong>API Development:</strong> RESTful APIs</li>
            </ul>
        </div>

        <!-- Mobile Development Section -->
        <div class="mb-4">
            <h3 class="text-sm-start text-dark">Mobile Technologies</h3>
            <ul class="text-sm-start m-2 text-primary text-tech">
                <li><strong>Native Development:</strong> Swift (iOS), Kotlin (Android), Java (Android)</li>
                <li><strong>Cross-Platform Development:</strong> Flutter, React Native, Xamarin/.NET MAUI, Ionic</li>
                <li><strong>Backends for Mobile:</strong> Firebase, AWS Amplify, Parse Server</li>
            </ul>
        </div>

        <!-- DevOps Section -->
        <div>
            <h3 class="text-sm-start text-dark">DevOps Technologies</h3>
            <ul class="text-sm-start m-2 text-primary text-tech">
                <li><strong>Version Control:</strong> Git, SVN</li>
                <li><strong>CI/CD:</strong> Jenkins, GitHub Actions, GitLab CI/CD, Azure DevOps</li>
                <li><strong>Infrastructure as Code:</strong> Terraform, AWS CloudFormation, Ansible</li>
                <li><strong>Containerization and Orchestration:</strong> Docker, Kubernetes</li>
                <li><strong>Cloud Platforms:</strong> AWS, Azure</li>
                <li><strong>Web Servers:</strong> Nginx, Apache, IIS</li>
            </ul>
        </div>
    </div>
      `,
      showCloseButton: true,
      // showCancelButton: true,
      confirmButtonText: "OK"
      // cancelButtonText: "Cancel"
    });

    // Add a custom event listener to the custom button
    Swal.getPopup()
      ?.querySelector("#custom-btn")
      ?.addEventListener("click", () => {
        Swal.fire("Custom button clicked!", "", "info");
      });
  };

  return (
    <div>
      <section className="bg-dark text-light p-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex mt-5 align-items-center justify-content-between">
            <div>
              <_ShowcaseTitle />
              <_ShowcaseOverview />
              <button
                type="button"
                className="btn btn-primary btn-lg text-sm-start"
                onClick={handlePopup}
              >
                Expertise Overview
              </button>
            </div>
            <div>
              <img
                className="img-fluid d-none d-sm-block rounded-circle"
                src="images/EmmanuelBoucicaut.jpg"
                alt="Emmanuel Boucicaut"
                style={{ width: "550px", height: "250px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;

import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="roadmap-container">
  <h1>DevOps Learning Roadmap</h1>
  
  <div class="roadmap-grid">
    <!-- Row 1 -->
    <div class="roadmap-box box-1">
      <div class="box-icon">🦉</div>
      <div class="box-title">Beginner</div>
      <div class="box-desc">Start here</div>
    </div>
    
    <div class="roadmap-box box-2">
      <div class="box-icon">💻</div>
      <div class="box-title">Programming Language</div>
      <div class="box-desc">Python, Bash, Go</div>
    </div>
    
    <div class="roadmap-box box-3">
      <div class="box-icon">📌</div>
      <div class="box-title">Version Control</div>
      <div class="box-desc">Git, GitHub</div>
    </div>

    <!-- Row 2 -->
    <div class="roadmap-box box-4">
      <div class="box-icon">⚙️</div>
      <div class="box-title">CI/CD Tools</div>
      <div class="box-desc">Jenkins, GitLab CI</div>
    </div>
    
    <div class="roadmap-box box-5">
      <div class="box-icon">🛠️</div>
      <div class="box-title">Management Tool & Deployment</div>
      <div class="box-desc">Kubernetes, Docker</div>
    </div>
    
    <div class="roadmap-box box-6">
      <div class="box-icon">🤖</div>
      <div class="box-title">Automation Tools</div>
      <div class="box-desc">Ansible, Terraform</div>
    </div>

    <!-- Row 3 -->
    <div class="roadmap-box box-7">
      <div class="box-icon">🧪</div>
      <div class="box-title">Test Automation</div>
      <div class="box-desc">Selenium, JUnit</div>
    </div>
    
    <div class="roadmap-box box-8">
      <div class="box-icon">📊</div>
      <div class="box-title">Monitoring Tools</div>
      <div class="box-desc">Prometheus, ELK</div>
    </div>
    
    <div class="roadmap-box box-9">
      <div class="box-icon">🗄️</div>
      <div class="box-title">DBMS</div>
      <div class="box-desc">PostgreSQL, MongoDB</div>
    </div>

    <!-- Row 4 -->
    <div class="roadmap-box box-10">
      <div class="box-icon">☁️</div>
      <div class="box-title">Cloud Computing</div>
      <div class="box-desc">AWS, Azure, GCP</div>
    </div>
    
    <div class="roadmap-box box-11">
      <div class="box-icon">📦</div>
      <div class="box-title">Container Orchestration</div>
      <div class="box-desc">Kubernetes</div>
    </div>
    
    <div class="roadmap-box box-12">
      <div class="box-icon">🐳</div>
      <div class="box-title">Containerization</div>
      <div class="box-desc">Docker, Podman</div>
    </div>
  </div>
</div>
`

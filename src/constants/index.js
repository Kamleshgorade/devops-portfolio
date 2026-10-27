import {
  FiUsers, FiSearch, FiZap, FiCheckSquare, FiRefreshCw, FiCode,
  FiShield, FiBarChart2, FiMessageSquare, FiCpu,
  FiGlobe, FiLayout, FiServer, FiCloud, FiMonitor
} from 'react-icons/fi'
import { tcs, puneUniversity, aws, gcp, docker, git, k8s, helm, terraform, python, nodejs, mongodb,
  reactjs, javascript, jenkins, grafana, prometheus, argocd, linux, bash,
  pjEc2, pjVpc, pjToolkit, pjCompose, pjShop } from '../assets'

const GH = 'https://github.com/goradekamlesh' // change if your GitHub username differs

export const navLinks = [
  { path: '/experience', key: 'nav.experience' },
  { path: '/education', key: 'nav.education' },
  { path: '/portfolio', key: 'nav.portfolio' },
  { path: '/contact', key: 'nav.contact' }
]

export const companies = [
  {
    name: 'Tata Consultancy Services',
    icon: tcs,
    location: 'Mumbai, India',
    period: { en: 'February 2024 - Present' },
    website: 'https://www.tcs.com/',
    description: {
      en: 'IT services and consulting company. I work on the Kroger account as a DevOps engineer: release engineering, Kubernetes operations and production support.'
    }
  }
]

export const experiences = [
  {
    title: { en: 'DevOps Engineer' },
    company_name: 'Tata Consultancy Services',
    icon: tcs,
    contract: { en: 'Full-time' },
    date: { en: 'February 2024 - Present' },
    featured: 'Client: Kroger',
    skills: ['Harness', 'Rancher', 'Kubernetes', 'Dynatrace', 'Datadog', 'Grafana', 'Kibana', 'Jira', 'ServiceNow'],
    points: [
      { en: 'Run releases across Dev, Test, UAT and Production with Harness and Rancher/Kubernetes, including pre-flight readiness checks and post-deployment validation.' },
      { en: 'Monitor platform health and resolve high-severity production incidents across microservices using Dynatrace, Datadog, Grafana and Kibana.' },
      { en: 'Operate Kubernetes environments through Rancher and keep configuration consistent between non-production and production clusters.' },
      { en: 'Coordinate release dependencies, cutovers and operational handovers with Engineering, QA and Support teams in other time zones.' },
      { en: 'Track change records and incidents in Jira and ServiceNow.' }
    ]
  }
]

export const education = [
  {
    degree: { en: 'Bachelor of Engineering - Electronics & Telecommunication (CGPA 8.11/10)' },
    school: 'Pune University',
    location: 'Pune, India',
    date: { en: '2019 - 2023' },
    year: '2019',
    icon: puneUniversity
  },
  {
    degree: { en: 'AWS Certified Solutions Architect - Associate' },
    school: 'Amazon Web Services',
    location: 'Certification',
    date: { en: 'Certified' },
    year: 'Cert',
    icon: aws
  },
  {
    degree: { en: 'AWS Certified CloudOps Engineer - Associate' },
    school: 'Amazon Web Services',
    location: 'Certification',
    date: { en: 'Certified' },
    year: 'Cert',
    icon: aws
  },
  {
    degree: { en: 'AWS Certified Cloud Practitioner' },
    school: 'Amazon Web Services',
    location: 'Certification',
    date: { en: 'Certified' },
    year: 'Cert',
    icon: aws
  },
  {
    degree: { en: 'Google Cloud Professional Cloud Architect' },
    school: 'Google Cloud',
    location: 'Certification',
    date: { en: 'Certified' },
    year: 'Cert',
    icon: gcp
  }
]

// level is 1-4: adjust to how you want to present yourself
export const competences = [
  {
    category: { en: 'Technical Skills' },
    items: [
      { title: { en: 'Release & CI/CD' }, description: { en: 'Harness, Jenkins, GitHub Actions, ArgoCD (GitOps)' }, level: 4 },
      { title: { en: 'Containers & Orchestration' }, description: { en: 'Docker, Kubernetes, Rancher, Helm' }, level: 4 },
      { title: { en: 'Monitoring & Observability' }, description: { en: 'Prometheus, Grafana, Datadog, Dynatrace, Kibana (ELK)' }, level: 4 },
      { title: { en: 'Cloud' }, description: { en: 'AWS, Azure, GCP' }, level: 3 },
      { title: { en: 'Infrastructure as Code' }, description: { en: 'Terraform, AWS CloudFormation' }, level: 3 },
      { title: { en: 'Linux & Scripting' }, description: { en: 'Linux/Unix administration, Bash, Git, GitHub' }, level: 3 },
      { title: { en: 'MLOps (learning)' }, description: { en: 'MLflow, Kubeflow, Airflow' }, level: 1 }
    ]
  },
  {
    category: { en: 'Functional Skills' },
    items: [
      { title: { en: 'Release governance' }, description: { en: 'Readiness checks, change records, cutovers' }, level: 3 },
      { title: { en: 'Incident response' }, description: { en: 'Triage and remediation of production incidents' }, level: 3 },
      { title: { en: 'Collaboration' }, description: { en: 'Global teams, Jira, Confluence, ServiceNow, Scrum' }, level: 3 }
    ]
  }
]

export const skillCategories = [
  { title: 'Containers', skills: [{ name: 'Docker', icon: docker }, { name: 'Kubernetes', icon: k8s }, { name: 'Helm', icon: helm }] },
  { title: 'CI/CD', skills: [{ name: 'Jenkins', icon: jenkins }, { name: 'ArgoCD', icon: argocd }, { name: 'Git', icon: git }] },
  { title: 'Cloud & IaC', skills: [{ name: 'AWS', icon: aws }, { name: 'GCP', icon: gcp }, { name: 'Terraform', icon: terraform }] },
  { title: 'Observability', skills: [{ name: 'Prometheus', icon: prometheus }, { name: 'Grafana', icon: grafana }] }
]

export const technologies = [
  { name: 'AWS', icon: aws },
  { name: 'GCP', icon: gcp },
  { name: 'Docker', icon: docker },
  { name: 'Kubernetes', icon: k8s },
  { name: 'Helm', icon: helm },
  { name: 'Terraform', icon: terraform },
  { name: 'Jenkins', icon: jenkins },
  { name: 'ArgoCD', icon: argocd },
  { name: 'Git', icon: git },
  { name: 'Prometheus', icon: prometheus },
  { name: 'Grafana', icon: grafana },
  { name: 'Linux', icon: linux },
  { name: 'Bash', icon: bash },
  { name: 'Python', icon: python }
]

export const projects = [
  {
    name: 'Auto-deployed Nginx on EC2',
    shortDescription: { en: 'A deploy script kept in GitHub that an EC2 server pulls and runs, then the same deployment with no SSH using EC2 User Data.' },
    description: {
      en: 'I wrote a shell script that installs Nginx and publishes a page, pushed it to GitHub, and ran it on a fresh Ubuntu EC2 instance. I then moved the same steps into EC2 User Data so cloud-init configures the server at first boot, with no SSH session.\n\nA connection timeout during testing was caused by a missing HTTP rule in the security group, which I found by checking the instance rules.'
    },
    technologies: [
      { name: 'AWS EC2', url: 'https://aws.amazon.com/ec2/' },
      { name: 'Bash', url: 'https://www.gnu.org/software/bash/' },
      { name: 'Nginx', url: 'https://nginx.org/' },
      { name: 'cloud-init', url: 'https://cloudinit.readthedocs.io/' }
    ],
    links: [{ label: 'GitHub repository', url: `${GH}/devops-projects/tree/main/01-ec2-nginx-deploy` }],
    tasks: [
      { en: 'Instance and security group setup' },
      { en: 'Deploy script in Bash' },
      { en: 'Zero-touch deployment with User Data' },
      { en: 'Debugging a failed connection' }
    ],
    image: pjEc2
  },
  {
    name: 'Secure VPC with bastion host',
    shortDescription: { en: 'A custom VPC with public and private subnets, a NAT gateway, and a private server reached through EC2 Instance Connect Endpoint.' },
    description: {
      en: 'I built a VPC from scratch: public and private subnets, route tables, an internet gateway and a NAT gateway so the private server can reach the internet without a public IP. The private server only accepts SSH from another security group, not from IP addresses.\n\nI debugged several real problems along the way: IPv4 and IPv6 mismatches in security group rules, a missing prefix list rule, and a route that pointed at a deleted NAT gateway.'
    },
    technologies: [
      { name: 'AWS VPC', url: 'https://aws.amazon.com/vpc/' },
      { name: 'NAT Gateway', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html' },
      { name: 'Security Groups', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html' },
      { name: 'EC2 Instance Connect', url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-using-eice.html' }
    ],
    links: [{ label: 'GitHub repository', url: `${GH}/devops-projects` }],
    tasks: [
      { en: 'Network design: subnets, routing, NAT' },
      { en: 'Security group chaining' },
      { en: 'Private access without public IPs' },
      { en: 'Troubleshooting connectivity' }
    ],
    image: pjVpc
  },
  {
    name: 'Linux Ops Toolkit',
    shortDescription: { en: 'A system health check, log retention script and a service watchdog with retry logic, scheduled with cron.' },
    description: {
      en: 'Three Bash scripts: a health check for CPU, memory and disk, a log cleanup that compresses after one day and deletes after seven, and a watchdog that restarts Nginx when it is down.\n\nThe watchdog first reported false failures because it checked the service too soon after a restart, so I replaced the single sleep with a retry loop.'
    },
    technologies: [
      { name: 'Bash', url: 'https://www.gnu.org/software/bash/' },
      { name: 'systemd', url: 'https://systemd.io/' },
      { name: 'cron', url: 'https://man7.org/linux/man-pages/man5/crontab.5.html' }
    ],
    links: [{ label: 'GitHub repository', url: `${GH}/devops-projects/tree/main/03-linux-ops-toolkit` }],
    tasks: [
      { en: 'Monitoring script' },
      { en: 'Log retention policy' },
      { en: 'Service auto-recovery' },
      { en: 'Scheduling with cron' }
    ],
    image: pjToolkit
  },
  {
    name: 'Three-tier app with Docker Compose',
    shortDescription: { en: 'Nginx, Flask on gunicorn and PostgreSQL on separate networks, with healthchecks, a named volume and a non-root user.' },
    description: {
      en: 'An Nginx reverse proxy, a Flask app on gunicorn and PostgreSQL, each tier on its own network so Nginx cannot reach the database. Data lives on a named volume, passwords come from a .env file, and the app runs as a non-root user with a healthcheck.\n\nMoving from the full Python image to a slim base cut the image from 1.14 GB to 144 MB. A Trivy scan went from 16 critical findings to 0, and the remaining 44 high findings have no upstream fix yet.'
    },
    technologies: [
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'Docker Compose', url: 'https://docs.docker.com/compose/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      { name: 'Trivy', url: 'https://trivy.dev/' }
    ],
    links: [{ label: 'GitHub repository', url: `${GH}/devops-projects/tree/main/04-docker-compose-app` }],
    tasks: [
      { en: 'Dockerfile and image optimisation' },
      { en: 'Network isolation and healthchecks' },
      { en: 'Secrets handling' },
      { en: 'Vulnerability scanning' }
    ],
    image: pjCompose
  },
  {
    name: 'Dockerised MERN shop',
    shortDescription: { en: 'React (Vite) served by Nginx from a multi-stage build, a non-root Node API and MongoDB Atlas.' },
    description: {
      en: 'I containerised an existing MERN shop. The frontend is built in a Node stage and served as static files by Nginx. The backend runs as a non-root user with a health endpoint and a volume for uploaded product images. Compose starts both, and the frontend waits for a healthy backend.\n\nIssues I fixed along the way: a lockfile out of sync with package.json, and MongoDB Atlas blocking the container IP address.'
    },
    technologies: [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'Node.js', url: 'https://nodejs.org/' },
      { name: 'MongoDB Atlas', url: 'https://www.mongodb.com/atlas' },
      { name: 'Docker', url: 'https://www.docker.com/' }
    ],
    links: [{ label: 'GitHub repository', url: `${GH}/pipecleaner-shop` }],
    tasks: [
      { en: 'Multi-stage frontend build' },
      { en: 'Non-root backend image' },
      { en: 'Compose with healthchecks' },
      { en: 'Debugging build and database access issues' }
    ],
    image: pjShop
  }
]

export const featureItems = [
  { Icon: FiUsers, label: { en: 'Cross-team coordination' } },
  { Icon: FiCheckSquare, label: { en: 'Release readiness checks' } },
  { Icon: FiZap, label: { en: 'Incident response' } },
  { Icon: FiSearch, label: { en: 'Root cause analysis' } },
  { Icon: FiRefreshCw, label: { en: 'Operational handovers' } },
  { Icon: FiCode, label: { en: 'Automation with Bash' } },
  { Icon: FiShield, label: { en: 'Container security scanning' } },
  { Icon: FiBarChart2, label: { en: 'Release governance' }, highlight: true },
  { Icon: FiMessageSquare, label: { en: 'Clear written communication' } }
]

export const highlightCards = [
  {
    Icon: FiRefreshCw,
    title: { en: 'Release Engineering' },
    description: { en: 'Multi-environment releases with readiness checks before and validation after every deployment.' }
  },
  {
    Icon: FiServer,
    title: { en: 'Containers' },
    description: { en: 'Docker images, Kubernetes operations through Rancher, and Helm charts.' }
  },
  {
    Icon: FiCloud,
    title: { en: 'CI/CD & GitOps' },
    description: { en: 'Pipelines with Harness, Jenkins and GitHub Actions, and GitOps with ArgoCD.' }
  },
  {
    Icon: FiBarChart2,
    title: { en: 'Observability' },
    description: { en: 'Dashboards and alerting with Grafana, Datadog and Dynatrace to find problems early.' }
  }
]

export const valueProps = [
  {
    Icon: FiRefreshCw,
    title: { en: 'Reliable Releases' },
    description: { en: 'Dev, Test, UAT and Production, with checks on both sides of every deployment.' }
  },
  {
    Icon: FiServer,
    title: { en: 'Container Platforms' },
    description: { en: 'Docker, Kubernetes, Rancher and Helm.' }
  },
  {
    Icon: FiCloud,
    title: { en: 'Cloud & IaC' },
    description: { en: 'AWS, Azure and GCP, with Terraform and CloudFormation.' }
  },
  {
    Icon: FiMonitor,
    title: { en: 'Incident Response' },
    description: { en: 'Monitoring, triage and remediation of production incidents.' }
  }
]

export const storyBlocks = [
  {
    label: { en: 'CLOUD & CONTAINERS' },
    title: { en: 'Delivery pipelines' },
    highlight: { en: 'you can trust' },
    description: {
      en: 'Containerised applications, Kubernetes platforms, and CI/CD pipelines that build, scan and deploy the same way every time.'
    },
    linkTo: '/portfolio',
    linkText: { en: 'View my projects' },
    Icon: FiCode,
    visualType: 'techStack',
    reversed: false
  },
  {
    label: { en: 'LEARNING & EXPERIENCE' },
    title: { en: 'Always building' },
    highlight: { en: 'hands-on skills' },
    description: {
      en: 'Day-to-day release and production work, backed by cloud certifications and personal projects where I build and break things on purpose to learn.'
    },
    linkTo: '/experience',
    linkText: { en: 'My journey' },
    Icon: FiZap,
    visualType: 'stats',
    reversed: true
  }
]

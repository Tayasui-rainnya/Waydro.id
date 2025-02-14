The project has already been built, and you can upload files in the "dist" directory directly to a static website hosting platform (e.g. Cloudflare Pages, Tencent EdgeOne Pages).

Of course, you can build your own if you want to.


# Waydro.id Build Guide

This guide will help you set up and build the "Waydro.id" project on your local machine.

## Prerequisites

1. **Node.js**: Install Node.js (recommended LTS version greater than 22) from the [Node.js official website](https://nodejs.org/).
2. **Git**: Ensure Git is installed on your machine. You can download it from the [Git official website](https://git-scm.com/).

## Steps to Build the Project

1. **Clone the Repository**:
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/Tayasui-rainnya/Waydro.id.git
   ```

2. **Navigate to the Project Directory**:
   Change your working directory to the project folder:
   ```bash
   cd Waydro.id
   ```

3. **Install Dependencies**:
   Install all the necessary dependencies using npm:
   ```bash
   npm install
   ```
   If you run into any issues with the build, ask ChatGPT ...

4. **Build the Project**:
   Run the build command to compile the project:
   ```bash
   npm run build
   ```
   If you run into any issues with the build …… Uhh, most likely, this will not be the case ...

5. **Deploy to Static Hosting**:
   After the build process is complete, the output files will be located in the `dist` directory. You can upload the contents of this directory to your preferred static website hosting platform.

## Additional Information

- **Project Overview**: The "Waydro.id" project is a Vue3 application primarily composed of CSS, Vue, JavaScript, and HTML.
- **Repository URL**: [Waydro.id GitHub Repository](https://github.com/Tayasui-rainnya/Waydro.id)

export const learningOutcome3 = {
  id: "3",
  number: "3",
  title: "Deploy Web Application",
  description: "IIS, DNS, hosting, backend technologies and verification.",
  sections: [
    {
      id: "3-1",
      number: "3.1",
      title: "Introduction to Web Servers",
      topics: [
        {
          id: "3-1-1",
          number: "3.1.1",
          title: "Definition of Web Server",
          content: {
            intro: "A web server is a software application that serves web content to clients over the HTTP protocol. Web servers handle incoming requests from clients and return the appropriate responses.",
            definitions: [
              { term: "Web server", details: "A web server is a system that stores, processes, and delivers web pages to clients. It responds to HTTP requests from web browsers." },
              { term: "HTTP", details: "HyperText Transfer Protocol is the foundation of data communication on the World Wide Web. It defines how messages are formatted and transmitted between web browsers and servers." },
              { term: "Client request", details: "A client request is an HTTP request sent by a web browser to a web server, asking for a specific resource such as a web page, image, or API response." },
              { term: "Server response", details: "A server response is the HTTP response sent by the web server back to the client, containing the requested resource or an error message." },
              { term: "Web content", details: "Web content includes all the files and data served by a web server, such as HTML pages, images, videos, scripts, and stylesheets." },
              { term: "Apache", details: "Apache HTTP Server is an open-source web server maintained by the Apache Software Foundation. It is one of the most widely used web servers globally." },
              { term: "Nginx", details: "Nginx is a high-performance web server and reverse proxy server known for its low memory consumption and high concurrency capabilities." },
              { term: "IIS", details: "Internet Information Services (IIS) is a flexible, secure, and manageable web server from Microsoft for hosting websites and web applications on Windows Server." },
            ],
          },
        },
        {
          id: "3-1-2",
          number: "3.1.2",
          title: "Types of Web Servers / Web Hosting Platforms",
          content: {
            intro: "Various web servers and hosting platforms are available, each with distinct characteristics and use cases.",
            platforms: [
              { name: "IIS", description: "Microsoft's web server, integrated with Windows Server. Ideal for hosting ASP.NET applications and Windows-based services." },
              { name: "Apache HTTP Server", description: "The most widely used open-source web server. Highly configurable with a vast ecosystem of modules." },
              { name: "Nginx", description: "Known for high performance and low resource usage. Excellent as a reverse proxy and load balancer." },
              { name: "LiteSpeed", description: "A high-performance commercial web server with Apache-compatible features and superior speed." },
              { name: "Apache Tomcat", description: "An open-source implementation of the Java Servlet and JavaServer Pages technologies. Used for hosting Java applications." },
              { name: "Node.js", description: "A JavaScript runtime built on Chrome's V8 engine. Used for building scalable server-side applications." },
              { name: "Lighttpd", description: "A lightweight, fast, and secure web server optimized for speed-critical environments." },
            ],
          },
        },
        {
          id: "3-1-3",
          number: "3.1.3",
          title: "Benefits and Drawbacks of IIS",
          content: {
            intro: "Understanding the advantages and limitations of IIS helps administrators make informed decisions about web server selection.",
            benefits: [
              "Windows integration - IIS integrates seamlessly with Windows Server features such as Active Directory, NTFS permissions, and Group Policy.",
              "Scalability - IIS supports multiple websites, application pools, and advanced configuration options for scaling.",
              "Security - IIS provides built-in security features including Windows authentication, SSL/TLS support, and request filtering.",
              "Performance monitoring - IIS includes detailed logging, performance counters, and monitoring tools through the Windows Performance Monitor.",
              "Modular architecture - IIS uses a modular design where only the required modules are loaded, reducing overhead and improving security."
            ],
            drawbacks: [
              "License cost - IIS requires a Windows Server license, which can be expensive.",
              "Learning curve - IIS has a steep learning curve, especially for administrators unfamiliar with Microsoft technologies.",
              "Resource consumption - IIS and the Windows Server platform can consume significant system resources.",
              "Limited cross-platform support - IIS is Windows-only, limiting deployment options for cross-platform applications.",
              "Vendor lock-in - Heavy reliance on Microsoft technologies can lead to vendor lock-in scenarios."
            ],
          },
        },
      ],
    },
    {
      id: "3-2",
      number: "3.2",
      title: "Configure IIS With Windows Server",
      topics: [
        {
          id: "3-2-1",
          number: "3.2.1",
          title: "Enabling DNS Server",
          content: {
            intro: "DNS is essential when using IIS for web hosting because domain name resolution is required for users to access websites. Integrating DNS with IIS ensures proper domain name resolution for web applications.",
            steps: [
              "Install the DNS Server role through Server Manager",
              "Open DNS Manager",
              "Create Forward Lookup Zones for domain names",
              "Create Reverse Lookup Zones for IP address resolution",
              "Configure DNS records (A, AAAA, CNAME, MX, etc.)",
              "Configure IIS bindings to use the DNS domain name",
              "Test DNS resolution using nslookup"
            ],
          },
        },
        {
          id: "3-2-2",
          number: "3.2.2",
          title: "Install IIS Role in Selected Server",
          content: {
            intro: "Installing the IIS role enables the web server capabilities on the Windows Server.",
            steps: [
              "Open Server Manager",
              "Click Add Roles and Features",
              "Select the Web Server (IIS) role",
              "Review the required features including HTTP features, ASP.NET, CGI, FTP, and health and diagnostics",
              "Click Add Features if prompted",
              "Confirm the installation selections",
              "Click Install to begin the installation",
              "Verify the IIS installation by accessing localhost in a web browser",
              "Test the default IIS welcome page"
            ],
          },
        },
      ],
    },
    {
      id: "3-3",
      number: "3.3",
      title: "Management of IIS Web Server",
      topics: [
        {
          id: "3-3-1",
          number: "3.3.1",
          title: "Explain Handler Mapping",
          content: {
            intro: "Handler mapping in IIS determines how incoming HTTP requests are processed by mapping file extensions or URL paths to specific handlers.",
            steps: [
              { title: "Incoming request", details: "A client sends an HTTP request to the IIS web server. The request includes the URL, HTTP method, headers, and potentially a body." },
              { title: "Handler mapping", details: "IIS uses handler mappings to determine which handler should process the incoming request based on the file extension or URL path." },
              { title: "Mapping rules", details: "Handler mapping rules define the relationship between URL patterns and the handlers that process them." },
              { title: "Handler selection", details: "IIS evaluates the handler mappings in order and selects the first matching handler for the request." },
              { title: "IIS modules", details: "IIS modules are components that handle specific aspects of request processing, such as authentication, logging, and compression." },
              { title: "ISAPI", details: "ISAPI (Internet Server Application Programming Interface) is a technology for extending IIS functionality through DLL-based filters and extensions." },
              { title: "CGI", details: "CGI (Common Gateway Interface) is a standard protocol for running external programs in response to HTTP requests." },
              { title: "Custom handlers", details: "Custom handlers are user-defined mappings that allow IIS to process requests for specific file types or URLs using custom logic." },
              { title: "Request processing", details: "IIS processes requests through a pipeline of modules and handlers, where each module can inspect or modify the request before passing it to the next stage." },
              { title: "Server response", details: "After processing the request, the handler generates a response that IIS sends back to the client." },
            ],
          },
        },
        {
          id: "3-3-2",
          number: "3.3.2",
          title: "Explain Connection Tasks",
          content: {
            intro: "Connection tasks encompass the network and remote access configurations necessary for managing and interacting with IIS web servers.",
            topics: [
              { title: "Network configuration", details: "Configuring IP addresses, subnet masks, gateways, and DNS settings on the server." },
              { title: "Remote access", details: "Enabling remote management capabilities for the IIS server." },
              { title: "RDP", details: "Remote Desktop Protocol allows administrators to remotely access the IIS server for management." },
              { title: "VPN", details: "Virtual Private Networks provide secure remote access to the network." },
              { title: "SSH", details: "Secure Shell provides encrypted remote command-line access to the server." },
              { title: "Firewall configuration", details: "Configuring Windows Firewall to allow necessary traffic to and from the IIS server." },
              { title: "Network monitoring", details: "Monitoring network traffic and performance to ensure IIS availability." },
              { title: "DNS configuration", details: "Ensuring proper DNS resolution for web domains hosted on the server." },
              { title: "Active Directory integration", details: "Integrating IIS with Active Directory for authentication and authorization." },
              { title: "Virtual networking", details: "Configuring virtual networks for isolated IIS environments." },
            ],
          },
        },
        {
          id: "3-3-3",
          number: "3.3.3",
          title: "Explain FTP Protocol",
          content: {
            intro: "FTP (File Transfer Protocol) is used to transfer files between clients and servers. IIS includes FTP server capabilities for file management.",
            definitions: [
              { term: "FTP definition", details: "FTP is a standard network protocol used to transfer files from one host to another over a TCP-based network." },
              { term: "FTP server", details: "An FTP server is a computer running FTP server software that allows clients to upload and download files." },
              { term: "FTP site", details: "An FTP site is a location on an FTP server where files are stored and managed." },
              { term: "Authentication", details: "FTP authentication verifies the identity of clients before allowing file transfers. Methods include anonymous authentication and user credential authentication." },
              { term: "Authorization", details: "FTP authorization determines which authenticated users can access specific directories and perform specific file operations." },
              { term: "Firewall", details: "Firewalls must be configured to allow FTP traffic, typically on port 21 for control and a range of ports for data transfer." },
              { term: "Port 21", details: "Port 21 is the default control port for FTP connections." },
              { term: "Passive FTP", details: "Passive FTP mode allows the client to initiate both control and data connections, which is useful when the client is behind a firewall." },
              { term: "Testing FTP", details: "Use FTP client tools or command-line FTP commands to test connectivity and file transfer functionality." },
              { term: "Monitoring", details: "Monitor FTP activity through logs and IIS management tools to ensure security and performance." },
            ],
          },
        },
        {
          id: "3-3-4",
          number: "3.3.4",
          title: "Explain Site Binding Used by HTTP or HTTPS Protocols",
          content: {
            intro: "Site bindings in IIS determine how the web server listens for incoming requests and which website responds to specific combinations of IP address, port, and host name.",
            definitions: [
              { term: "Site binding", details: "A site binding is a configuration that specifies the IP address, port, and host name that a website listens on." },
              { term: "Domain name", details: "The human-readable name that identifies a website, such as www.example.com." },
              { term: "IP address", details: "The numeric address assigned to the network interface that the website listens on." },
              { term: "Port", details: "The network port number on which the website listens. Default is port 80 for HTTP and port 443 for HTTPS." },
              { term: "HTTP", details: "HyperText Transfer Protocol, the standard protocol for serving web content on the internet." },
              { term: "HTTPS", details: "HTTP Secure, which adds SSL/TLS encryption to HTTP for secure communication." },
              { term: "SSL/TLS certificates", details: "Digital certificates that enable encrypted communication between the web server and clients. SSL/TLS certificates are required for HTTPS." },
            ],
          },
        },
        {
          id: "3-3-5",
          number: "3.3.5",
          title: "Configure Site Binding of HTTP or HTTPS Protocols",
          content: {
            intro: "Configuring site bindings ensures the IIS website listens on the correct IP addresses, ports, and host names.",
            steps: [
              "Open IIS Manager",
              "Select the target website",
              "Click Bindings in the Actions panel",
              "Click Add to create a new binding",
              "Select the protocol (HTTP or HTTPS)",
              "Choose the IP address",
              "Specify the port number",
              "Enter the host name if applicable",
              "If using HTTPS, select the SSL certificate",
              "Click OK to apply the binding",
              "Restart the website for changes to take effect"
            ],
          },
        },
      ],
    },
    {
      id: "3-4",
      number: "3.4",
      title: "Setting Environment of Developed Web App",
      topics: [
        {
          id: "3-4-1",
          number: "3.4.1",
          title: "Explain Hosting Platforms Available",
          content: {
            intro: "Web application hosting platforms vary widely in terms of cost, features, and capabilities.",
            subsections: [
              { title: "Free hosting", details: "Free hosting platforms provide basic web hosting at no cost, often with limited features, bandwidth, and storage. Suitable for personal projects, testing, and learning. Examples include GitHub Pages, Netlify free tier, and InfinityFree." },
              { title: "Shared hosting", details: "Multiple websites share a single server's resources. Cost-effective for small to medium sites with moderate traffic. The hosting provider manages server maintenance, security, and updates." },
              { title: "VPS hosting", details: "A Virtual Private Server allocates dedicated resources within a shared physical server. Offers more control, performance, and flexibility than shared hosting. Suitable for growing sites that need root access." },
              { title: "Dedicated hosting", details: "An entire physical server is allocated to a single customer. Provides maximum performance, security, and control. Ideal for high-traffic websites and applications with strict compliance requirements." },
              { title: "Cloud hosting", details: "Uses a network of virtual and physical servers to host applications. Resources can scale on demand. Providers include AWS, Microsoft Azure, and Google Cloud Platform." },
              { title: "Paid hosting", details: "Paid hosting platforms offer more features, better performance, increased storage, and professional support. Plans range from shared to dedicated depending on requirements." },
              { title: "PaaS", details: "Platform as a Service provides a managed environment for deploying applications without managing underlying infrastructure. Examples include Azure App Service and Heroku." },
              { title: "Self-hosted", details: "Hosting on your own physical or virtual server, such as a Windows Server running IIS. Full control over the environment but requires in-house expertise for maintenance and security." },
            ]
          },
        },
        {
          id: "3-4-2",
          number: "3.4.2",
          title: "Analysis of Technical Requirements for Each Hosting Platform",
          content: {
            intro: "Different hosting platforms have different technical requirements depending on the complexity of the web application.",
            subsections: [
              { title: "Without backend/server-side processing", details: "Static websites without server-side processing require minimal resources: basic hosting with HTTP support and file storage." },
              { title: "With backend/server-side processing", details: "Applications requiring server-side processing need platforms that support the required runtime environments and databases." },
              { title: "Scalability", details: "The hosting platform must be able to scale resources as traffic and application demands grow." },
              { title: "Performance", details: "The platform should provide adequate CPU, memory, and network resources to meet performance targets." },
              { title: "Security", details: "The platform must provide security features including SSL/TLS, firewalls, and access controls." },
              { title: "Management", details: "The platform should offer management tools for monitoring, logging, and configuring the web application." },
              { title: "Server specifications", details: "Physical or virtual server specifications must match the application's resource requirements." },
              { title: "Software dependencies", details: "The platform must support all required software dependencies including operating systems, frameworks, and databases." },
            ],
          },
        },
        {
          id: "3-4-3",
          number: "3.4.3",
          title: "Verification of Local Web App to be Deployed to the Server",
          content: {
            intro: "Before deploying a web application to a production server, it must be thoroughly verified to ensure compatibility and functionality.",
            steps: [
              "Prepare the application files and dependencies",
              "Verify dependencies are compatible with the target server environment",
              "Configure the IIS website or application pool",
              "Transfer application files to the server",
              "Set up the database if required",
              "Configure application settings for the production environment",
              "Test the application thoroughly",
              "Review security configurations",
              "Set up monitoring and logging",
              "Plan for ongoing maintenance"
            ],
          },
        },
        {
          id: "3-4-4",
          number: "3.4.4",
          title: "Configuration of Backend Technology in IIS Web Server",
          content: {
            intro: "Configuring backend technologies in IIS allows the web server to process dynamic content from various programming languages and frameworks.",
            subsections: [
              {
                title: "A. PHP Environment Variables",
                details: "To configure PHP on IIS: install PHP, configure php.ini settings, set up Handler Mapping for PHP files, configure FastCGI, set the PHPRC environment variable, and restart IIS to apply changes."
              },
              {
                title: "B. Configure WinCache for PHP Web App",
                details: "WinCache is an opcode cache and user data cache for PHP on Windows. Install PHP and WinCache, configure php.ini to enable WinCache, configure IIS to use the cached content, restart IIS, and test WinCache performance."
              },
              {
                title: "C. FastCGI Handler Mapping for PHP Web App",
                details: "FastCGI provides a high-performance way to process PHP requests on IIS. Install PHP and IIS, enable the CGI feature, configure FastCGI settings, create Handler Mapping for *.php files with the FastCgiModule pointing to php-cgi.exe, configure php.ini, test the configuration, and review security considerations."
              },
              {
                title: "D. IISNode Module for Node.js Web App",
                details: "IISNode allows hosting Node.js applications under IIS. Install IIS and Node.js, install the IISNode module, configure IISNode settings, create a web.config file that routes requests to Node.js, ensure Node.js application dependencies are installed, set environment variables, start the application, and monitor the application."
              },
              {
                title: "E. Configure Web App Environment Security",
                details: "Web application security involves configuring IIS, backend technology, HTTPS/SSL/TLS, authentication and authorization, firewalls, application pool security, file system security, configuration security, logging and monitoring, patch management, security testing, backup procedures, and disaster recovery planning."
              },
            ],
          },
        },
      ],
    },
    {
      id: "3-5",
      number: "3.5",
      title: "Verify Server Environment Requirement",
      topics: [
        {
          id: "3-5-1",
          number: "3.5.1",
          title: "Testing on Local / Remote Computer / Server",
          content: {
            intro: "Thorough testing of server environments ensures that web applications function correctly and securely.",
            subsections: [
              {
                title: "A. Network",
                details: "Network testing tools include Ping (verify connectivity), Tracert (trace route to destination), Telnet (test port connectivity), Test-NetConnection (PowerShell network testing), Remote Desktop (verify RDP access), network monitoring tools, and Wireshark (packet analysis)."
              },
              {
                title: "B. Security",
                details: "Security testing includes access control and least privilege enforcement, authentication and MFA, firewall configuration, network security, patch management, antivirus, security auditing, encryption (BitLocker, TLS), backup and disaster recovery, IDS/IPS, security testing, and security policies."
              },
              {
                title: "C. Files",
                details: "File integrity verification uses MD5, SHA-1, and SHA-256 hashes. Additional testing includes functionality testing, security scanning, remote file transfer, file permissions, integration testing, performance testing, automated testing, logging, and reporting."
              },
              {
                title: "D. Visibility",
                details: "Local and remote visibility testing includes Ping, firewall configuration, network sharing, Remote Desktop access, port scanning, RDP, file sharing, remote access permissions, Event Logs, DNS, firewall rules, VPN, and Remote Desktop Services."
              },
            ],
          },
        },
        {
          id: "3-5-2",
          number: "3.5.2",
          title: "Verify Local URL Accessibility",
          content: {
            intro: "Verifying local URL accessibility ensures that the web application can be accessed correctly on the server and by clients.",
            subsections: [
              { title: "Accessibility", details: "Test accessibility using localhost, 127.0.0.1, and local IP addresses. Verify firewall rules allow access and DNS resolves correctly." },
              { title: "Browsers", details: "Test the application across different browsers. Verify localhost access and browser compatibility settings and firewall/security settings." },
              { title: "Website Speed", details: "Measure website speed using Browser Developer Tools (Network tab), Ping, Tracert, PageSpeed Insights, GTmetrix, Pingdom, and Performance Monitor." },
              { title: "Website Size", details: "Check website size using Windows Explorer directory properties, PowerShell commands, and file size analysis of the web application directory (typically C:\\inetpub\\wwwroot)." },
            ],
          },
        },
      ],
    },
    {
      id: "3-6",
      number: "3.6",
      title: "Hosting Web App",
      topics: [
        {
          id: "3-6-1",
          number: "3.6.1",
          title: "Upload Web App to Windows Server",
          content: {
            intro: "Uploading a web application to a Windows Server involves preparing the application, configuring the server, transferring files, and testing the deployment.",
            steps: [
              "Prepare the web application files",
              "Access the Windows Server (via Remote Desktop or other method)",
              "Ensure required software is installed (IIS, .NET Framework, etc.)",
              "Configure IIS to host the application",
              "Copy application files to the server",
              "Test the application functionality",
              "Configure DNS settings",
              "Set up monitoring and maintenance procedures"
            ],
          },
        },
        {
          id: "3-6-2",
          number: "3.6.2",
          title: "Specify the Physical Path",
          content: {
            intro: "Specifying the physical path tells IIS where to find the web application files.",
            methods: [
              { method: "IIS Manager", details: "Open IIS Manager, select the site or application, click Basic Settings, and specify the physical path." },
              { method: "Command line", details: "Use appcmd commands to set the physical path." },
              { method: "PowerShell", details: "Use PowerShell cmdlets to configure the physical path of IIS sites and applications." },
              { method: "File directories", details: "Ensure the specified directory exists and contains the correct application files with appropriate permissions." },
            ]
          },
        },
        {
          id: "3-6-3",
          number: "3.6.3",
          title: "Select the Protocols",
          content: {
            intro: "Selecting protocols involves configuring the network adapter properties to enable the appropriate network protocols.",
            steps: [
              "Open Network Connections",
              "Select the network adapter",
              "Open Properties",
              "Select TCP/IPv4 and configure IP settings",
              "Select TCP/IPv6 and configure IPv6 settings",
              "Enable or disable protocols as needed",
              "Configure protocol properties"
            ],
          },
        },
        {
          id: "3-6-4",
          number: "3.6.4",
          title: "Specify the IP Address",
          content: {
            intro: "Configuring the IP address on the network adapter ensures the server can be reached on the network.",
            methods: [
              { method: "Network Connections", details: "Use the GUI to configure IP settings on the network adapter." },
              { method: "Network Adapter", details: "Select the appropriate network adapter and configure its IPv4 and IPv6 properties." },
              { method: "IPv4", details: "Set the IPv4 address, subnet mask, and default gateway." },
              { method: "IPv6", details: "Configure IPv6 address settings if required." },
              { method: "IP address", details: "Assign the static IP address to the server." },
              { method: "Subnet mask", details: "Set the correct subnet mask for the network." },
              { method: "Default gateway", details: "Configure the default gateway for network routing." },
              { method: "DNS", details: "Set the DNS server addresses." },
              { method: "ipconfig", details: "Use ipconfig to verify the IP configuration." },
              { method: "ping", details: "Use ping to test network connectivity to the gateway and other hosts." },
            ]
          },
        },
        {
          id: "3-6-5",
          number: "3.6.5",
          title: "Configure Web App DNS",
          content: {
            intro: "Configuring DNS for a web application involves setting up DNS records that point the domain name to the web server's IP address.",
            steps: [
              "Install the DNS Server role",
              "Create a Forward Lookup Zone",
              "Add DNS records (A, AAAA, CNAME)",
              "Verify DNS resolution using nslookup",
              "Configure IIS site binding to match the domain name",
              "Register the domain with a domain registrar",
              "Set up monitoring for DNS resolution"
            ],
          },
        },
        {
          id: "3-6-6",
          number: "3.6.6",
          title: "Configure Port Number",
          content: {
            intro: "Configuring port numbers ensures that traffic reaches the correct services on the server.",
            topics: [
              { title: "Windows Firewall", details: "Configure Windows Firewall to allow traffic on the required ports." },
              { title: "Inbound rules", details: "Create inbound firewall rules to allow incoming traffic on specific ports." },
              { title: "Outbound rules", details: "Create outbound firewall rules to allow outgoing responses." },
              { title: "TCP", details: "Configure TCP port rules for HTTP (80) and HTTPS (443)." },
              { title: "UDP", details: "Configure UDP port rules if required for specific services." },
              { title: "IIS bindings", details: "Configure IIS site bindings to use the correct ports." },
              { title: "SQL Server ports", details: "Open SQL Server ports for database connectivity." },
            ]
          },
        },
        {
          id: "3-6-7",
          number: "3.6.7",
          title: "Handle Discovered Errors",
          content: {
            intro: "Troubleshooting web application deployment errors involves a systematic approach to identify and resolve issues.",
            steps: [
              { title: "Identify error", details: "Review error messages, logs, and symptoms to identify the root cause of the error." },
              { title: "Isolate issue", details: "Narrow down the issue to a specific component, configuration, or code problem." },
              { title: "Event Viewer", details: "Check the Windows Event Viewer for system and application error logs." },
              { title: "Research error", details: "Search documentation and knowledge bases for the specific error and its resolution." },
              { title: "Updates and patches", details: "Ensure all systems and applications are updated with the latest patches." },
              { title: "Hardware health", details: "Verify that hardware components such as disks, memory, and network adapters are functioning correctly." },
              { title: "Configuration changes", details: "Review recent configuration changes that may have caused the error." },
              { title: "Software troubleshooting", details: "Systematically test software components to identify the source of the problem." },
              { title: "Backup restoration", details: "Restore from a known good backup if configuration changes caused the issue." },
              { title: "Document resolution", details: "Document the error and its resolution for future reference." },
              { title: "Preventive measures", details: "Implement measures to prevent similar errors from recurring." },
              { title: "Monitor recurrence", details: "Monitor the system to ensure the error does not reoccur after resolution." },
            ]
          },
        },
      ],
    },
    {
      id: "3-7",
      number: "3.7",
      title: "Verification of Successfully Hosted Web App",
      topics: [
        {
          id: "3-7-1",
          number: "3.7.1",
          title: "Testing Accessibility Within a Local Network",
          content: {
            intro: "Testing accessibility within a local network ensures that the web application can be reached by clients on the same network.",
            tools: [
              { tool: "Ping", description: "Verify network connectivity to the web server's IP address." },
              { tool: "Tracert", description: "Trace the network path from client to server." },
              { tool: "Telnet", description: "Test specific port connectivity." },
              { tool: "Advanced IP Scanner", description: "Scan the network for active hosts and open ports." },
              { tool: "PowerShell", description: "Use PowerShell cmdlets for network testing and verification." },
              { tool: "Test-NetConnection", description: "PowerShell command for comprehensive network connectivity testing." },
              { tool: "Network monitoring", description: "Monitor network traffic and performance." },
              { tool: "Firewall settings", description: "Verify that firewall rules allow web traffic from the local network." },
            ]
          },
        },
        {
          id: "3-7-2",
          number: "3.7.2",
          title: "Testing Online Accessibility",
          content: {
            intro: "Testing online accessibility ensures that the web application can be reached from the internet.",
            methods: [
              { method: "Ping", description: "Test connectivity to the public IP address or domain name." },
              { method: "Remote Desktop", description: "Verify remote access to the server." },
              { method: "File sharing", description: "Test file sharing capabilities from remote locations." },
              { method: "Web services", description: "Verify all web services are accessible from the internet." },
              { method: "Database connectivity", description: "Test database connections from remote locations." },
              { method: "Firewall", description: "Ensure firewall rules allow external access to required ports." },
              { method: "VPN", description: "Use VPN for secure remote access to the web application." },
              { method: "Network monitoring", description: "Monitor network traffic from external sources." },
            ]
          },
        },
        {
          id: "3-7-3",
          number: "3.7.3",
          title: "Testing Online Website Speed",
          content: {
            intro: "Measuring website speed from external locations helps identify performance issues and optimization opportunities.",
            tools: [
              { tool: "Ping", description: "Measure round-trip time to the server." },
              { tool: "Traceroute", description: "Trace the route and measure latency at each hop." },
              { tool: "curl", description: "Command-line tool for measuring HTTP response times." },
              { tool: "wget", description: "Command-line tool for downloading and timing web resources." },
              { tool: "GTmetrix", description: "Comprehensive website performance analysis." },
              { tool: "Pingdom", description: "Website speed and uptime monitoring." },
              { tool: "Google PageSpeed Insights", description: "Google's tool for analyzing page performance and providing optimization suggestions." },
              { tool: "Windows Performance Monitor", description: "Built-in Windows tool for monitoring server performance metrics." },
            ]
          },
        },
        {
          id: "3-7-4",
          number: "3.7.4",
          title: "Verify Size of Online Web App",
          content: {
            intro: "Verifying the size of the deployed web application ensures all files have been transferred correctly.",
            methods: [
              { method: "Remote Desktop", description: "Access the server via Remote Desktop to inspect files." },
              { method: "Web application directory", description: "Navigate to the web application directory (typically C:\\inetpub\\wwwroot)." },
              { method: "Directory size", description: "Check the total size of the application directory." },
              { method: "File size", description: "Verify individual file sizes match expectations." },
              { method: "PowerShell", description: "Use PowerShell commands to calculate directory sizes and file counts." },
            ]
          },
        },
      ],
    },
  ],
} as const;

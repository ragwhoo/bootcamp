export const learningOutcome1 = {
  id: "1",
  number: "1",
  title: "Manage Server Services",
  description: "Server administration, virtualization, DNS, DHCP and more.",
  sections: [
    {
      id: "1-1",
      number: "1.1",
      title: "Introduction to Server Administration",
      topics: [
        {
          id: "1-1-1",
          number: "1.1.1",
          title: "Description of Key Terms",
          content: {
            intro: "Server administration involves managing and maintaining computer systems that provide services to other computers on a network. Understanding the fundamental terms is the first step toward mastering server management.",
            definitions: [
              { term: "Server", definition: "A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network." },
              { term: "Client", definition: "A client is a computer or system that accesses services made available by a server. Clients request resources and servers respond to those requests." },
              { term: "Network Operating System (NOS)", definition: "A Network Operating System is a specialized operating system designed to support workstations, file sharing, and other network services. It manages network resources and provides communication between devices." },
              { term: "Hypervisor", definition: "A hypervisor is a software, firmware, or hardware that creates and runs virtual machines. It allows multiple operating systems to share a single physical host." },
              { term: "Virtualization", definition: "Virtualization is the process of creating a virtual version of something, including virtual computer hardware platforms, storage devices, and networking resources." },
            ],
          },
        },
        {
          id: "1-1-2",
          number: "1.1.2",
          title: "Server Virtualization",
          content: {
            intro: "Server virtualization is the process of dividing a physical server into multiple virtual servers, each with its own operating system and applications. This maximizes resource utilization and reduces hardware costs.",
            subsections: [
              {
                title: "Hypervisor Technologies",
                content: "A hypervisor (also called a Virtual Machine Monitor) is the foundational technology that enables virtualization. It sits between the hardware and the operating systems, managing the allocation of physical resources to virtual machines."
              },
              {
                title: "Type 1 Hypervisor / Bare Metal Hypervisor",
                content: "A Type 1 hypervisor runs directly on the host's hardware to control the hardware and to manage guest operating systems. It does not require an underlying host operating system. Examples include VMware ESXi, Microsoft Hyper-V, and Citrix XenServer. Type 1 hypervisors are known for their performance and efficiency because they interact directly with hardware."
              },
              {
                title: "Type 2 Hypervisor / Hosted Hypervisor",
                content: "A Type 2 hypervisor runs on top of a conventional operating system just as other computer programs do. Examples include VMware Workstation, Oracle VirtualBox, and VMware Fusion. Type 2 hypervisors are easier to set up but typically have lower performance compared to Type 1 hypervisors because they run through the host OS."
              },
              {
                title: "Full Virtualization",
                content: "Full virtualization uses a hypervisor to simulate a complete hardware environment for the guest operating system. The guest OS is completely isolated and unaware that it is running in a virtual environment. All hardware calls are intercepted by the hypervisor."
              },
              {
                title: "Para-virtualization",
                content: "Para-virtualization is a virtualization technique where the guest operating system is modified to be aware of the hypervisor. This reduces the overhead of virtualization because the guest OS can communicate directly with the hypervisor through a special API, rather than emulating hardware."
              },
              {
                title: "Hardware-assisted Virtualization",
                content: "Hardware-assisted virtualization uses CPU features such as Intel VT-x or AMD-V to improve the performance of virtual machines. These hardware extensions provide support for efficient virtualization by allowing direct access to hardware resources from the hypervisor."
              },
              {
                title: "Types of Server Virtualization",
                content: "Server virtualization can be categorized by the approach used: full virtualization, para-virtualization, hardware-assisted virtualization, and operating-system-level virtualization (containers). Each type offers different trade-offs between performance, isolation, and flexibility."
              },
              {
                title: "Benefits of Server Virtualization",
                content: [
                  "Reduced hardware costs by consolidating multiple servers onto fewer physical machines",
                  "Improved resource utilization and efficiency",
                  "Simplified management and administration",
                  "Faster deployment of new servers and applications",
                  "Enhanced disaster recovery and business continuity",
                  "Reduced power consumption and physical space requirements",
                  "Greater flexibility and scalability"
                ]
              },
            ],
          },
        },
        {
          id: "1-1-3",
          number: "1.1.3",
          title: "Server Requirements",
          content: {
            intro: "Proper server requirements ensure that virtualized environments run efficiently and reliably. Requirements are divided into hardware and software categories.",
            subsections: [
              {
                title: "Hardware Requirements",
                content: [
                  { title: "CPU", details: "A multi-core processor with hardware virtualization support (Intel VT-x or AMD-V) is essential. More cores and higher clock speeds improve virtual machine performance." },
                  { title: "RAM", details: "Sufficient memory is critical for running multiple virtual machines. The server should have enough RAM to accommodate the host OS, all guest OSes, and applications." },
                  { title: "Storage", details: "Fast storage such as SSDs or NVMe drives improves I/O performance. RAID configurations can provide redundancy and performance benefits." },
                  { title: "Network Connectivity", details: "Multiple network interfaces support network segregation and redundancy. Gigabit or higher Ethernet is recommended." },
                  { title: "Redundancy and High Availability", details: "Redundant power supplies, cooling, and network paths ensure continuous operation. Failover mechanisms minimize downtime." },
                ]
              },
              {
                title: "Software Requirements",
                content: [
                  { title: "Operating System", details: "The host server must run a compatible operating system. For Type 1 hypervisors, the hypervisor acts as the OS directly." },
                  { title: "Server Software", details: "Required server applications include web servers, DNS servers, DHCP servers, and domain controllers." },
                  { title: "Security Software", details: "Firewalls, antivirus software, and intrusion detection systems protect the server environment." },
                  { title: "Server Management Tools", details: "Tools such as VMware vSphere Client, Microsoft Server Manager, and PowerShell are essential for administration." },
                  { title: "Application Compatibility", details: "Applications must be compatible with the server's operating system and virtualization platform." },
                ]
              },
            ],
          },
        },
      ],
    },
    {
      id: "1-2",
      number: "1.2",
      title: "Installation of Server OS",
      topics: [
        {
          id: "1-2-1",
          number: "1.2.1",
          title: "Creation of Virtual Storage (RAID)",
          content: {
            intro: "RAID (Redundant Array of Independent Disks) combines multiple physical disk drives into a single logical unit for performance, redundancy, or both. RAID configurations are a fundamental part of server storage design.",
            subsections: [
              { title: "RAID Definition", details: "RAID stands for Redundant Array of Independent Disks. It is a data storage virtualization technology that combines multiple disk drives into one or more logical units." },
              { title: "RAID 0", details: "RAID 0 uses striping to distribute data across multiple disks. It provides improved performance but no redundancy. If one disk fails, all data is lost." },
              { title: "RAID 1", details: "RAID 1 uses mirroring to write identical data to two disks. It provides full redundancy but halves usable storage capacity." },
              { title: "RAID 5", details: "RAID 5 uses striping with distributed parity. It requires at least three disks and can tolerate the failure of one disk while maintaining data availability." },
              { title: "RAID 6", details: "RAID 6 uses double parity and can tolerate the failure of two disks simultaneously. It requires at least four disks." },
              { title: "RAID 10", details: "RAID 10 combines RAID 1 and RAID 0. It mirrors data across pairs of disks and then stripes across those pairs. It requires at least four disks." },
              { title: "RAID 50", details: "RAID 50 combines RAID 5 and RAID 0. It uses multiple RAID 5 sets and stripes across them, offering better performance and fault tolerance than RAID 5 alone." },
              { title: "RAID 60", details: "RAID 60 combines RAID 6 and RAID 0. It uses multiple RAID 6 sets striped together, offering high fault tolerance with improved performance." },
              { title: "Advantages of RAID", details: "RAID provides data redundancy, improved read/write performance, increased storage capacity, and protection against disk failures." },
              { title: "Disadvantages of RAID", details: "RAID can be expensive due to the need for multiple disks, adds complexity to management, and may introduce write penalties depending on the RAID level." },
              { title: "RAID Configuration on Physical Server", details: "To configure RAID on a physical server, enter the RAID controller BIOS during boot, create a RAID array by selecting the appropriate disks, and initialize the array. The operating system then recognizes the RAID volume as a single disk." },
            ],
          },
        },
        {
          id: "1-2-2",
          number: "1.2.2",
          title: "Installation of Hypervisor",
          content: {
            intro: "Installing a hypervisor is a critical step in setting up a virtualized server environment. This procedure covers the installation of VMware ESXi, one of the most widely used Type 1 hypervisors.",
            steps: [
              "Download the VMware ESXi ISO from the VMware website",
              "Verify hardware compatibility using the VMware Hardware Compatibility List",
              "Create bootable installation media using a USB drive or DVD",
              "Enter the server BIOS/UEFI settings and enable virtualization support",
              "Boot the server from the ESXi installation media",
              "Select the installation destination disk",
              "Set the root password for the ESXi host",
              "Configure network settings including IP address and DNS",
              "Complete the installation and reboot the host",
              "Access the vSphere Client to manage the hypervisor",
              "Apply additional configuration such as storage and networking"
            ],
          },
        },
        {
          id: "1-2-3",
          number: "1.2.3",
          title: "Creation of Virtual Machines",
          content: {
            intro: "Creating virtual machines involves using the vSphere Client to define and configure virtual hardware resources for each guest operating system.",
            steps: [
              "Open the vSphere Client and log in to the ESXi host",
              "Navigate to Hosts and Clusters",
              "Select the target host or cluster",
              "Choose Create/Register VM from the Actions menu",
              "Select the creation type (Create a new virtual machine)",
              "Provide a VM name and select the location",
              "Choose the guest operating system and version",
              "Configure virtual hardware including CPU, memory, disk, and network adapter",
              "Specify storage for the virtual disks",
              "Configure networking settings",
              "Review the configuration and click Finish",
              "Install the guest operating system",
              "Install VMware Tools for enhanced performance and management"
            ],
          },
        },
        {
          id: "1-2-4",
          number: "1.2.4",
          title: "Installation of Guest OS",
          content: {
            intro: "Installing a guest operating system on a virtual machine follows a process similar to physical OS installation, but uses virtual media and boot configuration.",
            steps: [
              "Prepare the installation media (ISO file or physical DVD)",
              "Access the vSphere Client and select the target VM",
              "Power on the virtual machine",
              "Connect the installation media to the VM's CD/DVD drive",
              "Configure boot options to boot from the installation media",
              "Begin the guest OS installation process",
              "Complete disk partitioning during installation",
              "Configure network settings including IP address and DNS",
              "Complete the installation and reboot the VM",
              "Install VMware Tools for optimal performance and integration"
            ],
          },
        },
      ],
    },
    {
      id: "1-3",
      number: "1.3",
      title: "Creation of Domain Controller",
      topics: [
        {
          id: "1-3-0",
          number: "1.3",
          title: "Description of Domain Controller",
          content: {
            intro: "A Domain Controller is a server that responds to security authentication requests within a Windows domain. It manages user accounts, security policies, and group memberships through Active Directory Domain Services.",
            definitions: [
              { term: "Domain Controller", details: "A Domain Controller (DC) is a server that hosts Active Directory Domain Services (AD DS) and manages network security, user authentication, and resource access." },
              { term: "Active Directory Domain Services", details: "AD DS is a directory service developed by Microsoft for Windows domain networks. It stores information about objects on the network and provides a framework for organizing and managing network resources." },
              { term: "Authentication", details: "Authentication is the process of verifying the identity of a user, device, or system. In Active Directory, this is typically achieved through Kerberos or NTLM protocols." },
              { term: "Authorization", details: "Authorization determines what resources a user or process can access and what operations they can perform on those resources." },
              { term: "User Accounts", details: "User accounts are identities created in Active Directory that allow individuals to log in and access network resources." },
              { term: "Security Policies", details: "Security policies are rules and configurations that define how security is enforced across the domain, including password requirements, lockout thresholds, and audit settings." },
              { term: "Group Memberships", details: "Group memberships organize users and computers into collections for easier management of permissions and security policies." },
            ],
          },
        },
        {
          id: "1-3-1",
          number: "1.3.1",
          title: "Description of Server Administrative Tools",
          content: {
            intro: "Windows Server provides a suite of administrative tools for managing server roles, services, and network resources. These tools are essential for efficient server administration.",
            tools: [
              { name: "Active Directory Users and Computers (ADUC)", description: "A Microsoft Management Console snap-in for managing users, groups, and computers in Active Directory." },
              { name: "Active Directory Sites and Services (ADSS)", description: "A management tool for configuring Active Directory replication topology and site configuration." },
              { name: "DNS Manager", description: "A tool for managing DNS zones, records, and server configurations." },
              { name: "DHCP Manager", description: "A tool for managing DHCP scopes, reservations, and failover relationships." },
              { name: "Group Policy Management Console (GPMC)", description: "A tool for creating, linking, and managing Group Policy Objects across the domain." },
              { name: "Hyper-V Manager", description: "A tool for managing virtual machines and Hyper-V hosts." },
              { name: "Remote Desktop Services Manager", description: "A tool for managing Remote Desktop Sessions and collections." },
              { name: "Server Manager", description: "The primary management console for configuring server roles and features." },
              { name: "Server Roles", description: "Functional components that enable a server to perform specific tasks such as file sharing, web hosting, or DNS resolution." },
              { name: "Server Features", description: "Software components that support server functions but are not directly managed as roles, such as .NET Framework or Telnet Client." },
            ],
          },
        },
        {
          id: "1-3-2",
          number: "1.3.2",
          title: "Installation of Active Directory Domain Services (AD DS)",
          content: {
            intro: "Installing AD DS transforms a Windows Server into a Domain Controller, enabling centralized management of network resources and security.",
            steps: [
              "Prepare the server by setting a static IP address",
              "Open Server Manager",
              "Click Add Roles and Features",
              "Select the Active Directory Domain Services role",
              "Choose the installation type (Role-based or Feature-based)",
              "Select the target server",
              "Add required features such as .NET Framework features",
              "Confirm the installation selections",
              "Click Install to begin the installation",
              "After installation, click Promote this server to a domain controller",
              "Choose Add a new forest and specify the root domain name",
              "Set the Directory Services Restore Mode (DSRM) password",
              "Review and confirm the configuration",
              "Wait for the installation to complete",
              "Restart the server"
            ],
          },
        },
        {
          id: "1-3-3",
          number: "1.3.3",
          title: "Promotion of Server to a Domain Controller",
          content: {
            intro: "Promoting a server to a Domain Controller involves running the Active Directory Domain Services Configuration Wizard to configure the server as a DC.",
            steps: [
              "Ensure the server meets all requirements for AD DS installation",
              "Install the AD DS server role through Server Manager",
              "Launch the Active Directory Domain Services Configuration Wizard",
              "Choose the configuration type (New domain or existing domain)",
              "Select New forest if creating a new domain",
              "Configure DNS settings and specify the domain name",
              "Provide the Directory Services Restore Mode password",
              "Review the configuration summary",
              "Click Promote to begin the promotion process",
              "The server will restart after successful promotion"
            ],
          },
        },
      ],
    },
    {
      id: "1-4",
      number: "1.4",
      title: "Installation of Server Roles and Features",
      topics: [
        {
          id: "1-4-1",
          number: "1.4.1",
          title: "Description of Server Roles and Features",
          content: {
            intro: "Server roles and features define what services a Windows Server can provide to the network. DNS and DHCP are two of the most fundamental roles for network infrastructure.",
            subsections: [
              { title: "DNS", details: "DNS (Domain Name System) translates domain names into IP addresses, enabling users to access websites and network resources using human-readable names." },
              { title: "DNS Queries", details: "A DNS query is a request sent to a DNS server to resolve a domain name to an IP address. Queries can be recursive or iterative." },
              { title: "DNS Operation", details: "DNS operates by resolving domain names through a hierarchical system of servers. When a client requests a domain name, the DNS server searches its cache, zone files, or forwards the query to other servers." },
              { title: "DNS Server Roles", details: "The DNS Server role allows a Windows Server to host DNS zones, respond to queries, and maintain DNS records for the network." },
              { title: "Root Hints", details: "Root hints are a list of root DNS servers that a DNS server uses to resolve queries for domains outside its own zones." },
              { title: "DNS Zones", details: "A DNS zone is a portion of the DNS namespace that is administered by a specific organization. Zones contain resource records for the domain." },
              { title: "Zone Files", details: "Zone files are text files that contain the resource records for a DNS zone. They define the mapping between domain names and IP addresses." },
              { title: "DHCP", details: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network configuration parameters to devices on a network." },
              { title: "DHCP Messages", details: "DHCP uses a four-step process involving DHCP Discover, Offer, Request, and Acknowledgement messages to assign IP addresses." },
              { title: "Discover", details: "DHCP Discover is the first message sent by a client to locate available DHCP servers on the network." },
              { title: "Offer", details: "DHCP Offer is the response from a DHCP server offering an IP address and configuration parameters to the client." },
              { title: "Request", details: "DHCP Request is the client's acceptance of the offered IP address and configuration." },
              { title: "Acknowledgement", details: "DHCP Acknowledgement confirms the IP address lease to the client, completing the four-step process." },
              { title: "DHCP Fault Tolerance", details: "DHCP fault tolerance ensures that DHCP services remain available even if a DHCP server fails, through mechanisms like failover and clustering." },
              { title: "DHCP Failover", details: "DHCP failover allows two DHCP servers to work together to provide IP addresses, providing redundancy and load balancing." },
              { title: "DHCP Clustering", details: "DHCP clustering groups multiple DHCP servers to provide high availability and load distribution for IP address assignments." },
              { title: "Split Scope", details: "A split scope divides the IP address range between two DHCP servers, with one server handling the primary allocation and the other handling secondary allocation." },
              { title: "DHCP Security", details: "DHCP security measures include DHCP snooping, authorized servers, and IP address conflict detection to prevent unauthorized DHCP servers from operating on the network." },
              { title: "DHCP Relay Agent", details: "A DHCP relay agent forwards DHCP requests from clients on one subnet to a DHCP server on another subnet, enabling centralized DHCP management across multiple network segments." },
            ],
          },
        },
        {
          id: "1-4-2",
          number: "1.4.2",
          title: "Installation of Server Roles and Features",
          content: {
            intro: "Installing DNS and DHCP server roles involves using Server Manager to add the required roles and features to the Windows Server.",
            steps: [
              "Open Server Manager",
              "Click Add Roles and Features",
              "Follow the wizard to select the DNS Server role",
              "Confirm and install the DNS Server role",
              "Click Add Roles and Features again",
              "Select the DHCP Server role",
              "Confirm and install the DHCP Server role",
              "Verify installation through Server Manager",
              "Configure DNS and DHCP settings as needed"
            ],
          },
        },
      ],
    },
    {
      id: "1-5",
      number: "1.5",
      title: "Configuration of DNS",
      topics: [
        {
          id: "1-5-1",
          number: "1.5.1",
          title: "Lookup Zones",
          content: {
            intro: "DNS lookup zones define how domain name resolution is configured on a DNS server. Different zone types serve different purposes in DNS infrastructure.",
            subsections: [
              { title: "Forward Lookup Zone", details: "A forward lookup zone resolves domain names to IP addresses. It is the most commonly used zone type for mapping hostnames to IP addresses." },
              { title: "Reverse Lookup Zone", details: "A reverse lookup zone resolves IP addresses to domain names, enabling reverse DNS lookups." },
              { title: "Conditional Forwarders", details: "Conditional forwarders are DNS servers that forward queries for specific domain names to designated forwarder servers, rather than querying the root servers." },
              { title: "Primary Zone", details: "A primary zone is a read/write copy of a zone that contains the master copy of the zone database." },
              { title: "Secondary Zone", details: "A secondary zone is a read-only copy of a zone that is created as a copy of a primary zone for redundancy and load balancing." },
              { title: "Stub Zone", details: "A stub zone contains only the records necessary to identify the authoritative DNS servers for a domain, reducing zone transfer overhead." },
              { title: "Zone Replication", details: "Zone replication copies DNS zone data across multiple DNS servers to ensure consistency and availability." },
              { title: "Zone Transfers", details: "Zone transfers move DNS zone data from a primary DNS server to secondary DNS servers to maintain synchronized copies." },
              { title: "Aging and Scavenging", details: "Aging and scavenging automatically remove outdated DNS records to keep the zone database clean and current." },
              { title: "Dynamic Updates", details: "Dynamic updates allow DNS clients to register and update their own resource records automatically." },
              { title: "Zone Delegation", details: "Zone delegation assigns responsibility for a subdomain to another DNS server, distributing management authority." },
              { title: "Forward vs Reverse Lookup Zone", details: "Forward lookup zones map names to IP addresses, while reverse lookup zones map IP addresses to names. Both are essential for complete DNS resolution." },
            ],
          },
        },
        {
          id: "1-5-2",
          number: "1.5.2",
          title: "Creation of Alias (CNAME)",
          content: {
            intro: "A CNAME (Canonical Name) record creates an alias from one domain name to another, allowing multiple hostnames to point to the same resource.",
            steps: [
              "Open DNS Manager",
              "Navigate to the Forward Lookup Zone",
              "Right-click the zone and select New Alias",
              "Enter the alias name",
              "Specify the fully qualified domain name (FQDN) target",
              "Click OK to create the alias record",
              "Verify DNS propagation using nslookup"
            ],
          },
        },
        {
          id: "1-5-3",
          number: "1.5.3",
          title: "DNS Records",
          content: {
            intro: "DNS records are the fundamental building blocks of DNS resolution, mapping domain names to IP addresses and providing additional services.",
            records: [
              { type: "A", description: "Maps a domain name to an IPv4 address." },
              { type: "AAAA", description: "Maps a domain name to an IPv6 address." },
              { type: "CNAME", description: "Creates an alias from one domain name to another." },
              { type: "MX", description: "Specifies mail servers responsible for receiving email for the domain." },
              { type: "PTR", description: "Maps an IP address to a domain name (used in reverse DNS lookups)." },
              { type: "NS", description: "Identifies the authoritative name servers for a domain." },
              { type: "SOA", description: "Contains administrative information about the DNS zone, including the primary name server and administrator email." },
            ],
          },
        },
      ],
    },
    {
      id: "1-6",
      number: "1.6",
      title: "Configuration of DHCP Parameters",
      topics: [
        {
          id: "1-6-1",
          number: "1.6.1",
          title: "Scope",
          content: {
            intro: "A DHCP scope defines the range of IP addresses that the DHCP server can assign to clients on a specific subnet.",
            steps: [
              "Define the scope name",
              "Specify the IP address range (starting and ending IP)",
              "Set the subnet mask",
              "Configure exclusions for IP addresses that should not be assigned",
              "Set the lease duration",
              "Activate the scope to begin assigning IP addresses"
            ],
            fields: [
              { name: "Scope name", description: "A descriptive name for the scope." },
              { name: "IP address range", description: "The range of IP addresses available for assignment." },
              { name: "Starting IP", description: "The first IP address in the scope." },
              { name: "Ending IP", description: "The last IP address in the scope." },
              { name: "Subnet mask", description: "The subnet mask for the network segment." },
              { name: "Exclusions", description: "IP addresses excluded from DHCP assignment, often reserved for static devices." },
              { name: "Lease duration", description: "The length of time a client can use the assigned IP address before renewal is required." },
              { name: "Activate scope", description: "Enable the scope so DHCP can begin assigning IP addresses." },
            ]
          },
        },
        {
          id: "1-6-2",
          number: "1.6.2",
          title: "Reservation",
          content: {
            intro: "A DHCP reservation ensures a specific IP address is always assigned to the same device based on its MAC address.",
            fields: [
              { name: "Reservation name", description: "A descriptive name for the reservation." },
              { name: "IP address", description: "The specific IP address to be reserved." },
              { name: "MAC address", description: "The MAC address of the device that will receive the reserved IP." },
              { name: "Description", description: "Additional information about the reservation." },
            ],
            steps: [
              "Open DHCP Manager",
              "Navigate to the desired scope",
              "Right-click Reservations and select New Reservation",
              "Enter the reservation details",
              "Click OK to create the reservation"
            ]
          },
        },
        {
          id: "1-6-3",
          number: "1.6.3",
          title: "Failover",
          content: {
            intro: "DHCP failover provides redundancy by allowing two DHCP servers to share responsibility for IP address assignment, ensuring continuous DHCP service even if one server fails.",
            subsections: [
              { title: "DHCP Failover", details: "DHCP failover is a mechanism where two DHCP servers work together to provide IP addresses to clients, ensuring service continuity." },
              { title: "Partner Server", details: "The partner server is the secondary DHCP server that shares the scope with the primary server." },
              { title: "Relationship Name", details: "A unique name that identifies the failover relationship between the two DHCP servers." },
              { title: "Load Balance", details: "Load balance failover distributes IP address assignments between both servers based on a configured percentage." },
              { title: "Hot Standby", details: "Hot standby failover designates one server as primary and the other as backup, with the backup taking over only when the primary fails." },
              { title: "Communication Settings", details: "Network communication settings between failover partners, including port numbers and heartbeat intervals." },
              { title: "Authentication", details: "Authentication mechanisms ensure that only authorized DHCP servers participate in failover." },
              { title: "Maximum Client Lead Time", details: "The maximum time a client can use an IP address beyond the lease period before the failover partner must handle renewal requests." },
              { title: "Manage Failover", details: "Configuration and monitoring of failover relationships through DHCP Manager." },
              { title: "DHCP Reservation vs DHCP Failover", details: "DHCP reservations assign specific IP addresses to individual devices based on MAC addresses. DHCP failover provides redundancy between two DHCP servers sharing a scope." },
            ],
          },
        },
      ],
    },
    {
      id: "1-7",
      number: "1.7",
      title: "Monitoring of Server Services",
      topics: [
        {
          id: "1-7-1",
          number: "1.7.1",
          title: "nslookup Command for Resolving DNS",
          content: {
            intro: "The nslookup command is a network administration tool used to query DNS servers to obtain domain name or IP address mapping.",
            steps: [
              "Open Command Prompt or PowerShell",
              "Type nslookup followed by the domain name",
              "Review the DNS response including the IP address",
              "Use nslookup with additional options for more detailed queries"
            ],
            examples: [
              { command: "nslookup", description: "Displays DNS resolver configuration and default server information." },
              { command: "nslookup example.com", description: "Resolves example.com to its IP address." },
              { command: "nslookup 8.8.8.8", description: "Performs a reverse DNS lookup for the IP address." },
              { command: "nslookup -type=mx example.com", description: "Queries MX records for the domain." },
            ]
          },
        },
        {
          id: "1-7-2",
          number: "1.7.2",
          title: "Checking IP DHCP Configuration on Client",
          content: {
            intro: "The ipconfig command displays the current TCP/IP network configuration values on a Windows client, including the IP address assigned by DHCP.",
            steps: [
              "Open Command Prompt or PowerShell",
              "Type ipconfig and press Enter",
              "Review the IP address, subnet mask, default gateway, and DNS settings",
              "Use ipconfig /all for detailed configuration including MAC address and DHCP server information",
              "Use ipconfig /renew to request a new IP address lease",
              "Use ipconfig /release to release the current IP address lease"
            ],
            examples: [
              { command: "ipconfig", description: "Displays basic TCP/IP configuration." },
              { command: "ipconfig /all", description: "Displays all network configuration details." },
              { command: "ipconfig /renew", description: "Renews the DHCP lease." },
              { command: "ipconfig /release", description: "Releases the current DHCP lease." },
            ]
          },
        },
      ],
    },
  ],
} as const;

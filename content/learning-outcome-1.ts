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
      description: "Foundational concepts of server administration including virtualization technologies, hypervisor types, and server hardware requirements.",
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
              { term: "Virtualization", definition: "Virtualization is the process of creating a virtual version of a physical computing resource, such as a computer, server, storage, network, or operating system. Instead of having separate physical machines for each function, virtualization allows multiple virtual systems to run on a single physical machine." },
              { term: "VMware Workstation", definition: "VMware Workstation is a Type-2 hypervisor that runs on top of a host operating system. It allows you to create and run multiple virtual machines on a single physical computer." },
              { term: "Host", definition: "The physical computer running VMware Workstation. The host provides the hardware resources that virtual machines use." },
              { term: "Guest", definition: "The operating system running inside a virtual machine. The guest OS behaves as if it is running on a physical machine, but it is actually using virtualized hardware." },
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
                title: "What is Virtualization?",
                content: "Virtualization is the process of creating a virtual version of a physical computing resource. Instead of having separate physical machines (Physical Computer 1 → Windows Server, Physical Computer 2 → Windows Client), you can have one physical PC running VMware Workstation with multiple virtual machines inside it."
              },
              {
                title: "Why Virtualization?",
                content: [
                  "Reduced hardware requirements — consolidate multiple servers onto fewer physical machines",
                  "Isolation — each VM is isolated from others, so a problem in one doesn't affect the rest",
                  "Easy testing — test software and configurations in VMs without risking the physical machine",
                  "Snapshots — take a snapshot of a VM state and revert to it if something goes wrong",
                  "Rapid deployment — deploy new servers in minutes instead of hours",
                  "Resource allocation — dynamically allocate CPU, RAM, and storage to VMs as needed",
                  "Disaster recovery — VMs can be backed up and restored quickly",
                  "Running multiple operating systems — run Windows, Linux, and other OSes on the same hardware",
                  "Lab environments — create test labs without purchasing additional hardware"
                ]
              },
              {
                title: "Hypervisor Technologies",
                content: "A hypervisor (also called a Virtual Machine Monitor) is the foundational technology that enables virtualization. It sits between the hardware and the operating systems, managing the allocation of physical resources to virtual machines."
              },
              {
                title: "Type 1 Hypervisor / Bare Metal",
                content: "A Type 1 hypervisor runs directly on the host's hardware to control the hardware and manage guest operating systems. It does not require an underlying host operating system. Examples: VMware ESXi, Microsoft Hyper-V Server, Xen. The stack is: Hardware → Hypervisor → VMs."
              },
              {
                title: "Type 2 Hypervisor / Hosted",
                content: "A Type 2 hypervisor runs on top of a conventional operating system just as other computer programs do. Examples: VMware Workstation, Oracle VirtualBox, VMware Fusion. The stack is: Hardware → Host OS → Hypervisor → VMs. Type 2 hypervisors are easier to set up but typically have lower performance than Type 1."
              },
              {
                title: "Full Virtualization",
                content: "Full virtualization uses a hypervisor to simulate a complete hardware environment for the guest operating system. The guest OS is completely isolated and unaware it is running in a virtual environment. All hardware calls are intercepted by the hypervisor."
              },
              {
                title: "Para-virtualization",
                content: "Para-virtualization is a technique where the guest operating system is modified to be aware of the hypervisor. This reduces overhead because the guest OS can communicate directly with the hypervisor through a special API, rather than emulating hardware."
              },
              {
                title: "Hardware-assisted Virtualization",
                content: "Hardware-assisted virtualization uses CPU features such as Intel VT-x or AMD-V to improve VM performance. These hardware extensions provide support for efficient virtualization by allowing direct access to hardware resources from the hypervisor."
              },
              {
                title: "Types of Server Virtualization",
                content: "Server virtualization can be categorized by approach: full virtualization, para-virtualization, hardware-assisted virtualization, and operating-system-level virtualization (containers). Each type offers different trade-offs between performance, isolation, and flexibility."
              },
              {
                title: "Container-based Virtualization",
                content: "Container-based virtualization (also called OS-level virtualization) runs multiple isolated user-space instances on a single host OS kernel. Unlike traditional VMs, containers share the host OS kernel and do not require a full guest OS. Docker and Kubernetes are the most well-known container platforms. Containers are lightweight, start in seconds, and consume fewer resources, but they offer less isolation than VMs because they share the OS kernel.",
              },
              {
                title: "How to Choose a Virtualization Type",
                content: "Organizations choose the type of server virtualization based on factors such as performance requirements, compatibility, resource utilization, and management capabilities. Type 1 hypervisors (ESXi, Hyper-V) are preferred for production server workloads due to better performance and isolation. Type 2 hypervisors (VMware Workstation, VirtualBox) are suitable for development, testing, and lab environments. Containers are ideal for microservices and application-level isolation where speed and resource efficiency are priorities.",
              },
              {
                title: "Benefits of Virtualization",
                content: [
                  "Reduced hardware costs — consolidate multiple servers onto fewer physical machines",
                  "Improved resource utilization and efficiency",
                  "Simplified management and administration",
                  "Faster deployment of new servers and applications",
                  "Enhanced disaster recovery and business continuity",
                  "Reduced power consumption and physical space requirements",
                  "Greater flexibility and scalability"
                ]
              },
              {
                title: "Important VMware Terminology",
                content: [
                  { title: "VM", details: "Virtual Machine — a software-based emulation of a physical computer." },
                  { title: "Host", details: "The physical machine running virtualization software." },
                  { title: "Guest", details: "The operating system running inside a VM." },
                  { title: "ISO", details: "Installation image — a file containing the contents of an optical disc, used to install operating systems." },
                  { title: "VMDK", details: "VMware virtual disk format — the file format used for virtual machine hard disks." },
                  { title: "vCPU", details: "Virtual CPU — a portion of the host's physical CPU allocated to a VM." },
                  { title: "Virtual RAM", details: "RAM allocated to a VM from the host's physical memory." },
                  { title: "Virtual NIC", details: "Virtual network adapter — a software-based network interface assigned to a VM." },
                  { title: "Snapshot", details: "A point-in-time state of a VM that can be reverted to later." },
                ]
              },
              {
                title: "VMware Network Modes",
                content: "VMware provides several network modes for virtual machines. Understanding these is critical for configuring VM communication."
              },
              {
                title: "Bridged Networking",
                details: "The VM connects directly to the physical network. It can appear as another device on the network alongside the physical PC. Router → Physical PC + VM. The VM gets its own IP from the physical network's DHCP server or can use a static IP."
              },
              {
                title: "NAT Networking",
                details: "The VM uses the host's network connection through VMware's NAT service. The chain is: VM → VMware NAT → Host → Internet. The VM can access the internet but is not directly accessible from the physical network."
              },
              {
                title: "Host-Only Networking",
                details: "Creates an isolated virtual network. Useful for labs where you want Server VM ↔ Client VM ↔ Host without exposing the lab to the physical network. VMs communicate with the host and other host-only VMs but normally don't have direct internet access."
              },
            ],
          },
        },
        {
          id: "1-1-3",
          number: "1.1.3",
          title: "Server Requirements",
          content: {
            intro: "Proper server requirements ensure that virtualized environments run efficiently and reliably. When creating VMs, you need to understand CPU, RAM, storage, and networking requirements.",
            subsections: [
              {
                title: "Hardware Requirements",
                content: [
                  { title: "CPU", details: "A multi-core processor with hardware virtualization support (Intel VT-x or AMD-V) is essential. When allocating CPU to VMs: a physical CPU with 8 cores can be split into 2 virtual CPUs per VM. The VM does not physically receive separate CPUs — VMware schedules virtual CPU execution on the physical CPU." },
                  { title: "RAM", details: "Sufficient memory is critical. Example: Physical machine = 16 GB RAM, Server VM = 4 GB, Client VM = 4 GB, Remaining = host requirements. You should never allocate all RAM to VMs because the host OS needs memory too." },
                  { title: "Storage (VMDK)", details: "Virtual disks use VMDK files. Physical Disk → VMDK → Windows Server → C: drive. Key concepts: disk size, thin provisioning (allocates space on demand), thick provisioning (allocates all space upfront), and virtual disk expansion. Snapshots can affect disk performance." },
                  { title: "HDD vs SSD", details: "Determine the type of storage needed, such as hard disk drives (HDDs) or solid-state drives (SSDs). SSDs provide significantly faster read/write speeds and are preferred for OS drives and databases. HDDs are more cost-effective for bulk storage and backups." },
                  { title: "ISO Image", details: "An ISO is an image of an optical disc/filesystem, commonly used to install operating systems. Example: Windows Server ISO → VM CD/DVD Drive → Boot → Windows Installation." },
                  { title: "Network Connectivity", details: "Multiple network interfaces support network segregation and redundancy. Gigabit or higher Ethernet is recommended." },
                  { title: "Redundancy and High Availability", details: "Redundant power supplies, cooling, and network paths ensure continuous operation. Failover mechanisms minimize downtime." },
                ]
              },
              {
                title: "Software Requirements",
                content: [
                  { title: "Operating System", details: "The host server must run a compatible operating system. For Type 1 hypervisors, the hypervisor acts as the OS directly." },
                  { title: "VMware Workstation", details: "Required for Type-2 virtualization. Installs on top of the host OS and provides the interface for creating and managing VMs." },
                  { title: "Server Software", details: "Required server applications include web servers, DNS servers, DHCP servers, and domain controllers." },
                  { title: "Security Software", details: "Firewalls, antivirus software, and intrusion detection systems protect the server environment." },
                  { title: "Server Management Tools", details: "Tools such as VMware vSphere Client, Microsoft Server Manager, and PowerShell are essential for administration." },
                  { title: "Application Compatibility", details: "Consider the compatibility of the server software with the applications and services to be hosted. Ensure that the server software supports the required programming languages, frameworks, and dependencies." },
                ]
              },
              {
                title: "VM Configuration Overview",
                content: "When creating a VM, you need to configure: VM name, VM location, ISO image, CPU cores, RAM amount, hard disk size, network adapter type, CD/DVD drive, firmware type, and boot order."
              },
              {
                title: "VM Hardware Components",
                content: [
                  { title: "CPU", details: "Understand: Processor, Cores, vCPU, CPU allocation. Example: Host has 8 physical CPU cores, Server VM gets 2 vCPU. The VM does not physically receive separate CPUs — VMware schedules virtual CPU execution on the physical CPU." },
                  { title: "RAM", details: "Example: Host = 16 GB, Server VM = 4 GB, Client VM = 4 GB. If you give VMs excessive RAM, the host has less available and performance decreases. Never allocate all RAM to VMs." },
                  { title: "Hard Disk", details: "The VM sees a virtual disk: VM → Virtual HDD/SSD → VMDK file → Physical storage. Know: disk capacity, virtual disk file, disk expansion, thin vs thick provisioning." },
                  { title: "Network Adapter", details: "Every VM can have a virtual NIC: VM → Virtual NIC → VMware Virtual Network → Physical NIC/Host. Know: MAC address, IP address, network connection type (NAT/Bridged/Host-only)." },
                  { title: "CD/DVD", details: "Used to attach ISO images for OS installation. After installation, the virtual hard disk becomes the boot device." },
                  { title: "USB Controller", details: "Allows the VM to use USB devices connected to the host." },
                  { title: "Display", details: "Virtual display adapter for the VM's graphical output." },
                  { title: "Firmware", details: "BIOS or UEFI firmware type for the VM." },
                ]
              },
              {
                title: "Boot Order",
                content: "The boot order determines which device the VM tries to boot from first. Example: 1. CD/DVD, 2. Hard Disk, 3. Network. During Windows installation: ISO → CD/DVD → Windows installer. After installation: Virtual HDD → Windows Server."
              },
              {
                title: "Snapshots",
                content: "A snapshot captures the state of a VM at a particular point in time. Example: Fresh Windows Installation → Snapshot → Install DHCP → Something breaks → Revert → Previous state. Very useful for training labs. But understand: a snapshot is not a replacement for a proper backup."
              },
              {
                title: "VM Cloning",
                content: "Cloning creates a copy of a VM: Server VM → Clone → Another VM. Useful when you need multiple similar machines. But cloned systems may require changes to computer name, network configuration, and identity-related settings."
              },
              {
                title: "Virtual Networking Configuration",
                content: "This is especially important because later DHCP/DNS/AD labs depend on it. The two VMs must be connected to the same virtual network if you want them to communicate directly. Example: VMware Host-only Network → Server VM (50.0.0.1) + Client VM (50.0.0.x)."
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
      description: "Step-by-step guide to installing server operating systems including RAID configuration, hypervisor installation, VM creation, and guest OS setup.",
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
              { title: "Disadvantages of RAID", details: "RAID can be expensive due to the need for multiple disks, adds complexity to management, and may introduce write penalties depending on the RAID level. In the event of a drive failure, the process of rebuilding data onto a replacement drive can take time, during which the system may be vulnerable to further failures." },
              { title: "RAID Configuration on Physical Server", details: "To configure RAID on a physical server, enter the RAID controller BIOS during boot by pressing the appropriate key (common keys include Ctrl+R, Ctrl+M, or Ctrl+G). Create a RAID array by selecting the appropriate disks, and initialize the array. The operating system then recognizes the RAID volume as a single disk." },
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
              { title: "Download the ESXi ISO", details: "Download the VMware ESXi ISO from the VMware website. Ensure you have the correct version for your hardware." },
              { title: "Verify hardware compatibility", details: "Check the VMware Hardware Compatibility List to ensure your server hardware is supported by ESXi." },
              { title: "Create bootable media", details: "Create bootable installation media using a USB drive or DVD from the downloaded ISO." },
              { title: "Enable virtualization in BIOS", details: "Enter the server BIOS/UEFI settings and enable Intel VT-x or AMD-V virtualization support. This is required for the hypervisor to function." },
              { title: "Boot from installation media", details: "Boot the server from the ESXi installation media. The installer will load into memory." },
              { title: "Select keyboard layout", details: "Select the appropriate keyboard layout and press Enter to continue." },
              { title: "Accept EULA", details: "Read and accept the End User License Agreement (EULA) to proceed with the installation." },
              { title: "Select installation disk", details: "Select the disk where ESXi will be installed. The installer will partition and format the disk." },
              { title: "Set root password", details: "Set the root password for the ESXi host. This is used for direct console access and initial management." },
              { title: "Configure network settings", details: "Configure the management network IP address and DNS settings. This is how you will access the host remotely." },
              { title: "Complete installation", details: "Wait for the installation to complete, then remove the installation media and reboot the host." },
              { title: "Access vSphere Client", details: "Download and install the VMware vSphere Client on your computer. Use it to connect to the ESXi host by entering its IP address in a web browser." },
              { title: "Apply additional configuration", details: "Configure storage, networking (vSwitches), and any other settings required for your environment." },
            ],
          },
        },
        {
          id: "1-2-3",
          number: "1.2.3",
          title: "Creation of Virtual Machines",
          content: {
            intro: "Creating a virtual machine involves a series of steps to define and configure virtual hardware resources. This topic covers the complete VM creation process in VMware Workstation.",
            steps: [
              { title: "Step 1 — Create a new VM", details: "In VMware Workstation, select Create New Virtual Machine. Understand: Typical vs Custom configuration, VM name, VM storage location, and hardware compatibility." },
              { title: "Step 2 — Select installation media", details: "Attach your Windows Server ISO. Conceptually: Windows Server ISO → Virtual CD/DVD Drive → VM boots from ISO → Windows Installation." },
              { title: "Step 3 — Configure CPU", details: "Example: Processors: 1, Cores: 2. Virtual CPU resources are allocated from the host's physical CPU." },
              { title: "Step 4 — Configure RAM", details: "Example: Server VM RAM = 4 GB. Allocating more RAM to a VM leaves less available for the host and other VMs." },
              { title: "Step 5 — Configure virtual disk", details: "Example: Virtual Disk → 60 GB → VMDK. Understand: disk capacity, virtual disk file, disk provisioning, and where the VM's files are stored. Choose between thin provisioning (allocates space on demand, more flexible) and thick provisioning (allocates all space upfront, better performance)." },
              { title: "Step 5b — Advanced options", details: "If needed, you can configure advanced options like resource allocation, virtual machine compatibility, and boot options. These are available in the Custom configuration path." },
              { title: "Step 6 — Configure network adapter", details: "Choose the appropriate VMware network: NAT, Bridged, or Host-only. For an isolated Windows Server lab, Host-only is often useful." },
              { title: "Step 7 — Install Windows Server", details: "Boot from the ISO and go through Windows installation. Important concepts: edition, Server Core vs Desktop Experience, administrator account, installation partition, computer name." },
            ],
            subsections: [
              { title: "After Installation", details: "You should be able to determine: hostname (hostname command), ipconfig (ipconfig), systeminfo (systeminfo), whoami (whoami). And on Server Core: sconfig." },
              { title: "Server vs Client", details: "A server is designed to provide services (DHCP, DNS, Active Directory, File Services, Web Services). A client primarily consumes services provided by servers. Example: Client → DNS Server → Name resolution. Client → DHCP Server → IP configuration." },
              { title: "Testing Connectivity", details: "You should be able to test: ping <server-IP> (e.g., ping 50.0.0.1) and understand what a successful/failed ping tells you about network connectivity." },
            ],
          },
        },
        {
          id: "1-2-4",
          number: "1.2.4",
          title: "Installation of Guest OS",
          content: {
            intro: "Installing a guest operating system on a virtual machine follows a process similar to physical OS installation, but uses virtual media and boot configuration. This applies to both server and client VMs.",
            subsections: [
              {
                title: "Lab Topology",
                content: "You should understand the relationship: VMware Workstation → Virtual Network → Server VM (Windows Server) + Client VM (Windows Client). Eventually: Server (50.0.0.1) → Virtual Network → Client (50.0.0.x)."
              },
              {
                title: "Client VM Configuration",
                content: "Similar to the server: Create VM → Select Windows ISO → Allocate CPU → Allocate RAM → Create virtual disk → Configure network adapter → Install Windows → Configure computer name."
              },
            ],
            steps: [
              { title: "Prepare installation media", details: "Obtain the Windows Server or Windows Client ISO file. This contains all the files needed for installation." },
              { title: "Select the target VM", details: "Open your virtualization software and select the VM you created for this installation." },
              { title: "Power on the virtual machine", details: "Start the VM. It will attempt to boot from the configured boot device." },
              { title: "Connect the ISO", details: "Attach the installation ISO to the VM's virtual CD/DVD drive so it can boot from the installation media." },
              { title: "Boot from installation media", details: "Configure the VM to boot from the CD/DVD drive first. The Windows installer will load." },
              { title: "Begin installation", details: "Follow the Windows installation wizard. Select language, time format, and keyboard layout." },
              { title: "Disk partitioning", details: "Choose the disk to install Windows on. You can create partitions or use the entire disk. For lab environments, using the full disk is typical." },
              { title: "Configure network settings", details: "Set the IP address, subnet mask, gateway, and DNS. For the server, use a static IP (e.g., 50.0.0.1). For clients, DHCP or static depending on your lab." },
              { title: "Complete installation", details: "Windows will copy files, install features, and reboot. Set the administrator password when prompted." },
              { title: "Install VMware Tools", details: "After Windows is running, install VMware Tools for better display, mouse integration, shared folders, and performance." },
            ],
          },
        },
        {
          id: "1-2-5",
          number: "1.2.5",
          title: "Basic Network Configuration",
          content: {
            intro: "Every networked device needs a set of network parameters to communicate. Understanding these parameters is essential for configuring both servers and clients.",
            subsections: [
              { title: "IP Address", details: "An IP address is a unique numerical identifier assigned to each device on a network. It is used to identify and locate devices. Example: 50.0.0.2." },
              { title: "Subnet Mask", details: "A subnet mask determines which portion of an IP address represents the network and which represents the host. Example: 255.255.255.0 means the first three octets identify the network." },
              { title: "Default Gateway", details: "The default gateway is the router interface that connects the local network to other networks. It is used to route traffic outside the local subnet. Example: 50.0.0.1." },
              { title: "DNS Server", details: "The DNS server address specifies which DNS server the device uses to resolve domain names to IP addresses. Example: 50.0.0.1 (often the domain controller)." },
              { title: "DHCP vs Static IP", details: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to clients. A static IP is manually configured on the device and does not change. Servers typically use static IPs; clients often use DHCP." },
              { title: "Example Configuration", details: "IP: 50.0.0.2, Subnet: 255.255.255.0, Gateway: 50.0.0.1, DNS: 50.0.0.1. You should understand what each parameter does rather than just memorizing values." },
            ],
          },
        },
        {
          id: "1-2-6",
          number: "1.2.6",
          title: "Basic Windows Networking Commands",
          content: {
            intro: "Windows provides several command-line tools for viewing network configuration, testing connectivity, and troubleshooting network issues.",
            steps: [
              { title: "ipconfig", details: "Displays basic TCP/IP configuration including IP address, subnet mask, and default gateway." },
              { title: "ipconfig /all", details: "Displays all network configuration details including MAC address, DHCP server, DNS servers, and lease information." },
              { title: "ipconfig /release", details: "Releases the current DHCP lease, releasing the assigned IP address." },
              { title: "ipconfig /renew", details: "Requests a new IP address lease from the DHCP server." },
              { title: "ipconfig /displaydns", details: "Displays the contents of the DNS client resolver cache." },
              { title: "ipconfig /flushdns", details: "Flushes the DNS client resolver cache, clearing all cached DNS entries." },
              { title: "ping", details: "Tests network connectivity to another device. Example: ping 50.0.0.1 tests connectivity to the server." },
              { title: "nslookup", details: "Queries DNS servers to obtain domain name or IP address mapping. Used to test DNS resolution." },
              { title: "route print", details: "Displays the IP routing table, showing how network traffic is routed." },
              { title: "netstat -ano", details: "Displays active network connections, listening ports, and associated process IDs." },
            ],
          },
        },
        {
          id: "1-2-7",
          number: "1.2.7",
          title: "Server Core Fundamentals",
          content: {
            intro: "Server Core is a minimal Windows Server installation without the traditional graphical desktop experience. It is important because it reduces attack surface and resource usage.",
            subsections: [
              { title: "What is Server Core?", details: "Server Core is a minimal installation option for Windows Server that removes the GUI and many graphical management tools. Instead of GUI → Control Panel → Server Manager, you work primarily through CMD, PowerShell, SConfig, and remote management tools." },
              { title: "Why Use Server Core?", details: "Server Core has a smaller disk footprint, requires fewer updates, uses less RAM, and has a reduced attack surface because fewer components are installed." },
              { title: "Server Core Commands", details: "Key commands: sconfig (opens the Server Configuration tool), hostname (displays computer name), ipconfig (shows network config), whoami (shows current user), systeminfo (displays system information). To enter PowerShell from CMD, type: powershell." },
              { title: "Remote Management", details: "Server Core is typically managed remotely using Server Manager, RSAT tools, PowerShell remoting, or RDP. This is the primary administration model for Server Core deployments." },
            ],
          },
        },
        {
          id: "1-2-8",
          number: "1.2.8",
          title: "Day 1 Practical Checklist",
          content: {
            intro: "By the end of Day 1, you should be able to independently perform all of the following tasks.",
            subsections: [
              {
                title: "VMware",
                content: [
                  "Install/open VMware Workstation",
                  "Understand Type-2 virtualization",
                  "Understand Host vs Guest",
                  "Create a virtual network",
                  "Understand NAT, Bridged, and Host-only networking",
                ]
              },
              {
                title: "Server VM",
                content: [
                  "Create Server VM",
                  "Attach Windows Server ISO",
                  "Allocate CPU and RAM",
                  "Create virtual disk",
                  "Configure NIC",
                  "Install Windows Server",
                  "Understand Server Core",
                  "Configure basic server settings",
                ]
              },
              {
                title: "Client VM",
                content: [
                  "Create Client VM",
                  "Attach Windows ISO",
                  "Allocate resources",
                  "Configure NIC",
                  "Install Windows",
                  "Verify connectivity with server",
                ]
              },
              {
                title: "Basic Configuration",
                content: [
                  "Change VM RAM, CPU, disk, network adapter",
                  "Attach/detach ISO",
                  "Understand boot order",
                  "Create and revert snapshots",
                  "Understand VM cloning",
                ]
              },
            ],
          },
        },
      ],
    },
    {
      id: "1-3",
      number: "1.3",
      title: "Creation of Domain Controller",
      description: "Setting up Active Directory Domain Services, configuring administrative tools, and promoting a server to a domain controller.",
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
              { title: "Set a static IP address", details: "Before installing AD DS, the server must have a static IP address. A Domain Controller should not use DHCP because clients need a consistent DNS server address." },
              { title: "Open Server Manager", details: "Launch Server Manager from the Start menu or the taskbar. This is the central console for managing server roles." },
              { title: "Click Add Roles and Features", details: "In Server Manager, click Manage → Add Roles and Features to launch the wizard." },
              { title: "Select AD DS role", details: "In the Server Roles section, check Active Directory Domain Services. A prompt may appear asking to add required features — click Add Features." },
              { title: "Choose installation type", details: "Select Role-based or Feature-based installation. This installs the role on the current server." },
              { title: "Select the target server", details: "Choose the server from the server pool where you want to install AD DS." },
              { title: "Add required features", details: "If prompted, add features like .NET Framework that AD DS depends on." },
              { title: "Confirm selections", details: "Review the installation selections. You can choose to restart automatically if needed." },
              { title: "Click Install", details: "The installation begins. This may take several minutes. The role is installed but not yet configured." },
              { title: "Promote to domain controller", details: "After installation, click the notification flag in Server Manager and select 'Promote this server to a domain controller'." },
              { title: "Add a new forest", details: "Choose 'Add a new forest' if this is the first domain controller. Enter the root domain name (e.g., example.local)." },
              { title: "Set DSRM password", details: "Set the Directory Services Restore Mode password. This is used for disaster recovery and should be stored securely." },
              { title: "Review configuration", details: "Review the configuration summary. Verify the domain name, NetBIOS name, and paths are correct." },
              { title: "Wait for installation", details: "The promotion process installs DNS, creates the AD database, and configures the server as a Domain Controller. This takes several minutes." },
              { title: "Restart the server", details: "The server restarts automatically after promotion. After reboot, it is a fully functional Domain Controller." },
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
              { title: "Verify prerequisites", details: "Ensure the server meets all requirements: static IP, sufficient disk space, and administrative access." },
              { title: "Install AD DS role", details: "Install the AD DS server role through Server Manager before promoting." },
              { title: "Launch the configuration wizard", details: "Open Server Manager → Notifications → 'Promote this server to a domain controller'." },
              { title: "Choose configuration type", details: "Select whether to add a domain to an existing forest or create a new forest. You can choose 'Add a new forest' if you are creating a new domain, or 'Add a domain controller to an existing domain' if you are joining an existing domain." },
              { title: "Select New forest", details: "If creating a new domain, select 'Add a new forest' and enter the root domain name." },
              { title: "Configure DNS settings", details: "Specify the domain name and verify DNS delegation settings." },
              { title: "Set DSRM password", details: "Provide the Directory Services Restore Mode password for disaster recovery." },
              { title: "Review the summary", details: "Review all configuration options before proceeding." },
              { title: "Click Promote", details: "Start the promotion process. The server will configure AD DS, install DNS, and create the domain." },
              { title: "Restart", details: "The server restarts after successful promotion. It is now a Domain Controller." },
            ],
          },
        },
      ],
    },
    {
      id: "1-4",
      number: "1.4",
      title: "Installation of Server Roles and Features",
      description: "Understanding the difference between server roles and features, and installing DNS and DHCP roles via Server Manager.",
      topics: [
        {
          id: "1-4-1",
          number: "1.4.1",
          title: "Description of Server Roles and Features",
          content: {
            intro: "Server roles and features define what services a Windows Server can provide to the network. DNS and DHCP are two of the most fundamental roles for network infrastructure.",
            subsections: [
              { title: "DNS", details: "DNS (Domain Name System) translates names into IP addresses and performs other name-resolution functions. Instead of remembering 50.0.0.1, you can use server01.example.local. DNS is critical to Active Directory — if DNS is incorrectly configured, domain joining can fail." },
              { title: "DNS Queries", details: "A DNS query is a request sent to a DNS server to resolve a domain name to an IP address. Recursive query: the DNS server resolves the query on behalf of the client. Iterative query: the DNS server provides a referral to another DNS server." },
              { title: "DNS Operation", details: "DNS operates by resolving domain names through a hierarchical system of servers. When a client requests a domain name, the DNS server searches its cache, zone files, or forwards the query to other servers." },
              { title: "Forward vs Reverse Lookup", details: "Forward lookup: NAME → IP (e.g., server01.local → 50.0.0.1). Reverse lookup: IP → NAME (e.g., 50.0.0.1 → server01.local). Both are essential for complete DNS resolution." },
              { title: "DNS Server Roles", details: "The DNS Server role allows a Windows Server to host DNS zones, respond to queries, and maintain DNS records for the network." },
              { title: "Root Hints", details: "Root hints are a list of root DNS servers that a DNS server uses to resolve queries for domains outside its own zones." },
              { title: "DNS Zones", details: "A DNS zone is a portion of the DNS namespace that is administered by a specific organization. Zones contain resource records for the domain." },
              { title: "Zone Files", details: "Zone files are text files that contain the resource records for a DNS zone. They define the mapping between domain names and IP addresses." },
              { title: "DHCP", details: "DHCP (Dynamic Host Configuration Protocol) automatically provides network configuration to clients. Without DHCP, an administrator must manually configure each client's IP settings. With DHCP, clients automatically receive their IP configuration." },
              { title: "What DHCP Provides", details: "A DHCP server can provide: IP address, subnet mask, default gateway, DNS server, DNS domain name, lease duration, and other DHCP options. Example: Client receives IP: 50.0.0.20, Subnet: 255.255.255.0, Gateway: 50.0.0.1, DNS: 50.0.0.1." },
              { title: "DHCP DORA Process", details: "The DHCP process follows four steps: D → Discover (client broadcasts: 'Is there a DHCP server?'), O → Offer (DHCP server offers an IP), R → Request (client requests that offered IP), A → Acknowledgement (server confirms the lease). This is the most important DHCP concept to understand." },
              { title: "DHCP Scope", details: "A scope defines the range of IP addresses a DHCP server can distribute. Example: Network 50.0.0.0/24, Scope 50.0.0.10 to 50.0.0.100. Clients can receive addresses within that range." },
              { title: "DHCP Exclusion", details: "An exclusion prevents DHCP from assigning certain addresses. Example: Scope 50.0.0.10 - 50.0.0.100, Excluded: 50.0.0.1, 50.0.0.2. These addresses might be statically assigned to servers." },
              { title: "DHCP Reservation", details: "A reservation ensures a specific IP address is always assigned to the same device based on its MAC address. Example: Client MAC AA-BB-CC-DD-EE-FF always receives 50.0.0.20. Difference: Static IP is configured directly on the client; Reservation is configured on the DHCP server." },
              { title: "DHCP Lease", details: "A lease is the period for which a client is allowed to use an assigned IP. Understand: lease, renewal, expiration, and rebinding. Commands: ipconfig /release (releases current lease), ipconfig /renew (requests new lease), ipconfig /all (shows lease details)." },
              { title: "DHCP Authorization", details: "In an Active Directory environment, DHCP servers need to be authorized before they can serve clients. Unauthorized (rogue) DHCP servers can provide incorrect IP, gateway, and DNS settings, disrupting network connectivity." },
              { title: "DHCP Relay Agent", details: "A DHCP relay agent forwards DHCP requests from clients on one subnet to a DHCP server on another subnet, enabling centralized DHCP management across multiple network segments." },
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
            intro: "Installing DNS and DHCP server roles involves using Server Manager to add the required roles and features to the Windows Server. Below are the separate procedures for each role.",
            subsections: [
              {
                title: "Installing DNS Server Role",
                content: [
                  { title: "Open Server Manager", details: "Launch Server Manager from the Start menu. This is where you manage all server roles." },
                  { title: "Click Add Roles and Features", details: "Go to Manage → Add Roles and Features to start the installation wizard." },
                  { title: "Select installation type", details: "Choose Role-based or Feature-based installation and click Next." },
                  { title: "Select the target server", details: "Choose the server from the server pool where you want to install DNS." },
                  { title: "Select DNS Server role", details: "In the Server Roles section, check DNS Server. A prompt may appear asking to add required features — click Add Features." },
                  { title: "Add required features", details: "If prompted, add features like .NET Framework that DNS Server depends on." },
                  { title: "Confirm selections", details: "Review the installation selections. You can choose to restart automatically if needed." },
                  { title: "Click Install", details: "The installation begins. This may take several minutes." },
                  { title: "Wait for completion", details: "Wait for the installation to complete successfully. The DNS role is now installed." },
                  { title: "Configure DNS", details: "After installation, configure DNS zones and records as needed for your network." },
                ]
              },
              {
                title: "Installing DHCP Server Role",
                content: [
                  { title: "Open Server Manager", details: "Launch Server Manager from the Start menu." },
                  { title: "Click Add Roles and Features", details: "Go to Manage → Add Roles and Features to start the installation wizard." },
                  { title: "Select installation type", details: "Choose Role-based or Feature-based installation and click Next." },
                  { title: "Select the target server", details: "Choose the server from the server pool where you want to install DHCP." },
                  { title: "Select DHCP Server role", details: "In the Server Roles section, check DHCP Server. A prompt may appear asking to add required features — click Add Features." },
                  { title: "Add required features", details: "If prompted, add features that DHCP Server depends on." },
                  { title: "Confirm selections", details: "Review the installation selections." },
                  { title: "Click Install", details: "The installation begins. This may take several minutes." },
                  { title: "Wait for completion", details: "Wait for the installation to complete successfully." },
                  { title: "Complete DHCP configuration", details: "After installation, click the notification flag in Server Manager and follow the post-installation configuration wizard to authorize the DHCP server in Active Directory." },
                  { title: "Configure DHCP", details: "Create scopes, set exclusions, and configure reservations as needed for your network." },
                ]
              },
            ],
          },
        },
        {
          id: "1-4-3",
          number: "1.4.3",
          title: "Server Role vs Feature",
          content: {
            intro: "Understanding the difference between server roles and features is essential for planning and managing Windows Server deployments.",
            subsections: [
              { title: "Server Role", details: "A server role is a major function provided by the server. It is the primary purpose of the server. Examples: DNS Server, DHCP Server, Active Directory Domain Services, File and Storage Services, Web Server (IIS), Hyper-V." },
              { title: "Server Feature", details: "A feature is an additional component that supports or extends the functionality of a role or the server itself. It is not the primary function. Examples: .NET Framework, Telnet Client, BitLocker Drive Encryption, Failover Clustering." },
              { title: "Role vs Feature — Key Difference", details: "A role defines WHAT the server does (its primary function). A feature defines HOW the server can be enhanced or what additional capabilities it has. Example: DHCP Server is a role. .NET Framework is a feature that supports applications running on the server." },
              { title: "Examples of Roles", details: "DNS Server (name resolution), DHCP Server (automatic IP assignment), Active Directory Domain Services (authentication and authorization), Web Server / IIS (hosting websites), File and Storage Services (file sharing), Hyper-V (virtualization)." },
              { title: "Examples of Features", details: ".NET Framework (application support), Telnet Client (remote command-line access), Failover Clustering (high availability), BitLocker (disk encryption), Windows Server Backup (backup and restore)." },
              { title: "Installing Roles and Features", details: "Both roles and features are installed through Server Manager → Add Roles and Features. The wizard presents roles and features in separate sections. Some features are automatically added as dependencies when you install a role." },
            ],
          },
        },
      ],
    },
    {
      id: "1-5",
      number: "1.5",
      title: "Configuration of DNS",
      description: "Configuring DNS lookup zones, creating records, and understanding forward and reverse DNS resolution.",
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
              { title: "Zone Transfers", details: "Zone transfers move DNS zone data from a primary DNS server to secondary DNS servers to maintain synchronized copies. To configure: right-click on the zone and select Properties → go to the Zone Transfers tab and configure the settings for allowing or denying zone transfers to specific DNS servers." },
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
              { title: "Open DNS Manager", details: "Launch DNS Manager from Server Manager → Tools → DNS, or type dnsmgmt.msc in Run." },
              { title: "Navigate to Forward Lookup Zone", details: "Expand the DNS server and click on Forward Lookup Zones to see your zones." },
              { title: "Right-click the zone", details: "Right-click the zone where you want to create the alias and select New Alias (CNAME)." },
              { title: "Enter the alias name", details: "Type the alias name (e.g., 'files'). The FQDN will be automatically constructed from the zone name." },
              { title: "Specify the target FQDN", details: "Enter the fully qualified domain name of the target host (e.g., server01.example.local)." },
              { title: "Click OK", details: "The CNAME record is created. Clients querying the alias will be redirected to the target host." },
              { title: "Verify with nslookup", details: "Run nslookup files.example.local to verify the alias resolves to the correct target IP address." },
              { title: "DNS Propagation", details: "Remember to allow sufficient time for DNS propagation, as changes to DNS records may take some time to propagate across the network. The propagation time depends on the TTL (Time to Live) value configured on the DNS records." },
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
              { type: "A", description: "Maps a domain name to an IPv4 address. To configure: provide the hostname and the corresponding IPv4 address. Example: server01.example.local → 50.0.0.1." },
              { type: "AAAA", description: "Maps a domain name to an IPv6 address. To configure: provide the hostname and the corresponding IPv6 address." },
              { type: "CNAME", description: "Creates an alias from one domain name to another. To configure: provide the alias name and the target fully qualified domain name." },
              { type: "MX", description: "Specifies mail servers responsible for receiving email for the domain. To configure: provide the priority (lower number = higher priority), the mail server hostname, and optionally the preference." },
              { type: "PTR", description: "Maps an IP address to a domain name (used in reverse DNS lookups). To configure: provide the IP address and the target domain name." },
              { type: "NS", description: "Identifies the authoritative name servers for a domain. To configure: provide the hostname of the authoritative DNS server." },
              { type: "SOA", description: "Contains administrative information about the DNS zone. It includes the primary name server, administrator email address, serial number, refresh interval, retry interval, expiration time, and default TTL. Configured automatically when the zone is created." },
            ],
          },
        },
      ],
    },
    {
      id: "1-6",
      number: "1.6",
      title: "Configuration of DHCP Parameters",
      description: "Configuring DHCP scopes, reservations, failover, and understanding the DORA process and lease lifecycle.",
      topics: [
        {
          id: "1-6-1",
          number: "1.6.1",
          title: "Scope",
          content: {
            intro: "A DHCP scope defines the range of IP addresses that the DHCP server can assign to clients on a specific subnet.",
            steps: [
              { title: "Define the scope name", details: "Give the scope a descriptive name (e.g., 'Main Office' or 'Lab Network') so it is easy to identify." },
              { title: "Specify the IP address range", details: "Enter the starting and ending IP addresses. Example: 50.0.0.10 to 50.0.0.100 gives you 91 assignable addresses." },
              { title: "Set the subnet mask", details: "Configure the subnet mask for the network segment (e.g., 255.255.255.0 for a /24 network)." },
              { title: "Configure exclusions", details: "Exclude IP addresses that should not be assigned by DHCP, such as addresses statically assigned to servers or routers." },
              { title: "Set the lease duration", details: "Define how long a client can use an assigned IP. Shorter leases are better for networks with many transient devices." },
              { title: "Activate the scope", details: "The scope must be activated before DHCP can begin assigning IP addresses from it." },
              { title: "Modify scope properties", details: "Once the scope is created, you can modify its properties by right-clicking on it and selecting Properties. You can change the IP range, exclusions, lease duration, and other settings." },
              { title: "Authorize and start DHCP", details: "To start the DHCP service, right-click on the DHCP server name and select Authorize or Start from the context menu. The server must be authorized in Active Directory before it can serve clients." },
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
              { title: "Open DHCP Manager", details: "Launch DHCP Manager from Server Manager → Tools → DHCP, or type dhcpmgmt.msc in Run." },
              { title: "Navigate to the scope", details: "Expand the DHCP server and the IPv4 node, then click on the scope that contains the reservation." },
              { title: "Right-click Reservations", details: "Under the scope, right-click Reservations and select New Reservation." },
              { title: "Enter reservation details", details: "Enter the IP address, MAC address of the client, and a descriptive name. The MAC address can be found using ipconfig /all on the client." },
              { title: "Click Add then Close", details: "Click Add to create the reservation, then Close. The device with the matching MAC address will always receive this IP." },
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
              { title: "Manage Failover", details: "Configuration and monitoring of failover relationships through DHCP Manager. You can monitor and manage the DHCP failover relationship by right-clicking on the DHCP scope and selecting Manage Failover." },
              { title: "Failover Configuration Wizard", details: "Step-by-step: Right-click the DHCP scope → Select Configure Failover → Choose the partner server → Specify the relationship name → Choose the mode (Load Balance or Hot Standby) → Specify communication protocol and port → Set relationship authentication (shared secret) → Configure failover settings → Click Finish." },
              { title: "DHCP Reservation vs DHCP Failover", details: "DHCP reservations assign specific IP addresses to individual devices based on MAC addresses. DHCP failover provides redundancy between two DHCP servers sharing a scope." },
            ],
          },
        },
        {
          id: "1-6-4",
          number: "1.6.4",
          title: "DHCP DORA Process",
          content: {
            intro: "The DHCP DORA process is the four-step mechanism by which a client obtains an IP address from a DHCP server. This is the most important DHCP concept to understand.",
            subsections: [
              { title: "D — Discover", details: "The client broadcasts a DHCP Discover message to all devices on the local network: 'Is there a DHCP server out there?' This is a broadcast (255.255.255.255) because the client doesn't know the DHCP server's IP yet." },
              { title: "O — Offer", details: "One or more DHCP servers respond with a DHCP Offer message, proposing an IP address and configuration parameters. The offer includes: IP address, subnet mask, lease duration, server IP, and other options." },
              { title: "R — Request", details: "The client selects one offer (usually the first one received) and broadcasts a DHCP Request message: 'I'll take that IP address.' This informs the chosen server and tells other servers to reclaim their offers." },
              { title: "A — Acknowledgement", details: "The selected DHCP server sends a DHCP Acknowledgement (ACK) confirming the lease. The client now has a valid IP address and can communicate on the network. If the server cannot fulfill the request, it sends a NAK (Negative Acknowledgement)." },
              { title: "Visual Summary", details: "CLIENT → DHCP Discover → DHCP SERVER | CLIENT ← DHCP Offer ← DHCP SERVER | CLIENT → DHCP Request → DHCP SERVER | CLIENT ← DHCP ACK ← DHCP SERVER. Know this sequence cold." },
            ],
          },
        },
        {
          id: "1-6-5",
          number: "1.6.5",
          title: "DHCP Lease Lifecycle",
          content: {
            intro: "A DHCP lease is the period for which a client is allowed to use an assigned IP address. Understanding the lease lifecycle is critical for troubleshooting connectivity issues.",
            subsections: [
              { title: "Lease Assignment", details: "When a client successfully completes the DORA process, it receives a lease for a specific duration. The lease includes the IP address, subnet mask, gateway, DNS, and lease expiry time." },
              { title: "Lease Renewal (T1 Timer)", details: "At 50% of the lease duration (T1 timer), the client attempts to renew the lease with the original DHCP server. If the server responds, a new lease is granted and the timer resets." },
              { title: "Lease Rebinding (T2 Timer)", details: "If renewal fails at T1, the client tries again at 87.5% of the lease duration (T2 timer). If the original server is unavailable, the client broadcasts to any DHCP server to rebind the lease." },
              { title: "Lease Expiration", details: "If the lease expires without renewal or rebinding, the client must release the IP address and start the DORA process again. The client loses network connectivity until it obtains a new lease." },
              { title: "Lease Commands", details: "ipconfig /all — shows lease obtained and expires times. ipconfig /release — releases the current lease immediately. ipconfig /renew — requests a new lease from the DHCP server." },
              { title: "Lease Duration Best Practices", details: "Shorter leases (hours to days) are better for networks with many transient devices (guest WiFi). Longer leases (days to weeks) reduce DHCP traffic on stable networks with mostly stationary devices." },
            ],
          },
        },
        {
          id: "1-6-6",
          number: "1.6.6",
          title: "DHCP Authorization",
          content: {
            intro: "In an Active Directory environment, DHCP servers must be authorized before they can serve clients. This prevents rogue DHCP servers from disrupting the network.",
            subsections: [
              { title: "What is DHCP Authorization?", details: "DHCP authorization is the process of registering a DHCP server in Active Directory. Only authorized DHCP servers can assign IP addresses to clients in an AD domain." },
              { title: "Why Authorization Matters", details: "Without authorization, anyone could set up a DHCP server on the network and start assigning incorrect IP addresses, gateways, and DNS settings. This is called a rogue DHCP server and can cause widespread connectivity issues." },
              { title: "Rogue DHCP Server Scenario", details: "Network → Legit DHCP + Rogue DHCP. The rogue server may respond to client Discover messages faster than the legitimate server, giving clients incorrect network configuration. Clients would get an IP but be unable to reach the gateway or DNS." },
              { title: "How to Authorize a DHCP Server", details: "Open DHCP Manager → Right-click the server → Authorize. The server must be a domain member and have the necessary AD permissions. After authorization, the server icon turns green." },
              { title: "Unauthorized DHCP Servers", details: "In DHCP Manager, unauthorized servers appear with a red down-arrow icon. They cannot assign IP addresses until authorized by a domain administrator." },
            ],
          },
        },
      ],
    },
    {
      id: "1-7",
      number: "1.7",
      title: "Monitoring of Server Services",
      description: "Using nslookup, ipconfig, and other tools to monitor and troubleshoot DNS and DHCP services.",
      topics: [
        {
          id: "1-7-1",
          number: "1.7.1",
          title: "nslookup Command for Resolving DNS",
          content: {
            intro: "The nslookup command is a network administration tool used to query DNS servers to obtain domain name or IP address mapping. It is essential for troubleshooting DNS issues.",
            steps: [
              { title: "Open Command Prompt or PowerShell", details: "Launch cmd.exe or PowerShell from the Start menu or by typing cmd/powershell in Run." },
              { title: "Type nslookup with a domain name", details: "Enter nslookup server01.example.local to resolve a domain name to its IP address." },
              { title: "Review the DNS response", details: "The output shows the DNS server used and the IP address returned. Verify the IP matches expectations." },
              { title: "Try additional queries", details: "Use different record types or IP addresses to test forward and reverse DNS resolution." },
            ],
            examples: [
              { command: "nslookup", description: "Displays DNS resolver configuration and default server information." },
              { command: "nslookup server01.example.local", description: "Resolves the domain name to its IP address." },
              { command: "nslookup 50.0.0.1", description: "Performs a reverse DNS lookup for the IP address." },
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
              { title: "Open Command Prompt or PowerShell", details: "Launch cmd.exe or PowerShell from the Start menu." },
              { title: "Run ipconfig", details: "Type ipconfig and press Enter to see the basic IP configuration including address, subnet mask, and gateway." },
              { title: "Review the IP details", details: "Check the IP address, subnet mask, and default gateway. Verify they match your network configuration." },
              { title: "Use ipconfig /all", details: "Run ipconfig /all for detailed information including MAC address, DHCP server, DNS servers, and lease obtained/expiry times." },
              { title: "Renew the lease", details: "Run ipconfig /renew to request a new IP address from the DHCP server. Use this if the IP is incorrect or expired." },
              { title: "Release the lease", details: "Run ipconfig /release to release the current IP address. The client will have no IP until it renews or is reassigned." },
            ],
            examples: [
              { command: "ipconfig", description: "Displays basic TCP/IP configuration." },
              { command: "ipconfig /all", description: "Displays all network configuration details." },
              { command: "ipconfig /renew", description: "Renews the DHCP lease." },
              { command: "ipconfig /release", description: "Releases the current DHCP lease." },
            ]
          },
        },
        {
          id: "1-7-3",
          number: "1.7.3",
          title: "Additional Network Troubleshooting Commands",
          content: {
            intro: "Beyond ipconfig and nslookup, Windows provides several additional tools for testing connectivity and troubleshooting network issues.",
            steps: [
              { title: "ping", details: "Tests basic network connectivity to another device. Example: ping 50.0.0.1 tests connectivity to the server. If ping works but name resolution fails, it is a DNS problem." },
              { title: "tracert", details: "Traces the route packets take to a destination, showing each hop along the way. Useful for identifying where network connectivity breaks down." },
              { title: "Test-NetConnection", details: "PowerShell command for comprehensive network connectivity testing. Example: Test-NetConnection -ComputerName server01 -Port 80 tests if port 80 is open." },
              { title: "telnet", details: "Tests specific port connectivity to a remote host. Example: telnet 50.0.0.1 53 tests if DNS port 53 is accessible." },
              { title: "route print", details: "Displays the IP routing table, showing how network traffic is routed through the system." },
              { title: "netstat -ano", details: "Displays all active network connections and the listening ports with their process IDs." },
            ],
          },
        },
        {
          id: "1-7-4",
          number: "1.7.4",
          title: "DHCP and DNS Relationship",
          content: {
            intro: "DHCP and DNS work together to provide network connectivity. Understanding how they interact is critical for troubleshooting and network design.",
            subsections: [
              { title: "The Big Picture", details: "SERVER (50.0.0.1) runs both DHCP and DNS. DHCP gives the client its IP configuration. DNS allows the client to resolve names. Both services are essential for a functioning network." },
              { title: "DHCP Role", details: "DHCP provides the client with: IP address, subnet mask, default gateway, and DNS server address. Without DHCP, the client would need manual configuration of all these parameters." },
              { title: "DNS Role", details: "DNS allows the client to resolve domain names to IP addresses. Without DNS, the client could only communicate using IP addresses directly (e.g., ping 50.0.0.1 but not ping server01.local)." },
              { title: "Why DNS is Critical for Active Directory", details: "Active Directory depends heavily on DNS. If DNS is incorrectly configured, domain joining can fail. That's why servers are configured with DNS pointing to the domain controller (e.g., DNS = 50.0.0.1)." },
              { title: "Troubleshooting DNS Issues", details: "If ping 50.0.0.1 works but ping server01.local fails, it's a DNS problem. Check: nslookup server01.local, verify DNS server address in ipconfig /all, check DNS zone records." },
              { title: "DHCP DNS Options", details: "DHCP can automatically configure the client's DNS server address. When a client gets an IP via DHCP, it also receives the DNS server address (option 006 in DHCP). This ensures all clients use the correct DNS server." },
            ],
          },
        },
        {
          id: "1-7-5",
          number: "1.7.5",
          title: "Day 2 Practical Checklist",
          content: {
            intro: "By the end of Day 2, you should be able to independently perform all of the following tasks.",
            subsections: [
              {
                title: "Server Roles",
                content: [
                  "Understand the difference between roles and features",
                  "Install DNS Server role via Server Manager",
                  "Install DHCP Server role via Server Manager",
                  "Verify role installation",
                ]
              },
              {
                title: "DHCP",
                content: [
                  "Understand the DORA process (Discover, Offer, Request, ACK)",
                  "Create a DHCP scope with IP range and subnet mask",
                  "Configure DHCP exclusions",
                  "Create DHCP reservations based on MAC address",
                  "Understand lease lifecycle (renewal, rebinding, expiration)",
                  "Authorize DHCP server in Active Directory",
                  "Test DHCP: ipconfig /release and ipconfig /renew on client",
                  "Verify client receives correct IP, gateway, and DNS",
                ]
              },
              {
                title: "DNS",
                content: [
                  "Understand DNS purpose and name resolution",
                  "Understand forward vs reverse lookup",
                  "Create Forward Lookup Zones",
                  "Create DNS records (A, CNAME, MX)",
                  "Understand DNS zones (primary, secondary, stub)",
                  "Test DNS: nslookup from client",
                  "Understand why AD depends on DNS",
                ]
              },
              {
                title: "Troubleshooting",
                content: [
                  "Client cannot get an IP → check DHCP server, scope, network adapter",
                  "Client has IP but can't resolve names → check DNS (nslookup)",
                  "Server can ping client but client can't ping server → check firewall",
                  "Domain join fails → check DNS first (client DNS must point to DC)",
                ]
              },
            ],
          },
        },
      ],
    },
    {
      id: "1-8",
      number: "1.8",
      title: "File Systems, RAID, Storage & Permissions",
      description: "Understanding how Windows Server manages disks, partitions, file systems, RAID, Storage Spaces, and access permissions.",
      topics: [
        {
          id: "1-8-1",
          number: "1.8.1",
          title: "RAID + Disk/Partition Management",
          content: {
            intro: "Understand how Windows Server manages disks, partitions, volumes, file systems, and RAID configurations.",
            definitions: [
              { term: "File System", definition: "A system used to organize, store, and manage data on a storage device." },
              { term: "FAT", definition: "File Allocation Table, a file system used to organize files on storage media." },
              { term: "NTFS", definition: "New Technology File System, the Windows file system that provides features such as permissions, security, compression, encryption, and auditing." },
              { term: "ReFS", definition: "Resilient File System, a Microsoft file system designed with data integrity and resilience in mind." },
              { term: "Partition", definition: "A logically defined portion of a physical disk." },
              { term: "Volume", definition: "A logical storage unit that can be formatted with a file system and used to store data." },
              { term: "RAID", definition: "Redundant Array of Independent Disks, a method of combining multiple physical disks to provide performance, redundancy, or fault tolerance." },
              { term: "ACL", definition: "Access Control List, a list of permissions controlling access to a resource." },
            ],
            subsections: [
              {
                title: "FAT",
                content: [
                  "FAT stands for File Allocation Table.",
                  "It is a basic file system.",
                  "It has limitations compared with NTFS, particularly regarding security and permissions.",
                ],
              },
              {
                title: "NTFS",
                content: [
                  "NTFS stands for New Technology File System.",
                  "It supports file and folder permissions.",
                  "It supports ACLs.",
                  "It supports encryption, auditing, compression, shrinking, and extending volumes.",
                ],
              },
              {
                title: "ReFS",
                content: [
                  "ReFS stands for Resilient File System.",
                  "It focuses on resilience and data integrity.",
                  "It supports large files and directories.",
                  "It supports large volumes.",
                  "The notes distinguish ReFS from NTFS regarding volume shrinking.",
                ],
              },
              {
                title: "Basic Disk",
                content: "A basic disk uses traditional partitions and volumes for organizing storage.",
              },
              {
                title: "Dynamic Disk",
                content: "A dynamic disk supports more advanced volume configurations and can combine storage across disks.",
              },
              {
                title: "Shrinking a Volume",
                content: [
                  "Shrinking reduces the size of an existing volume.",
                  "The space released becomes unallocated space.",
                  "The unallocated space can potentially be used for another volume.",
                ],
              },
              {
                title: "Extending a Volume",
                content: [
                  "Extending increases the size of an existing volume.",
                  "Available unallocated space can be added to the volume.",
                ],
              },
              {
                title: "Hardware RAID",
                content: "Hardware RAID is managed by a dedicated RAID controller.",
              },
              {
                title: "Software RAID",
                content: "Software RAID is managed through the operating system or software.",
              },
              {
                title: "RAID 0 — Striping",
                content: [
                  "Data is distributed across multiple disks.",
                  "It can improve performance.",
                  "It provides no redundancy.",
                  "Failure of one disk can make the array unavailable.",
                ],
              },
              {
                title: "RAID 1 — Mirroring",
                content: [
                  "Data is duplicated across disks.",
                  "It provides redundancy.",
                  "If one disk fails, the mirrored disk can continue providing the data.",
                ],
              },
            ],
          },
        },
        {
          id: "1-8-2",
          number: "1.8.2",
          title: "Storage Spaces",
          content: {
            intro: "Understand Windows Storage Spaces and how physical disks can be combined into storage pools and virtual disks.",
            definitions: [
              { term: "Storage Spaces", definition: "A Windows storage technology that allows physical disks to be grouped into storage pools and used to create virtual disks." },
              { term: "Storage Pool", definition: "A collection of physical disks grouped together and managed as a storage resource." },
              { term: "Virtual Disk", definition: "A logical disk created from a storage pool." },
              { term: "Resiliency", definition: "The ability of a storage configuration to continue operating despite certain disk failures." },
            ],
            subsections: [
              {
                title: "Storage Spaces Architecture",
                content: [
                  "Physical disks are added to a storage pool.",
                  "The storage pool provides storage capacity from the physical disks.",
                  "Virtual disks can then be created from the pool.",
                  "The virtual disk can be formatted and used like a normal disk.",
                ],
              },
              {
                title: "Storage Pool",
                content: "A storage pool combines physical disks into a single manageable storage resource.",
              },
              {
                title: "Virtual Disk",
                content: "A virtual disk is created from the available capacity in a storage pool.",
              },
              {
                title: "Resiliency",
                content: "Storage Spaces can use different resiliency configurations to provide protection against disk failures.",
              },
              {
                title: "Storage Tiers",
                content: "Storage tiers can use different types of physical storage to optimize how data is stored.",
              },
            ],
          },
        },
        {
          id: "1-8-3",
          number: "1.8.3",
          title: "Permissions",
          content: {
            intro: "Understand how Windows controls access to files and folders using NTFS permissions, share permissions, ACLs, and inheritance.",
            definitions: [
              { term: "Permission", definition: "A rule determining what a user or group is allowed or denied to do with a resource." },
              { term: "ACL", definition: "Access Control List containing access rules for a resource." },
              { term: "NTFS Permission", definition: "A permission applied to files and folders on an NTFS volume." },
              { term: "Share Permission", definition: "A permission controlling access to a resource shared over the network." },
              { term: "Inheritance", definition: "The process by which permissions are passed from a parent folder to child objects." },
              { term: "Effective Permission", definition: "The actual access a user receives after applicable permissions are evaluated." },
            ],
            subsections: [
              {
                title: "Common NTFS Permissions",
                content: ["Read", "Write", "Modify", "Full Control"],
              },
              {
                title: "Read",
                content: "Allows a user to view files and folders and read their contents.",
              },
              {
                title: "Write",
                content: "Allows a user to write or create data where permitted.",
              },
              {
                title: "Modify",
                content: "Provides broader access, including modifying existing files.",
              },
              {
                title: "Full Control",
                content: "Provides full access to the resource, including the ability to modify permissions where applicable.",
              },
              {
                title: "Allow and Deny",
                content: [
                  "Permissions can be explicitly allowed or denied.",
                  "Deny permissions can override corresponding allowed permissions in many access-evaluation scenarios.",
                ],
              },
              {
                title: "Permission Inheritance",
                content: "Permissions can be inherited from a parent folder by child files and folders.",
              },
              {
                title: "NTFS Permissions vs Share Permissions",
                content: [
                  "NTFS permissions apply to files and folders on an NTFS volume.",
                  "Share permissions apply when the resource is accessed through a network share.",
                  "When accessing a shared folder over the network, both NTFS and share permissions can affect the user's effective access.",
                ],
              },
              {
                title: "Effective Permissions",
                content: "Effective permissions represent the resulting access available to a user after the applicable permissions are evaluated.",
              },
            ],
          },
        },
      ],
    },
  ],
} as const;

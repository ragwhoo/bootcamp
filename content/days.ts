export const days = [
  {
    id: 1,
    number: "01",
    title: "Creating Client & Server VMs",
    description: "Setting up the initial Windows Server lab environment using VMware Workstation 17.",
    topics: [
      {
        title: "VMware Workstation 17",
        description: "Lab virtualization environment. Type-2 hypervisor, host vs guest, network modes.",
        topicId: "1-1-2",
      },
      {
        title: "Creating the Server VM",
        description: "7-step VM creation process in VMware Workstation.",
        topicId: "1-2-3",
      },
      {
        title: "Creating the Client VM",
        description: "Client VM setup and server vs client comparison.",
        topicId: "1-2-4",
      },
      {
        title: "Basic Virtual Machine Configuration",
        description: "VM hardware, boot order, snapshots, cloning, networking config.",
        topicId: "1-1-3",
      },
      {
        title: "Basic Network Configuration",
        description: "IP address, subnet mask, gateway, DNS, DHCP vs static.",
        topicId: "1-2-5",
      },
      {
        title: "Basic Windows Networking Commands",
        description: "ipconfig, ping, nslookup, route print, netstat.",
        topicId: "1-2-6",
      },
      {
        title: "Server Core Fundamentals",
        description: "Minimal Windows Server installation, commands, remote management.",
        topicId: "1-2-7",
      },
      {
        title: "Day 1 Practical Checklist",
        description: "Complete checklist of everything you should be able to do by end of Day 1.",
        topicId: "1-2-8",
      },
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Adding Server Roles",
    description: "Installing and configuring the DHCP and DNS server roles on Windows Server.",
    topics: [
      {
        title: "Server Roles",
        description: "What server roles and features are, and the difference between them.",
        topicId: "1-4-1",
      },
      {
        title: "Role vs Feature",
        description: "Roles define what the server does. Features enhance its capabilities.",
        topicId: "1-4-3",
      },
      {
        title: "Installing Server Roles",
        description: "Step-by-step installation of DNS and DHCP roles via Server Manager.",
        topicId: "1-4-2",
      },
      {
        title: "DHCP Overview",
        description: "What DHCP is, what it provides, and how it simplifies network configuration.",
        topicId: "1-6-1",
      },
      {
        title: "DHCP DORA Process",
        description: "The 4-step process: Discover, Offer, Request, Acknowledgement.",
        topicId: "1-6-4",
      },
      {
        title: "DHCP Scope",
        description: "Defining the range of IP addresses the DHCP server can assign.",
        topicId: "1-6-1",
      },
      {
        title: "DHCP Exclusion & Reservation",
        description: "Excluding addresses and reserving IPs for specific devices.",
        topicId: "1-6-2",
      },
      {
        title: "DHCP Lease Lifecycle",
        description: "Lease assignment, renewal, rebinding, and expiration.",
        topicId: "1-6-5",
      },
      {
        title: "DHCP Authorization",
        description: "Why DHCP servers must be authorized in Active Directory.",
        topicId: "1-6-6",
      },
      {
        title: "DNS Overview",
        description: "What DNS is and why it is critical to Active Directory.",
        topicId: "1-5-1",
      },
      {
        title: "DNS Records",
        description: "A, AAAA, CNAME, MX, PTR, NS, SOA record types.",
        topicId: "1-5-3",
      },
      {
        title: "DNS Troubleshooting",
        description: "Using nslookup, ipconfig /displaydns, and ipconfig /flushdns.",
        topicId: "1-7-1",
      },
      {
        title: "DHCP and DNS Relationship",
        description: "How DHCP and DNS work together for network connectivity.",
        topicId: "1-7-4",
      },
      {
        title: "Day 2 Practical Checklist",
        description: "Complete checklist of everything you should be able to do by end of Day 2.",
        topicId: "1-7-5",
      },
    ],
  },
];

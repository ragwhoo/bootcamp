export interface PortEntry {
  port: string;
  protocol?: string;
  service: string;
  description: string;
}

export interface PortCategory {
  id: string;
  title: string;
  icon: string;
  ports: PortEntry[];
}

export const portCategories: PortCategory[] = [
  {
    id: "must-know",
    title: "Must Know Ports",
    icon: "Star",
    ports: [
      { port: "20", protocol: "TCP", service: "FTP Data", description: "FTP data transfer" },
      { port: "21", protocol: "TCP", service: "FTP", description: "FTP control" },
      { port: "22", protocol: "TCP", service: "SSH", description: "Secure remote administration" },
      { port: "23", protocol: "TCP", service: "Telnet", description: "Remote terminal; insecure" },
      { port: "25", protocol: "TCP", service: "SMTP", description: "Mail transfer" },
      { port: "53", protocol: "TCP/UDP", service: "DNS", description: "Name resolution" },
      { port: "67", protocol: "UDP", service: "DHCP Server", description: "DHCP server side" },
      { port: "68", protocol: "UDP", service: "DHCP Client", description: "DHCP client side" },
      { port: "80", protocol: "TCP", service: "HTTP", description: "Web traffic" },
      { port: "110", protocol: "TCP", service: "POP3", description: "Email retrieval" },
      { port: "123", protocol: "UDP", service: "NTP", description: "Time synchronization" },
      { port: "143", protocol: "TCP", service: "IMAP", description: "Email retrieval" },
      { port: "161", protocol: "UDP", service: "SNMP", description: "Network management/monitoring" },
      { port: "162", protocol: "UDP", service: "SNMP Trap", description: "SNMP notifications" },
      { port: "389", protocol: "TCP/UDP", service: "LDAP", description: "Directory services" },
      { port: "443", protocol: "TCP", service: "HTTPS", description: "Secure web traffic" },
      { port: "445", protocol: "TCP", service: "SMB", description: "Windows file/printer sharing" },
      { port: "3389", protocol: "TCP/UDP", service: "RDP", description: "Windows Remote Desktop" },
    ],
  },
  {
    id: "active-directory",
    title: "Active Directory Ports",
    icon: "Building2",
    ports: [
      { port: "53", protocol: "TCP/UDP", service: "DNS", description: "Domain name resolution" },
      { port: "88", protocol: "TCP/UDP", service: "Kerberos", description: "Authentication protocol" },
      { port: "123", protocol: "UDP", service: "NTP", description: "Time synchronization" },
      { port: "135", protocol: "TCP", service: "RPC Endpoint Mapper", description: "RPC endpoint lookup" },
      { port: "137", protocol: "UDP", service: "NetBIOS Name Service", description: "Name resolution" },
      { port: "138", protocol: "UDP", service: "NetBIOS Datagram Service", description: "Datagram service" },
      { port: "139", protocol: "TCP", service: "NetBIOS Session Service", description: "Session service" },
      { port: "389", protocol: "TCP/UDP", service: "LDAP", description: "Directory services" },
      { port: "445", protocol: "TCP", service: "SMB", description: "File/printer sharing" },
      { port: "464", protocol: "TCP/UDP", service: "Kerberos Password Change", description: "Password changes" },
      { port: "636", protocol: "TCP", service: "LDAPS", description: "Secure directory services" },
      { port: "3268", protocol: "TCP", service: "Global Catalog", description: "Partial AD replica" },
      { port: "3269", protocol: "TCP", service: "Global Catalog SSL", description: "Secure Global Catalog" },
      { port: "3389", protocol: "TCP/UDP", service: "RDP", description: "Remote Desktop" },
    ],
  },
  {
    id: "web-email",
    title: "Web & Email Ports",
    icon: "Globe",
    ports: [
      { port: "80", protocol: "TCP", service: "HTTP", description: "Web traffic" },
      { port: "443", protocol: "TCP", service: "HTTPS", description: "Secure web traffic" },
      { port: "25", protocol: "TCP", service: "SMTP", description: "Mail transfer" },
      { port: "465", protocol: "TCP", service: "SMTPS", description: "SMTP over implicit TLS" },
      { port: "587", protocol: "TCP", service: "SMTP Submission", description: "Mail submission" },
      { port: "110", protocol: "TCP", service: "POP3", description: "Email retrieval" },
      { port: "995", protocol: "TCP", service: "POP3S", description: "Secure email retrieval" },
      { port: "143", protocol: "TCP", service: "IMAP", description: "Email retrieval" },
      { port: "993", protocol: "TCP", service: "IMAPS", description: "Secure email retrieval" },
    ],
  },
  {
    id: "remote-admin",
    title: "Remote Administration",
    icon: "Monitor",
    ports: [
      { port: "22", protocol: "TCP", service: "SSH", description: "Secure remote administration" },
      { port: "23", protocol: "TCP", service: "Telnet", description: "Remote terminal; insecure" },
      { port: "3389", protocol: "TCP/UDP", service: "RDP", description: "Windows Remote Desktop" },
      { port: "5985", protocol: "TCP", service: "WinRM HTTP", description: "Windows Remote Management" },
      { port: "5986", protocol: "TCP", service: "WinRM HTTPS", description: "Secure Windows Remote Management" },
    ],
  },
  {
    id: "network-mgmt",
    title: "Network Management",
    icon: "Radio",
    ports: [
      { port: "161", protocol: "UDP", service: "SNMP", description: "Network management/monitoring" },
      { port: "162", protocol: "UDP", service: "SNMP Trap", description: "SNMP notifications" },
      { port: "514", protocol: "UDP/TCP", service: "Syslog", description: "System logging" },
      { port: "123", protocol: "UDP", service: "NTP", description: "Time synchronization" },
    ],
  },
  {
    id: "file-directory",
    title: "File & Directory Services",
    icon: "FolderOpen",
    ports: [
      { port: "389", protocol: "TCP/UDP", service: "LDAP", description: "Directory services" },
      { port: "445", protocol: "TCP", service: "SMB", description: "Windows file/printer sharing" },
      { port: "636", protocol: "TCP", service: "LDAPS", description: "Secure directory services" },
      { port: "2049", protocol: "TCP/UDP", service: "NFS", description: "Network File System" },
      { port: "3268", protocol: "TCP", service: "Global Catalog", description: "Partial AD replica" },
      { port: "3269", protocol: "TCP", service: "Global Catalog SSL", description: "Secure Global Catalog" },
    ],
  },
];

export const portMemoryAids = [
  { port: "53", service: "DNS", mnemonic: "53 → DNS" },
  { port: "67/68", service: "DHCP", mnemonic: "67/68 → DHCP" },
  { port: "88", service: "Kerberos", mnemonic: "88 → Kerberos" },
  { port: "135", service: "RPC", mnemonic: "135 → RPC" },
  { port: "137-139", service: "NetBIOS", mnemonic: "137-139 → NetBIOS" },
  { port: "389", service: "LDAP", mnemonic: "389 → LDAP" },
  { port: "445", service: "SMB", mnemonic: "445 → SMB" },
  { port: "464", service: "Kerberos Password Change", mnemonic: "464 → Kerberos Password Change" },
  { port: "636", service: "LDAPS", mnemonic: "636 → LDAPS" },
  { port: "3268", service: "Global Catalog", mnemonic: "3268 → Global Catalog" },
  { port: "3269", service: "Global Catalog SSL", mnemonic: "3269 → Global Catalog SSL" },
  { port: "3389", service: "RDP", mnemonic: "3389 → RDP" },
];

export const portTroubleshootingSteps = [
  "Is the service running?",
  "Is the server listening?",
  "Is the port reachable?",
  "Is the firewall allowing it?",
  "Is the application configured correctly?",
];

export const portCommands = [
  { command: "Get-NetTCPConnection", description: "Check all TCP connections" },
  { command: "Get-NetTCPConnection -LocalPort 445", description: "Check a specific port" },
  { command: "Test-NetConnection 50.0.0.1 -Port 53", description: "Test connectivity to a remote port" },
];

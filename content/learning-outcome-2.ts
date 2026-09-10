export const learningOutcome2 = {
  id: "2",
  number: "2",
  title: "Manage Users",
  description: "Accounts, groups, OUs, permissions, domains and GPOs.",
  sections: [
    {
      id: "2-1",
      number: "2.1",
      title: "Creation of User Accounts",
      description: "Understanding user account policies, account types, and creating new user accounts in Active Directory.",
      topics: [
        {
          id: "2-1-0",
          number: "2.1",
          title: "Creation of User Accounts",
          content: {
            intro: "User account management is a fundamental responsibility for system administrators. Properly configured accounts ensure security, accountability, and efficient access to network resources.",
            definitions: [
              { term: "User account", details: "A user account is an identity on a system that allows a person to authenticate and access network resources. It includes a username, password, and associated permissions." },
              { term: "User account policies", details: "User account policies are rules that govern how user accounts are created, managed, and maintained. They define password requirements, account lockout thresholds, and other security settings." },
              { term: "Password policies", details: "Password policies enforce rules for password complexity, minimum length, maximum age, and history to enhance security." },
              { term: "Account lockout policies", details: "Account lockout policies temporarily disable an account after a specified number of failed login attempts to prevent brute-force attacks." },
              { term: "Kerberos policies", details: "Kerberos policies define authentication ticket lifetimes, renewals, and encryption types used by the Kerberos protocol." },
              { term: "Logon policies", details: "Logon policies control how and when users can log on to the network, including restrictions on logon hours and workstations." },
              { term: "Account auditing policies", details: "Account auditing policies define what account-related events are logged, such as logon attempts, account changes, and password modifications." },
              { term: "Standard user", details: "A standard user has basic access permissions and cannot make system-wide changes. Standard users can run applications and perform routine tasks." },
              { term: "Administrator account", details: "An administrator account has full control over the system, including the ability to create accounts, install software, and manage security policies." },
            ],
          },
        },
        {
          id: "2-1-1",
          number: "2.1.1",
          title: "Creation of New Account",
          content: {
            intro: "Creating a new user account involves using built-in Windows tools to define user details, set passwords, and configure account settings.",
            steps: [
              "Open Computer Management",
              "Navigate to Local Users and Groups",
              "Select the Users folder",
              "Right-click and choose New User",
              "Enter the username and full name",
              "Set the password and password options",
              "Configure account settings such as expiration and logon restrictions",
              "Click Create to finalize the account"
            ],
            fields: [
              { name: "User details", description: "Username, full name, and description for the account." },
              { name: "Password settings", description: "Password, confirm password, and options for password requirements." },
              { name: "Account settings", description: "Account expiration, user cannot change password, and password never expires options." },
            ]
          },
        },
        {
          id: "2-1-2",
          number: "2.1.2",
          title: "Copy Account",
          content: {
            intro: "Copying an existing user account creates a new account with similar properties, useful when creating accounts with standardized permissions.",
            steps: [
              { title: "Open Active Directory Users and Computers", details: "Launch ADUC from Server Manager → Tools, or type dsa.msc in Run." },
              { title: "Locate the existing account", details: "Find the user account you want to use as a template. This account should have the group memberships and permissions you want to copy." },
              { title: "Right-click and select Copy", details: "Right-click the account and choose Copy. This opens the Copy Object wizard." },
              { title: "Enter new username", details: "Enter the new user's first name, last name, and logon name. The full name is automatically constructed." },
              { title: "Set password", details: "Enter and confirm the new account's password. Set password options (must change at next logon, password never expires)." },
              { title: "Review group memberships", details: "The copied account inherits group memberships from the template. Verify these are correct and modify if needed." },
              { title: "Adjust permissions", details: "Check if any specific permissions need to be added or removed for the new user. Group memberships carry over but individual permissions may not." },
            ],
            fields: [
              { name: "Username", description: "The new account's username." },
              { name: "Group memberships", description: "The groups the new account belongs to, copied from the template account." },
              { name: "Permissions", description: "Access rights and permissions that may differ from the template account." },
            ]
          },
        },
      ],
    },
    {
      id: "2-2",
      number: "2.2",
      title: "Management of User Accounts",
      description: "Managing the user account lifecycle including password changes, activation, deactivation, and account customization.",
      topics: [
        {
          id: "2-2-0",
          number: "2.2",
          title: "Management of User Accounts",
          content: {
            intro: "Managing user accounts involves changing passwords, activating or deactivating accounts, and customizing account parameters through various tabs in the account properties dialog.",
            actions: [
              { title: "Changing user account password", details: "Use Active Directory Users and Computers to reset or change a user's password. Right-click the account, select Reset Password, and enter the new password." },
              { title: "Remove account", details: "Delete a user account when the employee leaves the organization or the account is no longer needed." },
              { title: "Activate account", details: "Enable a disabled account by right-clicking and selecting Enable, or clearing the Account is disabled checkbox." },
              { title: "Deactivate account", details: "Disable a user account temporarily by checking the Account is disabled option, preventing logon without deleting the account." },
            ],
            tabs: [
              { tab: "General tab", description: "Displays basic information such as full name, description, and user logon name." },
              { tab: "Member Of tab", description: "Shows the groups the user belongs to and allows adding or removing group memberships." },
              { tab: "Account tab", description: "Contains settings for password policies, account expiration, logon hours, and account disabled status." },
              { tab: "Profile tab", description: "Contains profile path, logon script, and home folder configuration." },
              { tab: "Dial-in tab", description: "Contains dial-in permissions and NAS port access policies." },
            ]
          },
        },
      ],
    },
    {
      id: "2-3",
      number: "2.3",
      title: "Management of User Groups",
      description: "Creating and managing user groups, adding and removing members, and understanding group-based permission management.",
      topics: [
        {
          id: "2-3-0",
          number: "2.3",
          title: "Management of User Groups",
          content: {
            intro: "User groups simplify permission management by organizing users into collections that share common access rights. Group-based administration is more efficient than assigning permissions to individual users.",
            definitions: [
              { term: "User groups", details: "A collection of user accounts that share common permissions and access rights." },
              { term: "Group permissions", details: "The set of rights and permissions assigned to a group, which apply to all members of that group." },
              { term: "Group access rights", details: "Specific privileges granted to a group for accessing resources such as files, folders, and applications." },
              { term: "Group privileges", details: "Special rights assigned to groups for performing system-level tasks such as backing up files or managing audits." },
            ],
            steps: [
              { title: "Creation of group", details: "Open Active Directory Users and Computers, right-click the appropriate container, select New > Group, enter the group name and scope, and click OK." },
              { title: "Adding users in groups", details: "Open the group properties, navigate to the Members tab, click Add, enter the user names, and click OK to add them to the group." },
              { title: "Removing users from group", details: "Open the group properties, navigate to the Members tab, select the user, click Remove, and click OK to remove them from the group." },
            ]
          },
        },
      ],
    },
    {
      id: "2-4",
      number: "2.4",
      title: "Management of Organization Units (OU)",
      description: "Creating and managing OUs in Active Directory, moving users between OUs, and understanding OU hierarchy and Group Policy effects.",
      topics: [
        {
          id: "2-4-0",
          number: "2.4",
          title: "Management of Organization Units (OU)",
          content: {
            intro: "Organizational Units (OUs) are containers within Active Directory that allow administrators to organize domain objects hierarchically and apply Group Policies to specific collections of users and computers.",
            definitions: [
              { term: "Organizational Unit definition", details: "An OU is a container within Active Directory that can hold users, groups, computers, and other OUs. It is used to organize resources and apply Group Policies." },
            ],
            steps: [
              { title: "Creation of OU", details: "Open Active Directory Users and Computers, right-click the domain or parent OU, select New > Organizational Unit, enter the OU name, and click OK." },
              { title: "Adding users in OU", details: "Move user accounts into the OU by right-clicking the user, selecting Move, and choosing the target OU." },
              { title: "Removing users from OU", details: "Move user accounts out of the OU by right-clicking the user, selecting Move, and selecting the new location." },
              { title: "OU hierarchy", details: "OUs can be nested to create a hierarchical structure that mirrors the organizational structure of the company." },
              { title: "Effect of OU changes on Group Policy", details: "Moving users or computers between OUs changes which Group Policies apply to them, as GPOs are linked to OUs." },
            ]
          },
        },
      ],
    },
    {
      id: "2-5",
      number: "2.5",
      title: "Assignment of Permission to Users",
      description: "Granting and revoking file/folder permissions, configuring remote access permissions, and managing user access to network resources.",
      topics: [
        {
          id: "2-5-0",
          number: "2.5",
          title: "Assignment of Permission to Users",
          content: {
            intro: "Granting and revoking permissions ensures that users have appropriate access to network resources while maintaining security.",
            actions: [
              { title: "Grant permissions", details: "Right-click the resource, select Properties, go to the Security tab, click Edit, add users or groups, and assign the appropriate permissions." },
              { title: "Revoke permissions", details: "Open the resource properties, go to the Security tab, select the user or group, and remove or deny the specific permissions." },
            ],
            steps: [
              { title: "File/folder permissions", details: "Right-click the file or folder, select Properties, navigate to the Security tab, click Edit to modify permissions, and apply the changes." },
              { title: "Security tab", details: "The Security tab displays user and group permissions, allows editing access control lists, and shows inherited permissions." },
              { title: "Add users/groups", details: "Click Add in the Security tab, enter the user or group name, click Check Names, and click OK to add them." },
              { title: "Permission selection", details: "Select the user or group and check the boxes for Allow or Deny permissions such as Read, Write, Modify, and Full Control." },
            ]
          },
        },
        {
          id: "2-5-2",
          number: "2.5.2",
          title: "Change Remote Access Permissions for a User Account",
          content: {
            intro: "Remote access permissions control which users can connect to the server remotely using Remote Desktop Services.",
            steps: [
              "Open Active Directory Users and Computers",
              "Select the user account",
              "Navigate to the Member Of tab",
              "Add the user to the Remote Desktop Users group",
              "Verify the membership allows remote access",
              "Test the connection using Remote Desktop"
            ],
            definitions: [
              { term: "Remote Desktop Users", details: "A built-in group that grants members the right to connect to a server via Remote Desktop." },
              { term: "Remote access permissions", details: "Permissions that determine which users and groups can establish remote connections to the server." },
              { term: "User/group membership", details: "Adding a user or group to specific groups grants them the corresponding remote access rights." },
              { term: "Remote Desktop Services", details: "A Microsoft service that allows users to connect to a remote Windows server and use its resources as if they were sitting at the physical machine." },
            ]
          },
        },
      ],
    },
    {
      id: "2-6",
      number: "2.6",
      title: "Management of Client Machines",
      description: "Joining client computers to the domain, delegation of control, and understanding Group Policy Objects (GPOs).",
      topics: [
        {
          id: "2-6-1",
          number: "2.6.1",
          title: "Joining a Client Computer to the Domain",
          content: {
            intro: "Joining a client computer to a domain integrates it into the Active Directory environment, enabling centralized management and authentication.",
            steps: [
              { title: "Setting the client computer name", details: "Open System Properties, click Change, enter the computer name, and click OK." },
              { title: "Establishing connectivity between client and server", details: "Ensure the client can reach the domain controller through physical connectivity and proper network configuration." },
              { title: "Physical connectivity", details: "Connect the client computer to the network using Ethernet cable or Wi-Fi." },
              { title: "Network configuration", details: "Configure the client's TCP/IP settings to use the domain controller's IP address as the DNS server." },
              { title: "Domain join", details: "Open System Properties, click Change, select Domain, enter the domain name, and provide domain credentials." },
              { title: "Domain controller configuration", details: "The domain controller validates the credentials and adds the computer to the domain." },
              { title: "DNS configuration", details: "Configure DNS settings to point to the domain controller for proper domain name resolution." },
              { title: "Firewall and security settings", details: "Configure the Windows Firewall to allow domain-related traffic and ensure security policies are applied." },
              { title: "Testing connectivity", details: "Ping the domain controller and verify domain login functionality." },
              { title: "Changing from Workgroup to Domain", details: "In System Properties, change the computer's membership from Workgroup to Domain and follow the prompts to complete the join." },
            ]
          },
        },
        {
          id: "2-6-2",
          number: "2.6.2",
          title: "Implementation of Delegation of Control",
          content: {
            intro: "Delegation of control allows administrators to assign specific administrative tasks to non-administrative users or groups without granting full administrative privileges.",
            steps: [
              { title: "Delegation of control", details: "Use the Delegation of Control Wizard to assign specific tasks to users or groups." },
              { title: "Tasks to delegate", details: "Common delegated tasks include resetting passwords, modifying group memberships, and managing user accounts within an OU." },
              { title: "Security groups", details: "Create or use existing security groups to organize users who will receive delegated permissions." },
              { title: "Delegate Control wizard", details: "Right-click the OU, select Delegate Control, follow the wizard to choose users or groups, select tasks, and complete the delegation." },
              { title: "Review and test permissions", details: "Verify that delegated users can perform their assigned tasks and cannot exceed the delegated scope." },
              { title: "Regular review", details: "Periodically review delegated permissions to ensure they remain appropriate." },
              { title: "Documentation", details: "Document all delegated permissions and the rationale for each delegation." },
              { title: "Monitoring", details: "Monitor audit logs to track delegated administrative actions." },
            ]
          },
        },
        {
          id: "2-6-3",
          number: "2.6.3",
          title: "Description of Group Policy Object (GPO)",
          content: {
            intro: "A Group Policy Object (GPO) is a collection of settings that define what a system will look like and how it will behave for a defined group of users.",
            types: [
              { type: "Local GPO", details: "A GPO stored locally on the computer and applied only to that specific machine. It exists on every Windows computer." },
              { type: "Non-local GPO", details: "A GPO stored in Active Directory and applied to users or computers across the domain." },
              { type: "Starter GPO", details: "A template GPO that provides a starting point for creating new GPOs with predefined settings." },
            ],
            hierarchy: [
              { level: "Local", details: "GPOs applied directly to the local computer." },
              { level: "Site", details: "GPOs linked to an Active Directory site, applying to all objects within that site." },
              { level: "Domain", details: "GPOs linked to the domain, applying to all users and computers in the domain." },
              { level: "Organizational Unit", details: "GPOs linked to an OU, applying to objects within that OU. OU-level GPOs have the highest precedence." },
            ],
            definitions: [
              { term: "Forest", details: "The top-level container in Active Directory that contains domains and shared configuration." },
              { term: "Domain", details: "A security boundary within Active Directory that shares a common database and applies common policies." },
              { term: "OU", details: "Organizational Unit, a container within a domain used to organize objects and apply Group Policies." },
              { term: "GPO", details: "Group Policy Object, a collection of settings that control the environment for users and computers." },
              { term: "Group Policy Template (GPT)", details: "The file-based component of a GPO that contains the policy settings stored in the SYSVOL folder." },
              { term: "SYSVOL", details: "A shared directory that stores the server copy of the domain's public files, including Group Policy templates." },
              { term: "Machine folder", details: "The section of a GPO that contains computer configuration settings applied at startup." },
              { term: "User folder", details: "The section of a GPO that contains user configuration settings applied at logon." },
            ]
          },
        },
        {
          id: "2-6-4",
          number: "2.6.4",
          title: "Manage GPO Settings",
          content: {
            intro: "Managing GPO settings involves creating, linking, editing, and applying Group Policy Objects using the Group Policy Management Console (GPMC).",
            steps: [
              { title: "Creation of GPO", details: "Open GPMC, right-click the target OU or domain, select Create a GPO in this domain and Link it here, and provide a name for the new GPO." },
              { title: "Naming GPO", details: "Use a descriptive naming convention such as 'Password Policy - IT Department' to easily identify the purpose of each GPO." },
              { title: "Edit GPO", details: "Right-click the GPO and select Edit to open the Group Policy Management Editor, where you can configure settings under User Configuration and Computer Configuration." },
              { title: "User Configuration", details: "Contains settings that apply to users, including software installation, security settings, and scripts." },
              { title: "Computer Configuration", details: "Contains settings that apply to computers, including security policies, software settings, and startup scripts." },
              { title: "Link GPO to OU", details: "Ensure the GPO is linked to the appropriate OU so that it applies to the correct users and computers." },
              { title: "Enforce", details: "Set the Enforce option on a GPO to prevent lower-level GPOs from overriding its settings." },
              { title: "Block inheritance", details: "Prevent GPOs from parent containers from being inherited by the OU by enabling Block Inheritance." },
              { title: "Apply and test", details: "Apply the GPO changes and test to verify that the intended settings are applied correctly." },
              { title: "Monitor and troubleshoot", details: "Use GPMC results and the Group Policy Results Wizard to monitor and troubleshoot GPO application." },
              { title: "GPO Editor", details: "The Group Policy Management Editor provides a comprehensive interface for configuring policy settings under Computer Configuration and User Configuration." },
              { title: "Use of GPMC to manage users", details: "Use GPMC to create GPOs that manage user settings, restrict user access, and deploy software to user groups." },
            ]
          },
        },
      ],
    },
  ],
} as const;

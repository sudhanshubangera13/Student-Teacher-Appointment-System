// Student-Teacher Appointment System - Main Application Logic

// Application State Management (In-Memory Storage)
let appState = {
  currentUser: null,
  userRole: null,
  teachers: [
    {
      id: 'teacher001',
      name: 'Dr. John Smith',
      email: 'john.smith@university.edu',
      phone: '1234567890',
      department: 'Computer Science',
      subject: 'Data Structures',
      availability: {
        monday: ['09:00', '10:00', '11:00', '14:00', '15:00'],
        tuesday: ['09:00', '10:00', '11:00', '14:00', '15:00'],
        wednesday: ['09:00', '10:00', '11:00'],
        thursday: ['09:00', '10:00', '11:00', '14:00', '15:00'],
        friday: ['09:00', '10:00', '11:00'],
        saturday: [],
        sunday: []
      },
      status: 'active'
    },
    {
      id: 'teacher002',
      name: 'Prof. Sarah Johnson',
      email: 'sarah.johnson@university.edu',
      phone: '1234567891',
      department: 'Mathematics',
      subject: 'Calculus',
      availability: {
        monday: ['10:00', '11:00', '14:00', '15:00', '16:00'],
        tuesday: ['10:00', '11:00', '14:00', '15:00'],
        wednesday: ['10:00', '11:00', '14:00', '15:00', '16:00'],
        thursday: ['10:00', '11:00', '14:00'],
        friday: ['10:00', '11:00', '14:00', '15:00', '16:00'],
        saturday: [],
        sunday: []
      },
      status: 'active'
    }
  ],
  students: [
    {
      id: 'student001',
      name: 'Alice Brown',
      email: 'alice.brown@student.edu',
      rollNumber: 'CS2021001',
      department: 'Computer Science',
      status: 'approved',
      registrationDate: '2024-01-15'
    },
    {
      id: 'student002',
      name: 'Bob Wilson',
      email: 'bob.wilson@student.edu',
      rollNumber: 'CS2021002',
      department: 'Computer Science',
      status: 'pending',
      registrationDate: '2024-10-20'
    }
  ],
  appointments: [
    {
      id: 'apt001',
      studentId: 'student001',
      studentName: 'Alice Brown',
      teacherId: 'teacher001',
      teacherName: 'Dr. John Smith',
      date: '2024-10-25',
      time: '10:00',
      duration: '30 minutes',
      purpose: 'Doubt clarification in Data Structures - Tree algorithms',
      status: 'approved',
      createdDate: '2024-10-23',
      approvedDate: '2024-10-23'
    },
    {
      id: 'apt002',
      studentId: 'student001',
      studentName: 'Alice Brown',
      teacherId: 'teacher002',
      teacherName: 'Prof. Sarah Johnson',
      date: '2024-10-26',
      time: '11:00',
      duration: '45 minutes',
      purpose: 'Help with Calculus assignment - Integration problems',
      status: 'pending',
      createdDate: '2024-10-23'
    }
  ],
  messages: [
    {
      id: 'msg001',
      studentId: 'student001',
      studentName: 'Alice Brown',
      teacherId: 'teacher001',
      teacherName: 'Dr. John Smith',
      subject: 'Question about upcoming assignment',
      content: 'Dear Dr. Smith, I have a question about the binary tree assignment. Could you please clarify the expected time complexity for the search function?',
      sentDate: '2024-10-22',
      read: true,
      replied: true,
      replyContent: 'The expected time complexity should be O(log n) for a balanced binary search tree. Please refer to chapter 4 of the textbook for more details.',
      replyDate: '2024-10-22'
    },
    {
      id: 'msg002',
      studentId: 'student001',
      studentName: 'Alice Brown',
      teacherId: 'teacher002',
      teacherName: 'Prof. Sarah Johnson',
      subject: 'Calculus exam preparation',
      content: 'Dear Prof. Johnson, I would like to know if there are any specific topics I should focus on for the upcoming calculus exam.',
      sentDate: '2024-10-23',
      read: false,
      replied: false
    }
  ],
  registrations: [
    {
      id: 'reg001',
      name: 'Charlie Davis',
      email: 'charlie.davis@student.edu',
      rollNumber: 'CS2021003',
      department: 'Computer Science',
      password: 'student123',
      status: 'pending',
      submittedDate: '2024-10-23',
      reviewedBy: null,
      reviewedDate: null
    },
    {
      id: 'reg002',
      name: 'Diana Miller',
      email: 'diana.miller@student.edu',
      rollNumber: 'MA2021004',
      department: 'Mathematics',
      password: 'student123',
      status: 'pending',
      submittedDate: '2024-10-22',
      reviewedBy: null,
      reviewedDate: null
    }
  ],
  departments: [
    'Computer Science',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'History',
    'Economics'
  ],
  timeSlots: [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ],
  notifications: [
    {
      id: 'notif001',
      userId: 'student001',
      userRole: 'student',
      title: 'Appointment Approved',
      message: 'Your appointment with Dr. John Smith on October 25, 2024 at 10:00 AM has been approved.',
      type: 'appointment',
      read: false,
      createdDate: '2024-10-23'
    },
    {
      id: 'notif002',
      userId: 'teacher001',
      userRole: 'teacher',
      title: 'New Appointment Request',
      message: 'Alice Brown has requested an appointment on October 26, 2024 at 11:00 AM.',
      type: 'appointment_request',
      read: false,
      createdDate: '2024-10-23'
    },
    {
      id: 'notif003',
      userId: 'teacher001',
      userRole: 'teacher',
      title: 'New Message',
      message: 'You have received a new message from Alice Brown about the upcoming assignment.',
      type: 'message',
      read: true,
      createdDate: '2024-10-22'
    }
  ],
  users: [
    {
      id: 'admin001',
      email: 'admin@university.edu',
      password: 'admin123',
      role: 'admin',
      name: 'System Administrator'
    },
    {
      id: 'teacher001',
      email: 'john.smith@university.edu',
      password: 'teacher123',
      role: 'teacher',
      name: 'Dr. John Smith'
    },
    {
      id: 'teacher002',
      email: 'sarah.johnson@university.edu',
      password: 'teacher123',
      role: 'teacher',
      name: 'Prof. Sarah Johnson'
    },
    {
      id: 'student001',
      email: 'alice.brown@student.edu',
      password: 'student123',
      role: 'student',
      name: 'Alice Brown'
    }
  ]
};

// Firebase Configuration (Mock - for demonstration)
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "student-teacher-appointment.firebaseapp.com",
  projectId: "student-teacher-appointment",
  storageBucket: "student-teacher-appointment.appspot.com",
  messagingSenderId: "123456789",
  appId: "demo-app-id"
};

// Initialize Firebase (Mock)
function initializeFirebase() {
  console.log('Student-Teacher Appointment System Firebase initialized (demo mode)');
  // In a real app, you would initialize Firebase here
  // firebase.initializeApp(firebaseConfig);
}

// DOM Elements
const elements = {
  authContainer: document.getElementById('auth-container'),
  mainApp: document.getElementById('main-app'),
  loginBtn: document.getElementById('loginBtn'),
  registerBtn: document.getElementById('registerBtn'),
  logoutBtn: document.getElementById('logoutBtn'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  userRole: document.getElementById('userRole'),
  authMessage: document.getElementById('auth-message'),
  currentUser: document.getElementById('current-user'),
  mainNav: document.getElementById('main-nav')
};

// Utility Functions
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  const container = document.getElementById('toast-container');
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN');
}

function formatDate(dateString) {
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatTime(timeString) {
  return timeString + ':00';
}

function formatDateTime(dateString, timeString) {
  return `${formatDate(dateString)} at ${formatTime(timeString)}`;
}

function generateId(prefix) {
  return prefix + Date.now() + Math.random().toString(36).substr(2, 9);
}

// Authentication Functions
function login() {
  const email = elements.email.value;
  const password = elements.password.value;
  const role = elements.userRole.value;
  
  if (!email || !password) {
    showAuthMessage('Please fill in all fields', 'error');
    return;
  }
  
  // Check credentials against mock data
  const user = appState.users.find(u => 
    u.email === email && u.password === password && u.role === role
  );
  
  // For students, also check if they are approved
  if (user && role === 'student') {
    const student = appState.students.find(s => s.id === user.id);
    if (!student || student.status !== 'approved') {
      showAuthMessage('Student account not approved yet. Please wait for admin approval.', 'error');
      return;
    }
  }
  
  if (user) {
    appState.currentUser = user;
    appState.userRole = user.role;
    showAuthMessage('Login successful!', 'success');
    
    // Log user activity
    logActivity('login', `${user.name} logged in as ${user.role}`);
    
    setTimeout(() => {
      showMainApp();
    }, 1000);
  } else {
    showAuthMessage('Invalid credentials or role mismatch', 'error');
  }
}

function register() {
  // For student registration, redirect to registration module
  showModule('registration');
  showAuthMessage('Please use the registration form to register as a student', 'info');
}

function logout() {
  appState.currentUser = null;
  appState.userRole = null;
  
  elements.authContainer.classList.remove('hidden');
  elements.mainApp.classList.add('hidden');
  
  // Clear form
  elements.email.value = '';
  elements.password.value = '';
  
  showToast('Logged out successfully');
}

function showAuthMessage(message, type) {
  elements.authMessage.textContent = message;
  elements.authMessage.className = `auth-message ${type}`;
  elements.authMessage.style.display = 'block';
  
  setTimeout(() => {
    elements.authMessage.style.display = 'none';
  }, 3000);
}

function showMainApp() {
  elements.authContainer.classList.add('hidden');
  elements.mainApp.classList.remove('hidden');
  
  // Update user info  
  const roleDisplayName = {
    admin: 'Administrator',
    teacher: 'Teacher',
    student: 'Student'
  };
  elements.currentUser.textContent = `Welcome, ${appState.currentUser.name} (${roleDisplayName[appState.userRole]})`;
  
  // Setup navigation based on role
  setupNavigation();
  
  // Show dashboard by default
  showModule('dashboard');
}

// Navigation Functions
function setupNavigation() {
  const navButtons = elements.mainNav.querySelectorAll('.nav-btn');
  
  navButtons.forEach(btn => {
    const requiredRole = btn.getAttribute('data-role');
    
    if (requiredRole && requiredRole !== appState.userRole) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'block';
    }
    
    btn.addEventListener('click', () => {
      const module = btn.getAttribute('data-module');
      showModule(module);
      
      // Update active state
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function showModule(moduleName) {
  // Hide all modules
  const modules = document.querySelectorAll('.module');
  modules.forEach(module => {
    module.classList.remove('active');
  });
  
  // Show selected module
  const targetModule = document.getElementById(`${moduleName}-module`);
  if (targetModule) {
    targetModule.classList.add('active');
    
    // Load module content based on module name
    switch (moduleName) {
      case 'dashboard':
        loadDashboard();
        break;
      case 'teachers':
        loadTeachers();
        break;
      case 'students':
        loadStudents();
        break;
      case 'appointments':
        loadAllAppointments();
        break;
      case 'reports':
        loadReports();
        break;
      case 'teacher-appointments':
        loadTeacherAppointments();
        break;
      case 'teacher-availability':
        loadTeacherAvailability();
        break;
      case 'teacher-messages':
        loadTeacherMessages();
        break;
      case 'teacher-profile':
        loadTeacherProfile();
        break;
      case 'search-teachers':
        loadSearchTeachers();
        break;
      case 'book-appointment':
        loadBookAppointment();
        break;
      case 'student-appointments':
        loadStudentAppointments();
        break;
      case 'student-messages':
        loadStudentMessages();
        break;
      case 'student-profile':
        loadStudentProfile();
        break;
      case 'registration':
        loadRegistration();
        break;
    }
  }
}

// Dashboard Functions
function loadDashboard() {
  const dashboardContent = document.getElementById('dashboard-content');
  
  if (appState.userRole === 'admin') {
    const totalTeachers = appState.teachers.length;
    const totalStudents = appState.students.filter(s => s.status === 'approved').length;
    const pendingRegistrations = appState.registrations.filter(r => r.status === 'pending').length;
    const totalAppointments = appState.appointments.length;
    const pendingAppointments = appState.appointments.filter(a => a.status === 'pending').length;
    const todayAppointments = appState.appointments.filter(a => a.date === new Date().toISOString().split('T')[0]).length;
    
    dashboardContent.innerHTML = `
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${totalTeachers}</div>
          <div class="label">Total Teachers</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${totalStudents}</div>
          <div class="label">Approved Students</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${pendingRegistrations}</div>
          <div class="label">Pending Registrations</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${totalAppointments}</div>
          <div class="label">Total Appointments</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${pendingAppointments}</div>
          <div class="label">Pending Approvals</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${todayAppointments}</div>
          <div class="label">Today's Appointments</div>
        </div>
      </div>
    `;
  } else if (appState.userRole === 'teacher') {
    const teacherAppointments = appState.appointments.filter(a => a.teacherId === appState.currentUser.id);
    const pendingAppointments = teacherAppointments.filter(a => a.status === 'pending').length;
    const approvedAppointments = teacherAppointments.filter(a => a.status === 'approved').length;
    const todayAppointments = teacherAppointments.filter(a => 
      a.date === new Date().toISOString().split('T')[0] && a.status === 'approved'
    ).length;
    const unreadMessages = appState.messages.filter(m => m.teacherId === appState.currentUser.id && !m.read).length;
    
    dashboardContent.innerHTML = `
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${pendingAppointments}</div>
          <div class="label">Pending Requests</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${approvedAppointments}</div>
          <div class="label">Upcoming Appointments</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${todayAppointments}</div>
          <div class="label">Today's Appointments</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${unreadMessages}</div>
          <div class="label">Unread Messages</div>
        </div>
      </div>
    `;
  } else if (appState.userRole === 'student') {
    const studentAppointments = appState.appointments.filter(a => a.studentId === appState.currentUser.id);
    const pendingAppointments = studentAppointments.filter(a => a.status === 'pending').length;
    const approvedAppointments = studentAppointments.filter(a => a.status === 'approved').length;
    const completedAppointments = studentAppointments.filter(a => a.status === 'completed').length;
    const sentMessages = appState.messages.filter(m => m.studentId === appState.currentUser.id).length;
    
    dashboardContent.innerHTML = `
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${pendingAppointments}</div>
          <div class="label">Pending Appointments</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${approvedAppointments}</div>
          <div class="label">Approved Appointments</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${completedAppointments}</div>
          <div class="label">Completed Sessions</div>
        </div>
      </div>
      <div class="card dashboard-card">
        <div class="card__body dashboard-stat">
          <div class="number">${sentMessages}</div>
          <div class="label">Messages Sent</div>
        </div>
      </div>
    `;
  }
}

// Members Management Functions
function loadMembers() {
  if (appState.userRole !== 'admin') return;
  
  const membersList = document.getElementById('members-list');
  const searchInput = document.getElementById('member-search');
  
  function renderMembers(members = appState.members) {
    membersList.innerHTML = members.map(member => {
      const packageInfo = appState.packages.find(p => p.id === member.package);
      return `
        <div class="member-card">
          <div class="member-info">
            <h4>${member.name}</h4>
            <p>Email: ${member.email}</p>
            <p>Phone: ${member.phone}</p>
            <p>Package: ${packageInfo ? packageInfo.name : 'Unknown'}</p>
            <p>Join Date: ${formatDate(member.joinDate)}</p>
            <span class="status status--${member.status === 'active' ? 'success' : 'error'}">
              ${member.status}
            </span>
          </div>
          <div class="member-actions">
            <button class="btn btn--sm btn--secondary" onclick="editMember('${member.id}')">Edit</button>
            <button class="btn btn--sm btn--outline" onclick="deleteMember('${member.id}')">Delete</button>
            <button class="btn btn--sm btn--primary" onclick="createBillForMember('${member.id}')">Create Bill</button>
          </div>
        </div>
      `;
    }).join('');
  }
  
  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMembers = appState.members.filter(member => 
      member.name.toLowerCase().includes(searchTerm) ||
      member.email.toLowerCase().includes(searchTerm) ||
      member.phone.includes(searchTerm)
    );
    renderMembers(filteredMembers);
  });
  
  renderMembers();
  
  // Add member button
  const addMemberBtn = document.getElementById('add-member-btn');
  addMemberBtn.addEventListener('click', () => openMemberModal());
}

function openMemberModal(memberId = null) {
  const modal = document.getElementById('member-modal');
  const title = document.getElementById('member-modal-title');
  const form = document.getElementById('member-form');
  
  // Reset form
  form.reset();
  
  if (memberId) {
    // Edit mode
    title.textContent = 'Edit Member';
    const member = appState.members.find(m => m.id === memberId);
    if (member) {
      document.getElementById('member-name').value = member.name;
      document.getElementById('member-email').value = member.email;
      document.getElementById('member-phone').value = member.phone;
      document.getElementById('member-package').value = member.package;
      document.getElementById('member-join-date').value = member.joinDate;
    }
  } else {
    // Add mode
    title.textContent = 'Add New Member';
    document.getElementById('member-join-date').value = new Date().toISOString().split('T')[0];
  }
  
  modal.classList.remove('hidden');
  
  // Handle form submission
  form.onsubmit = (e) => {
    e.preventDefault();
    saveMember(memberId);
  };
  
  // Handle modal close
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.onclick = () => closeMemberModal();
  
  // Close on backdrop click
  modal.onclick = (e) => {
    if (e.target === modal) {
      closeMemberModal();
    }
  };
}

function closeMemberModal() {
  const modal = document.getElementById('member-modal');
  modal.classList.add('hidden');
}

function saveMember(memberId) {
  const form = document.getElementById('member-form');
  const formData = new FormData(form);
  
  const memberData = {
    name: document.getElementById('member-name').value,
    email: document.getElementById('member-email').value,
    phone: document.getElementById('member-phone').value,
    package: document.getElementById('member-package').value,
    joinDate: document.getElementById('member-join-date').value,
    status: 'active'
  };
  
  if (memberId) {
    // Update existing member
    const memberIndex = appState.members.findIndex(m => m.id === memberId);
    if (memberIndex !== -1) {
      appState.members[memberIndex] = { ...appState.members[memberIndex], ...memberData };
      showToast('Member updated successfully', 'success');
    }
  } else {
    // Add new member
    const newMember = {
      id: generateId('mem'),
      ...memberData
    };
    appState.members.push(newMember);
    
    // Also add as user for login
    const newUser = {
      id: newMember.id,
      email: newMember.email,
      password: 'member123', // Default password
      role: 'member',
      name: newMember.name
    };
    appState.users.push(newUser);
    
    showToast('Member added successfully', 'success');
  }
  
  closeMemberModal();
  loadMembers(); // Refresh the members list
}

function editMember(memberId) {
  openMemberModal(memberId);
}

function deleteMember(memberId) {
  if (confirm('Are you sure you want to delete this member?')) {
    const memberIndex = appState.members.findIndex(m => m.id === memberId);
    if (memberIndex !== -1) {
      const member = appState.members[memberIndex];
      appState.members.splice(memberIndex, 1);
      
      // Also remove user account
      const userIndex = appState.users.findIndex(u => u.id === memberId);
      if (userIndex !== -1) {
        appState.users.splice(userIndex, 1);
      }
      
      showToast(`Member ${member.name} deleted successfully`, 'success');
      loadMembers(); // Refresh the members list
    }
  }
}

function createBillForMember(memberId) {
  // Pre-fill the bill modal with member info
  showModule('billing');
  setTimeout(() => {
    const billMemberSelect = document.getElementById('bill-member');
    billMemberSelect.value = memberId;
    openBillModal();
  }, 100);
}

// Billing Functions
function loadBilling() {
  if (appState.userRole !== 'admin') return;
  
  const billsList = document.getElementById('bills-list');
  const createBillBtn = document.getElementById('create-bill-btn');
  
  function renderBills() {
    billsList.innerHTML = appState.bills.map(bill => `
      <div class="bill-card card">
        <div class="card__body">
          <div class="bill-info">
            <h4>Bill #${bill.id}</h4>
            <p><strong>Member:</strong> ${bill.memberName}</p>
            <p><strong>Type:</strong> ${bill.type}</p>
            <p><strong>Description:</strong> ${bill.description}</p>
            <p><strong>Due Date:</strong> ${formatDate(bill.dueDate)}</p>
            <div class="bill-amount">${formatCurrency(bill.amount)}</div>
            <span class="status status--${bill.status === 'paid' ? 'success' : 'warning'}">
              ${bill.status}
            </span>
          </div>
          <div class="bill-actions" style="margin-top: 1rem;">
            <button class="btn btn--sm btn--primary" onclick="generateReceipt('${bill.id}')">Generate Receipt</button>
            ${bill.status === 'pending' ? `<button class="btn btn--sm btn--success" onclick="markBillPaid('${bill.id}')">Mark Paid</button>` : ''}
            <button class="btn btn--sm btn--outline" onclick="deleteBill('${bill.id}')">Delete</button>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  renderBills();
  
  // Create bill button
  createBillBtn.addEventListener('click', () => openBillModal());
}

function openBillModal() {
  const modal = document.getElementById('bill-modal');
  const form = document.getElementById('bill-form');
  const memberSelect = document.getElementById('bill-member');
  
  // Reset form
  form.reset();
  
  // Populate member select
  memberSelect.innerHTML = '<option value="">Select Member</option>' +
    appState.members.map(member => 
      `<option value="${member.id}">${member.name}</option>`
    ).join('');
  
  // Set default due date to next month
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  document.getElementById('bill-due-date').value = nextMonth.toISOString().split('T')[0];
  
  modal.classList.remove('hidden');
  
  // Handle form submission
  form.onsubmit = (e) => {
    e.preventDefault();
    saveBill();
  };
  
  // Handle modal close
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.onclick = () => closeBillModal();
  
  // Close on backdrop click
  modal.onclick = (e) => {
    if (e.target === modal) {
      closeBillModal();
    }
  };
}

function closeBillModal() {
  const modal = document.getElementById('bill-modal');
  modal.classList.add('hidden');
}

function saveBill() {
  const memberId = document.getElementById('bill-member').value;
  const type = document.getElementById('bill-type').value;
  const amount = parseFloat(document.getElementById('bill-amount').value);
  const dueDate = document.getElementById('bill-due-date').value;
  const description = document.getElementById('bill-description').value;
  
  if (!memberId || !type || !amount || !dueDate) {
    showToast('Please fill in all required fields', 'error');
    return;
  }
  
  const member = appState.members.find(m => m.id === memberId);
  if (!member) {
    showToast('Member not found', 'error');
    return;
  }
  
  const newBill = {
    id: generateId('bill'),
    memberId,
    memberName: member.name,
    type,
    amount,
    dueDate,
    description: description || `${type} - ${formatDate(dueDate)}`,
    status: 'pending',
    createdDate: new Date().toISOString().split('T')[0]
  };
  
  appState.bills.push(newBill);
  
  // Create notification for member
  const notification = {
    id: generateId('notif'),
    memberId,
    title: 'New Bill Generated',
    message: `A new ${type} bill of ${formatCurrency(amount)} has been generated. Due date: ${formatDate(dueDate)}`,
    type: 'payment',
    read: false,
    createdDate: new Date().toISOString().split('T')[0]
  };
  appState.notifications.push(notification);
  
  showToast('Bill created successfully', 'success');
  closeBillModal();
  loadBilling();
}

function markBillPaid(billId) {
  const billIndex = appState.bills.findIndex(b => b.id === billId);
  if (billIndex !== -1) {
    appState.bills[billIndex].status = 'paid';
    showToast('Bill marked as paid', 'success');
    loadBilling();
  }
}

function deleteBill(billId) {
  if (confirm('Are you sure you want to delete this bill?')) {
    const billIndex = appState.bills.findIndex(b => b.id === billId);
    if (billIndex !== -1) {
      appState.bills.splice(billIndex, 1);
      showToast('Bill deleted successfully', 'success');
      loadBilling();
    }
  }
}

function generateReceipt(billId) {
  const bill = appState.bills.find(b => b.id === billId);
  if (!bill) return;
  
  // Create receipt content
  const receiptContent = `
    <div style="font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto; padding: 20px; border: 1px solid #ccc;">
      <h2 style="text-align: center; color: #2D8F8D;">GYM Management System</h2>
      <h3 style="text-align: center;">Digital Receipt</h3>
      <hr>
      <p><strong>Receipt ID:</strong> ${bill.id}</p>
      <p><strong>Member Name:</strong> ${bill.memberName}</p>
      <p><strong>Bill Type:</strong> ${bill.type}</p>
      <p><strong>Description:</strong> ${bill.description}</p>
      <p><strong>Amount:</strong> ${formatCurrency(bill.amount)}</p>
      <p><strong>Status:</strong> ${bill.status.toUpperCase()}</p>
      <p><strong>Due Date:</strong> ${formatDate(bill.dueDate)}</p>
      <p><strong>Generated Date:</strong> ${formatDate(bill.createdDate)}</p>
      <hr>
      <p style="text-align: center; color: #666; font-size: 12px;">Thank you for choosing our gym!</p>
    </div>
  `;
  
  // Open receipt in new window
  const receiptWindow = window.open('', '_blank');
  receiptWindow.document.write(`
    <html>
      <head>
        <title>Receipt - ${bill.id}</title>
      </head>
      <body>
        ${receiptContent}
        <div style="text-align: center; margin: 20px;">
          <button onclick="window.print()">Print Receipt</button>
          <button onclick="window.close()">Close</button>
        </div>
      </body>
    </html>
  `);
  
  showToast('Receipt generated successfully', 'success');
}

// Packages Functions
function loadPackages() {
  const packagesList = document.getElementById('packages-list');
  
  packagesList.innerHTML = appState.packages.map(pkg => `
    <div class="card package-card">
      <div class="card__body">
        <h3>${pkg.name}</h3>
        <div class="package-price">${formatCurrency(pkg.price)}</div>
        <p><strong>Duration:</strong> ${pkg.duration}</p>
        <ul class="package-features">
          ${pkg.features.map(feature => `<li>✓ ${feature}</li>`).join('')}
        </ul>
        ${appState.userRole === 'admin' ? 
          `<button class="btn btn--primary btn--sm" onclick="assignPackageToMember('${pkg.id}')">Assign to Member</button>` : 
          `<button class="btn btn--secondary btn--sm">Contact Admin</button>`
        }
      </div>
    </div>
  `).join('');
}

function assignPackageToMember(packageId) {
  // This would open a modal to select member and assign package
  showToast('Package assignment feature - would open member selection modal', 'info');
}

// Supplements Functions
function loadSupplements() {
  const supplementsList = document.getElementById('supplements-list');
  
  supplementsList.innerHTML = appState.supplements.map(supplement => `
    <div class="card supplement-card">
      <div class="card__body">
        <h4>${supplement.name}</h4>
        <p><strong>Category:</strong> ${supplement.category}</p>
        <div class="supplement-price">${formatCurrency(supplement.price)}</div>
        <p class="supplement-stock">Stock: ${supplement.stock} units</p>
        ${supplement.stock < 20 ? '<span class="status status--warning">Low Stock</span>' : '<span class="status status--success">In Stock</span>'}
        ${appState.userRole === 'admin' ? 
          `<div style="margin-top: 1rem;">
             <button class="btn btn--sm btn--secondary" onclick="updateStock('${supplement.id}')">Update Stock</button>
           </div>` : ''
        }
      </div>
    </div>
  `).join('');
}

function updateStock(supplementId) {
  const newStock = prompt('Enter new stock quantity:');
  if (newStock !== null && !isNaN(newStock)) {
    const supplementIndex = appState.supplements.findIndex(s => s.id === supplementId);
    if (supplementIndex !== -1) {
      appState.supplements[supplementIndex].stock = parseInt(newStock);
      showToast('Stock updated successfully', 'success');
      loadSupplements();
    }
  }
}

// Diet Plans Functions
function loadDietPlans() {
  const dietList = document.getElementById('diet-list');
  
  dietList.innerHTML = appState.dietPlans.map(diet => `
    <div class="card diet-card">
      <div class="card__body">
        <div style="flex: 1;">
          <h4>${diet.name}</h4>
          <p class="diet-calories"><strong>${diet.calories} calories/day</strong></p>
          <p><strong>Meals:</strong> ${diet.meals.join(', ')}</p>
        </div>
        ${appState.userRole === 'admin' ? 
          `<div>
             <button class="btn btn--sm btn--primary" onclick="assignDietPlan('${diet.id}')">Assign to Member</button>
           </div>` : ''
        }
      </div>
    </div>
  `).join('');
}

function assignDietPlan(dietId) {
  showToast('Diet plan assignment feature - would open member selection modal', 'info');
}

// Reports Functions
function loadReports() {
  // Reports content is static in HTML, just add functionality to buttons
}

function generateMemberReport() {
  const reportContent = `
    <h2>Member Report</h2>
    <p><strong>Generated Date:</strong> ${formatDate(new Date().toISOString().split('T')[0])}</p>
    <p><strong>Total Members:</strong> ${appState.members.length}</p>
    <p><strong>Active Members:</strong> ${appState.members.filter(m => m.status === 'active').length}</p>
    <h3>Member Details:</h3>
    <table border="1" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Package</th>
          <th>Join Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${appState.members.map(member => `
          <tr>
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${appState.packages.find(p => p.id === member.package)?.name || 'Unknown'}</td>
            <td>${formatDate(member.joinDate)}</td>
            <td>${member.status}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  
  const reportWindow = window.open('', '_blank');
  reportWindow.document.write(`
    <html>
      <head>
        <title>Member Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          table { margin-top: 20px; }
          th, td { padding: 8px; text-align: left; }
        </style>
      </head>
      <body>
        ${reportContent}
        <div style="margin-top: 20px;">
          <button onclick="window.print()">Print Report</button>
          <button onclick="window.close()">Close</button>
        </div>
      </body>
    </html>
  `);
  
  showToast('Member report generated', 'success');
}

function generatePaymentReport() {
  const totalRevenue = appState.bills.filter(b => b.status === 'paid').reduce((sum, bill) => sum + bill.amount, 0);
  const pendingAmount = appState.bills.filter(b => b.status === 'pending').reduce((sum, bill) => sum + bill.amount, 0);
  
  const reportContent = `
    <h2>Payment Report</h2>
    <p><strong>Generated Date:</strong> ${formatDate(new Date().toISOString().split('T')[0])}</p>
    <p><strong>Total Revenue:</strong> ${formatCurrency(totalRevenue)}</p>
    <p><strong>Pending Amount:</strong> ${formatCurrency(pendingAmount)}</p>
    <p><strong>Total Bills:</strong> ${appState.bills.length}</p>
    <h3>Bill Details:</h3>
    <table border="1" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th>Bill ID</th>
          <th>Member</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        ${appState.bills.map(bill => `
          <tr>
            <td>${bill.id}</td>
            <td>${bill.memberName}</td>
            <td>${bill.type}</td>
            <td>${formatCurrency(bill.amount)}</td>
            <td>${bill.status}</td>
            <td>${formatDate(bill.dueDate)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  
  const reportWindow = window.open('', '_blank');
  reportWindow.document.write(`
    <html>
      <head>
        <title>Payment Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          table { margin-top: 20px; }
          th, td { padding: 8px; text-align: left; }
        </style>
      </head>
      <body>
        ${reportContent}
        <div style="margin-top: 20px;">
          <button onclick="window.print()">Print Report</button>
          <button onclick="window.close()">Close</button>
        </div>
      </body>
    </html>
  `);
  
  showToast('Payment report generated', 'success');
}

function generateMonthlySummary() {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  
  const monthlyBills = appState.bills.filter(bill => {
    const billDate = new Date(bill.createdDate);
    return billDate.getMonth() + 1 === currentMonth && billDate.getFullYear() === currentYear;
  });
  
  const monthlyRevenue = monthlyBills.filter(b => b.status === 'paid').reduce((sum, bill) => sum + bill.amount, 0);
  
  const reportContent = `
    <h2>Monthly Summary - ${new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</h2>
    <p><strong>Generated Date:</strong> ${formatDate(new Date().toISOString().split('T')[0])}</p>
    <p><strong>Total Members:</strong> ${appState.members.length}</p>
    <p><strong>Monthly Bills:</strong> ${monthlyBills.length}</p>
    <p><strong>Monthly Revenue:</strong> ${formatCurrency(monthlyRevenue)}</p>
    <p><strong>Low Stock Items:</strong> ${appState.supplements.filter(s => s.stock < 20).length}</p>
  `;
  
  const reportWindow = window.open('', '_blank');
  reportWindow.document.write(`
    <html>
      <head>
        <title>Monthly Summary</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
        </style>
      </head>
      <body>
        ${reportContent}
        <div style="margin-top: 20px;">
          <button onclick="window.print()">Print Report</button>
          <button onclick="window.close()">Close</button>
        </div>
      </body>
    </html>
  `);
  
  showToast('Monthly summary generated', 'success');
}

// Member-specific Functions
function loadProfile() {
  if (appState.userRole !== 'member') return;
  
  const profileContent = document.getElementById('profile-content');
  const member = appState.members.find(m => m.id === appState.currentUser.id);
  
  if (!member) {
    profileContent.innerHTML = '<p>Member profile not found.</p>';
    return;
  }
  
  const packageInfo = appState.packages.find(p => p.id === member.package);
  
  profileContent.innerHTML = `
    <div class="card">
      <div class="card__body">
        <h3>My Profile</h3>
        <div class="profile-field">
          <strong>Name:</strong>
          <span>${member.name}</span>
        </div>
        <div class="profile-field">
          <strong>Email:</strong>
          <span>${member.email}</span>
        </div>
        <div class="profile-field">
          <strong>Phone:</strong>
          <span>${member.phone}</span>
        </div>
        <div class="profile-field">
          <strong>Membership Package:</strong>
          <span>${packageInfo ? packageInfo.name : 'Unknown'}</span>
        </div>
        <div class="profile-field">
          <strong>Join Date:</strong>
          <span>${formatDate(member.joinDate)}</span>
        </div>
        <div class="profile-field">
          <strong>Status:</strong>
          <span class="status status--${member.status === 'active' ? 'success' : 'error'}">${member.status}</span>
        </div>
      </div>
    </div>
  `;
}

function loadMemberBills() {
  if (appState.userRole !== 'member') return;
  
  const memberBillsList = document.getElementById('member-bills-list');
  const memberBills = appState.bills.filter(b => b.memberId === appState.currentUser.id);
  
  if (memberBills.length === 0) {
    memberBillsList.innerHTML = '<p>No bills found.</p>';
    return;
  }
  
  memberBillsList.innerHTML = memberBills.map(bill => `
    <div class="card bill-card">
      <div class="card__body">
        <div class="bill-info">
          <h4>Bill #${bill.id}</h4>
          <p><strong>Type:</strong> ${bill.type}</p>
          <p><strong>Description:</strong> ${bill.description}</p>
          <p><strong>Due Date:</strong> ${formatDate(bill.dueDate)}</p>
          <div class="bill-amount">${formatCurrency(bill.amount)}</div>
          <span class="status status--${bill.status === 'paid' ? 'success' : 'warning'}">
            ${bill.status}
          </span>
        </div>
        <div class="bill-actions" style="margin-top: 1rem;">
          <button class="btn btn--sm btn--primary" onclick="viewReceipt('${bill.id}')">View Receipt</button>
          ${bill.status === 'pending' ? '<button class="btn btn--sm btn--secondary">Pay Now</button>' : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function viewReceipt(billId) {
  // Same as generateReceipt but for member view
  generateReceipt(billId);
}

function loadNotifications() {
  if (appState.userRole !== 'member') return;
  
  const notificationsList = document.getElementById('notifications-list');
  const memberNotifications = appState.notifications.filter(n => n.memberId === appState.currentUser.id);
  
  if (memberNotifications.length === 0) {
    notificationsList.innerHTML = '<p>No notifications.</p>';
    return;
  }
  
  notificationsList.innerHTML = memberNotifications.map(notification => `
    <div class="notification-card ${notification.read ? 'read' : ''}">
      <div>
        <h4>${notification.title}</h4>
        <p>${notification.message}</p>
        <small>Date: ${formatDate(notification.createdDate)}</small>
      </div>
      ${!notification.read ? 
        `<button class="btn btn--sm btn--secondary" onclick="markNotificationRead('${notification.id}')">Mark as Read</button>` : 
        ''
      }
    </div>
  `).join('');
}

function markNotificationRead(notificationId) {
  const notificationIndex = appState.notifications.findIndex(n => n.id === notificationId);
  if (notificationIndex !== -1) {
    appState.notifications[notificationIndex].read = true;
    showToast('Notification marked as read', 'success');
    loadNotifications();
  }
}

// User-specific Functions
function loadGymInfo() {
  // Gym info is static in HTML, no additional loading needed
}

function loadSearch() {
  if (appState.userRole !== 'user') return;
  
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('public-search');
  const searchResults = document.getElementById('search-results');
  
  searchBtn.addEventListener('click', performPublicSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performPublicSearch();
    }
  });
  
  function performPublicSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
      showToast('Please enter a search term', 'error');
      return;
    }
    
    // Limited search for public users - only basic info
    const results = appState.members.filter(member => 
      member.name.toLowerCase().includes(searchTerm) ||
      member.phone.includes(searchTerm)
    ).map(member => ({
      name: member.name,
      package: member.package,
      status: member.status
    }));
    
    if (results.length === 0) {
      searchResults.innerHTML = '<p>No members found.</p>';
      return;
    }
    
    searchResults.innerHTML = results.map(result => {
      const packageInfo = appState.packages.find(p => p.id === result.package);
      return `
        <div class="card">
          <div class="card__body">
            <h4>${result.name}</h4>
            <p><strong>Package:</strong> ${packageInfo ? packageInfo.name : 'Unknown'}</p>
            <span class="status status--${result.status === 'active' ? 'success' : 'error'}">
              ${result.status}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Initialize Application
function initApp() {
  // Initialize Firebase (mock)
  initializeFirebase();
  
  // Set up event listeners
  elements.loginBtn.addEventListener('click', login);
  elements.registerBtn.addEventListener('click', register);
  elements.logoutBtn.addEventListener('click', logout);
  
  // Handle enter key in auth form
  elements.email.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') login();
  });
  elements.password.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') login();
  });
  
  console.log('GYM Management System initialized');
  
  // Show demo credentials in console for testing
  console.log('Demo credentials:');
  console.log('Admin: admin@gym.com / admin123');
  console.log('Member: john@example.com / member123');
  console.log('User: user@example.com / user123');
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
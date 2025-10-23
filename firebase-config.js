// Firebase Configuration and Initialization
// This file contains Firebase setup for the GYM Management System

// Firebase Configuration Object
const firebaseConfig = {
  apiKey: "AIzaSyDemo-Key-For-Gym-Management-System",
  authDomain: "gym-management-system.firebaseapp.com",
  projectId: "gym-management-system",
  storageBucket: "gym-management-system.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012",
  measurementId: "G-ABCD123456"
};

// Initialize Firebase
class FirebaseService {
  constructor() {
    this.app = null;
    this.auth = null;
    this.firestore = null;
    this.initialized = false;
  }

  // Initialize Firebase services
  async initialize() {
    try {
      // In a real application, uncomment the following lines:
      // this.app = firebase.initializeApp(firebaseConfig);
      // this.auth = firebase.auth();
      // this.firestore = firebase.firestore();
      
      // For demo purposes, we'll simulate Firebase initialization
      this.initialized = true;
      console.log('Firebase services initialized successfully (demo mode)');
      
      // Set up Firestore collections structure
      this.setupCollections();
      
      return true;
    } catch (error) {
      console.error('Error initializing Firebase:', error);
      return false;
    }
  }

  // Setup Firestore collections structure
  setupCollections() {
    const collections = [
      'users',           // User accounts (admin, members, general users)
      'members',         // Detailed member profiles
      'bills',          // Payment records and invoices
      'packages',       // Membership packages
      'notifications',  // System notifications
      'supplements',    // Supplement store inventory
      'diet_plans',     // Nutrition and diet plans
      'reports',        // Generated reports
      'settings',       // System configuration
      'logs'           // Activity logs
    ];
    
    console.log('Firestore collections structure:', collections);
  }

  // Authentication Methods
  async signInWithEmailAndPassword(email, password) {
    try {
      // In real implementation:
      // const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      // return userCredential.user;
      
      // Demo implementation
      console.log('Signing in user:', email);
      return { uid: 'demo-uid', email: email };
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error;
    }
  }

  async createUserWithEmailAndPassword(email, password) {
    try {
      // In real implementation:
      // const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      // return userCredential.user;
      
      // Demo implementation
      console.log('Creating user:', email);
      return { uid: 'demo-uid-new', email: email };
    } catch (error) {
      console.error('User creation error:', error);
      throw error;
    }
  }

  async signOut() {
    try {
      // In real implementation:
      // await this.auth.signOut();
      
      // Demo implementation
      console.log('User signed out');
      return true;
    } catch (error) {
      console.error('Sign-out error:', error);
      throw error;
    }
  }

  // Firestore Methods
  async addDocument(collection, data) {
    try {
      // In real implementation:
      // const docRef = await this.firestore.collection(collection).add(data);
      // return docRef.id;
      
      // Demo implementation
      const docId = 'demo-doc-' + Date.now();
      console.log(`Added document to ${collection}:`, data);
      return docId;
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  }

  async updateDocument(collection, docId, data) {
    try {
      // In real implementation:
      // await this.firestore.collection(collection).doc(docId).update(data);
      
      // Demo implementation
      console.log(`Updated document ${docId} in ${collection}:`, data);
      return true;
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  }

  async deleteDocument(collection, docId) {
    try {
      // In real implementation:
      // await this.firestore.collection(collection).doc(docId).delete();
      
      // Demo implementation
      console.log(`Deleted document ${docId} from ${collection}`);
      return true;
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  }

  async getDocument(collection, docId) {
    try {
      // In real implementation:
      // const doc = await this.firestore.collection(collection).doc(docId).get();
      // return doc.exists ? { id: doc.id, ...doc.data() } : null;
      
      // Demo implementation
      console.log(`Getting document ${docId} from ${collection}`);
      return null; // Would return actual data in real implementation
    } catch (error) {
      console.error('Error getting document:', error);
      throw error;
    }
  }

  async getCollection(collection, filters = []) {
    try {
      // In real implementation:
      // let query = this.firestore.collection(collection);
      // filters.forEach(filter => {
      //   query = query.where(filter.field, filter.operator, filter.value);
      // });
      // const snapshot = await query.get();
      // return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Demo implementation
      console.log(`Getting collection ${collection} with filters:`, filters);
      return []; // Would return actual data in real implementation
    } catch (error) {
      console.error('Error getting collection:', error);
      throw error;
    }
  }

  // Real-time listeners
  onCollectionChange(collection, callback, filters = []) {
    try {
      // In real implementation:
      // let query = this.firestore.collection(collection);
      // filters.forEach(filter => {
      //   query = query.where(filter.field, filter.operator, filter.value);
      // });
      // return query.onSnapshot(snapshot => {
      //   const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      //   callback(data);
      // });
      
      // Demo implementation
      console.log(`Setting up listener for ${collection}`);
      return () => console.log(`Listener for ${collection} removed`);
    } catch (error) {
      console.error('Error setting up listener:', error);
      throw error;
    }
  }

  onDocumentChange(collection, docId, callback) {
    try {
      // In real implementation:
      // return this.firestore.collection(collection).doc(docId).onSnapshot(doc => {
      //   const data = doc.exists ? { id: doc.id, ...doc.data() } : null;
      //   callback(data);
      // });
      
      // Demo implementation
      console.log(`Setting up listener for ${collection}/${docId}`);
      return () => console.log(`Listener for ${collection}/${docId} removed`);
    } catch (error) {
      console.error('Error setting up document listener:', error);
      throw error;
    }
  }

  // Utility methods for GYM Management System
  async addMember(memberData) {
    return await this.addDocument('members', {
      ...memberData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  async updateMember(memberId, memberData) {
    return await this.updateDocument('members', memberId, {
      ...memberData,
      updatedAt: new Date()
    });
  }

  async addBill(billData) {
    return await this.addDocument('bills', {
      ...billData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  async updateBill(billId, billData) {
    return await this.updateDocument('bills', billId, {
      ...billData,
      updatedAt: new Date()
    });
  }

  async addNotification(notificationData) {
    return await this.addDocument('notifications', {
      ...notificationData,
      createdAt: new Date(),
      read: false
    });
  }

  async markNotificationAsRead(notificationId) {
    return await this.updateDocument('notifications', notificationId, {
      read: true,
      readAt: new Date()
    });
  }

  async addActivityLog(logData) {
    return await this.addDocument('logs', {
      ...logData,
      timestamp: new Date()
    });
  }

  // Batch operations
  async batchUpdate(operations) {
    try {
      // In real implementation:
      // const batch = this.firestore.batch();
      // operations.forEach(op => {
      //   const docRef = this.firestore.collection(op.collection).doc(op.docId);
      //   if (op.type === 'set') {
      //     batch.set(docRef, op.data);
      //   } else if (op.type === 'update') {
      //     batch.update(docRef, op.data);
      //   } else if (op.type === 'delete') {
      //     batch.delete(docRef);
      //   }
      // });
      // await batch.commit();
      
      // Demo implementation
      console.log('Batch operations:', operations);
      return true;
    } catch (error) {
      console.error('Error in batch operation:', error);
      throw error;
    }
  }

  // Security rules helpers (for development)
  getSecurityRules() {
    return `
      rules_version = '2';
      service cloud.firestore {
        match /databases/{database}/documents {
          // Users can only access their own user document
          match /users/{userId} {
            allow read, write: if request.auth != null && request.auth.uid == userId;
          }
          
          // Members collection - admin and member access
          match /members/{memberId} {
            allow read, write: if request.auth != null && 
              (get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin' ||
               request.auth.uid == memberId);
          }
          
          // Bills collection - admin can manage all, members can read their own
          match /bills/{billId} {
            allow read, write: if request.auth != null && 
              get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
            allow read: if request.auth != null && 
              resource.data.memberId == request.auth.uid;
          }
          
          // Packages - readable by all authenticated users
          match /packages/{packageId} {
            allow read: if request.auth != null;
            allow write: if request.auth != null && 
              get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
          }
          
          // Notifications - users can read their own
          match /notifications/{notificationId} {
            allow read, write: if request.auth != null && 
              (get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin' ||
               resource.data.memberId == request.auth.uid);
          }
          
          // Other collections - admin only
          match /{document=**} {
            allow read, write: if request.auth != null && 
              get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
          }
        }
      }
    `;
  }
}

// Export Firebase service instance
const firebaseService = new FirebaseService();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = firebaseService;
} else {
  window.firebaseService = firebaseService;
}

// Initialize Firebase when script loads
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      firebaseService.initialize();
    });
  } else {
    firebaseService.initialize();
  }
}
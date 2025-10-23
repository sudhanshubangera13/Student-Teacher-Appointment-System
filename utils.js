// Utility Functions for GYM Management System

// Date and Time Utilities
class DateUtils {
  static formatDate(date, format = 'DD/MM/YYYY') {
    if (!date) return '';
    
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    
    switch (format) {
      case 'DD/MM/YYYY':
        return `${day}/${month}/${year}`;
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'YYYY-MM-DD':
        return `${year}-${month}-${day}`;
      case 'DD MMM YYYY':
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${day} ${months[d.getMonth()]} ${year}`;
      default:
        return d.toLocaleDateString('en-IN');
    }
  }
  
  static formatDateTime(date) {
    if (!date) return '';
    
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    return d.toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  static addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  static addMonths(date, months) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  }
  
  static getDaysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const timeDiff = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }
  
  static isDateExpired(date) {
    return new Date(date) < new Date();
  }
  
  static getMonthName(monthNumber) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthNumber - 1] || '';
  }
}

// Currency and Number Utilities
class CurrencyUtils {
  static formatINR(amount, showSymbol = true) {
    if (isNaN(amount)) return '₹0';
    
    const formatter = new Intl.NumberFormat('en-IN', {
      style: showSymbol ? 'currency' : 'decimal',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
    
    return formatter.format(amount);
  }
  
  static parseAmount(amountString) {
    if (!amountString) return 0;
    
    // Remove currency symbols and spaces
    const cleanString = amountString.toString().replace(/[₹,\s]/g, '');
    const amount = parseFloat(cleanString);
    return isNaN(amount) ? 0 : amount;
  }
  
  static formatNumber(number, decimals = 0) {
    if (isNaN(number)) return '0';
    return number.toLocaleString('en-IN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }
}

// String Utilities
class StringUtils {
  static capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  static capitalizeWords(str) {
    if (!str) return '';
    return str.split(' ')
              .map(word => this.capitalize(word))
              .join(' ');
  }
  
  static generateId(prefix = '', length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = prefix;
    
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return result + Date.now().toString().slice(-4);
  }
  
  static slugify(str) {
    if (!str) return '';
    return str.toLowerCase()
              .replace(/[^\w\s-]/g, '')
              .replace(/[\s_-]+/g, '-')
              .replace(/^-+|-+$/g, '');
  }
  
  static truncate(str, length = 100, suffix = '...') {
    if (!str || str.length <= length) return str;
    return str.substring(0, length) + suffix;
  }
  
  static maskEmail(email) {
    if (!email) return '';
    const [username, domain] = email.split('@');
    if (!username || !domain) return email;
    
    const maskedUsername = username.length > 2 
      ? username[0] + '*'.repeat(username.length - 2) + username.slice(-1)
      : username;
    
    return `${maskedUsername}@${domain}`;
  }
  
  static maskPhone(phone) {
    if (!phone) return '';
    if (phone.length < 4) return phone;
    
    return phone.slice(0, 2) + '*'.repeat(phone.length - 4) + phone.slice(-2);
  }
}

// Validation Utilities
class ValidationUtils {
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  static isValidPhone(phone) {
    const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number format
    const cleanPhone = phone.replace(/[\s-+()]/g, '');
    return phoneRegex.test(cleanPhone);
  }
  
  static isValidPassword(password, minLength = 6) {
    if (!password || password.length < minLength) return false;
    
    // Check for at least one letter and one number
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    
    return hasLetter && hasNumber;
  }
  
  static isValidPAN(pan) {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  }
  
  static isValidAadhar(aadhar) {
    const aadharRegex = /^[0-9]{12}$/;
    const cleanAadhar = aadhar.replace(/[\s-]/g, '');
    return aadharRegex.test(cleanAadhar);
  }
  
  static validateForm(formData, rules) {
    const errors = {};
    
    Object.keys(rules).forEach(field => {
      const value = formData[field];
      const rule = rules[field];
      
      if (rule.required && (!value || value.toString().trim() === '')) {
        errors[field] = `${rule.label || field} is required`;
        return;
      }
      
      if (value && rule.type === 'email' && !this.isValidEmail(value)) {
        errors[field] = 'Please enter a valid email address';
      }
      
      if (value && rule.type === 'phone' && !this.isValidPhone(value)) {
        errors[field] = 'Please enter a valid phone number';
      }
      
      if (value && rule.minLength && value.length < rule.minLength) {
        errors[field] = `${rule.label || field} must be at least ${rule.minLength} characters`;
      }
      
      if (value && rule.maxLength && value.length > rule.maxLength) {
        errors[field] = `${rule.label || field} must not exceed ${rule.maxLength} characters`;
      }
      
      if (value && rule.min && parseFloat(value) < rule.min) {
        errors[field] = `${rule.label || field} must be at least ${rule.min}`;
      }
      
      if (value && rule.max && parseFloat(value) > rule.max) {
        errors[field] = `${rule.label || field} must not exceed ${rule.max}`;
      }
    });
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
}

// Local Storage Utilities (Note: These won't work in sandboxed environment)
// Note: Storage utilities are disabled in sandbox environment
// In production, these would use browser's storage API
class StorageUtils {
  static set(key, value) {
    try {
      // Storage APIs are disabled in sandbox environment
      // In production environment, use browser storage API
      console.log(`Storage set: ${key}`, value);
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      return false;
    }
  }
  
  static get(key, defaultValue = null) {
    try {
      // Storage APIs are disabled in sandbox environment
      // In production environment, retrieve from browser storage
      console.log(`Storage get: ${key}`);
      return defaultValue;
    } catch (error) {
      console.error('Storage error:', error);
      return defaultValue;
    }
  }
  
  static remove(key) {
    try {
      // Storage APIs are disabled in sandbox environment
      // In production environment, remove from browser storage
      console.log(`Storage remove: ${key}`);
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      return false;
    }
  }
  
  static clear() {
    try {
      // Storage APIs are disabled in sandbox environment
      // In production environment, clear browser storage
      console.log('Storage cleared');
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      return false;
    }
  }
}

// Array and Object Utilities
class DataUtils {
  static sortBy(array, key, direction = 'asc') {
    return [...array].sort((a, b) => {
      const aVal = this.getNestedValue(a, key);
      const bVal = this.getNestedValue(b, key);
      
      if (aVal < bVal) return direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }
  
  static groupBy(array, key) {
    return array.reduce((groups, item) => {
      const group = this.getNestedValue(item, key);
      if (!groups[group]) groups[group] = [];
      groups[group].push(item);
      return groups;
    }, {});
  }
  
  static filterBy(array, filters) {
    return array.filter(item => {
      return Object.keys(filters).every(key => {
        const itemValue = this.getNestedValue(item, key);
        const filterValue = filters[key];
        
        if (typeof filterValue === 'string') {
          return itemValue.toString().toLowerCase().includes(filterValue.toLowerCase());
        }
        
        if (Array.isArray(filterValue)) {
          return filterValue.includes(itemValue);
        }
        
        return itemValue === filterValue;
      });
    });
  }
  
  static getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }
  
  static setNestedValue(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((current, key) => {
      if (!current[key]) current[key] = {};
      return current[key];
    }, obj);
    
    target[lastKey] = value;
    return obj;
  }
  
  static deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => this.deepClone(item));
    if (typeof obj === 'object') {
      const cloned = {};
      Object.keys(obj).forEach(key => {
        cloned[key] = this.deepClone(obj[key]);
      });
      return cloned;
    }
  }
  
  static isEmpty(value) {
    if (value == null) return true;
    if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
  }
}

// Export utilities
if (typeof window !== 'undefined') {
  window.DateUtils = DateUtils;
  window.CurrencyUtils = CurrencyUtils;
  window.StringUtils = StringUtils;
  window.ValidationUtils = ValidationUtils;
  window.StorageUtils = StorageUtils;
  window.DataUtils = DataUtils;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DateUtils,
    CurrencyUtils,
    StringUtils,
    ValidationUtils,
    StorageUtils,
    DataUtils
  };
}
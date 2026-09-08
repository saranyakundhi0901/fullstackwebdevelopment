// 1. SINGLE INHERITANCE
console.log("Single Inheritance");

class User {
    login() {
        console.log("User is logging in.");
    }
}

class Customer extends User {
    buyProduct() {
        console.log("Customer is buying a product.");
    }
}

let customer = new Customer();
customer.login();
customer.buyProduct();


// 2. MULTILEVEL INHERITANCE
console.log("\nMultilevel Inheritance");

class User2 {
    login() {
        console.log("User is logging in.");
    }
}

class Customer2 extends User2 {
    buyProduct() {
        console.log("Customer is buying a product.");
    }
}

class PremiumCustomer extends Customer2 {
    getDiscount() {
        console.log("Premium customer gets a discount.");
    }
}

let premiumCustomer = new PremiumCustomer();
premiumCustomer.login();
premiumCustomer.buyProduct();
premiumCustomer.getDiscount();


// 3. HIERARCHICAL INHERITANCE
console.log("\nHierarchical Inheritance");

class User3 {
    login() {
        console.log("User is logging in.");
    }
}

class Customer3 extends User3 {
    buyProduct() {
        console.log("Customer is buying a product.");
    }
}

class Admin extends User3 {
    manageUsers() {
        console.log("Admin is managing users.");
    }
}

let customer3 = new Customer3();
let admin = new Admin();

customer3.login();
customer3.buyProduct();

admin.login();
admin.manageUsers();


// 4. MULTIPLE INHERITANCE
// Using Mixins
console.log("\nMultiple Inheritance");

const Login = {
    login() {
        console.log("Employee is logging in.");
    }
};

const Payment = {
    makePayment() {
        console.log("Employee is making payment.");
    }
};

class Employee {
    work() {
        console.log("Employee is working.");
    }
}

// Add both Login and Payment features
Object.assign(Employee.prototype, Login, Payment);

let employee = new Employee();
employee.work();
employee.login();
employee.makePayment();


// 5. HYBRID INHERITANCE
console.log("\nHybrid Inheritance");

class User4 {
    login() {
        console.log("User is logging in.");
    }
}

class Customer4 extends User4 {
    buyProduct() {
        console.log("Customer is buying a product.");
    }
}

class Admin4 extends User4 {
    manageUsers() {
        console.log("Admin is managing users.");
    }
}

const Notification = {
    sendNotification() {
        console.log("Notification sent.");
    }
};

// Add Notification feature to Customer
Object.assign(Customer4.prototype, Notification);

let customer4 = new Customer4();
let admin4 = new Admin4();

customer4.login();
customer4.buyProduct();
customer4.sendNotification();

admin4.login();
admin4.manageUsers();
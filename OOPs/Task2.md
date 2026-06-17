# 🚆 JavaScript-Based Railway Ticket Booking – Problem Statement

## 🏷️ Class Name: `RailwayTicket`

---

### 🧾 Data Members (Properties)

* `name` → A string to store the name of the customer
* `coach` → A string to store the type of coach the customer wants to travel in
* `mob_no` → A number to store the customer's mobile number
* `amt` → A number to store the basic amount of the ticket
* `total_amt` → A number to store the final amount after updating it based on coach type

---

### 🔧 Member Methods

1. **`accept(name, coach, mob_no, amt)`**
   To take input for name, coach, mobile number, and ticket amount

2. **`update()`**
   To update the ticket amount based on coach type using the following fare details:

   | Coach Type | Extra Amount to Add |
   | ---------- | ------------------- |
   | First\_AC  | ₹700                |
   | Second\_AC | ₹500                |
   | Third\_AC  | ₹250                |
   | Sleeper    | ₹0                  |

3. **`display()`**
   To display all the details of the customer in the following format:

   ```js
   NAME: <name>
   COACH: <coach>
   MOBILE NUMBER: <mob_no>
   TOTAL AMOUNT: ₹<total_amt>
   ```

---

### 🧪 Task

* Create a class `RailwayTicket` using JavaScript
* Define the above properties and methods
* Create an object of the class in your main script
* Use the methods to input values, update the amount, and display the ticket details.
  
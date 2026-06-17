# 🚕 JavaScript-Based Cab Service – Problem Statement

A private Cab service company provides services within the city at the following rates:

| Type           | Upto 5 KM | Beyond 5 KM |
| -------------- | --------- | ----------- |
| **AC Car**     | ₹150      | ₹10 per KM  |
| **Non-AC Car** | ₹120      | ₹8 per KM   |

---

## 📌 Design a JavaScript class named `CabService` with the following

### 🔸 **Properties (Data Members):**

* `car_type` → A string to store type of car ("AC" or "NON AC")
* `km` → A number to store kilometers travelled
* `bill` → A number to calculate and store the total bill

### 🔧 **Methods:**

1. **Constructor `constructor()`**
   Initialize:

   * `car_type` to an empty string (`""`)
   * `km` and `bill` to `0.0`

2. **`accept(carType, km)`**
   Accepts user input for car type and kilometers travelled

3. **`calculate()`**
   Calculates the total bill amount based on the car type and distance:

   * If car type is **AC**:

     * Up to 5 KM: ₹150
     * Beyond 5 KM: ₹150 + ₹10 per extra KM
   * If car type is **NON AC**:

     * Up to 5 KM: ₹120
     * Beyond 5 KM: ₹120 + ₹8 per extra KM

4. **`display()`**
   Displays the bill in the following format:

   ```js
   CAR TYPE: <car_type>
   KILOMETER TRAVELLED: <km>
   TOTAL BILL: ₹<bill>
   ```

---

### 🧪 Task

* Create an object of `CabService`
* Accept input using method `accept()`
* Call `calculate()` to compute bill
* Use `display()` to show output

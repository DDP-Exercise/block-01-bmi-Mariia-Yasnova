"use strict";
/*******************************************************
 *     bmi.js
 *
 *     Write a small program that calculates the Body Mass Index according to parameters,
 *     given by the user. It should generate a textbased representation like the following:
 *
 *     -----------------------------------------------------
 *     Name:		         :LAST NAME:, :First name:
 *     -----------------------------------------------------
 *     Age:                  :age: Years
 *     Height:		         :size:m (i.e. 1,81m)
 *     Weight:	             :weight: kg
 *     Basal Metabolic Rate: <bmr> kcal
 *     Body Mass Index:	     <bmi>
 *     Normal Weight:        <Yes/No>
 *     Danger:		         <Yes/No>
 *     -----------------------------------------------------
 *
 *     To do so, collect data from your users. Values within :colons: are (formatted) user-inputs;
 *     values within <angle brackets> have to be calculated by your software.
 *
 *     You - 2026-03-05
 *******************************************************/

/*
 * TODO: Declare and assign all necessary constants and variables with user input.
 * Make sure, to help your users understand what they need to type in, by using clear prompt-instructions.
 */
let lastName = prompt("What is your LAST name? ");
let firstName = prompt("What is your first name? ");
let age = prompt("How old are you? ");
let heightCm = prompt("Please enter your height in cm (example: 167): ");
let weight = prompt("Please enter your weight in kg (example: 62): ");

const LINE = "-----------------------------------------------------";
let bmr, bmi, normal, danger, gender;

do {
    gender = prompt("Please choose your gender (male/female):  ").toLowerCase().trim();
    if (gender !=="male" && gender !=="female") {
        alert("Invalid input! Please enter your gender.");
    }
} while (gender !=="female" && gender !=="female");

let heightM = (heightCm / 100).toFixed(2);

if (gender === "female") {
    bmr = 655 + (10 * weight) + (2 * heightCm) - (6 * age);
} else {
    bmr = 66 + (14 * weight) + (5 * heightCm) - (7 * age);
}

bmi = (10000 * weight) / (heightCm * heightCm);

normal = (bmi >= 18 && bmi <=25) ? "Yes" : "No";

danger = (bmi < 16 || bmi >= 30) ? "Yes" : "No";

/**
 * Formulas:
 *
 * BMR = A + B × weight [kg] + C × height [cm] − D × age [years]
 *      For women: A=655, B=10, C=2, D=6
 *      For men: A=66, B=14, C=5, D=7
 *
 * BMI = (10000 * weight [kg]) / height² [cm]
 *
 * Normal Weight = Any BMI between 18 and 25 (including 18 and 25).
 * Danger = Any BMI lower than 16 or 30+.
 **/

/*
 * TODO: To calculate the bmr; ask your users which calculation method they would prefer (male or female).
 * Be careful. Users make typos. Make sure that you have a valid answer before moving on.
 */

// TODO: To calculate the bmi, use the given formula with all the input you have collected.
// TODO: Once you have the bmi, determine whether or not the weight is normal and if the condition is dangerous.

/*
 * TODO: Create the correct output from all your data. Make sure to stick to the promised format! NO EXCEPTIONS!
 * You can use \t to add a Tab-Space. Once your program is completed, the output in the browser console should
 * look EXACTLY like the Example-Output above (with different data, of course).
 *
 *  Valid Example:
 *   -----------------------------------------------------
 *   Name:		           NEUWERSCH, Matthias
 *   -----------------------------------------------------
 *   Age:                  35 Years
 *   Height:               1,78m
 *   Weight:               77 kg
 *   Basal Metabolic Rate: 1789 kcal
 *   Body Mass Index:      24.302487059714682
 *   Normal Weight:        Yes
 *   Danger:               No
 *   -----------------------------------------------------
 */
console.log(LINE);
console.log("Name:                 " + lastName.toUpperCase() + ", " + firstName);
console.log(LINE);
console.log("Age:                  " + age + " Years");
console.log("Height:               " + heightM + "m");
console.log("Weight:               " + weight + " kg");
console.log("Basal Metabolic Rate: " + Math.round(bmr) + " kcal");
console.log("Body Mass Index:      " + bmi)
console.log("Normal Weight:        " + normal);
console.log("Danger:               " + danger);
console.log(LINE);

//console.log(LINE); // Logs the dashed-line.

/*
 * TODO: Make sure to TEST YOUR SOFTWARE! Does it work, when People are smaller than 1 meter? Or taller than 2?
 * Tip: An 18-Year old Woman, sized 160cm with 60 kg should have a BMR of 1467 kcal and a BMI of 23.4375.
 */
# **Primal Trainer - Your Personal Trainer Powered by AI**

[**Primal Trainer**](https://primal-trainer.vercel.app/)

## Project Overview

[**Overview Video**](https://www.loom.com/share/f4310ee679fc48e793295aaf6a5071e5)

## About the Product

Primal Trainer is designed to simplify the journey of fitness enthusiasts who seek personalized workout plans and meal plans without relying on generic gym routines or hiring a personal trainer.

This full-stack web application leverages a science-based training methodology to deliver customized workout routines and calculate macro intakes, enabling users to create tailored meal plans effortlessly.

---

## **Tech Stack**

### **Main Stack**

- **Next.js**: Framework for building performant web applications.
- **TypeScript**: For type safety and scalable development.
- **PostgreSQL + Prisma**: Database with an intuitive ORM for efficient data management.

### **Supporting Tools**

- **ShadcnUI**: Modular UI components for a consistent design.
- **Tailwind**: Utility-first CSS framework for styling.
- **Next-Auth**: Authentication with OAuth providers (Google, GitHub).
- **Zod**: Schema validation for input data.
- **OpenAI**: AI-driven exercise generation based on guided prompts.
- **Date-fns**: For date manipulation and formatting.
- **Vercel**: Seamless deployment and hosting.

---

## **How It Works**

Primal Trainer is designed with ease of use in mind. Here’s a step-by-step overview of the user experience:

### 1. **Login**

- Users start on the login page and can sign in using credentials or through OAuth providers like Google or GitHub.

### 2. **Onboarding Process**

- After logging in, users complete a 3-step onboarding process to provide essential information:
  1. **Profile Info**: Input gender, height, date of birth, and other personal details.
  2. **Workout Plan**: Select the number of days per week they plan to work out.
  3. **Nutritional Info**: Provide current weight and fitness goals for macro calculations.

### 3. **Dashboard Access**

- Once onboarding is complete, users can navigate through the app using the header to:
  - **Access Custom Workout Plans**: AI-generated, science-backed workout plan tailored to their needs.
  - **View Nutrition Plans**: Macro calculations to guide meal planning based on personal goals.

---

### **Future Enhancements**

1. **Workout Tracker**:

- Enable users to track details for each workout set, including weight and repetitions.
- Provide tailored recommendations for the current set based on past performance.

2. **Add more workout splits**:

- Introduce features to allow prioritization of specific muscles or training goals.
- Offer more flexibility in tailoring workout plans.

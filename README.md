
# Dispensary Management System  

## Developer Guidelines  

Welcome to the Dispensary Management System repository! This guide will help you set up, organize, and contribute effectively to the project.  

### Repository Setup  

1. **Fork the Repository**  
   - Start by forking this repository to your GitHub account.  

2. **Clone the Repository**  
   - Clone your forked repository to your local system. Name the cloned repository folder `Client`.  

3. **Create the Main Folder**  
   - Create a new folder on your system and name it `dispensary-management-sys`.  

4. **Organize the Files**  
   - Move the cloned `Client` folder into the `dispensary-management-sys` folder.  
   - Add the server folder to the same `dispensary-management-sys` folder, resulting in the following structure:  
     ```
     dispensary-management-sys/
     ├── client/
     └── server/
     ```

### Development Process  

5. **Reuse Components**  
   - Carefully read the contents of the old `Client` folder.  
   - Copy and paste the required components from the old folder to the new `client` folder, ensuring proper folder structure and naming conventions.  

6. **Submit Handler Implementation**  
   - Create a function for form submission named appropriately for its functionality (e.g., `handleSubmit`).  
   - Pass all the necessary parameters to this function.  

7. **Create Services**  
   - Navigate to the `Services` folder in the `client` directory.  
   - Create a function in the relevant file (e.g., `adminCall.js`, `staffCall.js`, or `doctorCall.js`) with the same name as the submit handler function.  
   - Pass the necessary parameters to the service function.  

8. **Reuse Old Code**  
   - Copy and paste the code from the old submit handler function into the new function.  
   - Rename the function as per the new handler and make any changes necessary for the updated implementation.  

### Coding Best Practices  

9. **Maintain File Length**  
   - Ensure no component exceeds **300–350 lines of code**.  
   - If a component is too large, split it into multiple files with meaningful names.  
   - Import the smaller files into the main component where they are required.  

### Testing and Submitting  

10. **Run the Project**  
    - Once all changes are implemented, run the project locally to verify everything works as expected.  

11. **Submit and Review**  
    - After completing your changes:  
      - Create a pull request for your changes.  
      - Notify the group for review and approval.  

### Seeking Help  

12. **Ask for Assistance**  
    - If you encounter any issues or need clarification, ask for help in the group chat.  

---

By following these guidelines, we can ensure that the project remains organized, maintainable, and efficient and Happy Coding!

---  
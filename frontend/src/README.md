# PDF Data Extractor: AI-Powered Fullstack Application

## **Overview**
This project is a fullstack application that extracts specific details (e.g., Name, Phone Number, Address, and Role) from a PDF document using AI and automatically populates these details in a frontend form. The system showcases the integration of PDF parsing, natural language processing (NLP), and a lightweight API backend, combined with a user-friendly React frontend.

---

## **Features**
- **PDF Parsing**: Uses `PyPDF2` to extract raw text from PDFs.
- **AI-Powered Data Extraction**: Implements `spaCy` and regex patterns for recognizing and classifying text details.
- **Frontend Integration**: A simple React frontend with auto-filled fields for Name, Phone Number, Address, and Role.
- **Backend Service**: Lightweight Node.js API to handle PDF uploads and extraction logic.
- **Scalable Design**: Backend and frontend are decoupled for scalability and modularity.

---

## **Technologies Used**

### **Frontend**:
- ReactJS
- Axios (for API communication)
- CSS for basic styling

### **Backend**:
- Node.js with Express.js
- Multer (for file upload handling)
- Axios (for Flask backend communication)

### **AI and NLP**:
- Python
- `spaCy` (for natural language processing)
- `PyPDF2` (for PDF text extraction)
- Flask (for AI model API)

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone <repository_url>
cd <repository_name>
```

### **2. Set Up the Backend**
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Node.js server:
   ```bash
   npm start
   ```

### **3. Set Up the AI Model (Flask Backend)**
1. Navigate to the AI folder:
   ```bash
   cd ai-backend
   ```
2. Create a Python virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the Flask server:
   ```bash
   python app.py
   ```

### **4. Set Up the Frontend**
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

---

## **Usage Instructions**
1. Open the frontend application in your browser at `http://localhost:3000`.
2. Click the "Upload PDF" button to select a PDF file.
3. The system will extract the required details and auto-fill the form fields:
   - **Name**
   - **Phone Number**
   - **Address**
   - **Role**
4. View and verify the extracted details on the frontend.

---

## **Directory Structure**
```
project_root/
|
|-- frontend/         # React frontend
|   |-- src/
|   |-- public/
|
|-- backend/          # Node.js backend
|   |-- routes/
|   |-- controllers/
|
|-- ai-backend/       # Flask AI model backend
|   |-- models/
|   |-- utils/
|
|-- README.md         # Project documentation
```

---

## **Demo**
- **PDF Example**: [Download Example PDF](https://drive.google.com/file/d/1WTCFX4gTCwLNfsiWQyxLWyVdABQ3ko7T/view?usp=sharing)
- **Demo Video**: [Video Link](#)

---

## **Deployment**
The project can be deployed using services like:
- **Frontend**: Vercel or Netlify
- **Backend**: Render or Heroku
- **AI Backend**: PythonAnywhere or AWS Lambda

---

## **Contributing**
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to the branch:
   ```bash
   git add .
   git commit -m "Add feature"
   git push origin feature-name
   ```
4. Open a pull request.

---

## **License**
This project is licensed under the MIT License.

---

## **Contact**
For any queries, contact [Your Name] at [your.email@example.com].


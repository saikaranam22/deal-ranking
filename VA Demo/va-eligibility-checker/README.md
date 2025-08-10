# VA Benefits Eligibility Checker Demo

📝 **Overview**

This is a lightweight React demo simulating a step-by-step Veterans Affairs Benefits Eligibility Checker. It walks users through a simplified eligibility assessment based on service history, disability status, and special identifiers like Purple Heart or POW. It's built for demo, usability testing, or stakeholder walkthroughs.

## 🔧 Technologies Used

- **React** (with Tailwind CSS)
- **TypeScript** 
- **React Router** (for journey simulation)
- **ShadCN** (UI Components Library)
- **Lucide-react** (Icons)

## ▶️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/va-eligibility-checker.git
   cd va-eligibility-checker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app locally**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## 🧪 Simulating the User Journey

1. **Landing Page** – Welcome message and "Start" CTA
2. **Step 1** – Choose service branch and years served
3. **Step 2** – Identify conditions (e.g., disability status, combat zone)
4. **Step 3** – Optional Special Status (Purple Heart, Medal of Honor)
5. **Final Page** – Based on user selections, show:
   - Likely eligible
   - May be eligible (with more documentation)
   - Not currently eligible

## ✅ Accessibility & Compliance

- Styled with contrast-safe colors
- Easily upgradable for Section 508 with keyboard navigation and ARIA labels
- Placeholder for adding multilingual support

## 💡 Future Enhancements

- Integrate real VA.gov eligibility rules (rules engine or API)
- Add a document upload step
- Collect contact info to guide veterans to the next steps

## 🚀 Features

- **Multi-step form** with progress tracking
- **Responsive design** optimized for mobile and desktop
- **Professional VA-style UI** with official color scheme
- **Smart eligibility logic** that provides personalized recommendations
- **Comprehensive results** with benefits, next steps, and documentation requirements
- **Direct links** to VA.gov and phone support

## 💬 Cursor Prompt

Build a React app simulating a step-by-step VA Benefits Eligibility Checker. Use Tailwind CSS, React Router, and ShadCN components. The flow includes:

- A landing page with a CTA
- Step 1: Service history (branch, years)
- Step 2: Disability condition checkboxes  
- Step 3: Special statuses (Purple Heart, POW)
- Final step: Summary of eligibility status (based on simple logic)

Make the UI mobile-friendly, intuitive, and aesthetically clean. Show progress across steps and allow basic input validation. Include call-to-action on the final screen (like "Schedule a Consultation").

---

**Disclaimer**: This is a demonstration application for educational and testing purposes only. For official VA benefits information and applications, please visit [VA.gov](https://va.gov) or call 1-800-827-1000.

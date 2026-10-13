

window.CONTENT = {

  site: {
    name: "Theophilus Onyejiaku C.",
    role: "AI/Machine Learning Engineer and Technical writer",
    intro:
      "I build computer vision and LLM applications, then write about how they work. " +
      "I have shipped a YOLOv11n detector to Android, co-authored an IEEE conference paper, " +
      "and published 660+ technical articles for developer-focused companies.",
    email: "onyejiakut@gmail.com",
    heroCaption:
      "Tomato quality detection on Android: healthy, defective and unripe fruit, 95.4% mAP50."
  },

 
  stats: [
    { value: "660+",  label: "technical articles written" },
    { value: "95.4%", label: "mAP50 for the tomato detector" },
    { value: "1",     label: "IEEE conference paper" },
    { value: "400+",  label: "learners taught" }
  ],

  links: [
    { label: "GitHub",         url: "https://github.com/OnyejiakuTheophilus" },
    { label: "LinkedIn",       url: "https://www.linkedin.com/in/theophilus-chidalu-onyejiaku/" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=ejZ2LjQAAAAJ" },
    { label: "ResearchGate",   url: "https://www.researchgate.net/scientific-contributions/Theophilus-Chidalu-Onyejiaku-2299032061" },
    { label: "Kaggle",         url: "https://www.kaggle.com/theophilusonyejiaku" }
  ],


  cvs: [
    { label: "Machine learning engineer CV", file: "assets/cv/CV-Machine-Learning-Engineer.pdf" },
    { label: "Technical content writer CV",  file: "assets/cv/CV-Technical-Content-Writer.pdf" },
    { label: "Data analyst CV",              file: "assets/cv/CV-Data-Analyst.pdf" }
  ],


  projects: [
    {
      title: "Real-time tomato quality detection",
      category: "Computer vision",
      status: "Manuscript under review",
      summary:
        "An Android app that classifies tomatoes as healthy, defective or unripe in real time. " +
        "I annotated 2,400 images, fine-tuned YOLOv11n for 50 epochs and optimised it with TensorFlow Lite for on-device use.",
      metrics: [
        { value: "95.4%",  label: "mAP50" },
        { value: "86.3%",  label: "mAP50-95" },
        { value: "189 ms", label: "inference on Android" }
      ],
      tags: ["YOLOv11n", "TensorFlow Lite", "Android", "Python"],
      video: "assets/videos/Itomato_status.mp4",
      youtube: "",
      image: "",
      links: [
        
      ]
    },
    {
      title: "Flower recognition and status monitoring",
      category: "Deep learning web app",
      status: "Published at IEEE ICTIIA 2024",
      summary:
        "A CNN that recognises flower species, deployed in a Streamlit dashboard showing predictions, " +
        "confidence scores and growth-status metrics, with monitoring and performance logging. " +
        "Co-authored the paper that came out of it.",
      metrics: [],
      tags: ["TensorFlow", "Keras", "CNN", "Streamlit"],
      video: "",
      youtube: "",
      image: "",
      links: [
        { label: "Live demo",  url: "https://onyejiakutheophilus-web-app-for-flower-image-flowermodel-les9va.streamlit.app/" },
        { label: "IEEE paper", url: "https://ieeexplore.ieee.org/document/10761803" }
      ]
    },
    {
      title: "RAG PDF chat",
      category: "LLM application",
      status: "",
      summary:
        "An application that lets you chat with your own PDF documents. Answers are grounded in the uploaded " +
        "content using retrieval-augmented generation.",
      metrics: [],
      tags: ["Python", "RAG", "LLM"],
      video: "",
      youtube: "",
      image: "",
      links: [
        // { label: "GitHub", url: "https://github.com/OnyejiakuTheophilus/rag_pdf_chat" }
      ]
    },
    {
      title: "Morning Star CBT",
      category: "Full-stack system",
      status: "In use at a school",
      summary:
        "An offline, LAN-based computer-based testing system built for a Nigerian school: 40 students, 14 subjects, " +
        "no internet needed on exam day. Includes an exam-retake workflow with a permanent audit log.",
      metrics: [],
      tags: ["Flask", "MySQL", "SQLAlchemy", "JWT", "Flutter Web"],
      video: "",
      youtube: "",
      image: "",
      links: []
    },
    {
      title: "AI video generator",
      category: "Generative AI app",
      status: "Prototype",
      summary:
        "Type a topic and get a finished video. An AI-written script, text-to-speech narration and stock footage " +
        "are assembled automatically with FFmpeg.",
      metrics: [],
      tags: ["Flask", "FFmpeg", "Text-to-speech"],
      video: "",
      youtube: "",
      image: "",
      links: []
    },
    {
      title: "Data professionals salary prediction",
      category: "Machine learning web app",
      status: "",
      summary:
        "Exploratory data analysis and a prediction model for data-professional salaries, deployed as a web application.",
      metrics: [],
      tags: ["Python", "Scikit-learn", "Pandas"],
      video: "",
      youtube: "",
      image: "",
      links: [
        { label: "GitHub",   url: "https://github.com/OnyejiakuTheophilus/Web-Application-for-Data-Professionals-Salary-Prediction" },
        { label: "EDA repo", url: "https://github.com/OnyejiakuTheophilus/Explorator-Data-Analysis-and-Machine-Learning-on-Data-Professionals--Salaries" }
      ]
    }
  ],


  writingIntro:
    "I write tutorials and guides on machine learning, software testing, SQL and developer tools. " +
    "I run the code before I explain it, and my published articles reach the first page of Google for their target keywords.",

  publishers: [
    { name: "Educative",  url: "https://www.educative.io/" },
    { name: "Comet",      url: "https://heartbeat.comet.ml/" },
    { name: "Tricentis",  url: "https://www.tricentis.com/" },
    { name: "InfluxData", url: "https://www.influxdata.com/" },
    { name: "Stackify",   url: "https://stackify.com/" },
    { name: "Autify",     url: "https://autify.com/" },
    { name: "Hitsubscribe", url: "https://hitsubscribe.com/" }
  ],

  articles: [
    { title: "10 Benefits of AI in Software Testing You Should Know About",
      publisher: "Autify", topic: "AI and testing",
      url: "https://autify.com/blog/benefits-of-ai-in-software-testing" },
    { title: "What Is Python Logging? A Complete Introduction",
      publisher: "Stackify", topic: "Logging",
      url: "https://stackify.com/what-is-python-logging-a-complete-introduction/" },
    { title: "A Guide to Installing Node-RED",
      publisher: "InfluxData", topic: "Developer tools",
      url: "https://www.influxdata.com/blog/guide-installing-node-red/" },
    { title: "A Guide to Understanding the Pivot Function in Oracle SQL",
      publisher: "Tricentis", topic: "SQL",
      url: "https://www.tricentis.com/learn/a-guide-to-understanding-the-pivot-function-in-oracle-sql" },
    { title: "Create a Computer Vision App in 10 Steps Using Comet and Streamlit",
      publisher: "Comet", topic: "Computer vision",
      url: "https://heartbeat.comet.ml/create-a-computer-vision-app-in-10-steps-using-comet-and-streamlit-d7d597d3cb79" },
    { title: "Build and Monitor an Object Detection Model in 5 Steps Using Comet",
      publisher: "Comet", topic: "Computer vision",
      url: "https://heartbeat.comet.ml/build-and-monitor-an-object-detection-model-in-5-steps-using-comet-6b2ca1fb8bbf" },
    { title: "A Dual-Purpose App: Text-to-Image and Custom Chatbot Using Comet, GPT-3.5, DALL-E 2, and Streamlit",
      publisher: "Hitsubscribe", topic: "Generative AI",
      url: "https://hitsubscribe.com/build-a-dual-purpose-app-text-to-image-and-custom-chatbot-using-comet-gpt-3-5-dall-e-2-and-streamlit/" },
    { title: "Implementing Logistic Regression Model for Binary Classification",
      publisher: "Educative", topic: "Machine learning",
      url: "https://www.educative.io/answers/implementing-logistic-regression-model-for-binary-classification" },
    { title: "What Is XGBoost?",
      publisher: "Educative", topic: "Machine learning",
      url: "https://www.educative.io/answers/what-is-xgboost" }
  ],


  dataWork: [
    { title: "Breast cancer EDA and model evaluation",
      note: "Exploratory analysis and a comparison of classification models, with evaluation reports.",
      url: "https://www.kaggle.com/code/theophilusonyejiaku/breast-cancer-eda-status-prediction", label: "Kaggle" },
    { title: "Model tuning, a different approach",
      note: "Kaggle notebook on tuning machine learning models.",
      url: "https://www.kaggle.com/code/theophilusonyejiaku/model-tuning-a-different-approach", label: "Kaggle" },
    { title: "Classification reports of prediction models",
      note: "Kaggle notebook comparing prediction models with classification reports.",
      url: "https://www.kaggle.com/code/theophilusonyejiaku/classification-reports-of-prediction-models/notebook", label: "Kaggle" },
    { title: "Data analytics boot camp",
      note: "Virtual training in SQL, Python, Excel, Power BI and Tableau. 400+ learners taught across several countries.",
      url: "", label: "" }
  ],

  /* ---------- About ---------- */
  about: [
    "I am an AI/Machine Learning Engineer and technical writer based in Nigeria. I like projects where a model has to work outside a notebook: on a phone, in a web app, or in a school with no internet.",
    "I also work as a data analyst and trainer. I have analysed datasets of more than 10 million rows with SQL and Python, built automated dashboards, and taught SQL, Python, Excel, Power BI and Tableau to 400+ learners."
  ],

  skills: [
    { group: "Machine learning",   items: "TensorFlow, Keras, YOLO, CNNs, Scikit-learn, OpenCV, TensorFlow Lite" },
    { group: "LLM applications",   items: "Retrieval-augmented generation, OpenAI API, LLMOps" },
    { group: "Engineering",        items: "Python, Flask, REST APIs, MySQL, SQLAlchemy, Flutter, Streamlit, Git" },
    { group: "Data",               items: "SQL, Pandas, NumPy, Power BI, Tableau, Excel, R, MATLAB" }
  ],

  education: {
    degree: "B.Eng. Agricultural and Bioresources Engineering",
    school: "Federal University of Technology Owerri, Nigeria",
    detail: "2015 to 2022. CGPA 4.20 / 5.0, Best Graduating Student."
  }
};
